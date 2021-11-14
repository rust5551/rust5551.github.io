var gdjs;
(function(gdjs2) {
  class DraggableRuntimeBehavior extends gdjs2.RuntimeBehavior {
    constructor(runtimeScene, behaviorData, owner) {
      super(runtimeScene, behaviorData, owner);
      this._draggedByDraggableManager = null;
    }
    updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
      return true;
    }
    onDeActivate() {
      this._endDrag();
    }
    onDestroy() {
      this.onDeActivate();
    }
    _endDrag() {
      if (this._draggedByDraggableManager) {
        this._draggedByDraggableManager.endDrag();
      }
      this._draggedByDraggableManager = null;
    }
    _dismissDrag() {
      this._draggedByDraggableManager = null;
    }
    _tryBeginDrag(runtimeScene) {
      if (this._draggedByDraggableManager) {
        return false;
      }
      const inputManager = runtimeScene.getGame().getInputManager();
      const mouseDraggableManager = DraggableManager.getMouseManager(runtimeScene);
      if (inputManager.isMouseButtonPressed(0) && !mouseDraggableManager.isDragging(this)) {
        if (mouseDraggableManager.tryAndTakeDragging(runtimeScene, this)) {
          this._draggedByDraggableManager = mouseDraggableManager;
          return true;
        }
      } else {
        const touchIds = inputManager.getStartedTouchIdentifiers();
        for (let i = 0; i < touchIds.length; ++i) {
          const touchDraggableManager = DraggableManager.getTouchManager(runtimeScene, touchIds[i]);
          if (touchDraggableManager.isDragging(this)) {
            continue;
          }
          if (touchDraggableManager.tryAndTakeDragging(runtimeScene, this)) {
            this._draggedByDraggableManager = touchDraggableManager;
            return true;
          }
        }
      }
      return false;
    }
    _shouldEndDrag(runtimeScene) {
      if (!this._draggedByDraggableManager) {
        return false;
      }
      return this._draggedByDraggableManager.shouldEndDrag(runtimeScene, this);
    }
    _updateObjectPosition(runtimeScene) {
      if (!this._draggedByDraggableManager) {
        return false;
      }
      this._draggedByDraggableManager.updateObjectPosition(runtimeScene, this);
      return true;
    }
    doStepPreEvents(runtimeScene) {
      this._tryBeginDrag(runtimeScene);
      if (this._shouldEndDrag(runtimeScene)) {
        this._endDrag();
      }
      this._updateObjectPosition(runtimeScene);
    }
    doStepPostEvents(runtimeScene) {
      const mouseDraggableManager = DraggableManager.getMouseManager(runtimeScene);
      mouseDraggableManager.leftPressedLastFrame = runtimeScene.getGame().getInputManager().isMouseButtonPressed(0);
    }
    isDragged(runtimeScene) {
      return !!this._draggedByDraggableManager;
    }
  }
  gdjs2.DraggableRuntimeBehavior = DraggableRuntimeBehavior;
  class DraggableManager {
    constructor(runtimeScene) {
      this._draggingSomething = false;
      this._draggableBehavior = null;
      this._xOffset = 0;
      this._yOffset = 0;
    }
    static getMouseManager(runtimeScene) {
      if (!runtimeScene.mouseDraggableManager) {
        runtimeScene.mouseDraggableManager = new MouseDraggableManager(runtimeScene);
      }
      return runtimeScene.mouseDraggableManager;
    }
    static getTouchManager(runtimeScene, touchId) {
      if (!runtimeScene.touchDraggableManagers) {
        runtimeScene.touchDraggableManagers = [];
      }
      if (!runtimeScene.touchDraggableManagers[touchId]) {
        runtimeScene.touchDraggableManagers[touchId] = new TouchDraggableManager(runtimeScene, touchId);
      }
      return runtimeScene.touchDraggableManagers[touchId];
    }
    tryAndTakeDragging(runtimeScene, draggableRuntimeBehavior) {
      if (this._draggableBehavior && draggableRuntimeBehavior.owner.getZOrder() <= this._draggableBehavior.owner.getZOrder()) {
        return false;
      }
      const position = this.getPosition(runtimeScene, draggableRuntimeBehavior);
      if (!draggableRuntimeBehavior.owner.insideObject(position[0], position[1])) {
        return false;
      }
      if (this._draggableBehavior) {
        this._draggableBehavior._dismissDrag();
      }
      this._draggableBehavior = draggableRuntimeBehavior;
      this._xOffset = position[0] - draggableRuntimeBehavior.owner.getX();
      this._yOffset = position[1] - draggableRuntimeBehavior.owner.getY();
      return true;
    }
    updateObjectPosition(runtimeScene, draggableRuntimeBehavior) {
      const position = this.getPosition(runtimeScene, draggableRuntimeBehavior);
      if (draggableRuntimeBehavior.owner.getX() != position[0] - this._xOffset || draggableRuntimeBehavior.owner.getY() != position[1] - this._yOffset) {
        draggableRuntimeBehavior.owner.setX(position[0] - this._xOffset);
        draggableRuntimeBehavior.owner.setY(position[1] - this._yOffset);
        this._draggingSomething = true;
      }
    }
    endDrag() {
      this._draggingSomething = false;
      this._draggableBehavior = null;
    }
  }
  class MouseDraggableManager extends DraggableManager {
    constructor(runtimeScene) {
      super(runtimeScene);
      this.leftPressedLastFrame = false;
    }
    isDragging(draggableRuntimeBehavior) {
      return this.leftPressedLastFrame || this._draggingSomething;
    }
    getPosition(runtimeScene, draggableRuntimeBehavior) {
      const inputManager = runtimeScene.getGame().getInputManager();
      return runtimeScene.getLayer(draggableRuntimeBehavior.owner.getLayer()).convertCoords(inputManager.getMouseX(), inputManager.getMouseY());
    }
    shouldEndDrag(runtimeScene, draggableRuntimeBehavior) {
      const inputManager = runtimeScene.getGame().getInputManager();
      return !inputManager.isMouseButtonPressed(0);
    }
  }
  class TouchDraggableManager extends DraggableManager {
    constructor(runtimeScene, touchId) {
      super(runtimeScene);
      this._touchId = touchId;
    }
    isDragging(draggableRuntimeBehavior) {
      return this._draggingSomething;
    }
    getPosition(runtimeScene, draggableRuntimeBehavior) {
      const inputManager = runtimeScene.getGame().getInputManager();
      return runtimeScene.getLayer(draggableRuntimeBehavior.owner.getLayer()).convertCoords(inputManager.getTouchX(this._touchId), inputManager.getTouchY(this._touchId));
    }
    shouldEndDrag(runtimeScene, draggableRuntimeBehavior) {
      const inputManager = runtimeScene.getGame().getInputManager();
      return inputManager.getAllTouchIdentifiers().indexOf(this._touchId) === -1;
    }
  }
  gdjs2.registerBehavior("DraggableBehavior::Draggable", gdjs2.DraggableRuntimeBehavior);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=draggableruntimebehavior.js.map

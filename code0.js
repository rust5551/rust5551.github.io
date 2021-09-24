gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDbutton1Objects1= [];
gdjs.New_32sceneCode.GDbutton1Objects2= [];
gdjs.New_32sceneCode.GDbutton2Objects1= [];
gdjs.New_32sceneCode.GDbutton2Objects2= [];
gdjs.New_32sceneCode.GDdfsdfObjects1= [];
gdjs.New_32sceneCode.GDdfsdfObjects2= [];
gdjs.New_32sceneCode.GDbeObjects1= [];
gdjs.New_32sceneCode.GDbeObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbutton1Objects1Objects = Hashtable.newFrom({"button1": gdjs.New_32sceneCode.GDbutton1Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbutton2Objects1Objects = Hashtable.newFrom({"button2": gdjs.New_32sceneCode.GDbutton2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDdfsdfObjects1Objects = Hashtable.newFrom({"dfsdf": gdjs.New_32sceneCode.GDdfsdfObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbeObjects1Objects = Hashtable.newFrom({"be": gdjs.New_32sceneCode.GDbeObjects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("button1"), gdjs.New_32sceneCode.GDbutton1Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbutton1Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("dfsdf"), gdjs.New_32sceneCode.GDdfsdfObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDdfsdfObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDdfsdfObjects1[i].setPosition(300,400);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button2"), gdjs.New_32sceneCode.GDbutton2Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbutton2Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("dfsdf"), gdjs.New_32sceneCode.GDdfsdfObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDdfsdfObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDdfsdfObjects1[i].setPosition(300,1);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDdfsdfObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDdfsdfObjects1Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDdfsdfObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDdfsdfObjects1[i].setHeight((gdjs.New_32sceneCode.GDdfsdfObjects1[i].getHeight()) * (gdjs.random(6) + 1));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDdfsdfObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDdfsdfObjects1[i].setWidth((gdjs.New_32sceneCode.GDdfsdfObjects1[i].getWidth()) * (gdjs.random(6) + 1));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDbeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbeObjects1Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDbeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbeObjects1[i].setHeight((gdjs.New_32sceneCode.GDbeObjects1[i].getHeight()) * (gdjs.random(6) + 1));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDbeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbeObjects1[i].setWidth((gdjs.New_32sceneCode.GDbeObjects1[i].getWidth()) * (gdjs.random(6) + 1));
}
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDbutton1Objects1.length = 0;
gdjs.New_32sceneCode.GDbutton1Objects2.length = 0;
gdjs.New_32sceneCode.GDbutton2Objects1.length = 0;
gdjs.New_32sceneCode.GDbutton2Objects2.length = 0;
gdjs.New_32sceneCode.GDdfsdfObjects1.length = 0;
gdjs.New_32sceneCode.GDdfsdfObjects2.length = 0;
gdjs.New_32sceneCode.GDbeObjects1.length = 0;
gdjs.New_32sceneCode.GDbeObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;

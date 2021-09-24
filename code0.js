gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDbutton1Objects1= [];
gdjs.New_32sceneCode.GDbutton1Objects2= [];
gdjs.New_32sceneCode.GDbutton2Objects1= [];
gdjs.New_32sceneCode.GDbutton2Objects2= [];
gdjs.New_32sceneCode.GDdfsdfObjects1= [];
gdjs.New_32sceneCode.GDdfsdfObjects2= [];
gdjs.New_32sceneCode.GDbeObjects1= [];
gdjs.New_32sceneCode.GDbeObjects2= [];
gdjs.New_32sceneCode.GDbackObjects1= [];
gdjs.New_32sceneCode.GDbackObjects2= [];
gdjs.New_32sceneCode.GDdfz1Objects1= [];
gdjs.New_32sceneCode.GDdfz1Objects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDdfsdfObjects1Objects = Hashtable.newFrom({"dfsdf": gdjs.New_32sceneCode.GDdfsdfObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDdfsdfObjects1Objects = Hashtable.newFrom({"dfsdf": gdjs.New_32sceneCode.GDdfsdfObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbeObjects1Objects = Hashtable.newFrom({"be": gdjs.New_32sceneCode.GDbeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbeObjects1Objects = Hashtable.newFrom({"be": gdjs.New_32sceneCode.GDbeObjects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("greis"), true);
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.New_32sceneCode.GDdfsdfObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDdfsdfObjects1Objects, Math.ceil(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) / 16) * 16 - 16, Math.ceil(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) / 16) * 16 - 16, "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDdfsdfObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDdfsdfObjects1[i].setWidth((gdjs.New_32sceneCode.GDdfsdfObjects1[i].getWidth()) * (gdjs.random(6) + 1));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDdfsdfObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDdfsdfObjects1[i].setHeight((gdjs.New_32sceneCode.GDdfsdfObjects1[i].getHeight()) * (gdjs.random(6) + 1));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("stroigr"), true);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("greis"), false);
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.New_32sceneCode.GDdfsdfObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDdfsdfObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDdfsdfObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDdfsdfObjects1[i].setHeight((gdjs.New_32sceneCode.GDdfsdfObjects1[i].getHeight()) * (gdjs.random(6) + 1));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDdfsdfObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDdfsdfObjects1[i].setWidth((gdjs.New_32sceneCode.GDdfsdfObjects1[i].getWidth()) * (gdjs.random(6) + 1));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("greis"), true);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("redis"), true);
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.New_32sceneCode.GDbeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbeObjects1Objects, Math.ceil(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) / 16) * 16 - 16, Math.ceil(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) / 16) * 16 - 16, "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDbeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbeObjects1[i].setHeight((gdjs.New_32sceneCode.GDbeObjects1[i].getHeight()) * (gdjs.random(6) + 1));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDbeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbeObjects1[i].setWidth((gdjs.New_32sceneCode.GDbeObjects1[i].getWidth()) * (gdjs.random(6) + 1));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("redis"), false);
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.New_32sceneCode.GDbeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbeObjects1Objects, 800, 640, "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDbeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbeObjects1[i].setHeight((gdjs.New_32sceneCode.GDbeObjects1[i].getHeight()) * (gdjs.random(6) + 1));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDbeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbeObjects1[i].setWidth((gdjs.New_32sceneCode.GDbeObjects1[i].getWidth()) * (gdjs.random(6) + 1));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("redis"), true);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDbeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbeObjects1[i].setPosition(800 - (gdjs.New_32sceneCode.GDbeObjects1[i].getWidth()),800 - (gdjs.New_32sceneCode.GDbeObjects1[i].getHeight()));
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
gdjs.New_32sceneCode.GDbackObjects1.length = 0;
gdjs.New_32sceneCode.GDbackObjects2.length = 0;
gdjs.New_32sceneCode.GDdfz1Objects1.length = 0;
gdjs.New_32sceneCode.GDdfz1Objects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;

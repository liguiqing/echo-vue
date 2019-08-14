'use strict';
define(['Vue','Vuex'],function(Vue,VueX){
    Vue.use(VueX);
    var state={
      fileFlag:false,
        obj:"",
        testName:"",
        allTool:""
    };

   //相当于计算属性
    var getters = {

    };
    var mutations = {
         showFileInfo:function(state,n){
             state.fileFlag = true;
             for(var i in state.obj){
                 if(i == n.a){
                     state.testName = state.obj[i].testName;
                     state.allTool = state.obj[i].allTool;
                 }
             }
         }
    };

    return new VueX.Store({
        state:state,
        mutations:mutations
    });
});
"use strict";
var version = (window.location.search.indexOf("debug=1") > 0)?(+ + new Date):"1.0.0";
define({
    urlArgs: "jsversion=" + version,
    contextPath: "/vue",
    baseUrl : "script/",
    packages: [],
    paths: {
         "text":"https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min",
         "css":"https://cdnjs.cloudflare.com/ajax/libs/require-css/0.1.10/css.min",
         "vue":"https://cdn.jsdelivr.net/npm/require-vuejs@1.1.3/dist/require-vuejs.min",
         "es6":"plugin/es6", //es6 supports this and below two modules
         "babel": "plugin/babel.min",
         "babel-plugin-module-resolver":"plugin/babel-plugin-module-resolver-standalone/index",
         "VueRouter": "https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.7/vue-router.min",
         "Vuex": "https://cdnjs.cloudflare.com/ajax/libs/vuex/3.1.1/vuex.min",
         "axios" : "https://unpkg.com/axios/dist/axios.min",
	     "jquery": "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min",
         "Bootstrap": "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min",
         "store" : "vuex/store"
    },
    shim: {
        Bootstrap:{
            deps: [
                "jquery",
                "css!https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css",
                "css!https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
            ],
            exports:"Bootstrap"
        },
        mdbvue: {
            exports:"mdbvue"
        },
        Vue: {
            exports:"Vue"
        },
        Vuex: {
            deps:["Vue"],
            exports:"Vuex"
        },
        axios:{exports:"Axios"}
    }
});
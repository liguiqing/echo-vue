'use strict';
(function (root) {
    window["asyncLoad"] = function (componentName) {
        return function (resolve) {
            require([componentName], resolve);
        };
    };

    var urls = [];
    window["getUrl"] = function (name) {
        for (var i = 0; i < urls.length; i++) {
            if (urls[i].name === name)
                return urls[i];
        }
        return {}
    }

    axios.get('api/urls.json').then(function (response) {
        urls = response.data.urls;
    });

    define("Vue", function () {
        return Vue;
    });

    //https://mdbootstrap.com/
    define("mdbvue", function () {
        return mdbvue;
    });

    require(["config"], function (config) {
        requirejs.config(config);
        //only demo for es6 to es5
        require(["es6!CssProvider"], function (css) {
            require(["VueRouter", "./router/router", "store", "vue!App",
                    css.fontAwesomeCss, css.bootstrapCss, css.mdbCss, css.mdbvueCss],
                function (VueRouter, router, Store, App) {
                    Vue.use(VueRouter);
                    var routes = new VueRouter({
                        routes: router
                    });
                    var vm = new Vue({
                        el: '#app',
                        data: {},
                        router: routes,
                        store: Store,
                        render: h => h(App),
                        created() {
                            this.unauthorized()
                        },
                        methods: {
                            unauthorized() {
                                this.$router.push('/login');
                            }
                        }
                    });
                });
        });
    });
})(this);

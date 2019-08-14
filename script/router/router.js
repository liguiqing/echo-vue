define([], function(){
    return [
        { path: "/login" , component: asyncLoad("vue!views/Login")},
        { path: "/home" , component: asyncLoad("vue!views/Home")}
    ];
});
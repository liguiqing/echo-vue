# echo-vue
## [RequireJS](https://requirejs.org/) + [Vue.js](https://vuejs.org)
### supports  modularity and Vue Templete(.Vue ) and ES6  without Nodejs   
 后端模板（Freemarker/Volicity/JSP等）+ js(Jquery)UI开发方式已经为Java Web Coders 服务了二十年，老态龙钟，越来越跟不上时代前进的滚滚车轮。在前后端分离的滚滚大潮中，大部分中小作坊没有办法像鹅厂这些巨头们那般将工位划得开，程序员往往都一撸到底，前后端都搞起，号称全战攻城狮。放眼所见，前后端分离的前端部分，基本都是构建在Nodejs环境上大部分以后端为生为攻城狮们又看不上，或者不乐意学习Nodejs，即使能驾驭nodejs，在编码时也需要在不同的IDE来回切换，多有不便。特造此轮子，以保全战攻城狮清纯。  
此轮子既可以前后端一个工程，也可以独立。同一工程时，直接将轮子目录放到web resource目录即可。    
如Spring boot web   spring.mvc.static-path-pattern: /static/**   轮子根目录即static  
独立时配置一个web服务器虚拟目录到轮子目录即可， 如tomcat 在conf/Catalina/localhost建个vue.xml 配置为  
  ```xml
<Context docBase="/home/xxoo/github/echo-vue" reloadable="true"/>  
```
若是Nnginx 直接软连接到 html目录就好  
 ```bash  
ln -s /home/xxoo/github/echo-vue/ /home/xxoo/nginx/html/vue
```
鸣谢  
[Require-vuejs]( https://github.com/edgardleal/require-vuejs  "Require-vuejs")  
[ES6](  https://github.com/guybedford/es6 "ES6")




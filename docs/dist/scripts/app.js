"use strict";var DOCS_OVERWRITELINK=!0;angular.module("docApp",["ui.bootstrap"]).constant("DOCS_OVERWRITELINK","undefined"==typeof DOCS_OVERWRITELINK?!1:DOCS_OVERWRITELINK).provider("DOCS_OVERWRITELINK",["DOCS_OVERWRITELINK",function(e){return{$get:function(){return e}}}]).config(["$locationProvider","DOCS_OVERWRITELINK",function(e,t){t||(e.hashPrefix("!"),e.html5Mode({enabled:!0,requireBase:!0,rewriteLinks:!0}))}]),angular.module("docApp").directive("pre",function(){return{restrict:"E",terminal:!0,primary:1e3,link:function(e,t){var a=prettyPrintOne(t.find(">code").html());t.addClass("prettyprint"),t.find(">code").html(a)}}}),angular.module("docApp").directive("a",["DOCS_OVERWRITELINK","DOCS_AREA_DATA",function(e,t){var a={},i=function(e){var a=-1===e.indexOf("#/");return a?(a=!1,angular.forEach(t,function(t){a=a||0===e.indexOf(t)}),a):!1};return{restrict:"E",link:function(t,n){e&&t.$evalAsync(function(){var e,t=n.attr("href");e=a[t],e||i(t)&&(e="#/"+t,a[t]=e),n.attr("href",e)})}}}]),angular.module("docApp").controller("DocsCtrl",["$scope","$location","DOCS_NAVIGATION",function(e,t,a){var i=this,n="/";i.currentArea=null,i.navState=function(e){var t=[];return"section"===e.type&&t.push("nav-index-section"),"/"+e.href===i.currentPath&&t.push("current"),t},i.changeCurrent=function(e,t){var r;i.currentPath=e,e=e.replace(new RegExp("^"+n),""),r=e.split("/")[0],i.currentArea=a[r],(""===e||"index.html"===e)&&(e="index"),e.match(/\.html$/)||(e+=".html"),e="partials/"+e,i.currentHash=t,i.partialPath=e},e.$on("$locationChangeStart",function(){i.changeCurrent(t.path(),t.hash())})}]),angular.module("docApp").controller("NavbarCtrl",["$scope","DOCS_NAVIGATION",function(e,t){var a=this;a.areas=[],angular.forEach(t,function(e,t){a.areas.push({id:t,name:e.name,href:t})}),e.date=new Date}]),function(e){e(["guide","api"])}("undefined"==typeof angular?function(e){module.exports=e}:function(e){angular.module("docApp").value("DOCS_AREA_DATA",e)}),angular.module("docApp").value("DOCS_NAVIGATION",{guide:{id:"guide",name:"Guide",navGroups:[{name:"Guide",type:"groups",href:"guide",navItems:[{name:"howToUse",type:"",href:"guide/howToUse"}]}]},api:{id:"api",name:"API",navGroups:[{name:"apiClient",type:"groups",href:"api/apiClient",navItems:[]},{name:"api_client",type:"groups",href:"api/api_client",navItems:[{name:"service",type:"section",href:"api/api_client/service"},{name:"apiClient",type:"service",href:"api/api_client/service/apiClient"}]},{name:"auth",type:"groups",href:"api/auth",navItems:[{name:"function",type:"section",href:"api/auth/function"},{name:"auth.controller:AuthCtrl",type:"function",href:"api/auth/function/auth.controller:AuthCtrl"},{name:"service",type:"section",href:"api/auth/service"},{name:"auth",type:"service",href:"api/auth/service/auth"},{name:"user",type:"service",href:"api/auth/service/user"}]},{name:"main",type:"groups",href:"api/main",navItems:[{name:"directive",type:"section",href:"api/main/directive"},{name:"icon",type:"directive",href:"api/main/directive/icon"}]},{name:"rc_submit",type:"groups",href:"api/rc_submit",navItems:[{name:"directive",type:"section",href:"api/rc_submit/directive"},{name:"ng.directive:rcSubmit",type:"directive",href:"api/rc_submit/directive/ng.directive:rcSubmit"}]},{name:"config",type:"groups",href:"api/config",navItems:[{name:"service",type:"section",href:"api/config/service"},{name:"apiConfig",type:"service",href:"api/config/service/apiConfig"}]}]}}),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api.html",'<h1 id="api">API</h1><p>Select a link in the side menu.</p>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/guide.html",'<h1 id="guide">Guide</h1><p>Select a link to guide page from the side menu.</p>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/index.html",'<div class="jumbotron"><h1>Hello Docs!</h1></div><h2 id="contents">Contents</h2><h3 id="api">API</h3><p><a href="api">here</a>.</p><h3 id="guide">Guide</h3><p><a href="guide">here</a>.</p>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("src/main.html",'<div><div ng-include="\'src/navbar.html\'"></div><div class="row"><div class="col-md-12" ng-if="!docs.currentArea" ng-include="docs.partialPath"></div><div class="col-md-3" ng-if="docs.currentArea"><ul class="nav-list naked-list"><li ng-repeat="navGroup in docs.currentArea.navGroups" class="nav-index-group"><a class="nav-index-group-heading" ng-href="{{navGroup.href}}"><span>{{navGroup.name}}</span></a><ul><li ng-repeat="navItem in navGroup.navItems" ng-class="docs.navState(navItem)" class="nav-index-listing"><a ng-href="{{navItem.href}}"><span>{{navItem.name}}</span></a></li></ul></li></ul></div><div class="col-md-9" ng-if="docs.currentArea" ng-include="docs.partialPath" autoscroll="true"></div></div><hr><div class="footer"><p>With ♥ from <a href="https://github.com/bhsclient-owner">bhsclient-owner</a></p></div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("src/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl as navbar"><div class="navbar-header"><a class="navbar-brand" href="#/index"><span class="glyphicon glyphicon-home"></span> bhsclient&nbsp;Docs</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li ng-repeat="area in navbar.areas" ng-class="{active:docs.currentArea.id === area.id}"><a ng-href="{{area.href}}">{{area.name}}</a></li></ul></div></nav>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/apiClient.html",'<h1><code>apiClient</code></h1><p>This module provides access to BHS API endpoints.</p><h2>Installation</h2><p>First include <code>undefined</code> javascript file in your HTML:</p><p>You can download this file from the following places:</p><ul><li><a href="http://bower.io">Bower</a><br>e.g.<pre><code>bower install angular </code></pre></li></ul><p>Then load the module in your application by adding it as a dependent module:</p><pre><code>angular.module(&#39;app&#39;, [&#39;apiClient&#39;]);</code></pre><p>With that you&apos;re ready to get started!</p><div class="component-breakdown"><h2>Module Components</h2></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/auth.html",'<h1><code>auth</code></h1><p>This module handles user authentication &amp; data.</p><h2>Installation</h2><p>First include <code>undefined</code> javascript file in your HTML:</p><p>You can download this file from the following places:</p><ul><li><a href="http://bower.io">Bower</a><br>e.g.<pre><code>bower install angular </code></pre></li></ul><p>Then load the module in your application by adding it as a dependent module:</p><pre><code>angular.module(&#39;app&#39;, [&#39;auth&#39;]);</code></pre><p>With that you&apos;re ready to get started!</p><div class="component-breakdown"><h2>Module Components</h2><div><h3 class="component-heading" id="function">Function</h3><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/auth/function/auth.controller:AuthCtrl">auth.controller:AuthCtrl</a></td><td></td></tr></table></div><div><h3 class="component-heading" id="service">Service</h3><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/auth/service/auth">auth</a></td><td><p>A service to handle user signin, signout &amp; registration.</p></td></tr><tr><td><a href="api/auth/service/user">user</a></td><td><p>A service to handle user data.</p></td></tr></table></div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/config.html",'<h1><code>config</code></h1><p>A module to hold BHSClient configuration. This Module is compiled by the Grunt replace task in the project Gruntfile.</p><h2>Installation</h2><p>First include <code>undefined</code> javascript file in your HTML:</p><p>You can download this file from the following places:</p><ul><li><a href="http://bower.io">Bower</a><br>e.g.<pre><code>bower install angular </code></pre></li></ul><p>Then load the module in your application by adding it as a dependent module:</p><pre><code>angular.module(&#39;app&#39;, [&#39;config&#39;]);</code></pre><p>With that you&apos;re ready to get started!</p><div class="component-breakdown"><h2>Module Components</h2><div><h3 class="component-heading" id="service">Service</h3><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/config/service/apiConfig">apiConfig</a></td><td><p>A map object for API enpoint names.</p></td></tr></table></div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/main.html",'<h1><code>main</code></h1><h1 id="bhsclient-main-module">BHSClient main module</h1><p>This is the main module for the BHS client. It contains the ui.router state configurations.</p><h2>Installation</h2><p>First include <code>undefined</code> javascript file in your HTML:</p><p>You can download this file from the following places:</p><ul><li><a href="http://bower.io">Bower</a><br>e.g.<pre><code>bower install angular </code></pre></li></ul><p>Then load the module in your application by adding it as a dependent module:</p><pre><code>angular.module(&#39;app&#39;, [&#39;main&#39;]);</code></pre><p>With that you&apos;re ready to get started!</p><div class="component-breakdown"><h2>Module Components</h2><div><h3 class="component-heading" id="directive">Directive</h3><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/main/directive/icon">icon</a></td><td><p>This directive is an API that enables to use icons located on a sprite image.</p></td></tr></table></div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/guide/howToUse.html",'<h1 id="how-to-use-this-module">How To Use this module</h1><ol><li><p>aaaaaa</p></li><li><p>bbbbbb</p></li></ol>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/auth/function.html",'<h1>Function components in <code>auth</code></h1><div class="component-breakdown"><div><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/auth/function/auth.controller:AuthCtrl">auth.controller:AuthCtrl</a></td><td></td></tr></table></div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/auth/service.html",'<h1>Service components in <code>auth</code></h1><div class="component-breakdown"><div><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/auth/service/auth">auth</a></td><td><p>A service to handle user signin, signout &amp; registration.</p></td></tr><tr><td><a href="api/auth/service/user">user</a></td><td><p>A service to handle user data.</p></td></tr></table></div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/config/service.html",'<h1>Service components in <code>config</code></h1><div class="component-breakdown"><div><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/config/service/apiConfig">apiConfig</a></td><td><p>A map object for API enpoint names.</p></td></tr></table></div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/main/directive.html",'<h1>Directive components in <code>main</code></h1><div class="component-breakdown"><div><table class="definition-table"><tr><th>Name</th><th>Description</th></tr><tr><td><a href="api/main/directive/icon">icon</a></td><td><p>This directive is an API that enables to use icons located on a sprite image.</p></td></tr></table></div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/api_client/service/apiClient.html",'<header class="api-profile-header"><h1 class="api-profile-header-heading">apiClient</h1><ol class="api-profile-header-structure naked-list step-list"><li>- service in module <a href=""></a></li></ol></header><div class="api-profile-description"><p>Provides access to API endpoints.</p></div><div><h2 id="dependencies">Dependencies</h2><ul><li><a href="api/config/service/apiConfig"><code>apiConfig</code></a></li></ul><h2>Properties</h2><ul class="properties"><li id="base_url"><h3><code>base_url</code></h3><table class="variables-matrix return-arguments"><tr><td><a href="" class="label type-hint type-hint-string">String</a></td><td><p>The base URL for the BHS API.</p></td></tr></table></li><li id="endpoints"><h3><code>endpoints</code></h3><table class="variables-matrix return-arguments"><tr><td><a href="" class="label type-hint type-hint-object">Object</a></td><td><p>Maps endpoint names to values from <a href="api/config/service/apiConfig"><code>apiConfig</code></a>.</p></td></tr></table></li><li id="urls"><h3><code>urls</code></h3><table class="variables-matrix return-arguments"><tr><td><a href="" class="label type-hint type-hint-object">Object</a></td><td><p>An object that maps API endpoint names to full endpoint URLs.</p></td></tr></table></li></ul></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/auth/function/auth.controller:AuthCtrl.html",'<header class="api-profile-header"><h1 class="api-profile-header-heading">auth.controller:AuthCtrl</h1><ol class="api-profile-header-structure naked-list step-list"><li>- function in module <a href="api/auth">auth</a></li></ol></header><div class="api-profile-description"></div><div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/auth/service/auth.html",'<header class="api-profile-header"><h1 class="api-profile-header-heading">auth</h1><ol class="api-profile-header-structure naked-list step-list"><li>- service in module <a href="api/auth">auth</a></li></ol></header><div class="api-profile-description"><p>A service to handle user signin, signout &amp; registration.</p></div><div><h2>Methods</h2><ul class="methods"><li id="authenticate"><h3><p><code>authenticate(config);</code></p></h3><div><p>A call to this method opens a Sign-in/Register dialog (modal).</p></div><h4>Parameters</h4><table class="variables-matrix input-arguments"><thead><tr><th>Param</th><th>Type</th><th>Details</th></tr></thead><tbody><tr><td>config</td><td><a href="" class="label type-hint type-hint-object">Object</a></td><td><p>Configuration object Configuration parameters:</p><ul><li><strong>register</strong> – <code>{boolean}</code> – set to true to open a Register dialog.</li><li><strong>next_state</strong> – <code>{String}</code> – Name of state to go to upon succesful signin/registration.</li><li><strong>fallback_state</strong> – <code>{String}</code> – Fallback state name to go to upon failed authentication.</li><li><strong>fallback_state_params</strong> – <code>{Object}</code>.</li></ul></td></tr></tbody></table></li><li id="signin"><h3><p><code>signin(email, password);</code></p></h3><div><p>Sign a user in: Sends a request to the auth API endpoint with user credentials. Upon success, saves the authorization token on localStorage, and gets user data from <a href="api/auth/service/user"><code>user</code></a>.</p></div><h4>Parameters</h4><table class="variables-matrix input-arguments"><thead><tr><th>Param</th><th>Type</th><th>Details</th></tr></thead><tbody><tr><td>email</td><td><a href="" class="label type-hint type-hint-string">String</a></td><td><p>user email</p></td></tr><tr><td>password</td><td><a href="" class="label type-hint type-hint-string">String</a></td><td><p>user password</p></td></tr></tbody></table><h4>Returns</h4><table class="variables-matrix return-arguments"><tr><td><a href="" class="label type-hint type-hint-promise">Promise</a></td><td></td></tr></table></li><li id="register"><h3><p><code>register(name, email, password);</code></p></h3><div><p>Registers a new user: Sends a POST request to the user API endpoint with user credentials. Upon success, signs the user in.</p></div><h4>Parameters</h4><table class="variables-matrix input-arguments"><thead><tr><th>Param</th><th>Type</th><th>Details</th></tr></thead><tbody><tr><td>name</td><td><a href="" class="label type-hint type-hint-string">String</a></td><td><p>user name</p></td></tr><tr><td>email</td><td><a href="" class="label type-hint type-hint-string">String</a></td><td><p>user email</p></td></tr><tr><td>password</td><td><a href="" class="label type-hint type-hint-string">String</a></td><td><p>user password</p></td></tr></tbody></table><h4>Returns</h4><table class="variables-matrix return-arguments"><tr><td><a href="" class="label type-hint type-hint-promise">Promise</a></td><td></td></tr></table></li><li id="signout"><h3><p><code>signout();</code></p></h3><div><p>Signs a signed-in user out.</p></div></li><li id="is_signedin"><h3><p><code>is_signedin();</code></p></h3><div><p>Checks localStorage for data indicating a signed-in user.</p></div><h4>Returns</h4><table class="variables-matrix return-arguments"><tr><td><a href="" class="label type-hint type-hint-boolean">boolean</a></td><td></td></tr></table></li></ul></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/auth/service/user.html",'<header class="api-profile-header"><h1 class="api-profile-header-heading">user</h1><ol class="api-profile-header-structure naked-list step-list"><li>- service in module <a href="api/auth">auth</a></li></ol></header><div class="api-profile-description"><p>A service to handle user data.</p></div><div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/config/service/apiConfig.html",'<header class="api-profile-header"><h1 class="api-profile-header-heading">apiConfig</h1><ol class="api-profile-header-structure naked-list step-list"><li>- service in module <a href="api/config">config</a></li></ol></header><div class="api-profile-description"><p>A map object for API enpoint names.</p></div><div></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/main/directive/icon.html",'<header class="api-profile-header"><h1 class="api-profile-header-heading">icon</h1><ol class="api-profile-header-structure naked-list step-list"><li>- directive in module <a href="api/main">main</a></li></ol></header><div class="api-profile-description"><p>This directive is an API that enables to use icons located on a sprite image.</p></div><div><h2>Directive Info</h2><ul><li>This directive creates new scope.</li><li>This directive executes at priority level 0.</li></ul><h2 id="usage">Usage</h2><div class="usage"><ul><li>as element:<pre><code>&lt;icon&#10;  source=&quot;&quot;&#10;  position=&quot;&quot;&#10;  hover-offset=&quot;&quot;&#10;  alt-text=&quot;&quot;&#10;  offset-on=&quot;&quot;&gt;&#10;...&#10;&lt;/icon&gt;</code></pre></li></ul></div><section class="api-section"><h3>Arguments</h3><table class="variables-matrix input-arguments"><thead><tr><th>Param</th><th>Type</th><th>Details</th></tr></thead><tbody><tr><td>source</td><td><a href="" class="label type-hint type-hint-string">String</a></td><td><p>Source URL for the sprite image. Default is <code>images/icons.png</code></p></td></tr><tr><td>position</td><td><a href="" class="label type-hint type-hint-array">Array</a></td><td><p>Position of the icon on the sprite (both coordinates should be negative).</p></td></tr><tr><td>hoverOffset</td><td><a href="" class="label type-hint type-hint-array">Array</a></td><td><p>Offset of the icon to be displayed on hover, relative to the original icon position.</p></td></tr><tr><td>altText</td><td><a href="" class="label type-hint type-hint-object">Object</a></td><td><p>English and Hebrew alt text for the icon img element; eg. <code>{en: &#39;english text&#39;, he:&#39;טקסט בעברית&#39;}</code></p></td></tr><tr><td>offsetOn</td><td><a href="" class="label type-hint type-hint-expression">expression</a></td><td><p>Expression to listen to and offset icon on change.</p></td></tr></tbody></table></section></div>')}])}(),function(e){try{e=angular.module("docApp")}catch(t){e=angular.module("docApp",[])}e.run(["$templateCache",function(e){e.put("partials/api/rc_submit/directive/ng.directive:rcSubmit.html",'<header class="api-profile-header"><h1 class="api-profile-header-heading">ng.directive:rcSubmit</h1><ol class="api-profile-header-structure naked-list step-list"><li>- directive in module <a href=""></a></li></ol></header><div class="api-profile-description"><p>Alternative to ngSubmit that verifies the ngFormController is valid before executing the given expression. Otherwise it cancels the event.</p></div><div><h2>Directive Info</h2><ul><li>This directive executes at priority level 0.</li></ul><h2 id="usage">Usage</h2><div class="usage"><ul><li>as attribute:<pre><code>&lt;form&#10;  rc-submit=&quot;&quot;&gt;&#10;...&#10;&lt;/form&gt;</code></pre></li></ul></div><section class="api-section"><h3>Arguments</h3><table class="variables-matrix input-arguments"><thead><tr><th>Param</th><th>Type</th><th>Details</th></tr></thead><tbody><tr><td>rcSubmit</td><td><a href="" class="label type-hint type-hint-expression">expression</a></td><td><p><a href="guide/expression">Expression</a> to eval.</p></td></tr></tbody></table></section></div>')}])}();
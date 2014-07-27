define("sticky-unit/adapters/application",["ember","ember-data","exports"],function(e,t,s){"use strict";var n=e["default"],i=t["default"];s["default"]=i.FixtureAdapter.extend({queryFixtures:function(e,t,s){s=null;var i=n.keys(t)[0];return e.filterBy(i,t[i])}})}),define("sticky-unit/app",["ember","ember/resolver","ember/load-initializers","exports"],function(e,t,s,n){"use strict";var i=e["default"],a=t["default"],r=s["default"];i.MODEL_FACTORY_INJECTIONS=!0;var o=i.Application.extend({modulePrefix:"sticky-unit",Resolver:a});r(o,"sticky-unit"),n["default"]=o}),define("sticky-unit/controllers/index",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Controller.extend({unit:function(){return this.store.find("unit","main-unit")}.property()})}),define("sticky-unit/controllers/stickylist",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.ArrayController.extend({freshStickyObserver:function(){var e=this.filterBy("fresh",!0).get("firstObject");e&&e.get("text.length")&&(e.set("fresh",!1),e.save())}.observes("@each.text")})}),define("sticky-unit/models/sticky",["ember-data","exports"],function(e,t){"use strict";var s=e["default"],n=s.Model.extend({text:s.attr("string"),section:s.attr("string"),fresh:s.attr("boolean"),color:function(){var e=this.get("section");switch(e){case"goals-knowledgeskill":return"color-1";case"goals-enduringunderstanding":return"color-2";case"goals-bigidea":return"color-3";case"evidence-knowledge":case"evidence-understanding":case"evidence-idea":return"color-4";case"assessments-performancetasks":case"assessments-academicprompts":case"assessments-quiztest":return"color-5";case"activities-listofassessments":return"color-6";default:return"color-0"}}.property("section")});n.reopenClass({FIXTURES:[{id:"sample-0",text:"some text",section:"goals-knowledgeskill",fresh:!1},{id:"sample-1",text:"some text 2",section:"goals-knowledgeskill",fresh:!1},{id:"fresh-0",text:"",section:"goals-knowledgeskill",fresh:!0}]}),t["default"]=n}),define("sticky-unit/models/unit",["ember-data","exports"],function(e,t){"use strict";var s=e["default"],n=s.Model.extend({title:s.attr("string"),standard:s.attr("string"),detail:s.attr("string"),titleLength:function(){var e=this.get("title.length");return e?this.get("title.length"):19}.property("title")});n.reopenClass({FIXTURES:[{id:"main-unit",title:"",standard:"",detail:""}]}),t["default"]=n}),define("sticky-unit/router",["ember","exports"],function(e,t){"use strict";var s=e["default"],n=s.Router.extend({location:StickyUnitENV.locationType});n.map(function(){this.route("application")}),t["default"]=n}),define("sticky-unit/routes/application",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Route.extend({actions:{openModal:function(e,t){return this.render(e,{into:"application",outlet:t})},openStickyListModal:function(e,t){var s=this.controllerFor("stickylist"),n=this;this.store.filter("sticky",{section:e},function(t){return t.get("section")===e}).then(function(i){s.set("section",e),s.set("content",i),n.render(e,{into:"application",outlet:t,controller:s})})},closeModal:function(){return this.disconnectOutlet({outlet:"modal",parentView:"application"})},populateStandard:function(e,t){this.store.find("unit","main-unit").then(function(s){s.set("standard",e),s.set("detail",t)}),this.send("closeModal")}}})}),define("sticky-unit/routes/index",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Route.extend({})}),define("sticky-unit/templates/activities-listofassessments",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var r="";return r})}),define("sticky-unit/templates/application",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var r,o,c,l="",u=n.helperMissing,d=this.escapeExpression;return a.buffer.push(d((o=n.outlet||t&&t.outlet,c={hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a},o?o.call(t,"modal",c):u.call(t,"outlet","modal",c)))),a.buffer.push("\n"),a.buffer.push(d((o=n.outlet||t&&t.outlet,c={hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a},o?o.call(t,"modal2",c):u.call(t,"outlet","modal2",c)))),a.buffer.push("\n"),a.buffer.push(d((o=n.outlet||t&&t.outlet,c={hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a},o?o.call(t,"modal3",c):u.call(t,"outlet","modal3",c)))),a.buffer.push("\n"),r=n._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),(r||0===r)&&a.buffer.push(r),l})}),define("sticky-unit/templates/assessments-academicprompts",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var r="";return r})}),define("sticky-unit/templates/assessments-performancetasks",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var r="";return r})}),define("sticky-unit/templates/assessments-quiztest",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var r="";return r})}),define("sticky-unit/templates/evidence-idea",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var r="";return r})}),define("sticky-unit/templates/evidence-knowledge",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var r="";return r})}),define("sticky-unit/templates/evidence-understanding",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var r="";return r})}),define("sticky-unit/templates/goals-bigidea",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var r="";return r})}),define("sticky-unit/templates/goals-enduringunderstanding",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){function r(e,t){var s="";return t.buffer.push("\n      "),t.buffer.push(l(n.view.call(e,"editsticky",{hash:{contentBinding:"this"},hashTypes:{contentBinding:"STRING"},hashContexts:{contentBinding:e},contexts:[e],types:["STRING"],data:t}))),t.buffer.push("\n    "),s}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var o,c="",l=this.escapeExpression,u=this;return a.buffer.push('<div class="popup-modal">\n  <div class="goals-enduringunderstanding">\n    '),o=n.each.call(t,{hash:{},hashTypes:{},hashContexts:{},inverse:u.noop,fn:u.program(1,r,a),contexts:[],types:[],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n  </div>\n</div>"),c})}),define("sticky-unit/templates/goals-knowledgeskill",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){function r(e,t){var s="";return t.buffer.push("\n      "),t.buffer.push(l(n.view.call(e,"editsticky",{hash:{contentBinding:"this"},hashTypes:{contentBinding:"STRING"},hashContexts:{contentBinding:e},contexts:[e],types:["STRING"],data:t}))),t.buffer.push("\n    "),s}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var o,c="",l=this.escapeExpression,u=this;return a.buffer.push('<div class="popup-modal">\n	<div class="sticky-modal-header">\n		<div>\n			<b>Section Title</b><br />\n 			<span><a href="home-route"> Section Question <img src="/img/videocamera-a4939a4ce184b154930c595372e8c8b5.png" height="20"></a></span>\n 		</div>\n 		<div>\n 			<button type="button" class="btn btn-default">Inspire Me <img src="/img/starperson-688b0393177a5559a7b274306b7372e6.png" height="20"></button>\n		</div>\n		<div>\n			<span class="glyphicon glyphicon-remove cursor-pointer" '),a.buffer.push(l(n.action.call(t,"closeModal",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:a}))),a.buffer.push('></span>\n 		</div>\n 	</div>\n  <div class="goals-knowledgeskill">\n    '),o=n.each.call(t,{hash:{},hashTypes:{},hashContexts:{},inverse:u.noop,fn:u.program(1,r,a),contexts:[],types:[],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push("\n  </div>\n</div>"),c})}),define("sticky-unit/templates/index",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){function r(e,t){var s,i="";return t.buffer.push('\n      <div class="panel panel-default panel-standards">\n        <div class="panel-heading cursor-pointer" data-toggle="collapse" href="#collapseStandards">\n          <h4 class="panel-title">\n            '),s=n._triageMustache.call(e,"unit.standard",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push('\n            <span class="pull-right glyphicon glyphicon-chevron-down"></span>\n          </h4>\n        </div>\n        <div id="collapseStandards" class="panel-collapse collapse">\n          <div class="panel-body">\n            '),s=n._triageMustache.call(e,"unit.detail",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push("\n          </div>\n        </div>\n      </div>\n    "),i}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var o,c,l,u="",d=n.helperMissing,h=this.escapeExpression,p=this;return a.buffer.push('<div class="container-fluid index">\n  <div class="logo">\n    <a href="/">\n      <img src="/img/StickyUnit-7395c51814aec0277a6d83f49ce05112.png">\n    </a>\n  </div>\n  <div class="header row">\n    <span class="title">\n      '),a.buffer.push(h((c=n.input||t&&t.input,l={hash:{valueBinding:"unit.title",placeholder:"<type your unit name>","class":"title-input",sizeBinding:"unit.titleLength"},hashTypes:{valueBinding:"STRING",placeholder:"STRING","class":"STRING",sizeBinding:"STRING"},hashContexts:{valueBinding:t,placeholder:t,"class":t,sizeBinding:t},contexts:[],types:[],data:a},c?c.call(t,l):d.call(t,"input",l)))),a.buffer.push('\n    </span>\n    <button class="btn btn-primary btn-standards" '),a.buffer.push(h(n.action.call(t,"openModal","standards","modal",{hash:{},hashTypes:{},hashContexts:{},contexts:[t,t,t],types:["STRING","STRING","STRING"],data:a}))),a.buffer.push(">Choose my standards</button>\n    "),o=n["if"].call(t,"unit.standard",{hash:{},hashTypes:{},hashContexts:{},inverse:p.noop,fn:p.program(1,r,a),contexts:[t],types:["ID"],data:a}),(o||0===o)&&a.buffer.push(o),a.buffer.push('\n  </div>\n\n  <div class="whiteboard row">\n    <div class="row">\n      <!-- GOALS ROW -->\n\n      <div class="col-md-12 heading">\n        <h3>GOALS</h3>\n      </div>\n\n      <div class="col-md-4">\n        <b class="section-title">Knowledge and Skills</b><br>\n        <a href="home-route">\n          What are Knowledge and Skills?\n          <i class="glyphicon glyphicon-facetime-video"></i>\n        </a>\n        '),a.buffer.push(h(n.view.call(t,"stickystack",{hash:{section:"goals-knowledgeskill"},hashTypes:{section:"STRING"},hashContexts:{section:t},contexts:[t],types:["STRING"],data:a}))),a.buffer.push('\n        \n        \n      </div>\n\n      <div class="col-md-4">\n        <b class="section-title">Enduring Understandings</b><br>\n        <a href="home-route">\n          What are Enduring Understandings?\n          <i class="glyphicon glyphicon-facetime-video"></i>\n        </a>\n        '),a.buffer.push(h(n.view.call(t,"stickystack",{hash:{section:"goals-enduringunderstanding"},hashTypes:{section:"STRING"},hashContexts:{section:t},contexts:[t],types:["STRING"],data:a}))),a.buffer.push('\n      </div>\n\n      <div class="col-md-4">\n        <b class="section-title">Big Idea</b><br>\n        <a href="home-route">\n          What is a Big Idea?\n          <i class="glyphicon glyphicon-facetime-video"></i>\n        </a>\n\n        '),a.buffer.push(h(n.view.call(t,"stickystack",{hash:{section:"goals-bigidea"},hashTypes:{section:"STRING"},hashContexts:{section:t},contexts:[t],types:["STRING"],data:a}))),a.buffer.push('\n      </div>\n    </div>\n\n    <div class="row">\n      <!-- EVIDENCE ROW -->\n\n      <div class="col-md-12 heading">\n        <h3>EVIDENCE</h3>\n      </div>\n\n      <div class="col-md-4">\n        <b class="section-title">Evidence of Knowledge and Skills</b><br>\n        <a href="home-route">\n          How do I create this evidence?\n          <i class="glyphicon glyphicon-facetime-video"></i>\n        </a>\n\n        '),a.buffer.push(h(n.view.call(t,"stickystack",{hash:{section:"evidence-knowledge"},hashTypes:{section:"STRING"},hashContexts:{section:t},contexts:[t],types:["STRING"],data:a}))),a.buffer.push('\n      </div>\n\n      <div class="col-md-4">\n        <b class="section-title">Evidence of Understandings</b><br>\n        <a href="home-route">\n          How do I create this evidence?\n          <i class="glyphicon glyphicon-facetime-video"></i>\n        </a>\n\n        '),a.buffer.push(h(n.view.call(t,"stickystack",{hash:{section:"evidence-understanding"},hashTypes:{section:"STRING"},hashContexts:{section:t},contexts:[t],types:["STRING"],data:a}))),a.buffer.push('\n      </div>\n\n      <div class="col-md-4">\n        <b class="section-title">Evidence of Big Idea</b><br>\n        <a href="home-route">\n          How do I create this evidence?\n          <i class="glyphicon glyphicon-facetime-video"></i>\n        </a>\n\n        '),a.buffer.push(h(n.view.call(t,"stickystack",{hash:{section:"evidence-idea"},hashTypes:{section:"STRING"},hashContexts:{section:t},contexts:[t],types:["STRING"],data:a}))),a.buffer.push('\n      </div>\n    </div><!-- ASSESSMENTS ROW -->\n\n    <div class="row">\n      <div class="col-md-12 heading">\n        <h3>ASSESSMENTS</h3>\n      </div>\n\n      <div class="col-md-4">\n        <b class="section-title">Performance Tasks</b><br>\n        <a href="home-route">\n          What are performance tasks?\n          <i class="glyphicon glyphicon-facetime-video"></i>\n        </a>\n\n\n        '),a.buffer.push(h(n.view.call(t,"stickystack",{hash:{section:"assessments-performancetasks"},hashTypes:{section:"STRING"},hashContexts:{section:t},contexts:[t],types:["STRING"],data:a}))),a.buffer.push('\n      </div>\n\n      <div class="col-md-4">\n        <b class="section-title">Academic Prompts</b><br>\n        <a href="home-route">\n          What are academic prompts?\n          <i class="glyphicon glyphicon-facetime-video"></i>\n        </a>\n\n\n        '),a.buffer.push(h(n.view.call(t,"stickystack",{hash:{section:"assessments-academicprompts"},hashTypes:{section:"STRING"},hashContexts:{section:t},contexts:[t],types:["STRING"],data:a}))),a.buffer.push('\n      </div>\n\n      <div class="col-md-4">\n        <b class="section-title">Quizzes and Tests</b><br>\n        <a href="home-route">\n          What are quizzes/tests?\n          <i class="glyphicon glyphicon-facetime-video"></i>\n        </a>\n\n        '),a.buffer.push(h(n.view.call(t,"stickystack",{hash:{section:"assessments-quiztest"},hashTypes:{section:"STRING"},hashContexts:{section:t},contexts:[t],types:["STRING"],data:a}))),a.buffer.push('\n      </div>\n    </div><!-- LEARNING ACTIVITIES ROW -->\n\n    <div class="row">\n      <div class="col-md-12 heading">\n        <h3>LEARNING ACTIVITIES</h3>\n      </div>\n\n      <div class="col-md-12">\n        <a href="home-route">\n          How do I create learning activities?\n          <i class="glyphicon glyphicon-facetime-video"></i>\n        </a>\n\n        '),a.buffer.push(h(n.view.call(t,"stickystack",{hash:{section:"activities-listofassessments"},hashTypes:{section:"STRING"},hashContexts:{section:t},contexts:[t],types:["STRING"],data:a}))),a.buffer.push('\n      </div>\n    </div>\n  </div>\n\n\n  <div class="row">\n    <button class="btn btn-success pull-right">\n      Export my work!\n    </button>\n  </div>\n</div>'),u})}),define("sticky-unit/templates/standards",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var r="",o=this.escapeExpression;return a.buffer.push('<div class="popup-modal">\n  <button '),a.buffer.push(o(n.action.call(t,"populateStandard","Understand the concept of a function and use function notation","Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",{hash:{},hashTypes:{},hashContexts:{},contexts:[t,t,t],types:["ID","STRING","STRING"],data:a}))),a.buffer.push(' class="btn btn-primary">populate standard</button>\n  <span class="glyphicon glyphicon-remove cursor-pointer" '),a.buffer.push(o(n.action.call(t,"closeModal",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:a}))),a.buffer.push("></span>\n</div>"),r})}),define("sticky-unit/templates/views/editsticky",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{}})}),define("sticky-unit/templates/views/sticky",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var r;r=n._triageMustache.call(t,"text",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:a}),a.buffer.push(r||0===r?r:"")})}),define("sticky-unit/templates/views/stickystack",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,i,a){function r(e,t){var s="";return t.buffer.push("\n      "),t.buffer.push(u(n.view.call(e,"sticky",{hash:{contentBinding:"this"},hashTypes:{contentBinding:"STRING"},hashContexts:{contentBinding:e},contexts:[e],types:["STRING"],data:t}))),t.buffer.push("\n    "),s}function o(e,t){var s="";return t.buffer.push("\n      "),t.buffer.push(u(n.view.call(e,"sticky",{hash:{contentBinding:"view.freshStickies.firstObject"},hashTypes:{contentBinding:"STRING"},hashContexts:{contentBinding:e},contexts:[e],types:["STRING"],data:t}))),t.buffer.push("\n    "),s}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),a=a||{};var c,l="",u=this.escapeExpression,d=this;return a.buffer.push("<div "),a.buffer.push(u(n.action.call(t,"openStickyListModal","view.section","modal",{hash:{},hashTypes:{},hashContexts:{},contexts:[t,t,t],types:["STRING","ID","STRING"],data:a}))),a.buffer.push(' class="stack-section">\n  <div class="stack">\n    '),c=n.each.call(t,"view.stickies",{hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(1,r,a),contexts:[t],types:["ID"],data:a}),(c||0===c)&&a.buffer.push(c),a.buffer.push("\n    "),c=n.unless.call(t,"view.stickies",{hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(3,o,a),contexts:[t],types:["ID"],data:a}),(c||0===c)&&a.buffer.push(c),a.buffer.push("\n  </div>\n</div>"),l})}),define("sticky-unit/views/editsticky",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.TextArea.extend({valueBinding:"content.text",templateName:"views/editsticky",classNameBindings:["sticky","fade","color"],sticky:"sticky",fade:function(){return this.get("content.fresh")?"faded":void 0}.property("content.fresh"),color:function(){return this.get("content.color")}.property("content.color")})}),define("sticky-unit/views/sticky",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.View.extend({templateName:"views/sticky",classNameBindings:["sticky","indexClass","color"],sticky:"stacked-sticky",indexClass:function(){return"rotate-"+this.get("_parentView.contentIndex")}.property(),color:function(){return this.get("content.color")}.property("content.color")})}),define("sticky-unit/views/stickystack",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.View.extend({templateName:"views/stickystack",section:null,stickies:function(){var e=this.get("section"),t=this.get("controller").get("store");return t.filter("sticky",{section:e,fresh:!1},function(t){return t.get("section")===e&&t.get("fresh")===!1})}.property("section"),freshStickies:function(){var e=this.get("section"),t=this.get("controller").get("store");return t.filter("sticky",{section:e,fresh:!0},function(t){return t.get("section")===e&&t.get("fresh")===!0})}.property("section"),makeFreshStickies:function(){if(!this.get("freshStickies.length")){var e=this.get("section"),t=this.get("controller").get("store"),s=t.createRecord("sticky",{text:"",section:e,fresh:!0});s.save()}}.observes("freshStickies.length")})});
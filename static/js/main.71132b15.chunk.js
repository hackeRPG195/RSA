(this["webpackJsonprn-exploit"]=this["webpackJsonprn-exploit"]||[]).push([[0],{1:function(_,e,t){"use strict";t.d(e,"a",(function(){return r}));t(2);var s=t(0),n=function(_){return Object(s.jsx)("div",{className:"div_".concat(_.element.id),children:Object(s.jsxs)("label",{children:[_.element.label,Object(s.jsx)("input",{readOnly:!0,className:"".concat(_.element.nume,"_val"),type:"text",value:_.element.val})]})})},r=function(_){return Object(s.jsx)("div",{className:"input-list",children:_.elements.map((function(_){return Object(s.jsx)(n,{element:_},_.id)}))})}},14:function(_,e,t){},15:function(_,e,t){},17:function(_,e,t){"use strict";t.r(e);var s=t(2),n=t.n(s),r=t(4),c=t.n(r),a=(t(14),t(5)),i=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(e){var t=e.getCLS,s=e.getFID,n=e.getFCP,r=e.getLCP,c=e.getTTFB;t(_),s(_),n(_),r(_),c(_)}))},u=t(0);c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(a.a,{})}),document.getElementById("root")),i()},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_x123_Documents_rn_exploit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_Users_x123_Documents_rn_exploit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),_Users_x123_Documents_rn_exploit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_Users_x123_Documents_rn_exploit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_App_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(15),_App_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_components_input_list_component__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),App=function(_React$Component){Object(_Users_x123_Documents_rn_exploit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_React$Component);var _super=Object(_Users_x123_Documents_rn_exploit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _;return Object(_Users_x123_Documents_rn_exploit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(_=_super.call(this)).state={_1st:!1,_2nd:!1,_3rd:!1,_4th:!1,_5th:!1,_6th:!1,_7th:!1,_8th:!1,_9th:!1,step_0:[{val:"248501410365662412791489552646042256782092770118253438700194718631291036762726489658495565276550205113648626040596191969135846656414394584577305526761671104277390765264806022908497647300596494542202565022133435383403344333672279722534625284520459706609569974491538689429548817677759350947931780871046796607829",nume:"N",label:"N",id:1},{val:"65537",nume:"e",label:"e",id:2},{val:"13026685992320376966900872608865420374627539408788613307094830638345728123427345410810495082016593339528583880478309351125854158459979947140005048595481921",nume:"dp",label:"d_p",id:3},{val:"194048013822218245260658018019940874060627700835842604475987702337533801266490182061968998210807564778328557627772974110046885380635225974269865976518335375789734689098164529086561756412074742698644530189076800227300946408167039318949544794351233987752575608106800908043533012088081995031010618521695843625062",nume:"c",label:"c",id:4},{val:"2",nume:"r",label:"r",id:5}],step_1:[{val:"853729919878700545279782488167213055091965050233779350307073915545263984025057936188287416190121477692684801774906959944735103982991705795714510869802098656577",nume:"e_dp",label:"e * d_p",id:6}],step_2:[{val:"9016251931619471900134891654325616416963014235024228578354571272685898360266018360452389791090601523553654485318638404360595324030293075979910480958518385739558357427754952470521390962912716408800915161865514811327192369457586355334435977829277840040278708603908982776021627948202865858910346914368536701615",nume:"exp_r",label:"r^(e * d_p) - r",id:7}],step_3:[{val:"16552210630088420359063602469409691246112006092399460047056378989981464655959089848157885458725066456486967346056593120026660668947840276779140541893871393",nume:"gdc",label:"gcd(r^(e * dp) - r, n) is prime = > gdc(..) = p",id:8}],step_4:[{val:"15013185605186740034227708057626394762531633940631700203311197366887925783946625438484121360496063355757466284381991899709178728990398985814200472641968053",nume:"q",label:"q = n/p",id:9}],step_5:[{val:"248501410365662412791489552646042256782092770118253438700194718631291036762726489658495565276550205113648626040596191969135846656414394584577305526761671072711994529989645629617187120264510485898562531990973185015826987464281839816819338642513640485479757730057908250844529081838361412708669187530032260768384",nume:"pq",label:"(p-1)(q-1)",id:10}],step_6:[{val:"246730652493914173678108933742435107630968407946575999148903220186125513254354222531978980309521672440684134099235458007410616017408252675869284078099118615459503548627893268217806215048166643536009642746122421669894289856124316292787804834953729746405356294839069378861612636453029237300351008324750891987713",nume:"d",label:"d=e^(-1) mod(p-1)(q-1)",id:11}],step_7:[{val:"3670434958110785066911905751469631231338751225710158680692616521935747246580687550712031758787973446252925",nume:"m",label:"m = c^d mod n",id:12}],step_8:[{val:"666C61677B776F775F6C65616B696E675F64705F627265616B735F7273613F5F36343135313431383136397D",nume:"m_hex",label:"m_hex",id:13}],step_9:[{val:"flag{wow_leaking_dp_breaks_rsa?_64151418169}",nume:"m_ascii",label:"m_ascii",id:14}]},_}return Object(_Users_x123_Documents_rn_exploit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"shouldComponentUpdate",value:function(_,e){return e._1st!==this.state._1st||e._2nd!==this.state._2nd||e._3rd!==this.state._3rd||e._4th!==this.state._4th||e._5th!==this.state._5th||e._6th!==this.state._6th||e._7th!==this.state._7th||e._8th!==this.state._8th||e._9th!==this.state._9th}},{key:"render",value:function render(){var _this2=this,render_step1=function(){return!1===_this2.state._1st?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_input_list_component__WEBPACK_IMPORTED_MODULE_6__.a,{elements:_this2.state.step_1})},render_step2=function(){return!1===_this2.state._2nd?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_input_list_component__WEBPACK_IMPORTED_MODULE_6__.a,{elements:_this2.state.step_2})},render_step3=function(){return!1===_this2.state._3rd?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_input_list_component__WEBPACK_IMPORTED_MODULE_6__.a,{elements:_this2.state.step_3})},render_step4=function(){return!1===_this2.state._4th?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_input_list_component__WEBPACK_IMPORTED_MODULE_6__.a,{elements:_this2.state.step_4})},render_step5=function(){return!1===_this2.state._5th?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_input_list_component__WEBPACK_IMPORTED_MODULE_6__.a,{elements:_this2.state.step_5})},render_step6=function(){return!1===_this2.state._6th?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_input_list_component__WEBPACK_IMPORTED_MODULE_6__.a,{elements:_this2.state.step_6})},render_step7=function(){return!1===_this2.state._7th?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_input_list_component__WEBPACK_IMPORTED_MODULE_6__.a,{elements:_this2.state.step_7})},render_step8=function(){return!1===_this2.state._8th?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_input_list_component__WEBPACK_IMPORTED_MODULE_6__.a,{elements:_this2.state.step_8})},render_step9=function(){return!1===_this2.state._9th?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_input_list_component__WEBPACK_IMPORTED_MODULE_6__.a,{elements:_this2.state.step_9})},button_step2=function(){return!1===_this2.state._1st?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a",{href:"#btm",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{onClick:function(){return _2nd_step()},className:"btn_2",children:"Step 2"})})},button_step3=function(){return!1===_this2.state._2nd?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a",{href:"#btm",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{onClick:function(){return _3rd_step()},className:"btn_3",children:"Step 3"})})},button_step4=function(){return!1===_this2.state._3rd?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a",{href:"#btm",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{onClick:function(){return _4th_step()},className:"btn_4",children:"Step 4"})})},button_step5=function(){return!1===_this2.state._4th?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a",{href:"#btm",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{onClick:function(){return _5th_step()},className:"btn_5",children:"Step 5"})})},button_step6=function(){return!1===_this2.state._5th?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a",{href:"#btm",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{onClick:function(){return _6th_step()},className:"btn_6",children:"Step 6"})})},button_step7=function(){return!1===_this2.state._6th?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a",{href:"#btm",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{onClick:function(){return _7th_step()},className:"btn_7",children:"Step 7"})})},button_step8=function(){return!1===_this2.state._7th?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a",{href:"#btm",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{onClick:function(){return _8th_step()},className:"btn_8",children:"Step 8"})})},button_step9=function(){return!1===_this2.state._8th?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a",{href:"#btm",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{onClick:function(){return _9th_step()},className:"btn_9",children:"Step 9"})})},execute=function execute(n){for(var x=n;x<10;x++)1==x&&_this2.setState({_1st:!1}),2==x&&_this2.setState({_2nd:!1}),3==x&&_this2.setState({_3rd:!1}),x>3&&eval("this.setState({_"+x+"th:false})")},_1st_step=function(){!1===_this2.state._1st?_this2.setState({_1st:!0}):execute(1)},_2nd_step=function(){!1===_this2.state._2nd?_this2.setState({_2nd:!0}):execute(2)},_3rd_step=function(){!1===_this2.state._3rd?_this2.setState({_3rd:!0}):execute(3)},_4th_step=function(){!1===_this2.state._4th?_this2.setState({_4th:!0}):execute(4)},_5th_step=function(){!1===_this2.state._5th?_this2.setState({_5th:!0}):execute(5)},_6th_step=function(){!1===_this2.state._6th?_this2.setState({_6th:!0}):execute(6)},_7th_step=function(){!1===_this2.state._7th?_this2.setState({_7th:!0}):execute(7)},_8th_step=function(){!1===_this2.state._8th?_this2.setState({_8th:!0}):execute(8)},_9th_step=function(){!1===_this2.state._9th?_this2.setState({_9th:!0}):execute(9)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"App",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("header",{className:"App-header",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a",{href:"#btm",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1",{className:"H_1",id:"h_1",children:"Exploit RSA"})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_input_list_component__WEBPACK_IMPORTED_MODULE_6__.a,{elements:this.state.step_0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a",{href:"#btm",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{onClick:function(){return _1st_step()},className:"btn_1",children:"Step 1"})}),render_step1(),button_step2(),render_step2(),button_step3(),render_step3(),button_step4(),render_step4(),button_step5(),render_step5(),button_step6(),render_step6(),button_step7(),render_step7(),button_step8(),render_step8(),button_step9(),render_step9(),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a",{href:"#h_1",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"btn_back",children:"Up"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("footer",{className:"App-footer",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{id:"btm",children:"\xa9 2021 Georgian Nicolae. All Rights Reserved."})})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App}},[[17,1,2]]]);
//# sourceMappingURL=main.71132b15.chunk.js.map
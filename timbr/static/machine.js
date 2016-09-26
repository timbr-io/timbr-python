define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactTimbrMachine = __webpack_require__(1);

	var _reactTimbrMachine2 = _interopRequireDefault(_reactTimbrMachine);

	var _jupyterReactJs = __webpack_require__(3);

	var _jupyterReactJs2 = _interopRequireDefault(_jupyterReactJs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function load_ipython_extension() {
	  requirejs(["base/js/namespace", "base/js/events"], function (Jupyter, events) {
	    // initialize jupyter react cells, comm mananger and components
	    var on_update = function on_update(module, props, commId) {
	      _reactTimbrMachine2.default.dispatcher.dispatch({
	        actionType: module.toLowerCase() + '_update',
	        data: props,
	        commId: commId
	      });
	    };
	    _jupyterReactJs2.default.init(Jupyter, events, 'timbr.machine', { components: _reactTimbrMachine2.default, on_update: on_update });
	  });
	}

	module.exports = {
	  load_ipython_extension: load_ipython_extension
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};(function webpackUniversalModuleDefinition(root,factory){if(( false?'undefined':_typeof(exports))==='object'&&( false?'undefined':_typeof(module))==='object')module.exports=factory();else if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else{var a=factory();for(var i in a){((typeof exports==='undefined'?'undefined':_typeof(exports))==='object'?exports:root)[i]=a[i];}}})(undefined,function(){return(/******/function(modules){// webpackBootstrap
	/******/// The module cache
	/******/var installedModules={};/******/// The require function
	/******/function __webpack_require__(moduleId){/******/// Check if module is in cache
	/******/if(installedModules[moduleId])/******/return installedModules[moduleId].exports;/******/// Create a new module (and put it into the cache)
	/******/var module=installedModules[moduleId]={/******/exports:{},/******/id:moduleId,/******/loaded:false/******/};/******/// Execute the module function
	/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/// Flag the module as loaded
	/******/module.loaded=true;/******/// Return the exports of the module
	/******/return module.exports;/******/}/******/// expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m=modules;/******/// expose the module cache
	/******/__webpack_require__.c=installedModules;/******/// __webpack_public_path__
	/******/__webpack_require__.p="";/******/// Load entry module and return exports
	/******/return __webpack_require__(0);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _display=__webpack_require__(1);var _display2=_interopRequireDefault(_display);var _dashboard=__webpack_require__(53);var _dashboard2=_interopRequireDefault(_dashboard);var _dispatcher=__webpack_require__(47);var _dispatcher2=_interopRequireDefault(_dispatcher);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default={Dashboard:_dashboard2.default,Display:_display2.default,dispatcher:_dispatcher2.default};module.exports=exports['default'];/***/},/* 1 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class,_desc,_value,_class2;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);var _autobindDecorator=__webpack_require__(35);var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);var _performance=__webpack_require__(36);var _performance2=_interopRequireDefault(_performance);var _progress=__webpack_require__(43);var _progress2=_interopRequireDefault(_progress);var _connect=__webpack_require__(46);var _connect2=_interopRequireDefault(_connect);var _display=__webpack_require__(51);var _display2=_interopRequireDefault(_display);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var initialState={status:{},sparkVals:[],sparkAverages:[],processedVals:null,lastVal:null};function onStateUpdated(nextState){var state=_extends({},nextState);var _state$status=state.status;var status=_state$status===undefined?{}:_state$status;state.status=status;if(typeof status.processed!=='undefined'){var totalQueued=status.processed+status.queue_size;state.processedPercent=status.processed/totalQueued*100;if(!state.processedVals){state.processedVals=Array(10).fill(state.processedPercent);}else{state.processedVals.push(state.processedPercent);}if(!state.lastVal){state.lastVal=status.processed;}else{state.sparkVals.push(status.processed-state.lastVal);state.lastVal=status.processed;if(state.sparkVals.length>1){var windowSeconds=10;var windowVals=state.sparkVals.slice(Math.max(state.sparkVals.length-windowSeconds,1));state.sparkAverages.push(sum(windowVals)/windowVals.length);if(state.sparkAverages.length>30){state.sparkAverages.shift();}}}}return state;}function sum(vals){return vals.reduce(function(a,b){return a+b;});}var DisplayStatus=(_dec=(0,_connect2.default)('display_update',initialState,onStateUpdated),_dec(_class=(_class2=function(_React$Component){_inherits(DisplayStatus,_React$Component);function DisplayStatus(){_classCallCheck(this,DisplayStatus);return _possibleConstructorReturn(this,(DisplayStatus.__proto__||Object.getPrototypeOf(DisplayStatus)).apply(this,arguments));}_createClass(DisplayStatus,[{key:'toggle',value:function toggle(){var _props$state$status=this.props.state.status;var status=_props$state$status===undefined?{}:_props$state$status;this.props.send({method:'toggle',data:{action:status.running?'stop':'start'}});}},{key:'render',value:function render(){var _props$state$status2=this.props.state.status;var status=_props$state$status2===undefined?{}:_props$state$status2;var running=status.running?'Running':'Stopped';var statusClass=status.running?_display2.default.running:_display2.default.status;return _react2.default.createElement('div',null,_react2.default.createElement('div',{className:_display2.default.machinestat},_react2.default.createElement('h5',null,'Timbr Machine Status'),_react2.default.createElement('div',{className:statusClass},running),_react2.default.createElement('div',{className:_display2.default.statRow},_react2.default.createElement(_performance2.default,_extends({},this.props,{toggle:this.toggle})),_react2.default.createElement(_progress2.default,this.props))));}}]);return DisplayStatus;}(_react2.default.Component),_applyDecoratedDescriptor(_class2.prototype,'toggle',[_autobindDecorator2.default],Object.getOwnPropertyDescriptor(_class2.prototype,'toggle'),_class2.prototype),_class2))||_class);exports.default=DisplayStatus;module.exports=exports['default'];/***/},/* 2 *//***/function(module,exports,__webpack_require__){'use strict';module.exports=__webpack_require__(3);/***/},/* 3 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule React
		 */'use strict';var _assign=__webpack_require__(5);var ReactChildren=__webpack_require__(6);var ReactComponent=__webpack_require__(18);var ReactPureComponent=__webpack_require__(21);var ReactClass=__webpack_require__(22);var ReactDOMFactories=__webpack_require__(27);var ReactElement=__webpack_require__(10);var ReactPropTypes=__webpack_require__(32);var ReactVersion=__webpack_require__(33);var onlyChild=__webpack_require__(34);var warning=__webpack_require__(12);var createElement=ReactElement.createElement;var createFactory=ReactElement.createFactory;var cloneElement=ReactElement.cloneElement;if(process.env.NODE_ENV!=='production'){var ReactElementValidator=__webpack_require__(28);createElement=ReactElementValidator.createElement;createFactory=ReactElementValidator.createFactory;cloneElement=ReactElementValidator.cloneElement;}var __spread=_assign;if(process.env.NODE_ENV!=='production'){var warned=false;__spread=function __spread(){process.env.NODE_ENV!=='production'?warning(warned,'React.__spread is deprecated and should not be used. Use '+'Object.assign directly or another helper function with similar '+'semantics. You may be seeing this warning due to your compiler. '+'See https://fb.me/react-spread-deprecation for more details.'):void 0;warned=true;return _assign.apply(null,arguments);};}var React={// Modern
	Children:{map:ReactChildren.map,forEach:ReactChildren.forEach,count:ReactChildren.count,toArray:ReactChildren.toArray,only:onlyChild},Component:ReactComponent,PureComponent:ReactPureComponent,createElement:createElement,cloneElement:cloneElement,isValidElement:ReactElement.isValidElement,// Classic
	PropTypes:ReactPropTypes,createClass:ReactClass.createClass,createFactory:createFactory,createMixin:function createMixin(mixin){// Currently a noop. Will be used to validate and trace mixins.
	return mixin;},// This looks DOM specific but these are actually isomorphic helpers
	// since they are just generating DOM strings.
	DOM:ReactDOMFactories,version:ReactVersion,// Deprecated hook for JSX spread, don't use this for anything.
	__spread:__spread};module.exports=React;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 4 *//***/function(module,exports){// shim for using process in browser
	var process=module.exports={};// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
	return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
	if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
	return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
	return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
	if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
	return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	// Some versions of I.E. have different rules for clearTimeout vs setTimeout
	return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
	function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
	process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};/***/},/* 5 *//***/function(module,exports){'use strict';/* eslint-disable no-unused-vars */var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}function shouldUseNative(){try{if(!Object.assign){return false;}// Detect buggy property enumeration order in older V8 versions.
	// https://bugs.chromium.org/p/v8/issues/detail?id=4118
	var test1=new String('abc');// eslint-disable-line
	test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
	var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
	var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys(Object.assign({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}return true;}catch(e){// We don't expect any of the above to throw, but better to be safe.
	return false;}}module.exports=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}if(Object.getOwnPropertySymbols){symbols=Object.getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}return to;};/***/},/* 6 *//***/function(module,exports,__webpack_require__){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ReactChildren
		 */'use strict';var PooledClass=__webpack_require__(7);var ReactElement=__webpack_require__(10);var emptyFunction=__webpack_require__(13);var traverseAllChildren=__webpack_require__(15);var twoArgumentPooler=PooledClass.twoArgumentPooler;var fourArgumentPooler=PooledClass.fourArgumentPooler;var userProvidedKeyEscapeRegex=/\/+/g;function escapeUserProvidedKey(text){return(''+text).replace(userProvidedKeyEscapeRegex,'$&/');}/**
		 * PooledClass representing the bookkeeping associated with performing a child
		 * traversal. Allows avoiding binding callbacks.
		 *
		 * @constructor ForEachBookKeeping
		 * @param {!function} forEachFunction Function to perform traversal with.
		 * @param {?*} forEachContext Context to perform context with.
		 */function ForEachBookKeeping(forEachFunction,forEachContext){this.func=forEachFunction;this.context=forEachContext;this.count=0;}ForEachBookKeeping.prototype.destructor=function(){this.func=null;this.context=null;this.count=0;};PooledClass.addPoolingTo(ForEachBookKeeping,twoArgumentPooler);function forEachSingleChild(bookKeeping,child,name){var func=bookKeeping.func;var context=bookKeeping.context;func.call(context,child,bookKeeping.count++);}/**
		 * Iterates through children that are typically specified as `props.children`.
		 *
		 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
		 *
		 * The provided forEachFunc(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} forEachFunc
		 * @param {*} forEachContext Context for forEachContext.
		 */function forEachChildren(children,forEachFunc,forEachContext){if(children==null){return children;}var traverseContext=ForEachBookKeeping.getPooled(forEachFunc,forEachContext);traverseAllChildren(children,forEachSingleChild,traverseContext);ForEachBookKeeping.release(traverseContext);}/**
		 * PooledClass representing the bookkeeping associated with performing a child
		 * mapping. Allows avoiding binding callbacks.
		 *
		 * @constructor MapBookKeeping
		 * @param {!*} mapResult Object containing the ordered map of results.
		 * @param {!function} mapFunction Function to perform mapping with.
		 * @param {?*} mapContext Context to perform mapping with.
		 */function MapBookKeeping(mapResult,keyPrefix,mapFunction,mapContext){this.result=mapResult;this.keyPrefix=keyPrefix;this.func=mapFunction;this.context=mapContext;this.count=0;}MapBookKeeping.prototype.destructor=function(){this.result=null;this.keyPrefix=null;this.func=null;this.context=null;this.count=0;};PooledClass.addPoolingTo(MapBookKeeping,fourArgumentPooler);function mapSingleChildIntoContext(bookKeeping,child,childKey){var result=bookKeeping.result;var keyPrefix=bookKeeping.keyPrefix;var func=bookKeeping.func;var context=bookKeeping.context;var mappedChild=func.call(context,child,bookKeeping.count++);if(Array.isArray(mappedChild)){mapIntoWithKeyPrefixInternal(mappedChild,result,childKey,emptyFunction.thatReturnsArgument);}else if(mappedChild!=null){if(ReactElement.isValidElement(mappedChild)){mappedChild=ReactElement.cloneAndReplaceKey(mappedChild,// Keep both the (mapped) and old keys if they differ, just as
	// traverseAllChildren used to do for objects as children
	keyPrefix+(mappedChild.key&&(!child||child.key!==mappedChild.key)?escapeUserProvidedKey(mappedChild.key)+'/':'')+childKey);}result.push(mappedChild);}}function mapIntoWithKeyPrefixInternal(children,array,prefix,func,context){var escapedPrefix='';if(prefix!=null){escapedPrefix=escapeUserProvidedKey(prefix)+'/';}var traverseContext=MapBookKeeping.getPooled(array,escapedPrefix,func,context);traverseAllChildren(children,mapSingleChildIntoContext,traverseContext);MapBookKeeping.release(traverseContext);}/**
		 * Maps children that are typically specified as `props.children`.
		 *
		 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
		 *
		 * The provided mapFunction(child, key, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} func The map function.
		 * @param {*} context Context for mapFunction.
		 * @return {object} Object containing the ordered map of results.
		 */function mapChildren(children,func,context){if(children==null){return children;}var result=[];mapIntoWithKeyPrefixInternal(children,result,null,func,context);return result;}function forEachSingleChildDummy(traverseContext,child,name){return null;}/**
		 * Count the number of children that are typically specified as
		 * `props.children`.
		 *
		 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
		 *
		 * @param {?*} children Children tree container.
		 * @return {number} The number of children.
		 */function countChildren(children,context){return traverseAllChildren(children,forEachSingleChildDummy,null);}/**
		 * Flatten a children object (typically specified as `props.children`) and
		 * return an array with appropriately re-keyed children.
		 *
		 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
		 */function toArray(children){var result=[];mapIntoWithKeyPrefixInternal(children,result,null,emptyFunction.thatReturnsArgument);return result;}var ReactChildren={forEach:forEachChildren,map:mapChildren,mapIntoWithKeyPrefixInternal:mapIntoWithKeyPrefixInternal,count:countChildren,toArray:toArray};module.exports=ReactChildren;/***/},/* 7 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule PooledClass
		 */'use strict';var _prodInvariant=__webpack_require__(8);var invariant=__webpack_require__(9);/**
		 * Static poolers. Several custom versions for each potential number of
		 * arguments. A completely generic pooler is easy to implement, but would
		 * require accessing the `arguments` object. In each of these, `this` refers to
		 * the Class itself, not an instance. If any others are needed, simply add them
		 * here, or in their own files.
		 */var oneArgumentPooler=function oneArgumentPooler(copyFieldsFrom){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,copyFieldsFrom);return instance;}else{return new Klass(copyFieldsFrom);}};var twoArgumentPooler=function twoArgumentPooler(a1,a2){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2);return instance;}else{return new Klass(a1,a2);}};var threeArgumentPooler=function threeArgumentPooler(a1,a2,a3){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3);return instance;}else{return new Klass(a1,a2,a3);}};var fourArgumentPooler=function fourArgumentPooler(a1,a2,a3,a4){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3,a4);return instance;}else{return new Klass(a1,a2,a3,a4);}};var fiveArgumentPooler=function fiveArgumentPooler(a1,a2,a3,a4,a5){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3,a4,a5);return instance;}else{return new Klass(a1,a2,a3,a4,a5);}};var standardReleaser=function standardReleaser(instance){var Klass=this;!(instance instanceof Klass)?process.env.NODE_ENV!=='production'?invariant(false,'Trying to release an instance into a pool of a different type.'):_prodInvariant('25'):void 0;instance.destructor();if(Klass.instancePool.length<Klass.poolSize){Klass.instancePool.push(instance);}};var DEFAULT_POOL_SIZE=10;var DEFAULT_POOLER=oneArgumentPooler;/**
		 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
		 * itself (statically) not adding any prototypical fields. Any CopyConstructor
		 * you give this may have a `poolSize` property, and will look for a
		 * prototypical `destructor` on instances.
		 *
		 * @param {Function} CopyConstructor Constructor that can be used to reset.
		 * @param {Function} pooler Customizable pooler.
		 */var addPoolingTo=function addPoolingTo(CopyConstructor,pooler){var NewKlass=CopyConstructor;NewKlass.instancePool=[];NewKlass.getPooled=pooler||DEFAULT_POOLER;if(!NewKlass.poolSize){NewKlass.poolSize=DEFAULT_POOL_SIZE;}NewKlass.release=standardReleaser;return NewKlass;};var PooledClass={addPoolingTo:addPoolingTo,oneArgumentPooler:oneArgumentPooler,twoArgumentPooler:twoArgumentPooler,threeArgumentPooler:threeArgumentPooler,fourArgumentPooler:fourArgumentPooler,fiveArgumentPooler:fiveArgumentPooler};module.exports=PooledClass;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 8 *//***/function(module,exports){/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule reactProdInvariant
		 * 
		 */'use strict';/**
		 * WARNING: DO NOT manually require this module.
		 * This is a replacement for `invariant(...)` used by the error code system
		 * and will _only_ be required by the corresponding babel pass.
		 * It always throws.
		 */function reactProdInvariant(code){var argCount=arguments.length-1;var message='Minified React error #'+code+'; visit '+'http://facebook.github.io/react/docs/error-decoder.html?invariant='+code;for(var argIdx=0;argIdx<argCount;argIdx++){message+='&args[]='+encodeURIComponent(arguments[argIdx+1]);}message+=' for the full message or use the non-minified dev environment'+' for full errors and additional helpful warnings.';var error=new Error(message);error.name='Invariant Violation';error.framesToPop=1;// we don't care about reactProdInvariant's own frame
	throw error;}module.exports=reactProdInvariant;/***/},/* 9 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 */'use strict';/**
		 * Use invariant() to assert state which your program assumes to be true.
		 *
		 * Provide sprintf-style format (only %s is supported) and arguments
		 * to provide information about what broke and what you were
		 * expecting.
		 *
		 * The invariant message will be stripped in production, but the invariant
		 * will remain to ensure logic does not differ in production.
		 */function invariant(condition,format,a,b,c,d,e,f){if(process.env.NODE_ENV!=='production'){if(format===undefined){throw new Error('invariant requires an error message argument');}}if(!condition){var error;if(format===undefined){error=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');}else{var args=[a,b,c,d,e,f];var argIndex=0;error=new Error(format.replace(/%s/g,function(){return args[argIndex++];}));error.name='Invariant Violation';}error.framesToPop=1;// we don't care about invariant's own frame
	throw error;}}module.exports=invariant;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 10 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2014-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ReactElement
		 */'use strict';var _assign=__webpack_require__(5);var ReactCurrentOwner=__webpack_require__(11);var warning=__webpack_require__(12);var canDefineProperty=__webpack_require__(14);var hasOwnProperty=Object.prototype.hasOwnProperty;// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE=typeof Symbol==='function'&&Symbol['for']&&Symbol['for']('react.element')||0xeac7;var RESERVED_PROPS={key:true,ref:true,__self:true,__source:true};var specialPropKeyWarningShown,specialPropRefWarningShown;function hasValidRef(config){if(process.env.NODE_ENV!=='production'){if(hasOwnProperty.call(config,'ref')){var getter=Object.getOwnPropertyDescriptor(config,'ref').get;if(getter&&getter.isReactWarning){return false;}}}return config.ref!==undefined;}function hasValidKey(config){if(process.env.NODE_ENV!=='production'){if(hasOwnProperty.call(config,'key')){var getter=Object.getOwnPropertyDescriptor(config,'key').get;if(getter&&getter.isReactWarning){return false;}}}return config.key!==undefined;}function defineKeyPropWarningGetter(props,displayName){var warnAboutAccessingKey=function warnAboutAccessingKey(){if(!specialPropKeyWarningShown){specialPropKeyWarningShown=true;process.env.NODE_ENV!=='production'?warning(false,'%s: `key` is not a prop. Trying to access it will result '+'in `undefined` being returned. If you need to access the same '+'value within the child component, you should pass it as a different '+'prop. (https://fb.me/react-special-props)',displayName):void 0;}};warnAboutAccessingKey.isReactWarning=true;Object.defineProperty(props,'key',{get:warnAboutAccessingKey,configurable:true});}function defineRefPropWarningGetter(props,displayName){var warnAboutAccessingRef=function warnAboutAccessingRef(){if(!specialPropRefWarningShown){specialPropRefWarningShown=true;process.env.NODE_ENV!=='production'?warning(false,'%s: `ref` is not a prop. Trying to access it will result '+'in `undefined` being returned. If you need to access the same '+'value within the child component, you should pass it as a different '+'prop. (https://fb.me/react-special-props)',displayName):void 0;}};warnAboutAccessingRef.isReactWarning=true;Object.defineProperty(props,'ref',{get:warnAboutAccessingRef,configurable:true});}/**
		 * Factory method to create a new React element. This no longer adheres to
		 * the class pattern, so do not use new to call it. Also, no instanceof check
		 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
		 * if something is a React Element.
		 *
		 * @param {*} type
		 * @param {*} key
		 * @param {string|object} ref
		 * @param {*} self A *temporary* helper to detect places where `this` is
		 * different from the `owner` when React.createElement is called, so that we
		 * can warn. We want to get rid of owner and replace string `ref`s with arrow
		 * functions, and as long as `this` and owner are the same, there will be no
		 * change in behavior.
		 * @param {*} source An annotation object (added by a transpiler or otherwise)
		 * indicating filename, line number, and/or other information.
		 * @param {*} owner
		 * @param {*} props
		 * @internal
		 */var ReactElement=function ReactElement(type,key,ref,self,source,owner,props){var element={// This tag allow us to uniquely identify this as a React Element
	$$typeof:REACT_ELEMENT_TYPE,// Built-in properties that belong on the element
	type:type,key:key,ref:ref,props:props,// Record the component responsible for creating this element.
	_owner:owner};if(process.env.NODE_ENV!=='production'){// The validation flag is currently mutative. We put it on
	// an external backing store so that we can freeze the whole object.
	// This can be replaced with a WeakMap once they are implemented in
	// commonly used development environments.
	element._store={};var shadowChildren=Array.isArray(props.children)?props.children.slice(0):props.children;// To make comparing ReactElements easier for testing purposes, we make
	// the validation flag non-enumerable (where possible, which should
	// include every environment we run tests in), so the test framework
	// ignores it.
	if(canDefineProperty){Object.defineProperty(element._store,'validated',{configurable:false,enumerable:false,writable:true,value:false});// self and source are DEV only properties.
	Object.defineProperty(element,'_self',{configurable:false,enumerable:false,writable:false,value:self});Object.defineProperty(element,'_shadowChildren',{configurable:false,enumerable:false,writable:false,value:shadowChildren});// Two elements created in two different places should be considered
	// equal for testing purposes and therefore we hide it from enumeration.
	Object.defineProperty(element,'_source',{configurable:false,enumerable:false,writable:false,value:source});}else{element._store.validated=false;element._self=self;element._shadowChildren=shadowChildren;element._source=source;}if(Object.freeze){Object.freeze(element.props);Object.freeze(element);}}return element;};/**
		 * Create and return a new ReactElement of the given type.
		 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
		 */ReactElement.createElement=function(type,config,children){var propName;// Reserved names are extracted
	var props={};var key=null;var ref=null;var self=null;var source=null;if(config!=null){if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(/* eslint-disable no-proto */config.__proto__==null||config.__proto__===Object.prototype,/* eslint-enable no-proto */'React.createElement(...): Expected props argument to be a plain object. '+'Properties defined in its prototype chain will be ignored.'):void 0;}if(hasValidRef(config)){ref=config.ref;}if(hasValidKey(config)){key=''+config.key;}self=config.__self===undefined?null:config.__self;source=config.__source===undefined?null:config.__source;// Remaining properties are added to a new props object
	for(propName in config){if(hasOwnProperty.call(config,propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){props[propName]=config[propName];}}}// Children can be more than one argument, and those are transferred onto
	// the newly allocated props object.
	var childrenLength=arguments.length-2;if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+2];}props.children=childArray;}// Resolve default props
	if(type&&type.defaultProps){var defaultProps=type.defaultProps;for(propName in defaultProps){if(props[propName]===undefined){props[propName]=defaultProps[propName];}}}if(process.env.NODE_ENV!=='production'){if(key||ref){if(typeof props.$$typeof==='undefined'||props.$$typeof!==REACT_ELEMENT_TYPE){var displayName=typeof type==='function'?type.displayName||type.name||'Unknown':type;if(key){defineKeyPropWarningGetter(props,displayName);}if(ref){defineRefPropWarningGetter(props,displayName);}}}}return ReactElement(type,key,ref,self,source,ReactCurrentOwner.current,props);};/**
		 * Return a function that produces ReactElements of a given type.
		 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
		 */ReactElement.createFactory=function(type){var factory=ReactElement.createElement.bind(null,type);// Expose the type on the factory and the prototype so that it can be
	// easily accessed on elements. E.g. `<Foo />.type === Foo`.
	// This should not be named `constructor` since this may not be the function
	// that created the element, and it may not even be a constructor.
	// Legacy hook TODO: Warn if this is accessed
	factory.type=type;return factory;};ReactElement.cloneAndReplaceKey=function(oldElement,newKey){var newElement=ReactElement(oldElement.type,newKey,oldElement.ref,oldElement._self,oldElement._source,oldElement._owner,oldElement.props);return newElement;};/**
		 * Clone and return a new ReactElement using element as the starting point.
		 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
		 */ReactElement.cloneElement=function(element,config,children){var propName;// Original props are copied
	var props=_assign({},element.props);// Reserved names are extracted
	var key=element.key;var ref=element.ref;// Self is preserved since the owner is preserved.
	var self=element._self;// Source is preserved since cloneElement is unlikely to be targeted by a
	// transpiler, and the original source is probably a better indicator of the
	// true owner.
	var source=element._source;// Owner will be preserved, unless ref is overridden
	var owner=element._owner;if(config!=null){if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(/* eslint-disable no-proto */config.__proto__==null||config.__proto__===Object.prototype,/* eslint-enable no-proto */'React.cloneElement(...): Expected props argument to be a plain object. '+'Properties defined in its prototype chain will be ignored.'):void 0;}if(hasValidRef(config)){// Silently steal the ref from the parent.
	ref=config.ref;owner=ReactCurrentOwner.current;}if(hasValidKey(config)){key=''+config.key;}// Remaining properties override existing props
	var defaultProps;if(element.type&&element.type.defaultProps){defaultProps=element.type.defaultProps;}for(propName in config){if(hasOwnProperty.call(config,propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){if(config[propName]===undefined&&defaultProps!==undefined){// Resolve default props
	props[propName]=defaultProps[propName];}else{props[propName]=config[propName];}}}}// Children can be more than one argument, and those are transferred onto
	// the newly allocated props object.
	var childrenLength=arguments.length-2;if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+2];}props.children=childArray;}return ReactElement(element.type,key,ref,self,source,owner,props);};/**
		 * Verifies the object is a ReactElement.
		 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
		 * @param {?object} object
		 * @return {boolean} True if `object` is a valid component.
		 * @final
		 */ReactElement.isValidElement=function(object){return(typeof object==='undefined'?'undefined':_typeof(object))==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;};ReactElement.REACT_ELEMENT_TYPE=REACT_ELEMENT_TYPE;module.exports=ReactElement;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 11 *//***/function(module,exports){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ReactCurrentOwner
		 */'use strict';/**
		 * Keeps track of the current owner.
		 *
		 * The current owner is the component who should own any components that are
		 * currently being constructed.
		 */var ReactCurrentOwner={/**
		   * @internal
		   * @type {ReactComponent}
		   */current:null};module.exports=ReactCurrentOwner;/***/},/* 12 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2014-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 */'use strict';var emptyFunction=__webpack_require__(13);/**
		 * Similar to invariant but only logs a warning if the condition is not met.
		 * This can be used to log issues in development environments in critical
		 * paths. Removing the logging code for production environments will keep the
		 * same logic and follow the same code paths.
		 */var warning=emptyFunction;if(process.env.NODE_ENV!=='production'){(function(){var printWarning=function printWarning(format){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var argIndex=0;var message='Warning: '+format.replace(/%s/g,function(){return args[argIndex++];});if(typeof console!=='undefined'){console.error(message);}try{// --- Welcome to debugging React ---
	// This error was thrown as a convenience so that you can use this stack
	// to find the callsite that caused this warning to fire.
	throw new Error(message);}catch(x){}};warning=function warning(condition,format){if(format===undefined){throw new Error('`warning(condition, format, ...args)` requires a warning '+'message argument');}if(format.indexOf('Failed Composite propType: ')===0){return;// Ignore CompositeComponent proptype check.
	}if(!condition){for(var _len2=arguments.length,args=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){args[_key2-2]=arguments[_key2];}printWarning.apply(undefined,[format].concat(args));}};})();}module.exports=warning;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 13 *//***/function(module,exports){"use strict";/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * 
		 */function makeEmptyFunction(arg){return function(){return arg;};}/**
		 * This function accepts and discards inputs; it has no side effects. This is
		 * primarily useful idiomatically for overridable function endpoints which
		 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
		 */var emptyFunction=function emptyFunction(){};emptyFunction.thatReturns=makeEmptyFunction;emptyFunction.thatReturnsFalse=makeEmptyFunction(false);emptyFunction.thatReturnsTrue=makeEmptyFunction(true);emptyFunction.thatReturnsNull=makeEmptyFunction(null);emptyFunction.thatReturnsThis=function(){return this;};emptyFunction.thatReturnsArgument=function(arg){return arg;};module.exports=emptyFunction;/***/},/* 14 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule canDefineProperty
		 */'use strict';var canDefineProperty=false;if(process.env.NODE_ENV!=='production'){try{Object.defineProperty({},'x',{get:function get(){}});canDefineProperty=true;}catch(x){// IE will fail on defineProperty
	}}module.exports=canDefineProperty;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 15 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule traverseAllChildren
		 */'use strict';var _prodInvariant=__webpack_require__(8);var ReactCurrentOwner=__webpack_require__(11);var ReactElement=__webpack_require__(10);var getIteratorFn=__webpack_require__(16);var invariant=__webpack_require__(9);var KeyEscapeUtils=__webpack_require__(17);var warning=__webpack_require__(12);var SEPARATOR='.';var SUBSEPARATOR=':';/**
		 * TODO: Test that a single child and an array with one item have the same key
		 * pattern.
		 */var didWarnAboutMaps=false;/**
		 * Generate a key string that identifies a component within a set.
		 *
		 * @param {*} component A component that could contain a manual key.
		 * @param {number} index Index that is used if a manual key is not provided.
		 * @return {string}
		 */function getComponentKey(component,index){// Do some typechecking here since we call this blindly. We want to ensure
	// that we don't block potential future ES APIs.
	if(component&&(typeof component==='undefined'?'undefined':_typeof(component))==='object'&&component.key!=null){// Explicit key
	return KeyEscapeUtils.escape(component.key);}// Implicit key determined by the index in the set
	return index.toString(36);}/**
		 * @param {?*} children Children tree container.
		 * @param {!string} nameSoFar Name of the key path so far.
		 * @param {!function} callback Callback to invoke with each child found.
		 * @param {?*} traverseContext Used to pass information throughout the traversal
		 * process.
		 * @return {!number} The number of children in this subtree.
		 */function traverseAllChildrenImpl(children,nameSoFar,callback,traverseContext){var type=typeof children==='undefined'?'undefined':_typeof(children);if(type==='undefined'||type==='boolean'){// All of the above are perceived as null.
	children=null;}if(children===null||type==='string'||type==='number'||ReactElement.isValidElement(children)){callback(traverseContext,children,// If it's the only child, treat the name as if it was wrapped in an array
	// so that it's consistent if the number of children grows.
	nameSoFar===''?SEPARATOR+getComponentKey(children,0):nameSoFar);return 1;}var child;var nextName;var subtreeCount=0;// Count of children found in the current subtree.
	var nextNamePrefix=nameSoFar===''?SEPARATOR:nameSoFar+SUBSEPARATOR;if(Array.isArray(children)){for(var i=0;i<children.length;i++){child=children[i];nextName=nextNamePrefix+getComponentKey(child,i);subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);}}else{var iteratorFn=getIteratorFn(children);if(iteratorFn){var iterator=iteratorFn.call(children);var step;if(iteratorFn!==children.entries){var ii=0;while(!(step=iterator.next()).done){child=step.value;nextName=nextNamePrefix+getComponentKey(child,ii++);subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);}}else{if(process.env.NODE_ENV!=='production'){var mapsAsChildrenAddendum='';if(ReactCurrentOwner.current){var mapsAsChildrenOwnerName=ReactCurrentOwner.current.getName();if(mapsAsChildrenOwnerName){mapsAsChildrenAddendum=' Check the render method of `'+mapsAsChildrenOwnerName+'`.';}}process.env.NODE_ENV!=='production'?warning(didWarnAboutMaps,'Using Maps as children is not yet fully supported. It is an '+'experimental feature that might be removed. Convert it to a '+'sequence / iterable of keyed ReactElements instead.%s',mapsAsChildrenAddendum):void 0;didWarnAboutMaps=true;}// Iterator will provide entry [k,v] tuples rather than values.
	while(!(step=iterator.next()).done){var entry=step.value;if(entry){child=entry[1];nextName=nextNamePrefix+KeyEscapeUtils.escape(entry[0])+SUBSEPARATOR+getComponentKey(child,0);subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);}}}}else if(type==='object'){var addendum='';if(process.env.NODE_ENV!=='production'){addendum=' If you meant to render a collection of children, use an array '+'instead or wrap the object using createFragment(object) from the '+'React add-ons.';if(children._isReactElement){addendum=' It looks like you\'re using an element created by a different '+'version of React. Make sure to use only one copy of React.';}if(ReactCurrentOwner.current){var name=ReactCurrentOwner.current.getName();if(name){addendum+=' Check the render method of `'+name+'`.';}}}var childrenString=String(children);true?process.env.NODE_ENV!=='production'?invariant(false,'Objects are not valid as a React child (found: %s).%s',childrenString==='[object Object]'?'object with keys {'+Object.keys(children).join(', ')+'}':childrenString,addendum):_prodInvariant('31',childrenString==='[object Object]'?'object with keys {'+Object.keys(children).join(', ')+'}':childrenString,addendum):void 0;}}return subtreeCount;}/**
		 * Traverses children that are typically specified as `props.children`, but
		 * might also be specified through attributes:
		 *
		 * - `traverseAllChildren(this.props.children, ...)`
		 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
		 *
		 * The `traverseContext` is an optional argument that is passed through the
		 * entire traversal. It can be used to store accumulations or anything else that
		 * the callback might find relevant.
		 *
		 * @param {?*} children Children tree object.
		 * @param {!function} callback To invoke upon traversing each child.
		 * @param {?*} traverseContext Context for traversal.
		 * @return {!number} The number of children in this subtree.
		 */function traverseAllChildren(children,callback,traverseContext){if(children==null){return 0;}return traverseAllChildrenImpl(children,'',callback,traverseContext);}module.exports=traverseAllChildren;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 16 *//***/function(module,exports){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule getIteratorFn
		 * 
		 */'use strict';/* global Symbol */var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';// Before Symbol spec.
	/**
		 * Returns the iterator method function contained on the iterable object.
		 *
		 * Be sure to invoke the function with the iterable as context:
		 *
		 *     var iteratorFn = getIteratorFn(myIterable);
		 *     if (iteratorFn) {
		 *       var iterator = iteratorFn.call(myIterable);
		 *       ...
		 *     }
		 *
		 * @param {?object} maybeIterable
		 * @return {?function}
		 */function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);if(typeof iteratorFn==='function'){return iteratorFn;}}module.exports=getIteratorFn;/***/},/* 17 *//***/function(module,exports){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule KeyEscapeUtils
		 * 
		 */'use strict';/**
		 * Escape and wrap key so it is safe to use as a reactid
		 *
		 * @param {string} key to be escaped.
		 * @return {string} the escaped key.
		 */function escape(key){var escapeRegex=/[=:]/g;var escaperLookup={'=':'=0',':':'=2'};var escapedString=(''+key).replace(escapeRegex,function(match){return escaperLookup[match];});return'$'+escapedString;}/**
		 * Unescape and unwrap key for human-readable display
		 *
		 * @param {string} key to unescape.
		 * @return {string} the unescaped key.
		 */function unescape(key){var unescapeRegex=/(=0|=2)/g;var unescaperLookup={'=0':'=','=2':':'};var keySubstring=key[0]==='.'&&key[1]==='$'?key.substring(2):key.substring(1);return(''+keySubstring).replace(unescapeRegex,function(match){return unescaperLookup[match];});}var KeyEscapeUtils={escape:escape,unescape:unescape};module.exports=KeyEscapeUtils;/***/},/* 18 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ReactComponent
		 */'use strict';var _prodInvariant=__webpack_require__(8);var ReactNoopUpdateQueue=__webpack_require__(19);var canDefineProperty=__webpack_require__(14);var emptyObject=__webpack_require__(20);var invariant=__webpack_require__(9);var warning=__webpack_require__(12);/**
		 * Base class helpers for the updating state of a component.
		 */function ReactComponent(props,context,updater){this.props=props;this.context=context;this.refs=emptyObject;// We initialize the default updater but the real one gets injected by the
	// renderer.
	this.updater=updater||ReactNoopUpdateQueue;}ReactComponent.prototype.isReactComponent={};/**
		 * Sets a subset of the state. Always use this to mutate
		 * state. You should treat `this.state` as immutable.
		 *
		 * There is no guarantee that `this.state` will be immediately updated, so
		 * accessing `this.state` after calling this method may return the old value.
		 *
		 * There is no guarantee that calls to `setState` will run synchronously,
		 * as they may eventually be batched together.  You can provide an optional
		 * callback that will be executed when the call to setState is actually
		 * completed.
		 *
		 * When a function is provided to setState, it will be called at some point in
		 * the future (not synchronously). It will be called with the up to date
		 * component arguments (state, props, context). These values can be different
		 * from this.* because your function may be called after receiveProps but before
		 * shouldComponentUpdate, and this new state, props, and context will not yet be
		 * assigned to this.
		 *
		 * @param {object|function} partialState Next partial state or function to
		 *        produce next partial state to be merged with current state.
		 * @param {?function} callback Called after state is updated.
		 * @final
		 * @protected
		 */ReactComponent.prototype.setState=function(partialState,callback){!((typeof partialState==='undefined'?'undefined':_typeof(partialState))==='object'||typeof partialState==='function'||partialState==null)?process.env.NODE_ENV!=='production'?invariant(false,'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'):_prodInvariant('85'):void 0;this.updater.enqueueSetState(this,partialState);if(callback){this.updater.enqueueCallback(this,callback,'setState');}};/**
		 * Forces an update. This should only be invoked when it is known with
		 * certainty that we are **not** in a DOM transaction.
		 *
		 * You may want to call this when you know that some deeper aspect of the
		 * component's state has changed but `setState` was not called.
		 *
		 * This will not invoke `shouldComponentUpdate`, but it will invoke
		 * `componentWillUpdate` and `componentDidUpdate`.
		 *
		 * @param {?function} callback Called after update is complete.
		 * @final
		 * @protected
		 */ReactComponent.prototype.forceUpdate=function(callback){this.updater.enqueueForceUpdate(this);if(callback){this.updater.enqueueCallback(this,callback,'forceUpdate');}};/**
		 * Deprecated APIs. These APIs used to exist on classic React classes but since
		 * we would like to deprecate them, we're not going to move them over to this
		 * modern base class. Instead, we define a getter that warns if it's accessed.
		 */if(process.env.NODE_ENV!=='production'){var deprecatedAPIs={isMounted:['isMounted','Instead, make sure to clean up subscriptions and pending requests in '+'componentWillUnmount to prevent memory leaks.'],replaceState:['replaceState','Refactor your code to use setState instead (see '+'https://github.com/facebook/react/issues/3236).']};var defineDeprecationWarning=function defineDeprecationWarning(methodName,info){if(canDefineProperty){Object.defineProperty(ReactComponent.prototype,methodName,{get:function get(){process.env.NODE_ENV!=='production'?warning(false,'%s(...) is deprecated in plain JavaScript React classes. %s',info[0],info[1]):void 0;return undefined;}});}};for(var fnName in deprecatedAPIs){if(deprecatedAPIs.hasOwnProperty(fnName)){defineDeprecationWarning(fnName,deprecatedAPIs[fnName]);}}}module.exports=ReactComponent;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 19 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2015-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ReactNoopUpdateQueue
		 */'use strict';var warning=__webpack_require__(12);function warnNoop(publicInstance,callerName){if(process.env.NODE_ENV!=='production'){var constructor=publicInstance.constructor;process.env.NODE_ENV!=='production'?warning(false,'%s(...): Can only update a mounted or mounting component. '+'This usually means you called %s() on an unmounted component. '+'This is a no-op. Please check the code for the %s component.',callerName,callerName,constructor&&(constructor.displayName||constructor.name)||'ReactClass'):void 0;}}/**
		 * This is the abstract API for an update queue.
		 */var ReactNoopUpdateQueue={/**
		   * Checks whether or not this composite component is mounted.
		   * @param {ReactClass} publicInstance The instance we want to test.
		   * @return {boolean} True if mounted, false otherwise.
		   * @protected
		   * @final
		   */isMounted:function isMounted(publicInstance){return false;},/**
		   * Enqueue a callback that will be executed after all the pending updates
		   * have processed.
		   *
		   * @param {ReactClass} publicInstance The instance to use as `this` context.
		   * @param {?function} callback Called after state is updated.
		   * @internal
		   */enqueueCallback:function enqueueCallback(publicInstance,callback){},/**
		   * Forces an update. This should only be invoked when it is known with
		   * certainty that we are **not** in a DOM transaction.
		   *
		   * You may want to call this when you know that some deeper aspect of the
		   * component's state has changed but `setState` was not called.
		   *
		   * This will not invoke `shouldComponentUpdate`, but it will invoke
		   * `componentWillUpdate` and `componentDidUpdate`.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @internal
		   */enqueueForceUpdate:function enqueueForceUpdate(publicInstance){warnNoop(publicInstance,'forceUpdate');},/**
		   * Replaces all of the state. Always use this or `setState` to mutate state.
		   * You should treat `this.state` as immutable.
		   *
		   * There is no guarantee that `this.state` will be immediately updated, so
		   * accessing `this.state` after calling this method may return the old value.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} completeState Next state.
		   * @internal
		   */enqueueReplaceState:function enqueueReplaceState(publicInstance,completeState){warnNoop(publicInstance,'replaceState');},/**
		   * Sets a subset of the state. This only exists because _pendingState is
		   * internal. This provides a merging strategy that is not available to deep
		   * properties which is confusing. TODO: Expose pendingState or don't use it
		   * during the merge.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} partialState Next partial state to be merged with state.
		   * @internal
		   */enqueueSetState:function enqueueSetState(publicInstance,partialState){warnNoop(publicInstance,'setState');}};module.exports=ReactNoopUpdateQueue;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 20 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 */'use strict';var emptyObject={};if(process.env.NODE_ENV!=='production'){Object.freeze(emptyObject);}module.exports=emptyObject;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 21 *//***/function(module,exports,__webpack_require__){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ReactPureComponent
		 */'use strict';var _assign=__webpack_require__(5);var ReactComponent=__webpack_require__(18);var ReactNoopUpdateQueue=__webpack_require__(19);var emptyObject=__webpack_require__(20);/**
		 * Base class helpers for the updating state of a component.
		 */function ReactPureComponent(props,context,updater){// Duplicated from ReactComponent.
	this.props=props;this.context=context;this.refs=emptyObject;// We initialize the default updater but the real one gets injected by the
	// renderer.
	this.updater=updater||ReactNoopUpdateQueue;}function ComponentDummy(){}ComponentDummy.prototype=ReactComponent.prototype;ReactPureComponent.prototype=new ComponentDummy();ReactPureComponent.prototype.constructor=ReactPureComponent;// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype,ReactComponent.prototype);ReactPureComponent.prototype.isPureReactComponent=true;module.exports=ReactPureComponent;/***/},/* 22 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ReactClass
		 */'use strict';var _prodInvariant=__webpack_require__(8),_assign=__webpack_require__(5);var ReactComponent=__webpack_require__(18);var ReactElement=__webpack_require__(10);var ReactPropTypeLocations=__webpack_require__(23);var ReactPropTypeLocationNames=__webpack_require__(25);var ReactNoopUpdateQueue=__webpack_require__(19);var emptyObject=__webpack_require__(20);var invariant=__webpack_require__(9);var keyMirror=__webpack_require__(24);var keyOf=__webpack_require__(26);var warning=__webpack_require__(12);var MIXINS_KEY=keyOf({mixins:null});/**
		 * Policies that describe methods in `ReactClassInterface`.
		 */var SpecPolicy=keyMirror({/**
		   * These methods may be defined only once by the class specification or mixin.
		   */DEFINE_ONCE:null,/**
		   * These methods may be defined by both the class specification and mixins.
		   * Subsequent definitions will be chained. These methods must return void.
		   */DEFINE_MANY:null,/**
		   * These methods are overriding the base class.
		   */OVERRIDE_BASE:null,/**
		   * These methods are similar to DEFINE_MANY, except we assume they return
		   * objects. We try to merge the keys of the return values of all the mixed in
		   * functions. If there is a key conflict we throw.
		   */DEFINE_MANY_MERGED:null});var injectedMixins=[];/**
		 * Composite components are higher-level components that compose other composite
		 * or host components.
		 *
		 * To create a new type of `ReactClass`, pass a specification of
		 * your new class to `React.createClass`. The only requirement of your class
		 * specification is that you implement a `render` method.
		 *
		 *   var MyComponent = React.createClass({
		 *     render: function() {
		 *       return <div>Hello World</div>;
		 *     }
		 *   });
		 *
		 * The class specification supports a specific protocol of methods that have
		 * special meaning (e.g. `render`). See `ReactClassInterface` for
		 * more the comprehensive protocol. Any other properties and methods in the
		 * class specification will be available on the prototype.
		 *
		 * @interface ReactClassInterface
		 * @internal
		 */var ReactClassInterface={/**
		   * An array of Mixin objects to include when defining your component.
		   *
		   * @type {array}
		   * @optional
		   */mixins:SpecPolicy.DEFINE_MANY,/**
		   * An object containing properties and methods that should be defined on
		   * the component's constructor instead of its prototype (static methods).
		   *
		   * @type {object}
		   * @optional
		   */statics:SpecPolicy.DEFINE_MANY,/**
		   * Definition of prop types for this component.
		   *
		   * @type {object}
		   * @optional
		   */propTypes:SpecPolicy.DEFINE_MANY,/**
		   * Definition of context types for this component.
		   *
		   * @type {object}
		   * @optional
		   */contextTypes:SpecPolicy.DEFINE_MANY,/**
		   * Definition of context types this component sets for its children.
		   *
		   * @type {object}
		   * @optional
		   */childContextTypes:SpecPolicy.DEFINE_MANY,// ==== Definition methods ====
	/**
		   * Invoked when the component is mounted. Values in the mapping will be set on
		   * `this.props` if that prop is not specified (i.e. using an `in` check).
		   *
		   * This method is invoked before `getInitialState` and therefore cannot rely
		   * on `this.state` or use `this.setState`.
		   *
		   * @return {object}
		   * @optional
		   */getDefaultProps:SpecPolicy.DEFINE_MANY_MERGED,/**
		   * Invoked once before the component is mounted. The return value will be used
		   * as the initial value of `this.state`.
		   *
		   *   getInitialState: function() {
		   *     return {
		   *       isOn: false,
		   *       fooBaz: new BazFoo()
		   *     }
		   *   }
		   *
		   * @return {object}
		   * @optional
		   */getInitialState:SpecPolicy.DEFINE_MANY_MERGED,/**
		   * @return {object}
		   * @optional
		   */getChildContext:SpecPolicy.DEFINE_MANY_MERGED,/**
		   * Uses props from `this.props` and state from `this.state` to render the
		   * structure of the component.
		   *
		   * No guarantees are made about when or how often this method is invoked, so
		   * it must not have side effects.
		   *
		   *   render: function() {
		   *     var name = this.props.name;
		   *     return <div>Hello, {name}!</div>;
		   *   }
		   *
		   * @return {ReactComponent}
		   * @nosideeffects
		   * @required
		   */render:SpecPolicy.DEFINE_ONCE,// ==== Delegate methods ====
	/**
		   * Invoked when the component is initially created and about to be mounted.
		   * This may have side effects, but any external subscriptions or data created
		   * by this method must be cleaned up in `componentWillUnmount`.
		   *
		   * @optional
		   */componentWillMount:SpecPolicy.DEFINE_MANY,/**
		   * Invoked when the component has been mounted and has a DOM representation.
		   * However, there is no guarantee that the DOM node is in the document.
		   *
		   * Use this as an opportunity to operate on the DOM when the component has
		   * been mounted (initialized and rendered) for the first time.
		   *
		   * @param {DOMElement} rootNode DOM element representing the component.
		   * @optional
		   */componentDidMount:SpecPolicy.DEFINE_MANY,/**
		   * Invoked before the component receives new props.
		   *
		   * Use this as an opportunity to react to a prop transition by updating the
		   * state using `this.setState`. Current props are accessed via `this.props`.
		   *
		   *   componentWillReceiveProps: function(nextProps, nextContext) {
		   *     this.setState({
		   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
		   *     });
		   *   }
		   *
		   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
		   * transition may cause a state change, but the opposite is not true. If you
		   * need it, you are probably looking for `componentWillUpdate`.
		   *
		   * @param {object} nextProps
		   * @optional
		   */componentWillReceiveProps:SpecPolicy.DEFINE_MANY,/**
		   * Invoked while deciding if the component should be updated as a result of
		   * receiving new props, state and/or context.
		   *
		   * Use this as an opportunity to `return false` when you're certain that the
		   * transition to the new props/state/context will not require a component
		   * update.
		   *
		   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
		   *     return !equal(nextProps, this.props) ||
		   *       !equal(nextState, this.state) ||
		   *       !equal(nextContext, this.context);
		   *   }
		   *
		   * @param {object} nextProps
		   * @param {?object} nextState
		   * @param {?object} nextContext
		   * @return {boolean} True if the component should update.
		   * @optional
		   */shouldComponentUpdate:SpecPolicy.DEFINE_ONCE,/**
		   * Invoked when the component is about to update due to a transition from
		   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
		   * and `nextContext`.
		   *
		   * Use this as an opportunity to perform preparation before an update occurs.
		   *
		   * NOTE: You **cannot** use `this.setState()` in this method.
		   *
		   * @param {object} nextProps
		   * @param {?object} nextState
		   * @param {?object} nextContext
		   * @param {ReactReconcileTransaction} transaction
		   * @optional
		   */componentWillUpdate:SpecPolicy.DEFINE_MANY,/**
		   * Invoked when the component's DOM representation has been updated.
		   *
		   * Use this as an opportunity to operate on the DOM when the component has
		   * been updated.
		   *
		   * @param {object} prevProps
		   * @param {?object} prevState
		   * @param {?object} prevContext
		   * @param {DOMElement} rootNode DOM element representing the component.
		   * @optional
		   */componentDidUpdate:SpecPolicy.DEFINE_MANY,/**
		   * Invoked when the component is about to be removed from its parent and have
		   * its DOM representation destroyed.
		   *
		   * Use this as an opportunity to deallocate any external resources.
		   *
		   * NOTE: There is no `componentDidUnmount` since your component will have been
		   * destroyed by that point.
		   *
		   * @optional
		   */componentWillUnmount:SpecPolicy.DEFINE_MANY,// ==== Advanced methods ====
	/**
		   * Updates the component's currently mounted DOM representation.
		   *
		   * By default, this implements React's rendering and reconciliation algorithm.
		   * Sophisticated clients may wish to override this.
		   *
		   * @param {ReactReconcileTransaction} transaction
		   * @internal
		   * @overridable
		   */updateComponent:SpecPolicy.OVERRIDE_BASE};/**
		 * Mapping from class specification keys to special processing functions.
		 *
		 * Although these are declared like instance properties in the specification
		 * when defining classes using `React.createClass`, they are actually static
		 * and are accessible on the constructor instead of the prototype. Despite
		 * being static, they must be defined outside of the "statics" key under
		 * which all other static methods are defined.
		 */var RESERVED_SPEC_KEYS={displayName:function displayName(Constructor,_displayName){Constructor.displayName=_displayName;},mixins:function mixins(Constructor,_mixins){if(_mixins){for(var i=0;i<_mixins.length;i++){mixSpecIntoComponent(Constructor,_mixins[i]);}}},childContextTypes:function childContextTypes(Constructor,_childContextTypes){if(process.env.NODE_ENV!=='production'){validateTypeDef(Constructor,_childContextTypes,ReactPropTypeLocations.childContext);}Constructor.childContextTypes=_assign({},Constructor.childContextTypes,_childContextTypes);},contextTypes:function contextTypes(Constructor,_contextTypes){if(process.env.NODE_ENV!=='production'){validateTypeDef(Constructor,_contextTypes,ReactPropTypeLocations.context);}Constructor.contextTypes=_assign({},Constructor.contextTypes,_contextTypes);},/**
		   * Special case getDefaultProps which should move into statics but requires
		   * automatic merging.
		   */getDefaultProps:function getDefaultProps(Constructor,_getDefaultProps){if(Constructor.getDefaultProps){Constructor.getDefaultProps=createMergedResultFunction(Constructor.getDefaultProps,_getDefaultProps);}else{Constructor.getDefaultProps=_getDefaultProps;}},propTypes:function propTypes(Constructor,_propTypes){if(process.env.NODE_ENV!=='production'){validateTypeDef(Constructor,_propTypes,ReactPropTypeLocations.prop);}Constructor.propTypes=_assign({},Constructor.propTypes,_propTypes);},statics:function statics(Constructor,_statics){mixStaticSpecIntoComponent(Constructor,_statics);},autobind:function autobind(){}};// noop
	function validateTypeDef(Constructor,typeDef,location){for(var propName in typeDef){if(typeDef.hasOwnProperty(propName)){// use a warning instead of an invariant so components
	// don't show up in prod but only in __DEV__
	process.env.NODE_ENV!=='production'?warning(typeof typeDef[propName]==='function','%s: %s type `%s` is invalid; it must be a function, usually from '+'React.PropTypes.',Constructor.displayName||'ReactClass',ReactPropTypeLocationNames[location],propName):void 0;}}}function validateMethodOverride(isAlreadyDefined,name){var specPolicy=ReactClassInterface.hasOwnProperty(name)?ReactClassInterface[name]:null;// Disallow overriding of base class methods unless explicitly allowed.
	if(ReactClassMixin.hasOwnProperty(name)){!(specPolicy===SpecPolicy.OVERRIDE_BASE)?process.env.NODE_ENV!=='production'?invariant(false,'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.',name):_prodInvariant('73',name):void 0;}// Disallow defining methods more than once unless explicitly allowed.
	if(isAlreadyDefined){!(specPolicy===SpecPolicy.DEFINE_MANY||specPolicy===SpecPolicy.DEFINE_MANY_MERGED)?process.env.NODE_ENV!=='production'?invariant(false,'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',name):_prodInvariant('74',name):void 0;}}/**
		 * Mixin helper which handles policy validation and reserved
		 * specification keys when building React classes.
		 */function mixSpecIntoComponent(Constructor,spec){if(!spec){if(process.env.NODE_ENV!=='production'){var typeofSpec=typeof spec==='undefined'?'undefined':_typeof(spec);var isMixinValid=typeofSpec==='object'&&spec!==null;process.env.NODE_ENV!=='production'?warning(isMixinValid,'%s: You\'re attempting to include a mixin that is either null '+'or not an object. Check the mixins included by the component, '+'as well as any mixins they include themselves. '+'Expected object but got %s.',Constructor.displayName||'ReactClass',spec===null?null:typeofSpec):void 0;}return;}!(typeof spec!=='function')?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.'):_prodInvariant('75'):void 0;!!ReactElement.isValidElement(spec)?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.'):_prodInvariant('76'):void 0;var proto=Constructor.prototype;var autoBindPairs=proto.__reactAutoBindPairs;// By handling mixins before any other properties, we ensure the same
	// chaining order is applied to methods with DEFINE_MANY policy, whether
	// mixins are listed before or after these methods in the spec.
	if(spec.hasOwnProperty(MIXINS_KEY)){RESERVED_SPEC_KEYS.mixins(Constructor,spec.mixins);}for(var name in spec){if(!spec.hasOwnProperty(name)){continue;}if(name===MIXINS_KEY){// We have already handled mixins in a special case above.
	continue;}var property=spec[name];var isAlreadyDefined=proto.hasOwnProperty(name);validateMethodOverride(isAlreadyDefined,name);if(RESERVED_SPEC_KEYS.hasOwnProperty(name)){RESERVED_SPEC_KEYS[name](Constructor,property);}else{// Setup methods on prototype:
	// The following member methods should not be automatically bound:
	// 1. Expected ReactClass methods (in the "interface").
	// 2. Overridden methods (that were mixed in).
	var isReactClassMethod=ReactClassInterface.hasOwnProperty(name);var isFunction=typeof property==='function';var shouldAutoBind=isFunction&&!isReactClassMethod&&!isAlreadyDefined&&spec.autobind!==false;if(shouldAutoBind){autoBindPairs.push(name,property);proto[name]=property;}else{if(isAlreadyDefined){var specPolicy=ReactClassInterface[name];// These cases should already be caught by validateMethodOverride.
	!(isReactClassMethod&&(specPolicy===SpecPolicy.DEFINE_MANY_MERGED||specPolicy===SpecPolicy.DEFINE_MANY))?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.',specPolicy,name):_prodInvariant('77',specPolicy,name):void 0;// For methods which are defined more than once, call the existing
	// methods before calling the new property, merging if appropriate.
	if(specPolicy===SpecPolicy.DEFINE_MANY_MERGED){proto[name]=createMergedResultFunction(proto[name],property);}else if(specPolicy===SpecPolicy.DEFINE_MANY){proto[name]=createChainedFunction(proto[name],property);}}else{proto[name]=property;if(process.env.NODE_ENV!=='production'){// Add verbose displayName to the function, which helps when looking
	// at profiling tools.
	if(typeof property==='function'&&spec.displayName){proto[name].displayName=spec.displayName+'_'+name;}}}}}}}function mixStaticSpecIntoComponent(Constructor,statics){if(!statics){return;}for(var name in statics){var property=statics[name];if(!statics.hasOwnProperty(name)){continue;}var isReserved=name in RESERVED_SPEC_KEYS;!!isReserved?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',name):_prodInvariant('78',name):void 0;var isInherited=name in Constructor;!!isInherited?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',name):_prodInvariant('79',name):void 0;Constructor[name]=property;}}/**
		 * Merge two objects, but throw if both contain the same key.
		 *
		 * @param {object} one The first object, which is mutated.
		 * @param {object} two The second object
		 * @return {object} one after it has been mutated to contain everything in two.
		 */function mergeIntoWithNoDuplicateKeys(one,two){!(one&&two&&(typeof one==='undefined'?'undefined':_typeof(one))==='object'&&(typeof two==='undefined'?'undefined':_typeof(two))==='object')?process.env.NODE_ENV!=='production'?invariant(false,'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'):_prodInvariant('80'):void 0;for(var key in two){if(two.hasOwnProperty(key)){!(one[key]===undefined)?process.env.NODE_ENV!=='production'?invariant(false,'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.',key):_prodInvariant('81',key):void 0;one[key]=two[key];}}return one;}/**
		 * Creates a function that invokes two functions and merges their return values.
		 *
		 * @param {function} one Function to invoke first.
		 * @param {function} two Function to invoke second.
		 * @return {function} Function that invokes the two argument functions.
		 * @private
		 */function createMergedResultFunction(one,two){return function mergedResult(){var a=one.apply(this,arguments);var b=two.apply(this,arguments);if(a==null){return b;}else if(b==null){return a;}var c={};mergeIntoWithNoDuplicateKeys(c,a);mergeIntoWithNoDuplicateKeys(c,b);return c;};}/**
		 * Creates a function that invokes two functions and ignores their return vales.
		 *
		 * @param {function} one Function to invoke first.
		 * @param {function} two Function to invoke second.
		 * @return {function} Function that invokes the two argument functions.
		 * @private
		 */function createChainedFunction(one,two){return function chainedFunction(){one.apply(this,arguments);two.apply(this,arguments);};}/**
		 * Binds a method to the component.
		 *
		 * @param {object} component Component whose method is going to be bound.
		 * @param {function} method Method to be bound.
		 * @return {function} The bound method.
		 */function bindAutoBindMethod(component,method){var boundMethod=method.bind(component);if(process.env.NODE_ENV!=='production'){boundMethod.__reactBoundContext=component;boundMethod.__reactBoundMethod=method;boundMethod.__reactBoundArguments=null;var componentName=component.constructor.displayName;var _bind=boundMethod.bind;boundMethod.bind=function(newThis){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}// User is trying to bind() an autobound method; we effectively will
	// ignore the value of "this" that the user is trying to use, so
	// let's warn.
	if(newThis!==component&&newThis!==null){process.env.NODE_ENV!=='production'?warning(false,'bind(): React component methods may only be bound to the '+'component instance. See %s',componentName):void 0;}else if(!args.length){process.env.NODE_ENV!=='production'?warning(false,'bind(): You are binding a component method to the component. '+'React does this for you automatically in a high-performance '+'way, so you can safely remove this call. See %s',componentName):void 0;return boundMethod;}var reboundMethod=_bind.apply(boundMethod,arguments);reboundMethod.__reactBoundContext=component;reboundMethod.__reactBoundMethod=method;reboundMethod.__reactBoundArguments=args;return reboundMethod;};}return boundMethod;}/**
		 * Binds all auto-bound methods in a component.
		 *
		 * @param {object} component Component whose method is going to be bound.
		 */function bindAutoBindMethods(component){var pairs=component.__reactAutoBindPairs;for(var i=0;i<pairs.length;i+=2){var autoBindKey=pairs[i];var method=pairs[i+1];component[autoBindKey]=bindAutoBindMethod(component,method);}}/**
		 * Add more to the ReactClass base class. These are all legacy features and
		 * therefore not already part of the modern ReactComponent.
		 */var ReactClassMixin={/**
		   * TODO: This will be deprecated because state should always keep a consistent
		   * type signature and the only use case for this, is to avoid that.
		   */replaceState:function replaceState(newState,callback){this.updater.enqueueReplaceState(this,newState);if(callback){this.updater.enqueueCallback(this,callback,'replaceState');}},/**
		   * Checks whether or not this composite component is mounted.
		   * @return {boolean} True if mounted, false otherwise.
		   * @protected
		   * @final
		   */isMounted:function isMounted(){return this.updater.isMounted(this);}};var ReactClassComponent=function ReactClassComponent(){};_assign(ReactClassComponent.prototype,ReactComponent.prototype,ReactClassMixin);/**
		 * Module for creating composite components.
		 *
		 * @class ReactClass
		 */var ReactClass={/**
		   * Creates a composite component class given a class specification.
		   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
		   *
		   * @param {object} spec Class specification (which must define `render`).
		   * @return {function} Component constructor function.
		   * @public
		   */createClass:function createClass(spec){var Constructor=function Constructor(props,context,updater){// This constructor gets overridden by mocks. The argument is used
	// by mocks to assert on what gets mounted.
	if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(this instanceof Constructor,'Something is calling a React component directly. Use a factory or '+'JSX instead. See: https://fb.me/react-legacyfactory'):void 0;}// Wire up auto-binding
	if(this.__reactAutoBindPairs.length){bindAutoBindMethods(this);}this.props=props;this.context=context;this.refs=emptyObject;this.updater=updater||ReactNoopUpdateQueue;this.state=null;// ReactClasses doesn't have constructors. Instead, they use the
	// getInitialState and componentWillMount methods for initialization.
	var initialState=this.getInitialState?this.getInitialState():null;if(process.env.NODE_ENV!=='production'){// We allow auto-mocks to proceed as if they're returning null.
	if(initialState===undefined&&this.getInitialState._isMockFunction){// This is probably bad practice. Consider warning here and
	// deprecating this convenience.
	initialState=null;}}!((typeof initialState==='undefined'?'undefined':_typeof(initialState))==='object'&&!Array.isArray(initialState))?process.env.NODE_ENV!=='production'?invariant(false,'%s.getInitialState(): must return an object or null',Constructor.displayName||'ReactCompositeComponent'):_prodInvariant('82',Constructor.displayName||'ReactCompositeComponent'):void 0;this.state=initialState;};Constructor.prototype=new ReactClassComponent();Constructor.prototype.constructor=Constructor;Constructor.prototype.__reactAutoBindPairs=[];injectedMixins.forEach(mixSpecIntoComponent.bind(null,Constructor));mixSpecIntoComponent(Constructor,spec);// Initialize the defaultProps property after all mixins have been merged.
	if(Constructor.getDefaultProps){Constructor.defaultProps=Constructor.getDefaultProps();}if(process.env.NODE_ENV!=='production'){// This is a tag to indicate that the use of these method names is ok,
	// since it's used with createClass. If it's not, then it's likely a
	// mistake so we'll warn you to use the static property, property
	// initializer or constructor respectively.
	if(Constructor.getDefaultProps){Constructor.getDefaultProps.isReactClassApproved={};}if(Constructor.prototype.getInitialState){Constructor.prototype.getInitialState.isReactClassApproved={};}}!Constructor.prototype.render?process.env.NODE_ENV!=='production'?invariant(false,'createClass(...): Class specification must implement a `render` method.'):_prodInvariant('83'):void 0;if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(!Constructor.prototype.componentShouldUpdate,'%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',spec.displayName||'A component'):void 0;process.env.NODE_ENV!=='production'?warning(!Constructor.prototype.componentWillRecieveProps,'%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',spec.displayName||'A component'):void 0;}// Reduce time spent doing lookups by setting these on the prototype.
	for(var methodName in ReactClassInterface){if(!Constructor.prototype[methodName]){Constructor.prototype[methodName]=null;}}return Constructor;},injection:{injectMixin:function injectMixin(mixin){injectedMixins.push(mixin);}}};module.exports=ReactClass;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 23 *//***/function(module,exports,__webpack_require__){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ReactPropTypeLocations
		 */'use strict';var keyMirror=__webpack_require__(24);var ReactPropTypeLocations=keyMirror({prop:null,context:null,childContext:null});module.exports=ReactPropTypeLocations;/***/},/* 24 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @typechecks static-only
		 */'use strict';var invariant=__webpack_require__(9);/**
		 * Constructs an enumeration with keys equal to their value.
		 *
		 * For example:
		 *
		 *   var COLORS = keyMirror({blue: null, red: null});
		 *   var myColor = COLORS.blue;
		 *   var isColorValid = !!COLORS[myColor];
		 *
		 * The last line could not be performed if the values of the generated enum were
		 * not equal to their keys.
		 *
		 *   Input:  {key1: val1, key2: val2}
		 *   Output: {key1: key1, key2: key2}
		 *
		 * @param {object} obj
		 * @return {object}
		 */var keyMirror=function keyMirror(obj){var ret={};var key;!(obj instanceof Object&&!Array.isArray(obj))?process.env.NODE_ENV!=='production'?invariant(false,'keyMirror(...): Argument must be an object.'):invariant(false):void 0;for(key in obj){if(!obj.hasOwnProperty(key)){continue;}ret[key]=key;}return ret;};module.exports=keyMirror;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 25 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ReactPropTypeLocationNames
		 */'use strict';var ReactPropTypeLocationNames={};if(process.env.NODE_ENV!=='production'){ReactPropTypeLocationNames={prop:'prop',context:'context',childContext:'child context'};}module.exports=ReactPropTypeLocationNames;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 26 *//***/function(module,exports){"use strict";/**
		 * Copyright (c) 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 *//**
		 * Allows extraction of a minified key. Let's the build system minify keys
		 * without losing the ability to dynamically use key strings as values
		 * themselves. Pass in an object with a single key/val pair and it will return
		 * you the string key of that single record. Suppose you want to grab the
		 * value for a key 'className' inside of an object. Key/val minification may
		 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
		 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
		 * reuse those resolutions.
		 */var keyOf=function keyOf(oneKeyObj){var key;for(key in oneKeyObj){if(!oneKeyObj.hasOwnProperty(key)){continue;}return key;}return null;};module.exports=keyOf;/***/},/* 27 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ReactDOMFactories
		 */'use strict';var ReactElement=__webpack_require__(10);/**
		 * Create a factory that creates HTML tag elements.
		 *
		 * @private
		 */var createDOMFactory=ReactElement.createFactory;if(process.env.NODE_ENV!=='production'){var ReactElementValidator=__webpack_require__(28);createDOMFactory=ReactElementValidator.createFactory;}/**
		 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
		 * This is also accessible via `React.DOM`.
		 *
		 * @public
		 */var ReactDOMFactories={a:createDOMFactory('a'),abbr:createDOMFactory('abbr'),address:createDOMFactory('address'),area:createDOMFactory('area'),article:createDOMFactory('article'),aside:createDOMFactory('aside'),audio:createDOMFactory('audio'),b:createDOMFactory('b'),base:createDOMFactory('base'),bdi:createDOMFactory('bdi'),bdo:createDOMFactory('bdo'),big:createDOMFactory('big'),blockquote:createDOMFactory('blockquote'),body:createDOMFactory('body'),br:createDOMFactory('br'),button:createDOMFactory('button'),canvas:createDOMFactory('canvas'),caption:createDOMFactory('caption'),cite:createDOMFactory('cite'),code:createDOMFactory('code'),col:createDOMFactory('col'),colgroup:createDOMFactory('colgroup'),data:createDOMFactory('data'),datalist:createDOMFactory('datalist'),dd:createDOMFactory('dd'),del:createDOMFactory('del'),details:createDOMFactory('details'),dfn:createDOMFactory('dfn'),dialog:createDOMFactory('dialog'),div:createDOMFactory('div'),dl:createDOMFactory('dl'),dt:createDOMFactory('dt'),em:createDOMFactory('em'),embed:createDOMFactory('embed'),fieldset:createDOMFactory('fieldset'),figcaption:createDOMFactory('figcaption'),figure:createDOMFactory('figure'),footer:createDOMFactory('footer'),form:createDOMFactory('form'),h1:createDOMFactory('h1'),h2:createDOMFactory('h2'),h3:createDOMFactory('h3'),h4:createDOMFactory('h4'),h5:createDOMFactory('h5'),h6:createDOMFactory('h6'),head:createDOMFactory('head'),header:createDOMFactory('header'),hgroup:createDOMFactory('hgroup'),hr:createDOMFactory('hr'),html:createDOMFactory('html'),i:createDOMFactory('i'),iframe:createDOMFactory('iframe'),img:createDOMFactory('img'),input:createDOMFactory('input'),ins:createDOMFactory('ins'),kbd:createDOMFactory('kbd'),keygen:createDOMFactory('keygen'),label:createDOMFactory('label'),legend:createDOMFactory('legend'),li:createDOMFactory('li'),link:createDOMFactory('link'),main:createDOMFactory('main'),map:createDOMFactory('map'),mark:createDOMFactory('mark'),menu:createDOMFactory('menu'),menuitem:createDOMFactory('menuitem'),meta:createDOMFactory('meta'),meter:createDOMFactory('meter'),nav:createDOMFactory('nav'),noscript:createDOMFactory('noscript'),object:createDOMFactory('object'),ol:createDOMFactory('ol'),optgroup:createDOMFactory('optgroup'),option:createDOMFactory('option'),output:createDOMFactory('output'),p:createDOMFactory('p'),param:createDOMFactory('param'),picture:createDOMFactory('picture'),pre:createDOMFactory('pre'),progress:createDOMFactory('progress'),q:createDOMFactory('q'),rp:createDOMFactory('rp'),rt:createDOMFactory('rt'),ruby:createDOMFactory('ruby'),s:createDOMFactory('s'),samp:createDOMFactory('samp'),script:createDOMFactory('script'),section:createDOMFactory('section'),select:createDOMFactory('select'),small:createDOMFactory('small'),source:createDOMFactory('source'),span:createDOMFactory('span'),strong:createDOMFactory('strong'),style:createDOMFactory('style'),sub:createDOMFactory('sub'),summary:createDOMFactory('summary'),sup:createDOMFactory('sup'),table:createDOMFactory('table'),tbody:createDOMFactory('tbody'),td:createDOMFactory('td'),textarea:createDOMFactory('textarea'),tfoot:createDOMFactory('tfoot'),th:createDOMFactory('th'),thead:createDOMFactory('thead'),time:createDOMFactory('time'),title:createDOMFactory('title'),tr:createDOMFactory('tr'),track:createDOMFactory('track'),u:createDOMFactory('u'),ul:createDOMFactory('ul'),'var':createDOMFactory('var'),video:createDOMFactory('video'),wbr:createDOMFactory('wbr'),// SVG
	circle:createDOMFactory('circle'),clipPath:createDOMFactory('clipPath'),defs:createDOMFactory('defs'),ellipse:createDOMFactory('ellipse'),g:createDOMFactory('g'),image:createDOMFactory('image'),line:createDOMFactory('line'),linearGradient:createDOMFactory('linearGradient'),mask:createDOMFactory('mask'),path:createDOMFactory('path'),pattern:createDOMFactory('pattern'),polygon:createDOMFactory('polygon'),polyline:createDOMFactory('polyline'),radialGradient:createDOMFactory('radialGradient'),rect:createDOMFactory('rect'),stop:createDOMFactory('stop'),svg:createDOMFactory('svg'),text:createDOMFactory('text'),tspan:createDOMFactory('tspan')};module.exports=ReactDOMFactories;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 28 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2014-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ReactElementValidator
		 *//**
		 * ReactElementValidator provides a wrapper around a element factory
		 * which validates the props passed to the element. This is intended to be
		 * used only in DEV and could be replaced by a static type checker for languages
		 * that support it.
		 */'use strict';var ReactCurrentOwner=__webpack_require__(11);var ReactComponentTreeHook=__webpack_require__(29);var ReactElement=__webpack_require__(10);var ReactPropTypeLocations=__webpack_require__(23);var checkReactTypeSpec=__webpack_require__(30);var canDefineProperty=__webpack_require__(14);var getIteratorFn=__webpack_require__(16);var warning=__webpack_require__(12);function getDeclarationErrorAddendum(){if(ReactCurrentOwner.current){var name=ReactCurrentOwner.current.getName();if(name){return' Check the render method of `'+name+'`.';}}return'';}/**
		 * Warn if there's no key explicitly set on dynamic arrays of children or
		 * object keys are not valid. This allows us to keep track of children between
		 * updates.
		 */var ownerHasKeyUseWarning={};function getCurrentComponentErrorInfo(parentType){var info=getDeclarationErrorAddendum();if(!info){var parentName=typeof parentType==='string'?parentType:parentType.displayName||parentType.name;if(parentName){info=' Check the top-level render call using <'+parentName+'>.';}}return info;}/**
		 * Warn if the element doesn't have an explicit key assigned to it.
		 * This element is in an array. The array could grow and shrink or be
		 * reordered. All children that haven't already been validated are required to
		 * have a "key" property assigned to it. Error statuses are cached so a warning
		 * will only be shown once.
		 *
		 * @internal
		 * @param {ReactElement} element Element that requires a key.
		 * @param {*} parentType element's parent's type.
		 */function validateExplicitKey(element,parentType){if(!element._store||element._store.validated||element.key!=null){return;}element._store.validated=true;var memoizer=ownerHasKeyUseWarning.uniqueKey||(ownerHasKeyUseWarning.uniqueKey={});var currentComponentErrorInfo=getCurrentComponentErrorInfo(parentType);if(memoizer[currentComponentErrorInfo]){return;}memoizer[currentComponentErrorInfo]=true;// Usually the current owner is the offender, but if it accepts children as a
	// property, it may be the creator of the child that's responsible for
	// assigning it a key.
	var childOwner='';if(element&&element._owner&&element._owner!==ReactCurrentOwner.current){// Give the component that originally created this child.
	childOwner=' It was passed a child from '+element._owner.getName()+'.';}process.env.NODE_ENV!=='production'?warning(false,'Each child in an array or iterator should have a unique "key" prop.'+'%s%s See https://fb.me/react-warning-keys for more information.%s',currentComponentErrorInfo,childOwner,ReactComponentTreeHook.getCurrentStackAddendum(element)):void 0;}/**
		 * Ensure that every element either is passed in a static location, in an
		 * array with an explicit keys property defined, or in an object literal
		 * with valid key property.
		 *
		 * @internal
		 * @param {ReactNode} node Statically passed child of any type.
		 * @param {*} parentType node's parent's type.
		 */function validateChildKeys(node,parentType){if((typeof node==='undefined'?'undefined':_typeof(node))!=='object'){return;}if(Array.isArray(node)){for(var i=0;i<node.length;i++){var child=node[i];if(ReactElement.isValidElement(child)){validateExplicitKey(child,parentType);}}}else if(ReactElement.isValidElement(node)){// This element was passed in a valid location.
	if(node._store){node._store.validated=true;}}else if(node){var iteratorFn=getIteratorFn(node);// Entry iterators provide implicit keys.
	if(iteratorFn){if(iteratorFn!==node.entries){var iterator=iteratorFn.call(node);var step;while(!(step=iterator.next()).done){if(ReactElement.isValidElement(step.value)){validateExplicitKey(step.value,parentType);}}}}}}/**
		 * Given an element, validate that its props follow the propTypes definition,
		 * provided by the type.
		 *
		 * @param {ReactElement} element
		 */function validatePropTypes(element){var componentClass=element.type;if(typeof componentClass!=='function'){return;}var name=componentClass.displayName||componentClass.name;if(componentClass.propTypes){checkReactTypeSpec(componentClass.propTypes,element.props,ReactPropTypeLocations.prop,name,element,null);}if(typeof componentClass.getDefaultProps==='function'){process.env.NODE_ENV!=='production'?warning(componentClass.getDefaultProps.isReactClassApproved,'getDefaultProps is only used on classic React.createClass '+'definitions. Use a static property named `defaultProps` instead.'):void 0;}}var ReactElementValidator={createElement:function createElement(type,props,children){var validType=typeof type==='string'||typeof type==='function';// We warn in this case but don't throw. We expect the element creation to
	// succeed and there will likely be errors in render.
	if(!validType){process.env.NODE_ENV!=='production'?warning(false,'React.createElement: type should not be null, undefined, boolean, or '+'number. It should be a string (for DOM elements) or a ReactClass '+'(for composite components).%s',getDeclarationErrorAddendum()):void 0;}var element=ReactElement.createElement.apply(this,arguments);// The result can be nullish if a mock or a custom function is used.
	// TODO: Drop this when these are no longer allowed as the type argument.
	if(element==null){return element;}// Skip key warning if the type isn't valid since our key validation logic
	// doesn't expect a non-string/function type and can throw confusing errors.
	// We don't want exception behavior to differ between dev and prod.
	// (Rendering will throw with a helpful message and as soon as the type is
	// fixed, the key warnings will appear.)
	if(validType){for(var i=2;i<arguments.length;i++){validateChildKeys(arguments[i],type);}}validatePropTypes(element);return element;},createFactory:function createFactory(type){var validatedFactory=ReactElementValidator.createElement.bind(null,type);// Legacy hook TODO: Warn if this is accessed
	validatedFactory.type=type;if(process.env.NODE_ENV!=='production'){if(canDefineProperty){Object.defineProperty(validatedFactory,'type',{enumerable:false,get:function get(){process.env.NODE_ENV!=='production'?warning(false,'Factory.type is deprecated. Access the class directly '+'before passing it to createFactory.'):void 0;Object.defineProperty(this,'type',{value:type});return type;}});}}return validatedFactory;},cloneElement:function cloneElement(element,props,children){var newElement=ReactElement.cloneElement.apply(this,arguments);for(var i=2;i<arguments.length;i++){validateChildKeys(arguments[i],newElement.type);}validatePropTypes(newElement);return newElement;}};module.exports=ReactElementValidator;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 29 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2016-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ReactComponentTreeHook
		 */'use strict';var _prodInvariant=__webpack_require__(8);var ReactCurrentOwner=__webpack_require__(11);var invariant=__webpack_require__(9);var warning=__webpack_require__(12);function isNative(fn){// Based on isNative() from Lodash
	var funcToString=Function.prototype.toString;var hasOwnProperty=Object.prototype.hasOwnProperty;var reIsNative=RegExp('^'+funcToString// Take an example native function source for comparison
	.call(hasOwnProperty)// Strip regex characters so we can use it for regex
	.replace(/[\\^$.*+?()[\]{}|]/g,'\\$&')// Remove hasOwnProperty from the template to make it generic
	.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');try{var source=funcToString.call(fn);return reIsNative.test(source);}catch(err){return false;}}var canUseCollections=// Array.from
	typeof Array.from==='function'&&// Map
	typeof Map==='function'&&isNative(Map)&&// Map.prototype.keys
	Map.prototype!=null&&typeof Map.prototype.keys==='function'&&isNative(Map.prototype.keys)&&// Set
	typeof Set==='function'&&isNative(Set)&&// Set.prototype.keys
	Set.prototype!=null&&typeof Set.prototype.keys==='function'&&isNative(Set.prototype.keys);var itemMap;var rootIDSet;var itemByKey;var rootByKey;if(canUseCollections){itemMap=new Map();rootIDSet=new Set();}else{itemByKey={};rootByKey={};}var unmountedIDs=[];// Use non-numeric keys to prevent V8 performance issues:
	// https://github.com/facebook/react/pull/7232
	function getKeyFromID(id){return'.'+id;}function getIDFromKey(key){return parseInt(key.substr(1),10);}function get(id){if(canUseCollections){return itemMap.get(id);}else{var key=getKeyFromID(id);return itemByKey[key];}}function remove(id){if(canUseCollections){itemMap['delete'](id);}else{var key=getKeyFromID(id);delete itemByKey[key];}}function create(id,element,parentID){var item={element:element,parentID:parentID,text:null,childIDs:[],isMounted:false,updateCount:0};if(canUseCollections){itemMap.set(id,item);}else{var key=getKeyFromID(id);itemByKey[key]=item;}}function addRoot(id){if(canUseCollections){rootIDSet.add(id);}else{var key=getKeyFromID(id);rootByKey[key]=true;}}function removeRoot(id){if(canUseCollections){rootIDSet['delete'](id);}else{var key=getKeyFromID(id);delete rootByKey[key];}}function getRegisteredIDs(){if(canUseCollections){return Array.from(itemMap.keys());}else{return Object.keys(itemByKey).map(getIDFromKey);}}function getRootIDs(){if(canUseCollections){return Array.from(rootIDSet.keys());}else{return Object.keys(rootByKey).map(getIDFromKey);}}function purgeDeep(id){var item=get(id);if(item){var childIDs=item.childIDs;remove(id);childIDs.forEach(purgeDeep);}}function describeComponentFrame(name,source,ownerName){return'\n    in '+name+(source?' (at '+source.fileName.replace(/^.*[\\\/]/,'')+':'+source.lineNumber+')':ownerName?' (created by '+ownerName+')':'');}function _getDisplayName(element){if(element==null){return'#empty';}else if(typeof element==='string'||typeof element==='number'){return'#text';}else if(typeof element.type==='string'){return element.type;}else{return element.type.displayName||element.type.name||'Unknown';}}function describeID(id){var name=ReactComponentTreeHook.getDisplayName(id);var element=ReactComponentTreeHook.getElement(id);var ownerID=ReactComponentTreeHook.getOwnerID(id);var ownerName;if(ownerID){ownerName=ReactComponentTreeHook.getDisplayName(ownerID);}process.env.NODE_ENV!=='production'?warning(element,'ReactComponentTreeHook: Missing React element for debugID %s when '+'building stack',id):void 0;return describeComponentFrame(name,element&&element._source,ownerName);}var ReactComponentTreeHook={onSetChildren:function onSetChildren(id,nextChildIDs){var item=get(id);item.childIDs=nextChildIDs;for(var i=0;i<nextChildIDs.length;i++){var nextChildID=nextChildIDs[i];var nextChild=get(nextChildID);!nextChild?process.env.NODE_ENV!=='production'?invariant(false,'Expected hook events to fire for the child before its parent includes it in onSetChildren().'):_prodInvariant('140'):void 0;!(nextChild.childIDs!=null||_typeof(nextChild.element)!=='object'||nextChild.element==null)?process.env.NODE_ENV!=='production'?invariant(false,'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().'):_prodInvariant('141'):void 0;!nextChild.isMounted?process.env.NODE_ENV!=='production'?invariant(false,'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().'):_prodInvariant('71'):void 0;if(nextChild.parentID==null){nextChild.parentID=id;// TODO: This shouldn't be necessary but mounting a new root during in
	// componentWillMount currently causes not-yet-mounted components to
	// be purged from our tree data so their parent ID is missing.
	}!(nextChild.parentID===id)?process.env.NODE_ENV!=='production'?invariant(false,'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).',nextChildID,nextChild.parentID,id):_prodInvariant('142',nextChildID,nextChild.parentID,id):void 0;}},onBeforeMountComponent:function onBeforeMountComponent(id,element,parentID){create(id,element,parentID);},onBeforeUpdateComponent:function onBeforeUpdateComponent(id,element){var item=get(id);if(!item||!item.isMounted){// We may end up here as a result of setState() in componentWillUnmount().
	// In this case, ignore the element.
	return;}item.element=element;},onMountComponent:function onMountComponent(id){var item=get(id);item.isMounted=true;var isRoot=item.parentID===0;if(isRoot){addRoot(id);}},onUpdateComponent:function onUpdateComponent(id){var item=get(id);if(!item||!item.isMounted){// We may end up here as a result of setState() in componentWillUnmount().
	// In this case, ignore the element.
	return;}item.updateCount++;},onUnmountComponent:function onUnmountComponent(id){var item=get(id);if(item){// We need to check if it exists.
	// `item` might not exist if it is inside an error boundary, and a sibling
	// error boundary child threw while mounting. Then this instance never
	// got a chance to mount, but it still gets an unmounting event during
	// the error boundary cleanup.
	item.isMounted=false;var isRoot=item.parentID===0;if(isRoot){removeRoot(id);}}unmountedIDs.push(id);},purgeUnmountedComponents:function purgeUnmountedComponents(){if(ReactComponentTreeHook._preventPurging){// Should only be used for testing.
	return;}for(var i=0;i<unmountedIDs.length;i++){var id=unmountedIDs[i];purgeDeep(id);}unmountedIDs.length=0;},isMounted:function isMounted(id){var item=get(id);return item?item.isMounted:false;},getCurrentStackAddendum:function getCurrentStackAddendum(topElement){var info='';if(topElement){var type=topElement.type;var name=typeof type==='function'?type.displayName||type.name:type;var owner=topElement._owner;info+=describeComponentFrame(name||'Unknown',topElement._source,owner&&owner.getName());}var currentOwner=ReactCurrentOwner.current;var id=currentOwner&&currentOwner._debugID;info+=ReactComponentTreeHook.getStackAddendumByID(id);return info;},getStackAddendumByID:function getStackAddendumByID(id){var info='';while(id){info+=describeID(id);id=ReactComponentTreeHook.getParentID(id);}return info;},getChildIDs:function getChildIDs(id){var item=get(id);return item?item.childIDs:[];},getDisplayName:function getDisplayName(id){var element=ReactComponentTreeHook.getElement(id);if(!element){return null;}return _getDisplayName(element);},getElement:function getElement(id){var item=get(id);return item?item.element:null;},getOwnerID:function getOwnerID(id){var element=ReactComponentTreeHook.getElement(id);if(!element||!element._owner){return null;}return element._owner._debugID;},getParentID:function getParentID(id){var item=get(id);return item?item.parentID:null;},getSource:function getSource(id){var item=get(id);var element=item?item.element:null;var source=element!=null?element._source:null;return source;},getText:function getText(id){var element=ReactComponentTreeHook.getElement(id);if(typeof element==='string'){return element;}else if(typeof element==='number'){return''+element;}else{return null;}},getUpdateCount:function getUpdateCount(id){var item=get(id);return item?item.updateCount:0;},getRegisteredIDs:getRegisteredIDs,getRootIDs:getRootIDs};module.exports=ReactComponentTreeHook;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 30 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule checkReactTypeSpec
		 */'use strict';var _prodInvariant=__webpack_require__(8);var ReactPropTypeLocationNames=__webpack_require__(25);var ReactPropTypesSecret=__webpack_require__(31);var invariant=__webpack_require__(9);var warning=__webpack_require__(12);var ReactComponentTreeHook;if(typeof process!=='undefined'&&process.env&&process.env.NODE_ENV==='test'){// Temporary hack.
	// Inline requires don't work well with Jest:
	// https://github.com/facebook/react/issues/7240
	// Remove the inline requires when we don't need them anymore:
	// https://github.com/facebook/react/pull/7178
	ReactComponentTreeHook=__webpack_require__(29);}var loggedTypeFailures={};/**
		 * Assert that the values match with the type specs.
		 * Error messages are memorized and will only be shown once.
		 *
		 * @param {object} typeSpecs Map of name to a ReactPropType
		 * @param {object} values Runtime values that need to be type-checked
		 * @param {string} location e.g. "prop", "context", "child context"
		 * @param {string} componentName Name of the component for error messages.
		 * @param {?object} element The React element that is being type-checked
		 * @param {?number} debugID The React component instance that is being type-checked
		 * @private
		 */function checkReactTypeSpec(typeSpecs,values,location,componentName,element,debugID){for(var typeSpecName in typeSpecs){if(typeSpecs.hasOwnProperty(typeSpecName)){var error;// Prop type validation may throw. In case they do, we don't want to
	// fail the render phase where it didn't fail before. So we log it.
	// After these have been cleaned up, we'll let them throw.
	try{// This is intentionally an invariant that gets caught. It's the same
	// behavior as without this statement except with a better message.
	!(typeof typeSpecs[typeSpecName]==='function')?process.env.NODE_ENV!=='production'?invariant(false,'%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.',componentName||'React class',ReactPropTypeLocationNames[location],typeSpecName):_prodInvariant('84',componentName||'React class',ReactPropTypeLocationNames[location],typeSpecName):void 0;error=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,ReactPropTypesSecret);}catch(ex){error=ex;}process.env.NODE_ENV!=='production'?warning(!error||error instanceof Error,'%s: type specification of %s `%s` is invalid; the type checker '+'function must return `null` or an `Error` but returned a %s. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).',componentName||'React class',ReactPropTypeLocationNames[location],typeSpecName,typeof error==='undefined'?'undefined':_typeof(error)):void 0;if(error instanceof Error&&!(error.message in loggedTypeFailures)){// Only monitor this failure once because there tends to be a lot of the
	// same error.
	loggedTypeFailures[error.message]=true;var componentStackInfo='';if(process.env.NODE_ENV!=='production'){if(!ReactComponentTreeHook){ReactComponentTreeHook=__webpack_require__(29);}if(debugID!==null){componentStackInfo=ReactComponentTreeHook.getStackAddendumByID(debugID);}else if(element!==null){componentStackInfo=ReactComponentTreeHook.getCurrentStackAddendum(element);}}process.env.NODE_ENV!=='production'?warning(false,'Failed %s type: %s%s',location,error.message,componentStackInfo):void 0;}}}}module.exports=checkReactTypeSpec;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 31 *//***/function(module,exports){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ReactPropTypesSecret
		 */'use strict';var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';module.exports=ReactPropTypesSecret;/***/},/* 32 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ReactPropTypes
		 */'use strict';var ReactElement=__webpack_require__(10);var ReactPropTypeLocationNames=__webpack_require__(25);var ReactPropTypesSecret=__webpack_require__(31);var emptyFunction=__webpack_require__(13);var getIteratorFn=__webpack_require__(16);var warning=__webpack_require__(12);/**
		 * Collection of methods that allow declaration and validation of props that are
		 * supplied to React components. Example usage:
		 *
		 *   var Props = require('ReactPropTypes');
		 *   var MyArticle = React.createClass({
		 *     propTypes: {
		 *       // An optional string prop named "description".
		 *       description: Props.string,
		 *
		 *       // A required enum prop named "category".
		 *       category: Props.oneOf(['News','Photos']).isRequired,
		 *
		 *       // A prop named "dialog" that requires an instance of Dialog.
		 *       dialog: Props.instanceOf(Dialog).isRequired
		 *     },
		 *     render: function() { ... }
		 *   });
		 *
		 * A more formal specification of how these methods are used:
		 *
		 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
		 *   decl := ReactPropTypes.{type}(.isRequired)?
		 *
		 * Each and every declaration produces a function with the same signature. This
		 * allows the creation of custom validation functions. For example:
		 *
		 *  var MyLink = React.createClass({
		 *    propTypes: {
		 *      // An optional string or URI prop named "href".
		 *      href: function(props, propName, componentName) {
		 *        var propValue = props[propName];
		 *        if (propValue != null && typeof propValue !== 'string' &&
		 *            !(propValue instanceof URI)) {
		 *          return new Error(
		 *            'Expected a string or an URI for ' + propName + ' in ' +
		 *            componentName
		 *          );
		 *        }
		 *      }
		 *    },
		 *    render: function() {...}
		 *  });
		 *
		 * @internal
		 */var ANONYMOUS='<<anonymous>>';var ReactPropTypes={array:createPrimitiveTypeChecker('array'),bool:createPrimitiveTypeChecker('boolean'),func:createPrimitiveTypeChecker('function'),number:createPrimitiveTypeChecker('number'),object:createPrimitiveTypeChecker('object'),string:createPrimitiveTypeChecker('string'),symbol:createPrimitiveTypeChecker('symbol'),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker};/**
		 * inlined Object.is polyfill to avoid requiring consumers ship their own
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
		 *//*eslint-disable no-self-compare*/function is(x,y){// SameValue algorithm
	if(x===y){// Steps 1-5, 7-10
	// Steps 6.b-6.e: +0 != -0
	return x!==0||1/x===1/y;}else{// Step 6.a: NaN == NaN
	return x!==x&&y!==y;}}/*eslint-enable no-self-compare*//**
		 * We use an Error-like object for backward compatibility as people may call
		 * PropTypes directly and inspect their output. However we don't use real
		 * Errors anymore. We don't inspect their stack anyway, and creating them
		 * is prohibitively expensive if they are created too often, such as what
		 * happens in oneOfType() for any type before the one that matched.
		 */function PropTypeError(message){this.message=message;this.stack='';}// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype=Error.prototype;function createChainableTypeChecker(validate){if(process.env.NODE_ENV!=='production'){var manualPropTypeCallCache={};}function checkType(isRequired,props,propName,componentName,location,propFullName,secret){componentName=componentName||ANONYMOUS;propFullName=propFullName||propName;if(process.env.NODE_ENV!=='production'){if(secret!==ReactPropTypesSecret&&typeof console!=='undefined'){var cacheKey=componentName+':'+propName;if(!manualPropTypeCallCache[cacheKey]){process.env.NODE_ENV!=='production'?warning(false,'You are manually calling a React.PropTypes validation '+'function for the `%s` prop on `%s`. This is deprecated '+'and will not work in the next major version. You may be '+'seeing this warning due to a third-party PropTypes library. '+'See https://fb.me/react-warning-dont-call-proptypes for details.',propFullName,componentName):void 0;manualPropTypeCallCache[cacheKey]=true;}}}if(props[propName]==null){var locationName=ReactPropTypeLocationNames[location];if(isRequired){return new PropTypeError('Required '+locationName+' `'+propFullName+'` was not specified in '+('`'+componentName+'`.'));}return null;}else{return validate(props,propName,componentName,location,propFullName);}}var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired=checkType.bind(null,true);return chainedCheckType;}function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location,propFullName,secret){var propValue=props[propName];var propType=getPropType(propValue);if(propType!==expectedType){var locationName=ReactPropTypeLocationNames[location];// `propValue` being instance of, say, date/regexp, pass the 'object'
	// check, but we can offer a more precise error message here rather than
	// 'of type `object`'.
	var preciseType=getPreciseType(propValue);return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'));}return null;}return createChainableTypeChecker(validate);}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunction.thatReturns(null));}function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside arrayOf.');}var propValue=props[propName];if(!Array.isArray(propValue)){var locationName=ReactPropTypeLocationNames[location];var propType=getPropType(propValue);return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));}for(var i=0;i<propValue.length;i++){var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']',ReactPropTypesSecret);if(error instanceof Error){return error;}}return null;}return createChainableTypeChecker(validate);}function createElementTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!ReactElement.isValidElement(propValue)){var locationName=ReactPropTypeLocationNames[location];var propType=getPropType(propValue);return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement.'));}return null;}return createChainableTypeChecker(validate);}function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location,propFullName){if(!(props[propName]instanceof expectedClass)){var locationName=ReactPropTypeLocationNames[location];var expectedClassName=expectedClass.name||ANONYMOUS;var actualClassName=getClassName(props[propName]);return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));}return null;}return createChainableTypeChecker(validate);}function createEnumTypeChecker(expectedValues){if(!Array.isArray(expectedValues)){process.env.NODE_ENV!=='production'?warning(false,'Invalid argument supplied to oneOf, expected an instance of array.'):void 0;return emptyFunction.thatReturnsNull;}function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];for(var i=0;i<expectedValues.length;i++){if(is(propValue,expectedValues[i])){return null;}}var locationName=ReactPropTypeLocationNames[location];var valuesString=JSON.stringify(expectedValues);return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of value `'+propValue+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));}return createChainableTypeChecker(validate);}function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside objectOf.');}var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){var locationName=ReactPropTypeLocationNames[location];return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));}for(var key in propValue){if(propValue.hasOwnProperty(key)){var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error instanceof Error){return error;}}}return null;}return createChainableTypeChecker(validate);}function createUnionTypeChecker(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers)){process.env.NODE_ENV!=='production'?warning(false,'Invalid argument supplied to oneOfType, expected an instance of array.'):void 0;return emptyFunction.thatReturnsNull;}function validate(props,propName,componentName,location,propFullName){for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(checker(props,propName,componentName,location,propFullName,ReactPropTypesSecret)==null){return null;}}var locationName=ReactPropTypeLocationNames[location];return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`.'));}return createChainableTypeChecker(validate);}function createNodeChecker(){function validate(props,propName,componentName,location,propFullName){if(!isNode(props[propName])){var locationName=ReactPropTypeLocationNames[location];return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));}return null;}return createChainableTypeChecker(validate);}function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){var locationName=ReactPropTypeLocationNames[location];return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}for(var key in shapeTypes){var checker=shapeTypes[key];if(!checker){continue;}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function isNode(propValue){switch(typeof propValue==='undefined'?'undefined':_typeof(propValue)){case'number':case'string':case'undefined':return true;case'boolean':return!propValue;case'object':if(Array.isArray(propValue)){return propValue.every(isNode);}if(propValue===null||ReactElement.isValidElement(propValue)){return true;}var iteratorFn=getIteratorFn(propValue);if(iteratorFn){var iterator=iteratorFn.call(propValue);var step;if(iteratorFn!==propValue.entries){while(!(step=iterator.next()).done){if(!isNode(step.value)){return false;}}}else{// Iterator will provide entry [k,v] tuples rather than values.
	while(!(step=iterator.next()).done){var entry=step.value;if(entry){if(!isNode(entry[1])){return false;}}}}}else{return false;}return true;default:return false;}}function isSymbol(propType,propValue){// Native Symbol.
	if(propType==='symbol'){return true;}// 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	if(propValue['@@toStringTag']==='Symbol'){return true;}// Fallback for non-spec compliant Symbols which are polyfilled.
	if(typeof Symbol==='function'&&propValue instanceof Symbol){return true;}return false;}// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue){var propType=typeof propValue==='undefined'?'undefined':_typeof(propValue);if(Array.isArray(propValue)){return'array';}if(propValue instanceof RegExp){// Old webkits (at least until Android 4.0) return 'function' rather than
	// 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	// passes PropTypes.object.
	return'object';}if(isSymbol(propType,propValue)){return'symbol';}return propType;}// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue){var propType=getPropType(propValue);if(propType==='object'){if(propValue instanceof Date){return'date';}else if(propValue instanceof RegExp){return'regexp';}}return propType;}// Returns class name of the object, if any.
	function getClassName(propValue){if(!propValue.constructor||!propValue.constructor.name){return ANONYMOUS;}return propValue.constructor.name;}module.exports=ReactPropTypes;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 33 *//***/function(module,exports){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule ReactVersion
		 */'use strict';module.exports='15.3.1';/***/},/* 34 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2013-present, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule onlyChild
		 */'use strict';var _prodInvariant=__webpack_require__(8);var ReactElement=__webpack_require__(10);var invariant=__webpack_require__(9);/**
		 * Returns the first child in a collection of children and verifies that there
		 * is only one child in the collection.
		 *
		 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
		 *
		 * The current implementation of this function assumes that a single child gets
		 * passed without a wrapper, but the purpose of this helper function is to
		 * abstract away the particular structure of children.
		 *
		 * @param {?object} children Child collection structure.
		 * @return {ReactElement} The first and only `ReactElement` contained in the
		 * structure.
		 */function onlyChild(children){!ReactElement.isValidElement(children)?process.env.NODE_ENV!=='production'?invariant(false,'React.Children.only expected to receive a single React element child.'):_prodInvariant('143'):void 0;return children;}module.exports=onlyChild;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 35 *//***/function(module,exports){/**
		 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
		 *
		 * The decorator may be used on classes or methods
		 * ```
		 * @autobind
		 * class FullBound {}
		 *
		 * class PartBound {
		 *   @autobind
		 *   method () {}
		 * }
		 * ```
		 */'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports['default']=autobind;function autobind(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}if(args.length===1){return boundClass.apply(undefined,args);}else{return boundMethod.apply(undefined,args);}}/**
		 * Use boundMethod to bind all methods on the target.prototype
		 */function boundClass(target){// (Using reflect to get all keys including symbols)
	var keys=undefined;// Use Reflect if exists
	if(typeof Reflect!=='undefined'&&typeof Reflect.ownKeys==='function'){keys=Reflect.ownKeys(target.prototype);}else{keys=Object.getOwnPropertyNames(target.prototype);// use symbols if support is provided
	if(typeof Object.getOwnPropertySymbols==='function'){keys=keys.concat(Object.getOwnPropertySymbols(target.prototype));}}keys.forEach(function(key){// Ignore special case target method
	if(key==='constructor'){return;}var descriptor=Object.getOwnPropertyDescriptor(target.prototype,key);// Only methods need binding
	if(typeof descriptor.value==='function'){Object.defineProperty(target.prototype,key,boundMethod(target,key,descriptor));}});return target;}/**
		 * Return a descriptor removing the value and returning a getter
		 * The getter will return a .bind version of the function
		 * and memoize the result against a symbol on the instance
		 */function boundMethod(target,key,descriptor){var fn=descriptor.value;if(typeof fn!=='function'){throw new Error('@autobind decorator can only be applied to methods not: '+(typeof fn==='undefined'?'undefined':_typeof(fn)));}return{configurable:true,get:function get(){if(this===target.prototype||this.hasOwnProperty(key)){return fn;}var boundFn=fn.bind(this);Object.defineProperty(this,key,{value:boundFn,configurable:true,writable:true});return boundFn;}};}module.exports=exports['default'];/***/},/* 36 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);var _performance=__webpack_require__(37);var _performance2=_interopRequireDefault(_performance);var _reactSparklines=__webpack_require__(42);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function Performance(_ref){var state=_ref.state;var toggle=state.toggle;var sparkAverages=state.sparkAverages;var status=state.status;var sparkMax=sparkAverages.length>1?Math.ceil(Math.max.apply(null,sparkAverages)):'';var sparkMin=sparkAverages.length>1?Math.round(Math.min.apply(null,sparkAverages)):'';var sparkAvg=Math.round(sparkAverages[sparkAverages.length-1]*10)/10||0;var action=status.running?'Stop':'Start';return _react2.default.createElement('div',{className:_performance2.default.performance},_react2.default.createElement('div',{className:_performance2.default.label},'Average per minute'),_react2.default.createElement('div',{className:_performance2.default.table},_react2.default.createElement('div',{className:_performance2.default.tight},_react2.default.createElement('div',{className:_performance2.default.performanceHigh},sparkMax),_react2.default.createElement('div',{className:_performance2.default.performanceLow},sparkMin)),_react2.default.createElement('div',{className:_performance2.default.padded},_react2.default.createElement('div',{className:_performance2.default.sparkline},_react2.default.createElement(_reactSparklines.Sparklines,{data:sparkAverages,limit:30,width:175,height:25,margin:5},_react2.default.createElement(_reactSparklines.SparklinesLine,{color:'#98c000',style:{strokeWidth:1,stroke:"#98c000",fill:"none"}}),_react2.default.createElement(_reactSparklines.SparklinesSpots,{style:{fill:"#98c000"}})))),_react2.default.createElement('div',{className:_performance2.default.tightMiddle},_react2.default.createElement('small',null,sparkAvg))),_react2.default.createElement('div',{className:_performance2.default.movedown},_react2.default.createElement('a',{href:'#',className:_performance2.default.btn+' btn btn-primary',onClick:toggle},action)));}exports.default=Performance;module.exports=exports['default'];/***/},/* 37 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
	// load the styles
	var content=__webpack_require__(38);if(typeof content==='string')content=[[module.id,content,'']];// add the styles to the DOM
	var update=__webpack_require__(41)(content,{"sourceMap":true});if(content.locals)module.exports=content.locals;// Hot Module Replacement
	if(false){// When the styles change, update the <style> tags
	if(!content.locals){module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./performance.css",function(){var newContent=require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./performance.css");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
	module.hot.dispose(function(){update();});}/***/},/* 38 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(39)();// imports
	exports.i(__webpack_require__(40),undefined);// module
	exports.push([module.id,".performance__label___3gC23 {\n}\n\n.performance__performance___3EU5p {\n  float: left;\n  width: 35%;\n  padding-right: 12px;\n}\n\n.performance__performanceHigh___2CJcU, .performance__performanceLow___1hw9q {\n  font-size: 11.7px;\n  color: #cccccc;\n  line-height: 1;\n  text-align: right;\n}\n\n.performance__performanceLow___1hw9q {\n  margin-top: 9px;\n}\n\n.performance__btn___2D6TY { padding: 1px 28px; border: none; }\n\n.performance__sparkline___2A0MF {\n  width: 100%;\n  height: 32px;\n}\n\n.performance__sparkline___2A0MF svg {\n  width: 100%;\n}\n\n.performance__table___favRg {\n  display: table;\n  width: 100%;\n}\n\n.performance__cell___2_P7p {\n  display: table-cell;\n  vertical-align: top;\n}\n\n.performance__cell___2_P7p .performance__cellTight___1k6N6 {\n  width: 1%;\n  white-space: nowrap;\n}\n\n.performance__cell___2_P7p .performance__cellPadded___1OwUl {\n  padding: 0 3px;\n}\n\n.performance__cell___2_P7p .performance__cellMiddle___25v3z {\n  vertical-align: middle;\n}\n\n.performance__padded___G8tJH {\n}\n\n.performance__middle___1Z4NF {\n}\n\n.performance__tight___3bSwP {\n}\n\n.performance__tightMiddle___2Now0 {\n}\n\n.performance__btn___2D6TY { padding: 1px 28px; border: none; }\n\n.performance__movedown___GG1fp {\n}\n",""]);// exports
	exports.locals={"label":"performance__label___3gC23 "+__webpack_require__(40).locals["label"]+"","performance":"performance__performance___3EU5p","performanceHigh":"performance__performanceHigh___2CJcU","performanceLow":"performance__performanceLow___1hw9q","btn":"performance__btn___2D6TY","sparkline":"performance__sparkline___2A0MF","table":"performance__table___favRg","cell":"performance__cell___2_P7p","cellTight":"performance__cellTight___1k6N6","cellPadded":"performance__cellPadded___1OwUl","cellMiddle":"performance__cellMiddle___25v3z","padded":"performance__padded___G8tJH performance__cell___2_P7p performance__cellPadded___1OwUl","middle":"performance__middle___1Z4NF performance__cell___2_P7p performance__cellMiddle___25v3z","tight":"performance__tight___3bSwP performance__cell___2_P7p performance__cellTight___1k6N6","tightMiddle":"performance__tightMiddle___2Now0 performance__tight___3bSwP performance__cell___2_P7p performance__cellTight___1k6N6 performance__cellMiddle___25v3z","movedown":"performance__movedown___GG1fp "+__webpack_require__(40).locals["movedown"]+""};/***/},/* 39 *//***/function(module,exports){/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/// css base code, injected by the css-loader
	module.exports=function(){var list=[];// return the list of modules as css string
	list.toString=function toString(){var result=[];for(var i=0;i<this.length;i++){var item=this[i];if(item[2]){result.push("@media "+item[2]+"{"+item[1]+"}");}else{result.push(item[1]);}}return result.join("");};// import a list of modules into the list
	list.i=function(modules,mediaQuery){if(typeof modules==="string")modules=[[null,modules,""]];var alreadyImportedModules={};for(var i=0;i<this.length;i++){var id=this[i][0];if(typeof id==="number")alreadyImportedModules[id]=true;}for(i=0;i<modules.length;i++){var item=modules[i];// skip already imported module
	// this implementation is not 100% perfect for weird media query combinations
	//  when a module is imported multiple times with different media queries.
	//  I hope this will never occur (Hey this way we have smaller bundles)
	if(typeof item[0]!=="number"||!alreadyImportedModules[item[0]]){if(mediaQuery&&!item[2]){item[2]=mediaQuery;}else if(mediaQuery){item[2]="("+item[2]+") and ("+mediaQuery+")";}list.push(item);}}};return list;};/***/},/* 40 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(39)();// imports
	// module
	exports.push([module.id,".shared__label___RImHj { font-size: 11.7px; line-height: 1; margin: 12px 0 4px; }\n.shared__movedown___eN67P { margin-top: 12px; }\n",""]);// exports
	exports.locals={"label":"shared__label___RImHj","movedown":"shared__movedown___eN67P"};/***/},/* 41 *//***/function(module,exports,__webpack_require__){/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/var stylesInDom={},memoize=function memoize(fn){var memo;return function(){if(typeof memo==="undefined")memo=fn.apply(this,arguments);return memo;};},isOldIE=memoize(function(){return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());}),getHeadElement=memoize(function(){return document.head||document.getElementsByTagName("head")[0];}),singletonElement=null,singletonCounter=0,styleElementsInsertedAtTop=[];module.exports=function(list,options){if(false){if((typeof document==='undefined'?'undefined':_typeof(document))!=="object")throw new Error("The style-loader cannot be used in a non-browser environment");}options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if(typeof options.singleton==="undefined")options.singleton=isOldIE();// By default, add <style> tags to the bottom of <head>.
	if(typeof options.insertAt==="undefined")options.insertAt="bottom";var styles=listToStyles(list);addStylesToDom(styles,options);return function update(newList){var mayRemove=[];for(var i=0;i<styles.length;i++){var item=styles[i];var domStyle=stylesInDom[item.id];domStyle.refs--;mayRemove.push(domStyle);}if(newList){var newStyles=listToStyles(newList);addStylesToDom(newStyles,options);}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(domStyle.refs===0){for(var j=0;j<domStyle.parts.length;j++){domStyle.parts[j]();}delete stylesInDom[domStyle.id];}}};};function addStylesToDom(styles,options){for(var i=0;i<styles.length;i++){var item=styles[i];var domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++){domStyle.parts[j](item.parts[j]);}for(;j<item.parts.length;j++){domStyle.parts.push(addStyle(item.parts[j],options));}}else{var parts=[];for(var j=0;j<item.parts.length;j++){parts.push(addStyle(item.parts[j],options));}stylesInDom[item.id]={id:item.id,refs:1,parts:parts};}}}function listToStyles(list){var styles=[];var newStyles={};for(var i=0;i<list.length;i++){var item=list[i];var id=item[0];var css=item[1];var media=item[2];var sourceMap=item[3];var part={css:css,media:media,sourceMap:sourceMap};if(!newStyles[id])styles.push(newStyles[id]={id:id,parts:[part]});else newStyles[id].parts.push(part);}return styles;}function insertStyleElement(options,styleElement){var head=getHeadElement();var lastStyleElementInsertedAtTop=styleElementsInsertedAtTop[styleElementsInsertedAtTop.length-1];if(options.insertAt==="top"){if(!lastStyleElementInsertedAtTop){head.insertBefore(styleElement,head.firstChild);}else if(lastStyleElementInsertedAtTop.nextSibling){head.insertBefore(styleElement,lastStyleElementInsertedAtTop.nextSibling);}else{head.appendChild(styleElement);}styleElementsInsertedAtTop.push(styleElement);}else if(options.insertAt==="bottom"){head.appendChild(styleElement);}else{throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");}}function removeStyleElement(styleElement){styleElement.parentNode.removeChild(styleElement);var idx=styleElementsInsertedAtTop.indexOf(styleElement);if(idx>=0){styleElementsInsertedAtTop.splice(idx,1);}}function createStyleElement(options){var styleElement=document.createElement("style");styleElement.type="text/css";insertStyleElement(options,styleElement);return styleElement;}function createLinkElement(options){var linkElement=document.createElement("link");linkElement.rel="stylesheet";insertStyleElement(options,linkElement);return linkElement;}function addStyle(obj,options){var styleElement,update,remove;if(options.singleton){var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement(options));update=applyToSingletonTag.bind(null,styleElement,styleIndex,false);remove=applyToSingletonTag.bind(null,styleElement,styleIndex,true);}else if(obj.sourceMap&&typeof URL==="function"&&typeof URL.createObjectURL==="function"&&typeof URL.revokeObjectURL==="function"&&typeof Blob==="function"&&typeof btoa==="function"){styleElement=createLinkElement(options);update=updateLink.bind(null,styleElement);remove=function remove(){removeStyleElement(styleElement);if(styleElement.href)URL.revokeObjectURL(styleElement.href);};}else{styleElement=createStyleElement(options);update=applyToTag.bind(null,styleElement);remove=function remove(){removeStyleElement(styleElement);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj);}else{remove();}};}var replaceText=function(){var textStore=[];return function(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet){styleElement.styleSheet.cssText=replaceText(index,css);}else{var cssNode=document.createTextNode(css);var childNodes=styleElement.childNodes;if(childNodes[index])styleElement.removeChild(childNodes[index]);if(childNodes.length){styleElement.insertBefore(cssNode,childNodes[index]);}else{styleElement.appendChild(cssNode);}}}function applyToTag(styleElement,obj){var css=obj.css;var media=obj.media;if(media){styleElement.setAttribute("media",media);}if(styleElement.styleSheet){styleElement.styleSheet.cssText=css;}else{while(styleElement.firstChild){styleElement.removeChild(styleElement.firstChild);}styleElement.appendChild(document.createTextNode(css));}}function updateLink(linkElement,obj){var css=obj.css;var sourceMap=obj.sourceMap;if(sourceMap){// http://stackoverflow.com/a/26603875
	css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */";}var blob=new Blob([css],{type:"text/css"});var oldSrc=linkElement.href;linkElement.href=URL.createObjectURL(blob);if(oldSrc)URL.revokeObjectURL(oldSrc);}/***/},/* 42 *//***/function(module,exports,__webpack_require__){(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports=factory(__webpack_require__(2));else if(typeof define==='function'&&define.amd)define(["react"],factory);else if((typeof exports==='undefined'?'undefined':_typeof(exports))==='object')exports["ReactSparklines"]=factory(require("react"));else root["ReactSparklines"]=factory(root["React"]);})(this,function(__WEBPACK_EXTERNAL_MODULE_0__){return(/******/function(modules){// webpackBootstrap
	/******/// The module cache
	/******/var installedModules={};/******/// The require function
	/******/function __webpack_require__(moduleId){/******/// Check if module is in cache
	/******/if(installedModules[moduleId])/******/return installedModules[moduleId].exports;/******/// Create a new module (and put it into the cache)
	/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/// Execute the module function
	/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/// Flag the module as loaded
	/******/module.l=true;/******/// Return the exports of the module
	/******/return module.exports;/******/}/******/// expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m=modules;/******/// expose the module cache
	/******/__webpack_require__.c=installedModules;/******/// __webpack_public_path__
	/******/__webpack_require__.p="/";/******/// Load entry module and return exports
	/******/return __webpack_require__(__webpack_require__.s=21);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_0__;/***/},/* 1 *//***/function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(data){return data.reduce(function(a,b){return a+b;})/data.length;};/***/},/* 2 *//***/function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(data){return Math.min.apply(Math,data);};/***/},/* 3 *//***/function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(data){return Math.max.apply(Math,data);};/***/},/* 4 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _mean=__webpack_require__(1);var _mean2=_interopRequireDefault(_mean);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(data){var dataMean=(0,_mean2.default)(data);var sqDiff=data.map(function(n){return Math.pow(n-dataMean,2);});var avgSqDiff=(0,_mean2.default)(sqDiff);return Math.sqrt(avgSqDiff);};/***/},/* 5 *//***/function(module,exports,__webpack_require__){'use strict';module.exports=__webpack_require__(6);/***/},/* 6 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.SparklinesNormalBand=exports.SparklinesReferenceLine=exports.SparklinesSpots=exports.SparklinesBars=exports.SparklinesCurve=exports.SparklinesLine=exports.Sparklines=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _SparklinesLine=__webpack_require__(9);var _SparklinesLine2=_interopRequireDefault(_SparklinesLine);var _SparklinesCurve=__webpack_require__(8);var _SparklinesCurve2=_interopRequireDefault(_SparklinesCurve);var _SparklinesBars=__webpack_require__(7);var _SparklinesBars2=_interopRequireDefault(_SparklinesBars);var _SparklinesSpots=__webpack_require__(12);var _SparklinesSpots2=_interopRequireDefault(_SparklinesSpots);var _SparklinesReferenceLine=__webpack_require__(11);var _SparklinesReferenceLine2=_interopRequireDefault(_SparklinesReferenceLine);var _SparklinesNormalBand=__webpack_require__(10);var _SparklinesNormalBand2=_interopRequireDefault(_SparklinesNormalBand);var _dataToPoints=__webpack_require__(13);var _dataToPoints2=_interopRequireDefault(_dataToPoints);var _reactAddonsShallowCompare=__webpack_require__(19);var _reactAddonsShallowCompare2=_interopRequireDefault(_reactAddonsShallowCompare);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Sparklines=function(_React$Component){_inherits(Sparklines,_React$Component);function Sparklines(props){_classCallCheck(this,Sparklines);return _possibleConstructorReturn(this,Object.getPrototypeOf(Sparklines).call(this,props));}_createClass(Sparklines,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps){return(0,_reactAddonsShallowCompare2.default)(this,nextProps);}},{key:'render',value:function render(){var _props=this.props;var data=_props.data;var limit=_props.limit;var width=_props.width;var height=_props.height;var svgWidth=_props.svgWidth;var svgHeight=_props.svgHeight;var preserveAspectRatio=_props.preserveAspectRatio;var margin=_props.margin;var style=_props.style;var max=_props.max;var min=_props.min;if(data.length===0)return null;var points=(0,_dataToPoints2.default)({data:data,limit:limit,width:width,height:height,margin:margin,max:max,min:min});var svgOpts={style:style,viewBox:'0 0 '+width+' '+height,preserveAspectRatio:preserveAspectRatio};if(svgWidth>0)svgOpts.width=svgWidth;if(svgHeight>0)svgOpts.height=svgHeight;return _react2.default.createElement('svg',svgOpts,_react2.default.Children.map(this.props.children,function(child){return _react2.default.cloneElement(child,{points:points,width:width,height:height,margin:margin});}));}}]);return Sparklines;}(_react2.default.Component);Sparklines.propTypes={data:_react2.default.PropTypes.array,limit:_react2.default.PropTypes.number,width:_react2.default.PropTypes.number,height:_react2.default.PropTypes.number,svgWidth:_react2.default.PropTypes.number,svgHeight:_react2.default.PropTypes.number,preserveAspectRatio:_react2.default.PropTypes.string,margin:_react2.default.PropTypes.number,style:_react2.default.PropTypes.object,min:_react2.default.PropTypes.number,max:_react2.default.PropTypes.number};Sparklines.defaultProps={data:[],width:240,height:60,//Scale the graphic content of the given element non-uniformly if necessary such that the element's bounding box exactly matches the viewport rectangle.
	preserveAspectRatio:'none',//https://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
	margin:2};exports.Sparklines=Sparklines;exports.SparklinesLine=_SparklinesLine2.default;exports.SparklinesCurve=_SparklinesCurve2.default;exports.SparklinesBars=_SparklinesBars2.default;exports.SparklinesSpots=_SparklinesSpots2.default;exports.SparklinesReferenceLine=_SparklinesReferenceLine2.default;exports.SparklinesNormalBand=_SparklinesNormalBand2.default;/***/},/* 7 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SparklinesBars=function(_React$Component){_inherits(SparklinesBars,_React$Component);function SparklinesBars(){_classCallCheck(this,SparklinesBars);return _possibleConstructorReturn(this,Object.getPrototypeOf(SparklinesBars).apply(this,arguments));}_createClass(SparklinesBars,[{key:'render',value:function render(){var _props=this.props;var points=_props.points;var height=_props.height;var style=_props.style;var barWidth=_props.barWidth;var strokeWidth=1*(style&&style.strokeWidth||0);var width=barWidth||(points&&points.length>=2?Math.ceil(Math.max(0,points[1].x-points[0].x-strokeWidth)):0);return _react2.default.createElement('g',null,points.map(function(p,i){return _react2.default.createElement('rect',{key:i,x:Math.ceil(p.x-strokeWidth*i),y:Math.ceil(p.y),width:Math.ceil(width),height:Math.ceil(Math.max(0,height-p.y)),style:style});}));}}]);return SparklinesBars;}(_react2.default.Component);SparklinesBars.propTypes={points:_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),height:_react2.default.PropTypes.number,style:_react2.default.PropTypes.object,barWidth:_react2.default.PropTypes.number};SparklinesBars.defaultProps={style:{fill:'slategray'}};exports.default=SparklinesBars;/***/},/* 8 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SparklinesCurve=function(_React$Component){_inherits(SparklinesCurve,_React$Component);function SparklinesCurve(){_classCallCheck(this,SparklinesCurve);return _possibleConstructorReturn(this,Object.getPrototypeOf(SparklinesCurve).apply(this,arguments));}_createClass(SparklinesCurve,[{key:"render",value:function render(){var _props=this.props;var points=_props.points;var width=_props.width;var height=_props.height;var margin=_props.margin;var color=_props.color;var style=_props.style;var _props$divisor=_props.divisor;var divisor=_props$divisor===undefined?0.25:_props$divisor;var prev=void 0;var curve=function curve(p){var res=void 0;if(!prev){res=[p.x,p.y];}else{var len=(p.x-prev.x)*divisor;res=["C",//x1
	prev.x+len,//y1
	prev.y,//x2,
	p.x-len,//y2,
	p.y,//x,
	p.x,//y
	p.y];}prev=p;return res;};var linePoints=points.map(function(p){return curve(p);}).reduce(function(a,b){return a.concat(b);});var closePolyPoints=["L"+points[points.length-1].x,height-margin,margin,height-margin,margin,points[0].y];var fillPoints=linePoints.concat(closePolyPoints);var lineStyle={stroke:color||style.stroke||'slategray',strokeWidth:style.strokeWidth||'1',strokeLinejoin:style.strokeLinejoin||'round',strokeLinecap:style.strokeLinecap||'round',fill:'none'};var fillStyle={stroke:style.stroke||'none',strokeWidth:'0',fillOpacity:style.fillOpacity||'.1',fill:style.fill||color||'slategray'};return _react2.default.createElement("g",null,_react2.default.createElement("path",{d:"M"+fillPoints.join(' '),style:fillStyle}),_react2.default.createElement("path",{d:"M"+linePoints.join(' '),style:lineStyle}));}}]);return SparklinesCurve;}(_react2.default.Component);SparklinesCurve.propTypes={color:_react2.default.PropTypes.string,style:_react2.default.PropTypes.object};SparklinesCurve.defaultProps={style:{}};exports.default=SparklinesCurve;/***/},/* 9 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SparklinesLine=function(_React$Component){_inherits(SparklinesLine,_React$Component);function SparklinesLine(){_classCallCheck(this,SparklinesLine);return _possibleConstructorReturn(this,Object.getPrototypeOf(SparklinesLine).apply(this,arguments));}_createClass(SparklinesLine,[{key:'render',value:function render(){var _props=this.props;var points=_props.points;var width=_props.width;var height=_props.height;var margin=_props.margin;var color=_props.color;var style=_props.style;var linePoints=points.map(function(p){return[p.x,p.y];}).reduce(function(a,b){return a.concat(b);});var closePolyPoints=[points[points.length-1].x,height-margin,margin,height-margin,margin,points[0].y];var fillPoints=linePoints.concat(closePolyPoints);var lineStyle={stroke:color||style.stroke||'slategray',strokeWidth:style.strokeWidth||'1',strokeLinejoin:style.strokeLinejoin||'round',strokeLinecap:style.strokeLinecap||'round',fill:'none'};var fillStyle={stroke:style.stroke||'none',strokeWidth:'0',fillOpacity:style.fillOpacity||'.1',fill:style.fill||color||'slategray'};return _react2.default.createElement('g',null,_react2.default.createElement('polyline',{points:fillPoints.join(' '),style:fillStyle}),_react2.default.createElement('polyline',{points:linePoints.join(' '),style:lineStyle}));}}]);return SparklinesLine;}(_react2.default.Component);SparklinesLine.propTypes={color:_react2.default.PropTypes.string,style:_react2.default.PropTypes.object};SparklinesLine.defaultProps={style:{}};exports.default=SparklinesLine;/***/},/* 10 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _mean=__webpack_require__(1);var _mean2=_interopRequireDefault(_mean);var _stdev=__webpack_require__(4);var _stdev2=_interopRequireDefault(_stdev);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SparklinesNormalBand=function(_React$Component){_inherits(SparklinesNormalBand,_React$Component);function SparklinesNormalBand(){_classCallCheck(this,SparklinesNormalBand);return _possibleConstructorReturn(this,Object.getPrototypeOf(SparklinesNormalBand).apply(this,arguments));}_createClass(SparklinesNormalBand,[{key:'render',value:function render(){var _props=this.props;var points=_props.points;var margin=_props.margin;var style=_props.style;var ypoints=points.map(function(p){return p.y;});var dataMean=(0,_mean2.default)(ypoints);var dataStdev=(0,_stdev2.default)(ypoints);return _react2.default.createElement('rect',{x:points[0].x,y:dataMean-dataStdev+margin,width:points[points.length-1].x-points[0].x,height:_stdev2.default*2,style:style});}}]);return SparklinesNormalBand;}(_react2.default.Component);SparklinesNormalBand.propTypes={style:_react2.default.PropTypes.object};SparklinesNormalBand.defaultProps={style:{fill:'red',fillOpacity:.1}};exports.default=SparklinesNormalBand;/***/},/* 11 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _dataProcessing=__webpack_require__(14);var dataProcessing=_interopRequireWildcard(_dataProcessing);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SparklinesReferenceLine=function(_React$Component){_inherits(SparklinesReferenceLine,_React$Component);function SparklinesReferenceLine(){_classCallCheck(this,SparklinesReferenceLine);return _possibleConstructorReturn(this,Object.getPrototypeOf(SparklinesReferenceLine).apply(this,arguments));}_createClass(SparklinesReferenceLine,[{key:'render',value:function render(){var _props=this.props;var points=_props.points;var margin=_props.margin;var type=_props.type;var style=_props.style;var value=_props.value;var ypoints=points.map(function(p){return p.y;});var y=type=='custom'?value:dataProcessing[type](ypoints);return _react2.default.createElement('line',{x1:points[0].x,y1:y+margin,x2:points[points.length-1].x,y2:y+margin,style:style});}}]);return SparklinesReferenceLine;}(_react2.default.Component);SparklinesReferenceLine.propTypes={type:_react2.default.PropTypes.oneOf(['max','min','mean','avg','median','custom']),value:_react2.default.PropTypes.number,style:_react2.default.PropTypes.object};SparklinesReferenceLine.defaultProps={type:'mean',style:{stroke:'red',strokeOpacity:.75,strokeDasharray:'2, 2'}};exports.default=SparklinesReferenceLine;/***/},/* 12 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SparklinesSpots=function(_React$Component){_inherits(SparklinesSpots,_React$Component);function SparklinesSpots(){_classCallCheck(this,SparklinesSpots);return _possibleConstructorReturn(this,Object.getPrototypeOf(SparklinesSpots).apply(this,arguments));}_createClass(SparklinesSpots,[{key:'lastDirection',value:function lastDirection(points){Math.sign=Math.sign||function(x){return x>0?1:-1;};return points.length<2?0:Math.sign(points[points.length-2].y-points[points.length-1].y);}},{key:'render',value:function render(){var _props=this.props;var points=_props.points;var width=_props.width;var height=_props.height;var size=_props.size;var style=_props.style;var spotColors=_props.spotColors;var startSpot=_react2.default.createElement('circle',{cx:points[0].x,cy:points[0].y,r:size,style:style});var endSpot=_react2.default.createElement('circle',{cx:points[points.length-1].x,cy:points[points.length-1].y,r:size,style:style||{fill:spotColors[this.lastDirection(points)]}});return _react2.default.createElement('g',null,style&&startSpot,endSpot);}}]);return SparklinesSpots;}(_react2.default.Component);SparklinesSpots.propTypes={size:_react2.default.PropTypes.number,style:_react2.default.PropTypes.object,spotColors:_react2.default.PropTypes.object};SparklinesSpots.defaultProps={size:2,spotColors:{'-1':'red','0':'black','1':'green'}};exports.default=SparklinesSpots;/***/},/* 13 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _min=__webpack_require__(2);var _min2=_interopRequireDefault(_min);var _max=__webpack_require__(3);var _max2=_interopRequireDefault(_max);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(_ref){var data=_ref.data;var limit=_ref.limit;var _ref$width=_ref.width;var width=_ref$width===undefined?1:_ref$width;var _ref$height=_ref.height;var height=_ref$height===undefined?1:_ref$height;var _ref$margin=_ref.margin;var margin=_ref$margin===undefined?0:_ref$margin;var _ref$max=_ref.max;var max=_ref$max===undefined?(0,_max2.default)(data):_ref$max;var _ref$min=_ref.min;var min=_ref$min===undefined?(0,_min2.default)(data):_ref$min;var len=data.length;if(limit&&limit<len){data=data.slice(len-limit);}var vfactor=(height-margin*2)/(max-min||2);var hfactor=(width-margin*2)/((limit||len)-(len>1?1:0));return data.map(function(d,i){return{x:i*hfactor+margin,y:(max===min?1:max-d)*vfactor+margin};});};/***/},/* 14 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.variance=exports.stdev=exports.median=exports.midRange=exports.avg=exports.mean=exports.max=exports.min=undefined;var _min2=__webpack_require__(2);var _min3=_interopRequireDefault(_min2);var _mean2=__webpack_require__(1);var _mean3=_interopRequireDefault(_mean2);var _midRange2=__webpack_require__(16);var _midRange3=_interopRequireDefault(_midRange2);var _median2=__webpack_require__(15);var _median3=_interopRequireDefault(_median2);var _stdev2=__webpack_require__(4);var _stdev3=_interopRequireDefault(_stdev2);var _variance2=__webpack_require__(17);var _variance3=_interopRequireDefault(_variance2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.min=_min3.default;exports.max=_min3.default;exports.mean=_mean3.default;exports.avg=_mean3.default;exports.midRange=_midRange3.default;exports.median=_median3.default;exports.stdev=_stdev3.default;exports.variance=_variance3.default;/***/},/* 15 *//***/function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(data){return data.sort(function(a,b){return a-b;})[Math.floor(data.length/2)];};/***/},/* 16 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _min=__webpack_require__(2);var _min2=_interopRequireDefault(_min);var _max=__webpack_require__(3);var _max2=_interopRequireDefault(_max);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(data){return(0,_max2.default)(data)-(0,_min2.default)(data)/2;};/***/},/* 17 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _mean=__webpack_require__(1);var _mean2=_interopRequireDefault(_mean);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(data){var dataMean=(0,_mean2.default)(data);var sq=data.map(function(n){return Math.pow(n-dataMean,2);});return(0,_mean2.default)(sq);};/***/},/* 18 *//***/function(module,exports){/**
			 * Copyright (c) 2013-present, Facebook, Inc.
			 * All rights reserved.
			 *
			 * This source code is licensed under the BSD-style license found in the
			 * LICENSE file in the root directory of this source tree. An additional grant
			 * of patent rights can be found in the PATENTS file in the same directory.
			 *
			 * @typechecks
			 * 
			 *//*eslint-disable no-self-compare */'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty;/**
			 * inlined Object.is polyfill to avoid requiring consumers ship their own
			 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
			 */function is(x,y){// SameValue algorithm
	if(x===y){// Steps 1-5, 7-10
	// Steps 6.b-6.e: +0 != -0
	return x!==0||1/x===1/y;}else{// Step 6.a: NaN == NaN
	return x!==x&&y!==y;}}/**
			 * Performs equality by iterating through keys on an object and returning false
			 * when any key has values which are not strictly equal between the arguments.
			 * Returns true when the values of all keys are strictly equal.
			 */function shallowEqual(objA,objB){if(is(objA,objB)){return true;}if((typeof objA==='undefined'?'undefined':_typeof(objA))!=='object'||objA===null||(typeof objB==='undefined'?'undefined':_typeof(objB))!=='object'||objB===null){return false;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;}// Test for A's keys different from B.
	for(var i=0;i<keysA.length;i++){if(!hasOwnProperty.call(objB,keysA[i])||!is(objA[keysA[i]],objB[keysA[i]])){return false;}}return true;}module.exports=shallowEqual;/***/},/* 19 *//***/function(module,exports,__webpack_require__){module.exports=__webpack_require__(20);/***/},/* 20 *//***/function(module,exports,__webpack_require__){/**
			 * Copyright 2013-present, Facebook, Inc.
			 * All rights reserved.
			 *
			 * This source code is licensed under the BSD-style license found in the
			 * LICENSE file in the root directory of this source tree. An additional grant
			 * of patent rights can be found in the PATENTS file in the same directory.
			 *
			* @providesModule shallowCompare
			*/'use strict';var shallowEqual=__webpack_require__(18);/**
			 * Does a shallow comparison for props and state.
			 * See ReactComponentWithPureRenderMixin
			 */function shallowCompare(instance,nextProps,nextState){return!shallowEqual(instance.props,nextProps)||!shallowEqual(instance.state,nextState);}module.exports=shallowCompare;/***/},/* 21 *//***/function(module,exports,__webpack_require__){module.exports=__webpack_require__(5);/***/}/******/]));});;/***/},/* 43 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);var _progress=__webpack_require__(44);var _progress2=_interopRequireDefault(_progress);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function sum(vals){return vals.reduce(function(a,b){return a+b;});}function Progress(_ref){var state=_ref.state;var status=state.status;var processedPercent=state.processedPercent;var processedVals=state.processedVals;var sparkAverages=state.sparkAverages;var errAvg=0;var errPercent=void 0;var timeLeft=void 0;if(typeof status.processed!=='undefined'){errAvg=sum(processedVals)/processedVals.length;errPercent=Math.round(status.errored/status.processed*10)/10*100||null;if(sparkAverages.length>1){timeLeft=Math.ceil(status.queue_size/(sum(sparkAverages)/sparkAverages.length));}}return _react2.default.createElement('div',{className:_progress2.default.root},_react2.default.createElement('div',{className:_progress2.default.progress},_react2.default.createElement('div',{className:_progress2.default.key},_react2.default.createElement('ul',null,_react2.default.createElement('li',{className:_progress2.default.keyQueued},'Queued'),_react2.default.createElement('li',{className:_progress2.default.keyProcessed},'Processed'),_react2.default.createElement('li',{className:_progress2.default.keyAverage},'Average'))),_react2.default.createElement('div',{className:_progress2.default.graph},_react2.default.createElement('div',{className:_progress2.default.processed,style:{width:processedPercent+'%'}}),_react2.default.createElement('div',{className:_progress2.default.average,style:{left:errAvg+'%'}}),_react2.default.createElement('div',{className:_progress2.default.labelProcessed},status.processed),_react2.default.createElement('div',{className:_progress2.default.labelQueued},status.queue_size)),_react2.default.createElement('div',{className:_progress2.default.movedown},status.errored>0&&errPercent?_react2.default.createElement('span',null,'Errored: ',status.errored,' ',_react2.default.createElement('span',{className:_progress2.default.meta},'(',errPercent,'%)')):'',' ',status.processed&&timeLeft?_react2.default.createElement('span',{className:_progress2.default.indent},'Est. Completion: ',timeLeft,' seconds'):'')));}exports.default=Progress;module.exports=exports['default'];/***/},/* 44 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
	// load the styles
	var content=__webpack_require__(45);if(typeof content==='string')content=[[module.id,content,'']];// add the styles to the DOM
	var update=__webpack_require__(41)(content,{"sourceMap":true});if(content.locals)module.exports=content.locals;// Hot Module Replacement
	if(false){// When the styles change, update the <style> tags
	if(!content.locals){module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./progress.css",function(){var newContent=require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./progress.css");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
	module.hot.dispose(function(){update();});}/***/},/* 45 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(39)();// imports
	exports.i(__webpack_require__(40),undefined);// module
	exports.push([module.id,".progress__root___edNUS {\n  float: left;\n  width: 65%;\n  padding-left: 12px;\n  text-align: right;\n}\n\n.progress__progress___C4L2X {\n  position: relative;\n}\n\n.progress__key___1Tajm {\n  display: block;\n  zoom: 1;\n}\n\n.progress__key___1Tajm::before, .progress__key___1Tajm::after {\n  display: table;\n  line-height: 0;\n  content: \"\";\n}\n\n.progress__key___1Tajm::after {\n  clear: both;\n}\n\n.progress__key___1Tajm ul {\n  display: block;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  float: right;\n}\n\n.progress__key___1Tajm li {\n  float: left;\n  margin-left: 12px;\n}\n\n.progress__key___1Tajm li[class*=\"key\"]::before {\n  content: '';\n  display: inline-block;\n  width: 11px;\n  height: 11px;\n  margin-right: 4px;\n  vertical-align: -1px;\n}\n\nli .progress__keyQueued___2iNk3::before { background: #e7e7e7; }\nli .progress__keyProcessed___2dimP::before { background: #98c000; }\nli .progress__keyAverage___20s55::before { background: #fbc000; }\n\n\n.progress__graph___1A1Id {\n  position: relative;\n  width: 100%;\n  height: 32px;\n  background: #e7e7e7;\n}\n\n.progress__graph___1A1Id .progress__processed___2zwFQ {\n  height: 32px;\n  width: 0;\n  background: #98c000;\n}\n\n.progress__average___23VdY {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 2px;\n  background: #fbc000;\n}\n\n.progress__labelQueued___32pDw, .progress__labelProcessed___2-_cf {\n  opacity: 0.5;\n  font-size: 11.7px;\n  line-height: 1;\n}\n\n.progress__labelProcessed___2-_cf {\n  position: absolute;\n  left: 4px;\n  bottom: 4px;\n}\n\n.progress__labelQueued___32pDw {\n  position: absolute;\n  right: 4px;\n  bottom: 4px;\n}\n\n.progress__indent___18fXs { margin-left: 12px; }\n\n.progress__meta___36h2l { font-size: 11.7px; font-style: italic; color: #cccccc; }\n\n.progress__movedown___2wXZZ {\n}\n",""]);// exports
	exports.locals={"root":"progress__root___edNUS","progress":"progress__progress___C4L2X","key":"progress__key___1Tajm "+__webpack_require__(40).locals["label"]+"","keyQueued":"progress__keyQueued___2iNk3","keyProcessed":"progress__keyProcessed___2dimP","keyAverage":"progress__keyAverage___20s55","graph":"progress__graph___1A1Id","processed":"progress__processed___2zwFQ","average":"progress__average___23VdY","labelQueued":"progress__labelQueued___32pDw","labelProcessed":"progress__labelProcessed___2-_cf","indent":"progress__indent___18fXs","meta":"progress__meta___36h2l","movedown":"progress__movedown___2wXZZ "+__webpack_require__(40).locals["movedown"]+""};/***/},/* 46 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=connect;var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);var _autobindDecorator=__webpack_require__(35);var _autobindDecorator2=_interopRequireDefault(_autobindDecorator);var _dispatcher=__webpack_require__(47);var _dispatcher2=_interopRequireDefault(_dispatcher);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function connect(action){var initialState=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var onStateUpdated=arguments.length<=2||arguments[2]===undefined?function(state){return state;}:arguments[2];function processState(state){/* eslint-disable no-unused-vars */// treat state as the place to hold changing state for the module. then
	// comm and cell can be accessed separately, and preferably from inside
	// this module only.
	var comm=state.comm;var cell=state.cell;var module=state.module;var rest=_objectWithoutProperties(state,['comm','cell','module']);return onStateUpdated(rest);}return function(Component){var _desc,_value,_class;return _class=function(_React$Component){_inherits(Connect,_React$Component);function Connect(props){_classCallCheck(this,Connect);var _this=_possibleConstructorReturn(this,(Connect.__proto__||Object.getPrototypeOf(Connect)).call(this,props));/* eslint-disable no-unused-vars */_this.state=processState(_extends({},initialState,props));return _this;}_createClass(Connect,[{key:'componentWillMount',value:function componentWillMount(){var _this2=this;_dispatcher2.default.register(function(payload){if(_this2.props&&_this2.props.comm&&_this2.props.comm.comm_id===payload.commId&&payload.actionType===action){_this2.updateState(payload.data);}});}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(newProps){this.updateState(newProps);}},{key:'updateState',value:function updateState(state){this.setState(processState(state));}},{key:'send',value:function send(data){var _this3=this;this.props.comm.send(data,function(){return _this3.props.cell?_this3.props.cell.get_callbacks():{};});}},{key:'render',value:function render(){return _react2.default.createElement(Component,{state:this.state,send:this.send});}}]);return Connect;}(_react2.default.Component),(_applyDecoratedDescriptor(_class.prototype,'updateState',[_autobindDecorator2.default],Object.getOwnPropertyDescriptor(_class.prototype,'updateState'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'send',[_autobindDecorator2.default],Object.getOwnPropertyDescriptor(_class.prototype,'send'),_class.prototype)),_class;};}module.exports=exports['default'];/***/},/* 47 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _flux=__webpack_require__(48);exports.default=new _flux.Dispatcher();module.exports=exports['default'];/***/},/* 48 *//***/function(module,exports,__webpack_require__){/**
		 * Copyright (c) 2014-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 */module.exports.Dispatcher=__webpack_require__(49);/***/},/* 49 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright (c) 2014-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule Dispatcher
		 * 
		 * @preventMunge
		 */'use strict';exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var invariant=__webpack_require__(50);var _prefix='ID_';/**
		 * Dispatcher is used to broadcast payloads to registered callbacks. This is
		 * different from generic pub-sub systems in two ways:
		 *
		 *   1) Callbacks are not subscribed to particular events. Every payload is
		 *      dispatched to every registered callback.
		 *   2) Callbacks can be deferred in whole or part until other callbacks have
		 *      been executed.
		 *
		 * For example, consider this hypothetical flight destination form, which
		 * selects a default city when a country is selected:
		 *
		 *   var flightDispatcher = new Dispatcher();
		 *
		 *   // Keeps track of which country is selected
		 *   var CountryStore = {country: null};
		 *
		 *   // Keeps track of which city is selected
		 *   var CityStore = {city: null};
		 *
		 *   // Keeps track of the base flight price of the selected city
		 *   var FlightPriceStore = {price: null}
		 *
		 * When a user changes the selected city, we dispatch the payload:
		 *
		 *   flightDispatcher.dispatch({
		 *     actionType: 'city-update',
		 *     selectedCity: 'paris'
		 *   });
		 *
		 * This payload is digested by `CityStore`:
		 *
		 *   flightDispatcher.register(function(payload) {
		 *     if (payload.actionType === 'city-update') {
		 *       CityStore.city = payload.selectedCity;
		 *     }
		 *   });
		 *
		 * When the user selects a country, we dispatch the payload:
		 *
		 *   flightDispatcher.dispatch({
		 *     actionType: 'country-update',
		 *     selectedCountry: 'australia'
		 *   });
		 *
		 * This payload is digested by both stores:
		 *
		 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
		 *     if (payload.actionType === 'country-update') {
		 *       CountryStore.country = payload.selectedCountry;
		 *     }
		 *   });
		 *
		 * When the callback to update `CountryStore` is registered, we save a reference
		 * to the returned token. Using this token with `waitFor()`, we can guarantee
		 * that `CountryStore` is updated before the callback that updates `CityStore`
		 * needs to query its data.
		 *
		 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
		 *     if (payload.actionType === 'country-update') {
		 *       // `CountryStore.country` may not be updated.
		 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
		 *       // `CountryStore.country` is now guaranteed to be updated.
		 *
		 *       // Select the default city for the new country
		 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
		 *     }
		 *   });
		 *
		 * The usage of `waitFor()` can be chained, for example:
		 *
		 *   FlightPriceStore.dispatchToken =
		 *     flightDispatcher.register(function(payload) {
		 *       switch (payload.actionType) {
		 *         case 'country-update':
		 *         case 'city-update':
		 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
		 *           FlightPriceStore.price =
		 *             getFlightPriceStore(CountryStore.country, CityStore.city);
		 *           break;
		 *     }
		 *   });
		 *
		 * The `country-update` payload will be guaranteed to invoke the stores'
		 * registered callbacks in order: `CountryStore`, `CityStore`, then
		 * `FlightPriceStore`.
		 */var Dispatcher=function(){function Dispatcher(){_classCallCheck(this,Dispatcher);this._callbacks={};this._isDispatching=false;this._isHandled={};this._isPending={};this._lastID=1;}/**
		   * Registers a callback to be invoked with every dispatched payload. Returns
		   * a token that can be used with `waitFor()`.
		   */Dispatcher.prototype.register=function register(callback){var id=_prefix+this._lastID++;this._callbacks[id]=callback;return id;};/**
		   * Removes a callback based on its token.
		   */Dispatcher.prototype.unregister=function unregister(id){!this._callbacks[id]?process.env.NODE_ENV!=='production'?invariant(false,'Dispatcher.unregister(...): `%s` does not map to a registered callback.',id):invariant(false):undefined;delete this._callbacks[id];};/**
		   * Waits for the callbacks specified to be invoked before continuing execution
		   * of the current callback. This method should only be used by a callback in
		   * response to a dispatched payload.
		   */Dispatcher.prototype.waitFor=function waitFor(ids){!this._isDispatching?process.env.NODE_ENV!=='production'?invariant(false,'Dispatcher.waitFor(...): Must be invoked while dispatching.'):invariant(false):undefined;for(var ii=0;ii<ids.length;ii++){var id=ids[ii];if(this._isPending[id]){!this._isHandled[id]?process.env.NODE_ENV!=='production'?invariant(false,'Dispatcher.waitFor(...): Circular dependency detected while '+'waiting for `%s`.',id):invariant(false):undefined;continue;}!this._callbacks[id]?process.env.NODE_ENV!=='production'?invariant(false,'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',id):invariant(false):undefined;this._invokeCallback(id);}};/**
		   * Dispatches a payload to all registered callbacks.
		   */Dispatcher.prototype.dispatch=function dispatch(payload){!!this._isDispatching?process.env.NODE_ENV!=='production'?invariant(false,'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.'):invariant(false):undefined;this._startDispatching(payload);try{for(var id in this._callbacks){if(this._isPending[id]){continue;}this._invokeCallback(id);}}finally{this._stopDispatching();}};/**
		   * Is this Dispatcher currently dispatching.
		   */Dispatcher.prototype.isDispatching=function isDispatching(){return this._isDispatching;};/**
		   * Call the callback stored with the given id. Also do some internal
		   * bookkeeping.
		   *
		   * @internal
		   */Dispatcher.prototype._invokeCallback=function _invokeCallback(id){this._isPending[id]=true;this._callbacks[id](this._pendingPayload);this._isHandled[id]=true;};/**
		   * Set up bookkeeping needed when dispatching.
		   *
		   * @internal
		   */Dispatcher.prototype._startDispatching=function _startDispatching(payload){for(var id in this._callbacks){this._isPending[id]=false;this._isHandled[id]=false;}this._pendingPayload=payload;this._isDispatching=true;};/**
		   * Clear bookkeeping used for dispatching.
		   *
		   * @internal
		   */Dispatcher.prototype._stopDispatching=function _stopDispatching(){delete this._pendingPayload;this._isDispatching=false;};return Dispatcher;}();module.exports=Dispatcher;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 50 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
		 * Copyright 2013-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule invariant
		 */"use strict";/**
		 * Use invariant() to assert state which your program assumes to be true.
		 *
		 * Provide sprintf-style format (only %s is supported) and arguments
		 * to provide information about what broke and what you were
		 * expecting.
		 *
		 * The invariant message will be stripped in production, but the invariant
		 * will remain to ensure logic does not differ in production.
		 */var invariant=function invariant(condition,format,a,b,c,d,e,f){if(process.env.NODE_ENV!=='production'){if(format===undefined){throw new Error('invariant requires an error message argument');}}if(!condition){var error;if(format===undefined){error=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');}else{var args=[a,b,c,d,e,f];var argIndex=0;error=new Error('Invariant Violation: '+format.replace(/%s/g,function(){return args[argIndex++];}));}error.framesToPop=1;// we don't care about invariant's own frame
	throw error;}};module.exports=invariant;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(4));/***/},/* 51 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
	// load the styles
	var content=__webpack_require__(52);if(typeof content==='string')content=[[module.id,content,'']];// add the styles to the DOM
	var update=__webpack_require__(41)(content,{"sourceMap":true});if(content.locals)module.exports=content.locals;// Hot Module Replacement
	if(false){// When the styles change, update the <style> tags
	if(!content.locals){module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./display.css",function(){var newContent=require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./display.css");if(typeof newContent==='string')newContent=[[module.id,newContent,'']];update(newContent);});}// When the module is disposed, remove the <style> tags
	module.hot.dispose(function(){update();});}/***/},/* 52 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(39)();// imports
	// module
	exports.push([module.id,".display__machinestat___2RsP_ {\n  position: relative;\n}\n\n.display__status___2Sgqg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 11.7px;\n}\n\n.display__status___2Sgqg::before {\n  content: '';\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background: #333333;\n  border-radius: 100%;\n  vertical-align: -1px;\n  margin-right: 2px;\n}\n\n.display__running___1r2Pq {\n  color: #98c000;\n}\n\n.display__running___1r2Pq::before {\n  background: #98c000;\n}\n\n.display__statRow___via8B {\n  *zoom: 1;\n}\n\n.display__statRow___via8B::before, .display__statRow___via8B::after {\n  display: table;\n  line-height: 0;\n  content: \"\";\n}\n\n.display__statRow___via8B::after {\n  clear: both;\n}\n",""]);// exports
	exports.locals={"machinestat":"display__machinestat___2RsP_","status":"display__status___2Sgqg","running":"display__running___1r2Pq display__status___2Sgqg","statRow":"display__statRow___via8B"};/***/},/* 53 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class;var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);var _connect=__webpack_require__(46);var _connect2=_interopRequireDefault(_connect);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Dashboard=(_dec=(0,_connect2.default)('dashboard_update'),_dec(_class=function(_React$Component){_inherits(Dashboard,_React$Component);function Dashboard(){_classCallCheck(this,Dashboard);return _possibleConstructorReturn(this,(Dashboard.__proto__||Object.getPrototypeOf(Dashboard)).apply(this,arguments));}_createClass(Dashboard,[{key:'render',value:function render(){console.log('foo',this.props);return _react2.default.createElement('div',{id:'timbr-foo'});}}]);return Dashboard;}(_react2.default.Component))||_class);exports.default=Dashboard;module.exports=exports['default'];/***/}/******/]));});;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	if (window.require) {
	    window.require.config({
	        map: {
	            "*" : {
	                "react": "https://fb.me/react-15.2.1.min.js",
	                "react-dom": "https://fb.me/react-dom-15.2.1.min.js"
	            }
	        }
	    });
	}

	var Area = __webpack_require__(4);
	var Manager = __webpack_require__(5);
	var ReactComponent = __webpack_require__(6);

	var init = function( Jupyter, events, comm_target, component_options ) {

	    requirejs([ "react", "react-dom", "services/kernels/comm" ], function( React, ReactDom, Comm ) {
	        window.React = React;
	        window.ReactDom = ReactDom;
	    
	        /**
	         * handle_kernel 
	         * creates an instance of a "Manager" used to listen for new comms and create new components
	         */
	        var handle_kernel = function(Jupyter, kernel) {
	          if ( kernel.comm_manager && kernel.component_manager === undefined ) {
	            kernel.component_manager = new Manager.ComponentManager( kernel, Comm );
	          } 

	          if ( kernel.component_manager ) {
	            var Component = ReactComponent( component_options );
	            kernel.component_manager.register( comm_target, Component ) 
	          }
	        };

	        /**
	         *
	         */
	        // TODO need to handle clear out output calls
	        var handle_cell = function(cell) {
	            if ( cell.cell_type === 'code' ) {
	                if ( !cell.react_dom ) {
	                    cell.react_dom = new Area( cell );
	                } else if ( cell.react_dom.clear !== undefined ) {
	                    cell.react_dom.clear();
	                }
	            }
	        };

	        // On new kernel session create new comm managers
	        if (Jupyter.notebook && Jupyter.notebook.kernel) {
	            handle_kernel(Jupyter, Jupyter.notebook.kernel);
	        }
	        events.on('kernel_created.Kernel kernel_created.Session', function(event, data) {
	            handle_kernel(Jupyter, data.kernel);
	        });

	        // Create react component areas in cells
	        // Each cell in the notebook will have an area 
	        // that a component will render itself into
	        var cells = Jupyter.notebook.get_cells();
	        cells.forEach( cell => {
	            handle_cell( cell );
	        });

	        events.on( 'create.Cell', function( event, data ) {
	            handle_cell( data.cell );
	        });

	        events.on( 'delete.Cell', function( event, data ) {
	            if ( data.cell && data.cell.react_dom ) {
	                data.cell.react_dom.clear();
	            }
	        });
	    });

	};

	module.exports = {
	  Manager,
	  ReactComponent,
	  Area,
	  init
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	// TODO 
	// needs to bind to clear_display calls
	// add a "dispose" method that will will wipre all contents, call that on clear_display and cell delete etc.

	var Area = function( cell ) {
	    var area = document.createElement('div');
	    area.classList.add('jupyter-react-area');
	    area.classList.add('widget-area');
	    this.area = area;

	    var _prompt = document.createElement('div');
	    _prompt.classList.add('prompt');
	    area.appendChild(_prompt);

	    var subarea = document.createElement('div');
	    subarea.classList.add('jupyter-react-subarea');
	    subarea.classList.add('widget-subarea');
	    area.appendChild(subarea);

	    this.subarea = subarea;

	    if (cell.input) {
	        cell.input.after(area);
	    } else {
	        throw new Error('Cell does not have an `input` element.  Is it not a CodeCell?');
	    }
	};

	Area.prototype.clear = function(){ 
	    this.subarea.innerHTML = '';
	};



	module.exports = Area;


/***/ },
/* 5 */
/***/ function(module, exports) {

	function Manager( kernel, comm ) {
	  this.kernel = kernel;
	  this.comm = comm;
	  this.components = {};

	  this.register = function( target, Component ) {
	    var self = this;

	    // new targets...
	    if ( !this.components[ target ] ) {
	      this.components[ target ] = { Component: Component };
	      kernel.comm_manager.register_target( target, function ( comm, msg ) {
	        if ( msg[ 'msg_type' ] === 'comm_open' ) {
	          self.components[ target ][ comm.comm_id ] = self.components[ target ].Component( comm, msg );
	        }
	      });
	    }

	    // look for comms that need to be re-created (page refresh)
	    this.kernel.comm_info( target, function( info ) { 
	      var comms = Object.keys( info['content']['comms'] );
	      var md = Jupyter.notebook.metadata;
	      if ( comms.length ) {
	        comms.forEach( function( comm_id ) {
	          if ( md.react_comms && md.react_comms[ comm_id ] ) {
	            var cell = self._get_cell( md.react_comms[ comm_id ] );
	            if ( cell ) {
	              var module = comm_id.split( '.' ).slice( -1 )[ 0 ];
	              var newComm = self._create_comm( target, comm_id );
	              self.components[ target ][ newComm.comm_id ] = self.components[ target ].Component( 
	                newComm, 
	                { content: { data: { module: module } } }, 
	                cell 
	              )
	              self.components[ target ][ newComm.comm_id ].render();
	            }
	          }
	        });
	      }
	    })
	  };

	  this._get_cell = function( index ) {
	    return Jupyter.notebook.get_cells()[ parseInt(index) ];
	  }

	  this._create_comm = function( target, comm_id ) {
	    var newComm = new this.comm.Comm( target, comm_id );
	    Jupyter.notebook.kernel.comm_manager.register_comm( newComm );
	    return newComm;
	  }

	  return this;
	};

	module.exports = { 
	  ComponentManager: Manager 
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	// Base component that handles comm messages and renders components to notebook cell

	module.exports = function Component( options ) {
	  return function (comm, props, cell) {
	    this.cell = cell;
	    this.comm = comm;
	    this.module = props.content.data.module;
	    this.domId = props.content.data.domId;

	    // Handle all messages over this comm
	    this.handleMsg = msg => {
	      var data = msg.content.data;
	      switch (data.method) {
	        case "update":
	          if ( options.on_update ) {
	            return options.on_update(this.module, data.props, msg.content.comm_id);
	          }
	          // else re-render
	          this.renderComponent( msg, data.props );
	          break;
	        case "display":
	          console.log('display here', msg);
	          // save comm id and cell id to notebook.metadata
	          this._saveComponent( msg );
	          break;
	      }
	    };

	    // save cell index to notebook metadata as a string
	    this._saveComponent = function( msg ) {
	      var cell = this._getMsgCell( msg );
	      var md = Jupyter.notebook.metadata;
	      if ( cell ) {
	        if ( !md.react_comms ) {
	          md.react_comms = {}
	        }
	        md.react_comms[ comm.comm_id ] = this._getCellIndex( cell.cell_id ) + '';
	      }
	      this.renderComponent( msg );
	    };

	    // create reacte element and call _render 
	    this.renderComponent = function ( msg, newProps ) {
	      newProps = newProps || msg.content.data.props;
	      console.log('newProps', newProps);
	      console.log('props', props);
	      newProps.cell = this._getMsgCell( msg );
	      newProps.comm = comm;
	      var element = this._createMarkup( options.components[ this.module ], newProps );
	      this._render( element, msg );
	    };

	    // Render the component to either the output cell or given domId
	    this._render = function ( element, msg ) {
	      var display;
	      if ( this.domId ) {
	        display = document.getElementById( this.domId );
	      } else {
	        display = this._outputAreaElement( msg );
	      }
	      ReactDom.render( element, display );
	    };

	    this.render = function( ) {
	      var newProps = props.content.data;
	      newProps.cell = this.cell;
	      newProps.comm = comm;
	      var element = this._createMarkup( options.components[ this.module ], newProps );
	      this._render( element, {} );
	    }

	    this._getCellIndex = function( cell_id ) {
	      var idx;
	      Jupyter.notebook.get_cells().forEach( function( c, i){
	        if ( c.cell_id === cell_id ) {
	          idx = i;
	        }
	      });
	      return idx;
	    };

	    // gets the components cell or 
	    this._getMsgCell = function( msg ) {
	      if ( this.cell ) return this.cell;
	      var msg_id = msg.parent_header.msg_id;
	      this.cell = Jupyter.notebook.get_msg_cell( msg_id );
	      return this.cell;
	    };

	    // Create React Elements from components and props 
	    this._createMarkup = function ( component, cProps ) {
	      return React.createElement( component, cProps );
	    };

	    // Get the DOM Element to render to
	    this._outputAreaElement = function (msg) {
	      var cell = this._getMsgCell( msg );
	      return cell.react_dom.subarea;
	    };

	    // register message callback
	    this.comm.on_msg(this.handleMsg);
	    return this;
	  };
	};


/***/ }
/******/ ])});;
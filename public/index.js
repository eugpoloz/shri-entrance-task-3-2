var smarthome =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};Object.defineProperty(exports,\"__esModule\",{value:!0});exports.default=calc;var _consumedEnergy=__webpack_require__(/*! ./utils/consumedEnergy */ \"./src/utils/consumedEnergy.js\"),_cheapestHours=__webpack_require__(/*! ./utils/cheapestHours */ \"./src/utils/cheapestHours.js\"),_cheapestHours2=_interopRequireDefault(_cheapestHours);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function calc(a){function b(a){function b(a){var b=h[a].usedPower+f,d=24>a+1?a+1:0,i=h[d].usedPower+f;b<=e?(h[a].devices.push(c),h[a].usedPower+=f,n+=(0,_consumedEnergy.oneHourEnergy)({rate:g[a],power:f})):++p}var c=a.id,d=a.name,f=a.power,i=a.duration,k=a.mode,l=a.from,m=a.to,n=0,o=l,p=m;if(o>p){for(var q=o;24>q;q++)b(q);o=0}for(var r=o;r<p;r++)b(r);j.devices[c]=(0,_consumedEnergy.toFixedNumber)(n,4),Array.isArray(j.value)&&j.value.push(n)}for(var c=a.devices,d=a.rates,e=a.maxPower,f={day:{from:7,to:21},night:{from:21,to:7}},g=d.reduce(function(a,b){var c=b.from,d=b.to,e=b.value,f=c;if(c>d){for(var g=f;24>g;g++)a[g]=e;f=0}for(var h=f;h<d;h++)a[h]=e;return a},{}),h={},j={value:[],devices:{}},k=0;24>k;k++)h[k]={devices:[],rate:g[k],usedPower:0};c.forEach(function(a){var c=a.duration,d=a.mode;if(24<c)throw new Error(\"\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u044C \\u0440\\u0430\\u0431\\u043E\\u0442\\u044B \\u043F\\u0440\\u0438\\u0431\\u043E\\u0440\\u0430 \\u043D\\u0435 \\u043C\\u043E\\u0436\\u0435\\u0442 \\u0431\\u044B\\u0442\\u044C \\u0431\\u043E\\u043B\\u044C\\u0448\\u0435 24 \\u0447\\u0430\\u0441\\u043E\\u0432!\");if(24===c)return b(_extends({},a,{to:24,from:0}));var e=null;e=\"day\"===d?(0,_cheapestHours2.default)({to:f.day.to,from:f.day.from,rates:g})[0]:\"night\"===d?(0,_cheapestHours2.default)({to:f.night.to,from:f.night.from,rates:g})[0]:(0,_cheapestHours2.default)({to:24,from:0,rates:g})[0];var h=e,i=e+c;return 24<i&&(i-=24),b(_extends({},a,{to:i,from:h}))});var l=Array.isArray(j.value)?j.value.reduce(function(a,b){return a+b},0):0,m={};for(var o in h)h.hasOwnProperty(o)&&(m[o]=h[o].devices);var n={schedule:m,consumedEnergy:{devices:j.devices,value:(0,_consumedEnergy.toFixedNumber)(l,4)}};return console.log(n),n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjYWxjIiwiZGV2aWNlc01hcHBlciIsInJlcGVhdGFibGVMb29wIiwiaSIsIlVTRURfUE9XRVIiLCJjb21wbGV4U2NoZWR1bGUiLCJ1c2VkUG93ZXIiLCJwb3dlciIsIk5FWFRfSSIsIk5FWFRfVVNFRF9QT1dFUiIsIk1BWF9QT1dFUiIsImRldmljZXMiLCJwdXNoIiwiaWQiLCJlbmVyZ3kiLCJyYXRlIiwiUkFURVMiLCJyZXNldHRhYmxlVG8iLCJuYW1lIiwiZHVyYXRpb24iLCJtb2RlIiwiZnJvbSIsInRvIiwicmVzZXR0YWJsZUZyb20iLCJjb25zdW1lZEVuZXJneSIsIkFycmF5IiwiaXNBcnJheSIsInZhbHVlIiwiREVWSUNFUyIsInJhdGVzIiwibWF4UG93ZXIiLCJNT0RFUyIsImRheSIsIm5pZ2h0IiwicmVkdWNlIiwiYWNjIiwiUkFURSIsIkZST00iLCJUTyIsIlZBTFVFIiwiZm9yRWFjaCIsImRldmljZSIsIkVycm9yIiwiY2hlYXBlc3QiLCJ2YWwiLCJzY2hlZHVsZSIsImluZGV4S2V5IiwiaGFzT3duUHJvcGVydHkiLCJPVVRQVVQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiZ1FBTXdCQSxJLHNPQUFULFFBQVNBLEtBQVQsR0FJTCxDQXdEUixRQUFTQyxFQUFULEdBUWtCLENBS2hCLFFBQVNDLEVBQVQsQ0FBd0JDLENBQXhCLENBQTJCLElBQ25CQyxHQUFhQyxFQUFnQkYsQ0FBaEIsRUFBbUJHLFNBQW5CLENBQStCQyxDQUR6QixDQUVuQkMsRUFBaUIsRUFBUixHQUFJLENBQUosQ0FBYUwsRUFBSSxDQUFqQixDQUFxQixDQUZYLENBR25CTSxFQUFrQkosRUFBZ0JHLENBQWhCLEVBQXdCRixTQUF4QixDQUFvQ0MsQ0FIbkMsQ0FLckJILEdBQWNNLENBTE8sRUFNdkJMLEVBQWdCRixDQUFoQixFQUFtQlEsT0FBbkIsQ0FBMkJDLElBQTNCLENBQWdDQyxDQUFoQyxDQU51QixDQU92QlIsRUFB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Q0FBVCxFQUFxQnpDLEVBQWdCeUMsQ0FBaEIsRUFBMEJuQyxPQUZuRCxFQU1BLEdBQU1xQyxHQUFTLENBQ2JILFVBRGEsQ0FFYnJCLGVBQWdCLENBQ2RiLFFBQVNhLEVBQWViLE9BRFYsQ0FFZGdCLE1BQU8sa0NBQWNZLENBQWQsQ0FBcUIsQ0FBckIsQ0FGTyxDQUZILENBQWYsQ0FVQSxNQURBVSxTQUFRQyxHQUFSLENBQVlGLENBQVosQ0FDQSxDQUFPQSxDQUNSIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ldWdwb2xvei9Qcm9qZWN0cy9naXRodWIvc2hyaS1lbnRyYW5jZS10YXNrLTMtMiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgeyB0b0ZpeGVkTnVtYmVyLCBvbmVIb3VyRW5lcmd5IH0gZnJvbSBcIi4vdXRpbHMvY29uc3VtZWRFbmVyZ3lcIjtcbmltcG9ydCBjaGVhcGVzdEhvdXJzIGZyb20gXCIuL3V0aWxzL2NoZWFwZXN0SG91cnNcIjtcblxuaW1wb3J0IHR5cGUgeyBJbnB1dCwgRGV2aWNlIH0gZnJvbSBcIi4vQ29tbW9uVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsYyh7XG4gIGRldmljZXM6IERFVklDRVMsXG4gIHJhdGVzLFxuICBtYXhQb3dlcjogTUFYX1BPV0VSXG59OiBJbnB1dCkge1xuICAvLyDQs9GA0LDQvdC40YbRiyDQtNC90LXQuVxuICBjb25zdCBNT0RFUyA9IHtcbiAgICBkYXk6IHtcbiAgICAgIGZyb206IDcsXG4gICAgICB0bzogMjFcbiAgICB9LFxuICAgIG5pZ2h0OiB7XG4gICAgICBmcm9tOiAyMSxcbiAgICAgIHRvOiA3XG4gICAgfVxuICB9O1xuXG4gIC8vINGB0L7Qt9C00LDQtdC8INGC0LDQsdC70LjRh9C60YMg0YHRgtC+0LjQvNC+0YHRgtC4XG4gIGNvbnN0IFJBVEVTID0gcmF0ZXMucmVkdWNlKChhY2MsIFJBVEUpID0+IHtcbiAgICBjb25zdCB7IGZyb206IEZST00sIHRvOiBUTywgdmFsdWU6IFZBTFVFIH0gPSBSQVRFO1xuXG4gICAgbGV0IHJlc2V0dGFibGVGcm9tID0gRlJPTTtcblxuICAgIGlmIChGUk9NID4gVE8pIHtcbiAgICAgIGZvciAobGV0IGkgPSByZXNldHRhYmxlRnJvbTsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgYWNjW2ldID0gVkFMVUU7XG4gICAgICB9XG4gICAgICByZXNldHRhYmxlRnJvbSA9IDA7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHJlc2V0dGFibGVGcm9tOyBpIDwgVE87IGkrKykge1xuICAgICAgYWNjW2ldID0gVkFMVUU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIC8vINC00LXQu9Cw0LXQvCDQsdC+0LvRjNGI0YPRjiDRgtCw0LHQu9C40YfQutGDLCDQsiDQutC+0YLQvtGA0L7QuSDQsdGD0LTQtdGCINC40L3RhNC+0YDQvNCw0YbQuNGPINC/0L4g0LrQsNC20LTQvtC80YMg0YfQsNGB0YNcbiAgLy8g0Lgg0LrQvtGC0L7RgNGD0Y4g0LzRiyDQv9C+0YLQvtC8INC4INC30LDRgNC10LTRjNGO0YHQuNC8INCyIG91dHB1dFxuICBsZXQgY29tcGxleFNjaGVkdWxlID0ge307XG5cbiAgbGV0IGNvbnN1bWVkRW5lcmd5ID0ge1xuICAgIHZhbHVlOiBbXSxcbiAgICBkZXZpY2VzOiB7fVxuICB9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgIGNvbXBsZXhTY2hlZHVsZVtpXSA9IHtcbiAgICAgIGRldmljZXM6IFtdLFxuICAgICAgcmF0ZTogUkFURVNbaV0sXG4gICAgICB1c2VkUG93ZXI6IDBcbiAgICB9O1xuICB9XG5cbiAgdHlwZSBEZXZpY2VzTWFwcGVyID0ge1xuICAgIC4uLkRldmljZSxcbiAgICBmcm9tOiBudW1iZXIsXG4gICAgdG86IG51bWJlclxuICB9O1xuXG4gIGZ1bmN0aW9uIGRldmljZXNNYXBwZXIoe1xuICAgIGlkLFxuICAgIG5hbWUsXG4gICAgcG93ZXIsXG4gICAgZHVyYXRpb24sXG4gICAgbW9kZSxcbiAgICBmcm9tLFxuICAgIHRvXG4gIH06IERldmljZXNNYXBwZXIpIHtcbiAgICBsZXQgZW5lcmd5ID0gMDtcbiAgICBsZXQgW3Jlc2V0dGFibGVGcm9tLCByZXNldHRhYmxlVG9dID0gW2Zyb20sIHRvXTtcblxuICAgIC8vINC/0L7QstGC0L7RgNGP0LXQvCDRhNGD0L3QutGG0LjRjiDQutCw0LbQtNGL0Lkg0LvRg9C/XG4gICAgZnVuY3Rpb24gcmVwZWF0YWJsZUxvb3AoaSkge1xuICAgICAgY29uc3QgVVNFRF9QT1dFUiA9IGNvbXBsZXhTY2hlZHVsZVtpXS51c2VkUG93ZXIgKyBwb3dlcjtcbiAgICAgIGNvbnN0IE5FWFRfSSA9IGkgKyAxIDwgMjQgPyBpICsgMSA6IDA7XG4gICAgICBjb25zdCBORVhUX1VTRURfUE9XRVIgPSBjb21wbGV4U2NoZWR1bGVbTkVYVF9JXS51c2VkUG93ZXIgKyBwb3dlcjtcblxuICAgICAgaWYgKFVTRURfUE9XRVIgPD0gTUFYX1BPV0VSKSB7XG4gICAgICAgIGNvbXBsZXhTY2hlZHVsZVtpXS5kZXZpY2VzLnB1c2goaWQpO1xuICAgICAgICBjb21wbGV4U2NoZWR1bGVbaV0udXNlZFBvd2VyID0gY29tcGxleFNjaGVkdWxlW2ldLnVzZWRQb3dlciArIHBvd2VyO1xuXG4gICAgICAgIGVuZXJneSA9IGVuZXJneSArIG9uZUhvdXJFbmVyZ3koeyByYXRlOiBSQVRFU1tpXSwgcG93ZXIgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNldHRhYmxlVG8gPSByZXNldHRhYmxlVG8gKyAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXNldHRhYmxlRnJvbSA+IHJlc2V0dGFibGVUbykge1xuICAgICAgZm9yIChsZXQgaSA9IHJlc2V0dGFibGVGcm9tOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICByZXBlYXRhYmxlTG9vcChpKTtcbiAgICAgIH1cblxuICAgICAgcmVzZXR0YWJsZUZyb20gPSAwO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSByZXNldHRhYmxlRnJvbTsgaSA8IHJlc2V0dGFibGVUbzsgaSsrKSB7XG4gICAgICByZXBlYXRhYmxlTG9vcChpKTtcbiAgICB9XG5cbiAgICBjb25zdW1lZEVuZXJneS5kZXZpY2VzW2lkXSA9IHRvRml4ZWROdW1iZXIoZW5lcmd5LCA0KTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb25zdW1lZEVuZXJneS52YWx1ZSkpIHtcbiAgICAgIGNvbnN1bWVkRW5lcmd5LnZhbHVlLnB1c2goZW5lcmd5KTtcbiAgICB9XG4gIH1cblxuICAvLyDQvtCx0YDQsNCx0LDRgtGL0LLQsNC10Lwg0L3QsNGI0Lgg0LTQtdCy0LDQudGB0YtcbiAgREVWSUNFUy5mb3JFYWNoKGRldmljZSA9PiB7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgbW9kZSB9ID0gZGV2aWNlO1xuICAgIGlmIChkdXJhdGlvbiA+IDI0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwi0J/RgNC+0LTQvtC70LbQuNGC0LXQu9GM0L3QvtGB0YLRjCDRgNCw0LHQvtGC0Ysg0L/RgNC40LHQvtGA0LAg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINCx0L7Qu9GM0YjQtSAyNCDRh9Cw0YHQvtCyIVwiXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vINC10YHQu9C4INC00LXQstCw0LnRgSDQtNC+0LvQttC10L0g0YDQsNCx0L7RgtCw0YLRjCAyNCDRh9Cw0YHQsCwg0YLQviDQstGB0LUg0L/RgNC+0YHRgtC+XG4gICAgaWYgKGR1cmF0aW9uID09PSAyNCkge1xuICAgICAgcmV0dXJuIGRldmljZXNNYXBwZXIoeyAuLi5kZXZpY2UsIHRvOiAyNCwgZnJvbTogMCB9KTtcbiAgICB9XG5cbiAgICAvLyDRh9GC0L4g0LzRiyDQttC10LvQtdC30L3QviDQtNC+0LvQttC90Ysg0L/RgNC+0LLQtdGA0Y/RgtGMINCyINC+0YHRgtCw0LvRjNC90YvRhSDRgdC70YPRh9Cw0Y/RhT9cbiAgICAvLyAtINC/0L7Qv9Cw0LTQsNC10YIg0LvQuCDQsiDQvdGD0LbQvdGL0Lkg0YfQsNGBXG4gICAgLy8gLSDQt9CwINC60LDQutC+0Lkg0YfQsNGBINC80Ysg0LHRg9C00LXQvCDQv9C70LDRgtC40YLRjCDQvNC10L3RjNGI0LUg0LLRgdC10LPQvlxuICAgIC8vIC0g0LXRgdGC0Ywg0LvQuCDRgyDQvdCw0YEg0LTQvtGB0YLQsNGC0L7Rh9C90L4gcG93ZXJcblxuICAgIC8vIFRPRE86INGH0YLQviDQtNC10LvQsNGC0YwsINC10YHQu9C4INGB0LDQvNGL0YUg0LTQtdGI0LXQstGL0YUg0YfQsNGB0L7QsiDQvdC10LTQvtGB0YLQsNGC0L7Rh9C90L4/XG4gICAgbGV0IGNoZWFwZXN0ID0gbnVsbDtcblxuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgICBjaGVhcGVzdCA9IGNoZWFwZXN0SG91cnMoe1xuICAgICAgICAgIHRvOiBNT0RFUy5kYXkudG8sXG4gICAgICAgICAgZnJvbTogTU9ERVMuZGF5LmZyb20sXG4gICAgICAgICAgcmF0ZXM6IFJBVEVTXG4gICAgICAgIH0pWzBdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJuaWdodFwiOlxuICAgICAgICBjaGVhcGVzdCA9IGNoZWFwZXN0SG91cnMoe1xuICAgICAgICAgIHRvOiBNT0RFUy5uaWdodC50byxcbiAgICAgICAgICBmcm9tOiBNT0RFUy5uaWdodC5mcm9tLFxuICAgICAgICAgIHJhdGVzOiBSQVRFU1xuICAgICAgICB9KVswXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBtb2RlID0gdW5kZWZpbmVkXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjaGVhcGVzdCA9IGNoZWFwZXN0SG91cnMoe1xuICAgICAgICAgIHRvOiAyNCxcbiAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgIHJhdGVzOiBSQVRFU1xuICAgICAgICB9KVswXTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IGZyb20gPSBjaGVhcGVzdDtcbiAgICBsZXQgdG8gPSBjaGVhcGVzdCArIGR1cmF0aW9uO1xuXG4gICAgaWYgKHRvID4gMjQpIHtcbiAgICAgIHRvID0gdG8gLSAyNDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGV2aWNlc01hcHBlcih7XG4gICAgICAuLi5kZXZpY2UsXG4gICAgICB0byxcbiAgICAgIGZyb21cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8g0L7Qv9GA0LXQtNC10LvRj9C10Lwg0YTQuNC90LDQu9GM0L3Ri9C1INC30L3QsNGH0LXQvdC40Y9cbiAgY29uc3QgVkFMVUUgPSBBcnJheS5pc0FycmF5KGNvbnN1bWVkRW5lcmd5LnZhbHVlKVxuICAgID8gY29uc3VtZWRFbmVyZ3kudmFsdWUucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjICsgdmFsLCAwKVxuICAgIDogMDtcblxuICBsZXQgc2NoZWR1bGUgPSB7fTtcbiAgZm9yIChsZXQgaW5kZXhLZXkgaW4gY29tcGxleFNjaGVkdWxlKSB7XG4gICAgaWYgKGNvbXBsZXhTY2hlZHVsZS5oYXNPd25Qcm9wZXJ0eShpbmRleEtleSkpIHtcbiAgICAgIHNjaGVkdWxlW2luZGV4S2V5XSA9IGNvbXBsZXhTY2hlZHVsZVtpbmRleEtleV0uZGV2aWNlcztcbiAgICB9XG4gIH1cblxuICBjb25zdCBPVVRQVVQgPSB7XG4gICAgc2NoZWR1bGUsXG4gICAgY29uc3VtZWRFbmVyZ3k6IHtcbiAgICAgIGRldmljZXM6IGNvbnN1bWVkRW5lcmd5LmRldmljZXMsXG4gICAgICB2YWx1ZTogdG9GaXhlZE51bWJlcihWQUxVRSwgNClcbiAgICB9XG4gIH07XG5cbiAgLy8gVE9ETzog0L/RgNC40LHRgNCw0YLRjCDQutC+0L3RgdC+0LvRjC3Qu9C+0LM/XG4gIGNvbnNvbGUubG9nKE9VVFBVVCk7XG4gIHJldHVybiBPVVRQVVQ7XG59XG4iXX0=\n\n//# sourceURL=webpack://smarthome/./src/index.js?");

/***/ }),

/***/ "./src/utils/cheapestHours.js":
/*!************************************!*\
  !*** ./src/utils/cheapestHours.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:!0});function cheapestHours(a){function b(a){null==g||g>c[a]?(g=c[a],f=[a]):g===c[a]&&f.push(a)}var c=a.rates,d=a.to,e=a.from,f=[],g=null,h=e;if(e>d){for(var j=h;24>j;j++)b(j);h=0}for(var i=h;i<d;i++)b(i);return f}exports.default=cheapestHours;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9jaGVhcGVzdEhvdXJzLmpzIl0sIm5hbWVzIjpbImNoZWFwZXN0SG91cnMiLCJyZXBlYXRhYmxlTG9vcCIsImkiLCJjaGVhcGVzdFJhdGUiLCJSQVRFUyIsImNoZWFwZXN0QXJyYXkiLCJwdXNoIiwicmF0ZXMiLCJUTyIsInRvIiwiRlJPTSIsImZyb20iLCJyZXNldHRhYmxlRnJvbSJdLCJtYXBwaW5ncyI6Im9FQVNBLFFBQVNBLGNBQVQsR0FBNEUsQ0FLMUUsUUFBU0MsRUFBVCxDQUF3QkMsQ0FBeEIsQ0FBMkIsQ0FDTCxJQUFoQixLQUF3QkMsRUFBZUMsRUFBTUYsQ0FBTixDQURsQixFQUV2QkMsRUFBZUMsRUFBTUYsQ0FBTixDQUZRLENBR3ZCRyxFQUFnQixDQUFDSCxDQUFELENBSE8sRUFJZEMsSUFBaUJDLEVBQU1GLENBQU4sQ0FKSCxFQVF2QkcsRUFBY0MsSUFBZCxDQUFtQkosQ0FBbkIsQ0FHSCxDQWhCeUUsR0FBNUNFLEVBQTRDLEdBQW5ERyxLQUFtRCxDQUFqQ0MsQ0FBaUMsR0FBckNDLEVBQXFDLENBQXZCQyxDQUF1QixHQUE3QkMsSUFBNkIsQ0FDdEVOLEVBQWdCLEVBRHNELENBRXRFRixFQUFlLElBRnVELENBR3RFUyxFQUFpQkYsQ0FIcUQsQ0FrQjFFLEdBQUlBLEVBQU9GLENBQVgsQ0FBZSxDQUNiLElBQUssR0FBSU4sR0FBSVUsQ0FBYixDQUFpQyxFQUFKLEVBQTdCLENBQXFDVixHQUFyQyxDQUNFRCxFQUFlQyxDQUFmLEVBR0ZVLEVBQWlCLENBQ2xCLENBRUQsSUFBSyxHQUFJVixHQUFJVSxDQUFiLENBQTZCVixFQUFJTSxDQUFqQyxDQUFxQ04sR0FBckMsQ0FDRUQsRUFBZUMsQ0FBZixFQUdGLE1BQU9HLEVBQ1IsQyxnQkFFY0wsYSIsImZpbGUiOiJjaGVhcGVzdEhvdXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ldWdwb2xvei9Qcm9qZWN0cy9naXRodWIvc2hyaS1lbnRyYW5jZS10YXNrLTMtMiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG50eXBlIENoZWFwZXN0SG91cnMgPSB7XG4gIHJhdGVzOiB7XG4gICAgW2tleTogbnVtYmVyXTogbnVtYmVyXG4gIH0sXG4gIHRvOiBudW1iZXIsXG4gIGZyb206IG51bWJlclxufTtcblxuZnVuY3Rpb24gY2hlYXBlc3RIb3Vycyh7IHJhdGVzOiBSQVRFUywgdG86IFRPLCBmcm9tOiBGUk9NIH06IENoZWFwZXN0SG91cnMpIHtcbiAgbGV0IGNoZWFwZXN0QXJyYXkgPSBbXTtcbiAgbGV0IGNoZWFwZXN0UmF0ZSA9IG51bGw7XG4gIGxldCByZXNldHRhYmxlRnJvbSA9IEZST007XG5cbiAgZnVuY3Rpb24gcmVwZWF0YWJsZUxvb3AoaSkge1xuICAgIGlmIChjaGVhcGVzdFJhdGUgPT0gbnVsbCB8fCBjaGVhcGVzdFJhdGUgPiBSQVRFU1tpXSkge1xuICAgICAgY2hlYXBlc3RSYXRlID0gUkFURVNbaV07XG4gICAgICBjaGVhcGVzdEFycmF5ID0gW2ldO1xuICAgIH0gZWxzZSBpZiAoY2hlYXBlc3RSYXRlID09PSBSQVRFU1tpXSkge1xuICAgICAgLy8gaWYgKGkgPiAyMSkge1xuICAgICAgLy8gICBjaGVhcGVzdEFycmF5LnVuc2hpZnQoaSk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgY2hlYXBlc3RBcnJheS5wdXNoKGkpO1xuICAgICAgLy8gfVxuICAgIH1cbiAgfVxuXG4gIGlmIChGUk9NID4gVE8pIHtcbiAgICBmb3IgKGxldCBpID0gcmVzZXR0YWJsZUZyb207IGkgPCAyNDsgaSsrKSB7XG4gICAgICByZXBlYXRhYmxlTG9vcChpKTtcbiAgICB9XG5cbiAgICByZXNldHRhYmxlRnJvbSA9IDA7XG4gIH1cblxuICBmb3IgKGxldCBpID0gcmVzZXR0YWJsZUZyb207IGkgPCBUTzsgaSsrKSB7XG4gICAgcmVwZWF0YWJsZUxvb3AoaSk7XG4gIH1cblxuICByZXR1cm4gY2hlYXBlc3RBcnJheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hlYXBlc3RIb3VycztcbiJdfQ==\n\n//# sourceURL=webpack://smarthome/./src/utils/cheapestHours.js?");

/***/ }),

/***/ "./src/utils/consumedEnergy.js":
/*!*************************************!*\
  !*** ./src/utils/consumedEnergy.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:!0}),exports.toFixedNumber=toFixedNumber,exports.oneHourEnergy=oneHourEnergy;function toFixedNumber(a,b){var c=(+(Math.round(+(a+\"e\"+b))+\"e\"+-b)).toFixed(b);return+c}function oneHourEnergy(a){var b=a.rate,c=a.power;return b*(c/1e3)}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9jb25zdW1lZEVuZXJneS5qcyJdLCJuYW1lcyI6WyJ0b0ZpeGVkTnVtYmVyIiwib25lSG91ckVuZXJneSIsIm51bSIsInByZWNpc2lvbiIsInN0ciIsIk1hdGgiLCJyb3VuZCIsInRvRml4ZWQiLCJyYXRlIiwicG93ZXIiXSwibWFwcGluZ3MiOiI0RUFHZ0JBLGEsQ0FBQUEsYSxTQWVBQyxhLENBQUFBLGEsQ0FmVCxRQUFTRCxjQUFULENBQXVCRSxDQUF2QixDQUFvQ0MsQ0FBcEMsQ0FBdUQsQ0FDNUQsR0FBTUMsR0FBTSxDQUFDLEVBQ1hDLEtBQUtDLEtBQUwsQ0FBVyxFQUFFSixFQUFNLEdBQU4sQ0FBWUMsQ0FBZCxDQUFYLEVBQ0EsR0FEQSxDQUVBLENBQUNBLENBSFUsQ0FBRCxFQUlUSSxPQUpTLENBSURKLENBSkMsQ0FBWixDQU1BLE9BQWNDLENBQ2YsQ0FPTSxRQUFTSCxjQUFULEdBQXVELElBQTlCTyxFQUE4QixHQUE5QkEsSUFBOEIsQ0FBeEJDLENBQXdCLEdBQXhCQSxLQUF3QixDQUM1RCxNQUFPRCxJQUFRQyxFQUFRLEdBQWhCLENBQ1IiLCJmaWxlIjoiY29uc3VtZWRFbmVyZ3kuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2V1Z3BvbG96L1Byb2plY3RzL2dpdGh1Yi9zaHJpLWVudHJhbmNlLXRhc2stMy0yIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuLy8g0YHQutC+0L/QuNGA0L7QstCw0L3QviDRgSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjM1NjA1NjlcbmV4cG9ydCBmdW5jdGlvbiB0b0ZpeGVkTnVtYmVyKG51bTogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlcikge1xuICBjb25zdCBzdHIgPSAoKyhcbiAgICBNYXRoLnJvdW5kKCsobnVtICsgXCJlXCIgKyBwcmVjaXNpb24pKSArXG4gICAgXCJlXCIgK1xuICAgIC1wcmVjaXNpb25cbiAgKSkudG9GaXhlZChwcmVjaXNpb24pO1xuXG4gIHJldHVybiBOdW1iZXIoc3RyKTtcbn1cblxudHlwZSBPbmVIb3VyRW5lcmd5ID0ge3xcbiAgcmF0ZTogbnVtYmVyLFxuICBwb3dlcjogbnVtYmVyXG58fTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uZUhvdXJFbmVyZ3koeyByYXRlLCBwb3dlciB9OiBPbmVIb3VyRW5lcmd5KSB7XG4gIHJldHVybiByYXRlICogKHBvd2VyIC8gMTAwMCk7XG59XG4iXX0=\n\n//# sourceURL=webpack://smarthome/./src/utils/consumedEnergy.js?");

/***/ })

/******/ });
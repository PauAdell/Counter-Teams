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

/***/ "./src/components/counter.js":
/*!***********************************!*\
  !*** ./src/components/counter.js ***!
  \***********************************/
/*! exports provided: Text, Infoequip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Infoequip", function() { return Infoequip; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/*
export const Counter = ( { count, setCount } ) => {
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Suma
      </button>
      <button onClick={() => setCount(count - 1)}>
        Resta
      </button>
    </div>
  );
};
*/

const Text = ({
  text
}) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, text);
/*
export const CounterS = () => {

  const [ state, setState ]= useState( {valor : 3, nom: 'Pau'} );
  return (
    <div>
      <p>You clicked {state.valor} times. Hola, {state.nom} </p>
      <button onClick={() => {
        setState( {
          ...state,
          valor : state.valor + 1 });
        
      }}>
        Suma
      </button>
    </div>
  );
};
*/

const Infoequip = ({
  opcions,
  equip,
  setEquip,
  incPartits,
  incPunts,
  decPunts
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Text, {
    text: equip.nom
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Estadistiques del equip:"), opcions.map(({
    value,
    label
  }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    onClick: () => setEquip(value),
    disabled: value === equip.id
  }, label)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Nom: ", equip.nom, " "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Partits jugats: ", equip.partits, " "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "punts: ", equip.punts, " "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    onClick: function (event) {
      incPunts();
      incPartits();
    }
  }, " Juga i guanya partit "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    onClick: decPunts
  }, " Penalitza punt"));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/counter */ "./src/components/counter.js");

// Import dependencies

 //Declaració de variables

let estat = {
  equipActiu: 'yyy',
  equips: {
    xxx: {
      id: 'xxx',
      nom: 'CapriSun',
      partits: 1,
      punts: 0
    },
    yyy: {
      id: 'yyy',
      nom: 'Pistacho',
      partits: 3,
      punts: 2
    },
    zzz: {
      id: 'zzz',
      nom: 'Baguette',
      partits: 2,
      punts: 1
    },
    www: {
      id: 'www',
      nom: 'hola',
      partits: 2,
      punts: 1
    }
  }
}; //Funcions

function setEquipActiu(equipActiu) {
  estat = { ...estat,
    equipActiu
  };
  refresh();
}

function setPartits(partits) {
  estat = { ...estat,
    equips: { ...estat.equips,
      [estat.equipActiu]: { ...estat.equips[estat.equipActiu],
        partits
      }
    }
  };
  refresh();
}

function setPunts(punts) {
  estat = { ...estat,
    equips: { ...estat.equips,
      [estat.equipActiu]: { ...estat.equips[estat.equipActiu],
        punts
      }
    }
  };
  refresh();
} // Render component in DOM


const wrapper = document.getElementById('react-example-wrapper');

function refresh() {
  const equip = estat.equips[estat.equipActiu];
  const opcions = Object.values(estat.equips).map(({
    id,
    nom
  }) => ({
    value: id,
    label: nom
  }));
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_counter__WEBPACK_IMPORTED_MODULE_1__["Infoequip"], {
    opcions: opcions,
    equip: equip,
    setEquip: setEquipActiu,
    incPartits: () => setPartits(equip.partits + 1),
    incPunts: () => setPunts(equip.punts + 1),
    decPunts: () => setPunts(equip.punts - 1)
  })), wrapper);
}

refresh();

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
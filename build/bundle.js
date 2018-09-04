/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		4: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//Authentication
var AUTH_USER = exports.AUTH_USER = 'auth_user';
var UNAUTH_USER = exports.UNAUTH_USER = 'unauth_user';
var AUTH_ERROR = exports.AUTH_ERROR = 'auth_error';

//Step One
var PATIENT_NAME = exports.PATIENT_NAME = 'patientName';
var PATIENT_NUMBER = exports.PATIENT_NUMBER = 'patientNumber';
var RIDE_DATE = exports.RIDE_DATE = 'rideDate';
var RIDE_TIME = exports.RIDE_TIME = 'rideTime';

//step two
var CENTER = exports.CENTER = 'set_center';
var PICKUPADD = exports.PICKUPADD = 'pickup_add';
var PICKUP_LATLNG = exports.PICKUP_LATLNG = 'pickup_latlng';
var DROPOFF_LATLNG = exports.DROPOFF_LATLNG = 'dropoff_latlng';
var DROPOFFADD = exports.DROPOFFADD = 'dropoff_add';
var PICKUPSUFFIX = exports.PICKUPSUFFIX = 'pickup_suffix';
var DROPOFFSUFFIX = exports.DROPOFFSUFFIX = 'dropoff_suffix';
var DISTANCE = exports.DISTANCE = 'distance';
var DOUBLEDISTANCE = exports.DOUBLEDISTANCE = 'double_distance';
var PICKBTN = exports.PICKBTN = 'pickBtnCnfrm';
var DROPBTN = exports.DROPBTN = 'dropBtnCnfrm';
var PICKMARKER = exports.PICKMARKER = 'pick_marker';
var DROPMARKER = exports.DROPMARKER = 'drop_marker';

//step three 
var ISAMBSEL = exports.ISAMBSEL = 'isAmbSel';
var ADDONSEL = exports.ADDONSEL = 'isAddonSel';
var TOTALPRICE = exports.TOTALPRICE = 'totalPrice';

//Main
var CURRENT_STEP = exports.CURRENT_STEP = 'current_step';
var SPLASH = exports.SPLASH = 'splash';
var RESET = exports.RESET = 'reset';
var SUCCESSLEAD = exports.SUCCESSLEAD = 'success_lead';
var PHONENUM = exports.PHONENUM = 'phone_number';
var PHERR = exports.PHERR = 'phone_error';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
        secret: 'PatientAppForBookingAmbulance@040-33911911',
        // MapApi:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA-CH5W8QV1hpw7xZMbJAjjUx7ph0Z-a0s&libraries=places",
        MapApi: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA-CH5W8QV1hpw7xZMbJAjjUx7ph0Z-a0s&v=3.exp&libraries=geometry,drawing,places",
        gAnalytics: "UA-119993910-1",
        leadCreateApi: 'http://localhost/StanFleet/LeadData/Lead/create?key=22368285a4cba5c286615b799a814b3ee7dae0a4',
        leadUpdateApi: 'http://localhost/StanFleet/LeadData/Lead/update?key=22368285a4cba5c286615b799a814b3ee7dae0a4',
        priceApi: 'http://localhost/StanFleet/CallCenterData/pricecalculator',
        enquiryApi: 'http://localhost/StanFleet/CallCenterData/savePatientDataAPI',
        partnerHosImg: 'https://partners.stanplus.co.in/assets/partner_img',
        partnerHosList: 'https://partners.stanplus.co.in/Spreadsheet/getpartnerhospital/phospital'

};

// secret:'PatientAppForBookingAmbulance@040-33911911',
// // MapApi:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA-CH5W8QV1hpw7xZMbJAjjUx7ph0Z-a0s&libraries=places",
// MapApi:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA-CH5W8QV1hpw7xZMbJAjjUx7ph0Z-a0s&v=3.exp&libraries=geometry,drawing,places",
// gAnalytics : "UA-119993910-1",
// leadCreateApi:'http://localhost/StanFleet/LeadData/Lead/create?key=22368285a4cba5c286615b799a814b3ee7dae0a4',
// leadUpdateApi:'http://localhost/StanFleet/LeadData/Lead/update?key=22368285a4cba5c286615b799a814b3ee7dae0a4',
// priceApi:'http://localhost/StanFleet/CallCenterData/pricecalculator',
// enquiryApi:'http://localhost/StanFleet/CallCenterData/savePatientDataAPI',
// partnerHosImg:'https://partners.stanplus.co.in/assets/partner_img',
// partnerHosList: 'https://partners.stanplus.co.in/Spreadsheet/getpartnerhospital/phospital'

// secret:'PatientAppForBookingAmbulance@040-33911911',
// // MapApi:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA-CH5W8QV1hpw7xZMbJAjjUx7ph0Z-a0s&libraries=places",
// MapApi:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA-CH5W8QV1hpw7xZMbJAjjUx7ph0Z-a0s&v=3.exp&libraries=geometry,drawing,places",
// gAnalytics : "UA-119993910-1",
// leadCreateApi:'https://fqa.stanplus.co.in/LeadData/Lead/create?key=22368285a4cba5c286615b799a814b3ee7dae0a4',
// leadUpdateApi:'https://fqa.stanplus.co.in/LeadData/Lead/update?key=22368285a4cba5c286615b799a814b3ee7dae0a4',
// priceApi:'https://fqa.stanplus.co.in/CallCenterData/pricecalculator',
// enquiryApi:'https://fqa.stanplus.co.in/CallCenterData/savePatientDataAPI',
// partnerHosImg:'https://partners.stanplus.co.in/assets/partner_img',
// partnerHosList: 'https://partners.stanplus.co.in/Spreadsheet/getpartnerhospital/phospital'

// secret:'PatientAppForBookingAmbulance@040-33911911',
// // MapApi:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA-CH5W8QV1hpw7xZMbJAjjUx7ph0Z-a0s&libraries=places",
// MapApi:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA-CH5W8QV1hpw7xZMbJAjjUx7ph0Z-a0s&v=3.exp&libraries=geometry,drawing,places",
// gAnalytics : "UA-119993910-1",
// leadCreateApi:'https://stanfleet.com/LeadData/Lead/create?key=22368285a4cba5c286615b799a814b3ee7dae0a4',
// leadUpdateApi:'https://stanfleet.com/LeadData/Lead/update?key=22368285a4cba5c286615b799a814b3ee7dae0a4',
// priceApi:'https://stanfleet.com/CallCenterData/pricecalculator',
// enquiryApi:'https://stanfleet.com/CallCenterData/savePatientDataAPI',
// partnerHosImg:'https://partners.stanplus.co.in/assets/partner_img',
// partnerHosList: 'https://partners.stanplus.co.in/Spreadsheet/getpartnerhospital/phospital'

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(20);

Object.keys(_main).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _main[key];
    }
  });
});

var _stepOne = __webpack_require__(21);

Object.keys(_stepOne).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _stepOne[key];
    }
  });
});

var _stepTwo = __webpack_require__(22);

Object.keys(_stepTwo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _stepTwo[key];
    }
  });
});

var _stepThree = __webpack_require__(11);

Object.keys(_stepThree).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _stepThree[key];
    }
  });
});

var _auth = __webpack_require__(23);

Object.keys(_auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth[key];
    }
  });
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("moment/moment");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _antd = __webpack_require__(5);

__webpack_require__(24);

var _rcTimePicker = __webpack_require__(25);

var _rcTimePicker2 = _interopRequireDefault(_rcTimePicker);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _reactGa = __webpack_require__(3);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _reactRedux = __webpack_require__(4);

var _actions = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_reactGa2.default.initialize(_config2.default.gAnalytics, {
    debug: true,
    titleCase: false,
    gaOptions: {
        // clientId: localStorage.getItem('password') ? localStorage.getItem('password') : 'undefined device'
    }
});


var StepOneCategory = 'step One';
var hospitalID = '[ ' + (localStorage.getItem('hospSel') ? JSON.parse(localStorage.getItem('hospList'))[localStorage.getItem('hospSel')]['HospitalID'] : 'unkown') + ']';

var StepOne = function (_React$Component) {
    _inherits(StepOne, _React$Component);

    function StepOne(props) {
        _classCallCheck(this, StepOne);

        var _this = _possibleConstructorReturn(this, (StepOne.__proto__ || Object.getPrototypeOf(StepOne)).call(this, props));

        _this.nameEnterPressed = function (event) {
            var code = event.keyCode || event.which;
            if (code === 13) {
                //13 is the enter keycode
                //Do stuff in here

                _this.phNumber.focus();
            }
        };

        _this.patientNameGA = function () {
            _reactGa2.default.event({
                category: StepOneCategory,
                action: 'Patient Name field selected',
                label: 'Patient Name Field'
            });
        };

        _this.patientNumbGA = function () {
            _reactGa2.default.event({
                category: StepOneCategory,
                action: 'Patient Numb field selected',
                label: 'Patient Num Field'
            });
        };

        _this.rideDateGA = function () {
            _reactGa2.default.event({
                category: StepOneCategory,
                action: 'Ride Date field selected',
                label: 'Ride Date'
            });
        };

        _this.rideTimeGA = function () {
            _reactGa2.default.event({
                category: StepOneCategory,
                action: 'Ride Time field selected',
                label: 'Ride Time'
            });
        };

        _this.date = new Date();
        _this.hr = _this.date.getHours();
        _this.now = (0, _moment2.default)().hour(_this.hr).minute(_this.date.getMinutes());
        _this.state = {
            ph: false,
            phErr: false
        };
        return _this;
    }

    _createClass(StepOne, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.rideTimeAction(this.now.format('h:mm a'));
            this.props.rideDateAction((0, _moment2.default)().format('DD/MM/YYYY'));
        }
        //google analytics

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var dateFormat = 'DD/MM/YYYY';
            var format = 'h:mm a';

            var disabledHours = function disabledHours() {
                if ((0, _moment2.default)().format('DD/MM/YYYY') === _this2.props.rideDate) {
                    var disHour = [];
                    var mmt = (0, _moment2.default)();
                    // Your moment at midnight
                    var mmtMidnight = mmt.clone().startOf('day');

                    // Difference in minutes
                    var diffHours = mmt.diff(mmtMidnight, 'hour');

                    for (var i = 0; i < diffHours - 1; i++) {
                        disHour.push(i + 1);
                    }
                    return disHour;
                }
            };

            var disabledMinutes = function disabledMinutes() {
                var r_time = (0, _moment2.default)(_this2.props.rideTime, ["h:mm A"]).format("HH:mm").slice(0, 2);
                if ((0, _moment2.default)().hour() == r_time) {
                    if ((0, _moment2.default)().format('DD/MM/YYYY') === _this2.props.rideDate) {
                        if (r_time >= 12) {
                            var disAm = null;
                            var x = document.getElementsByClassName('rc-time-picker-panel-select');
                            for (var i = 0; i < x.length; i++) {
                                disAm = x[2].getElementsByTagName("ul")[0].getElementsByTagName("li")[0];
                            }
                            if (disAm !== null) {
                                disAm.style.pointerEvents = "none";
                                disAm.style.opacity = 0.3;
                            }
                        }
                        var disMint = [];
                        var diffMinutes = (0, _moment2.default)().get('minute');
                        for (var _i = 0; _i < diffMinutes; _i++) {
                            disMint.push(_i);
                        }
                        return disMint;
                    }
                }
            };
            var check = function check(e) {

                if (e.target.value.length < 10) {
                    _this2.setState({ ph: e.target.value }, function () {
                        _this2.setState({ phErr: true });
                    });
                } else {
                    _this2.setState({ phErr: false });
                }
            };
            var keyPressFunc = function keyPressFunc(e) {
                var code = e.keyCode || e.which;
                if (code === 13) {
                    //13 is the enter keycode
                    _this2.dateSelect.focus();
                }

                if (e.target.value.length === 10) {

                    document.getElementById("phoneNo").style.border = "1px solid red";

                    setTimeout(function () {
                        document.getElementById("phoneNo").style.border = "";
                    }, 500);
                    return e.preventDefault();
                }
            };
            var nameHandler = function nameHandler(e) {
                _this2.props.patientNameAction(e.target.value);
            };
            var phoneHandler = function phoneHandler(e) {
                _this2.props.patientNumberAction(e.target.value);
            };
            var dateHandler = function dateHandler(date, dateString) {
                _this2.props.rideDateAction(dateString);
            };
            var timeHandler = function timeHandler(value) {

                if (_this2.now !== value.format(format)) {

                    var updatedTime = value.format(format);
                    _this2.props.rideTimeAction(updatedTime);
                }
            };

            return _react2.default.createElement(
                _antd.Row,
                { className: 'stepOne' },
                _react2.default.createElement(
                    _antd.Col,
                    { lg: { span: 9, offset: 1 }, xs: { span: 22, offset: 1 } },
                    screen.width < 768 && _react2.default.createElement(
                        'h2',
                        null,
                        'Request your ambulance here. We\u2019ll do our best to serve your journey'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'formBorder' },
                        _react2.default.createElement(
                            'label',
                            null,
                            'Patient Name'
                        ),
                        _react2.default.createElement(_antd.Input, {
                            prefix: _react2.default.createElement(_antd.Icon, { type: 'user' }),
                            placeholder: 'Name',
                            id: 'name',
                            className: 'PhInpt',
                            onChange: nameHandler,
                            onKeyPress: this.nameEnterPressed,
                            onFocus: this.patientNameGA,
                            value: this.props.patientName
                        }),
                        _react2.default.createElement(
                            'label',
                            null,
                            'Phone Number'
                        ),
                        _react2.default.createElement(_antd.Input, {
                            type: 'number',
                            prefix: _react2.default.createElement('img', { src: __webpack_require__(12), alt: 'phone', height: '7%', width: '7%' }),
                            placeholder: 'Phone Number', id: 'phoneNo',
                            className: 'PhInpt',
                            onKeyUp: function onKeyUp(e) {
                                return check(e);
                            },
                            onKeyPress: function onKeyPress(e) {
                                return keyPressFunc(e);
                            },
                            onChange: phoneHandler,
                            ref: function ref(phNumber) {
                                _this2.phNumber = phNumber;
                            },
                            onFocus: this.patientNumbGA,
                            value: this.props.patientNumber
                        }),
                        this.state.phErr && _react2.default.createElement(_antd.Alert, { message: 'Please enter 10 digits', type: 'error' }),
                        _react2.default.createElement(
                            'label',
                            null,
                            'Booking Date'
                        ),
                        _react2.default.createElement(_antd.DatePicker, {
                            defaultValue: (0, _moment2.default)(),
                            format: dateFormat,
                            className: 'datePicker',
                            onChange: dateHandler,
                            ref: function ref(dateSelect) {
                                _this2.dateSelect = dateSelect;
                            },
                            disabledDate: function disabledDate(current) {
                                return (0, _moment2.default)().add(-1, 'days') >= current;
                            },
                            onFocus: this.rideDateGA
                        }),
                        _react2.default.createElement(
                            'label',
                            null,
                            'Booking Time'
                        ),
                        _react2.default.createElement(_rcTimePicker2.default, {
                            showSecond: false,
                            defaultValue: this.now,
                            onChange: timeHandler,
                            format: format,
                            use12Hours: true,
                            inputReadOnly: true,
                            allowEmpty: false,
                            defaultOpenValue: (0, _moment2.default)(),
                            disabledMinutes: disabledMinutes,
                            disabledHours: disabledHours,
                            ref: function ref(timeSelect) {
                                _this2.timeSelect = timeSelect;
                            },
                            onFocus: this.rideTimeGA
                        })
                    )
                ),
                _react2.default.createElement(
                    _antd.Col,
                    { lg: { span: 12, offset: 1 } },
                    screen.width > 768 && _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'h1',
                            { className: 'h1TextS1' },
                            'STANPLUS'
                        ),
                        _react2.default.createElement(
                            'h2',
                            { className: 'h2TextS1' },
                            'India\'s Largest Private Ambulance Network'
                        )
                    )
                )
            );
        }
    }]);

    return StepOne;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        patientName: state.StepOneReducer.patient_name,
        patientNumber: state.StepOneReducer.patient_number,
        rideDate: state.StepOneReducer.ride_date,
        rideTime: state.StepOneReducer.ride_time
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { patientNameAction: _actions.patientNameAction, patientNumberAction: _actions.patientNumberAction, rideDateAction: _actions.rideDateAction, rideTimeAction: _actions.rideTimeAction })(StepOne);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("antd/dist/antd.css");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ambSelected = ambSelected;
exports.addOnSelected = addOnSelected;
exports.priceCal = priceCal;

var _types = __webpack_require__(0);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _reactGa = __webpack_require__(3);

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

_reactGa2.default.initialize(_config2.default.gAnalytics, {
    gaOptions: {
        clientId: localStorage.getItem('password') ? localStorage.getItem('password') : 'undefined device'
    }
});

var StepThreeCategory = 'step Three ';
var hospitalID = '' + (localStorage.getItem('hospSel') ? JSON.parse(localStorage.getItem('hospList'))[localStorage.getItem('hospSel')]['HospitalID'] : 'unkown');
//it will check which type of abmulance is selected
function ambSelected(ambType) {
    return function (dispatch) {
        var small = 'samllVehicle';
        var large = 'largeVehicle';
        if (ambType === small) {
            _reactGa2.default.event({
                category: StepThreeCategory,
                action: 'Vehicle type selected',
                label: small + ' Selected'
            });
        } else {
            _reactGa2.default.event({
                category: StepThreeCategory,
                action: 'Vehicle type selected',
                label: large + ' Selected'
            });
        }
        dispatch({ type: _types.ISAMBSEL, payload: ambType });
    };
};

//this function add and remove addons 
function addOnSelected(addon) {
    return function (dispatch, getState) {
        var _addons;

        var addons = [];
        (_addons = addons).push.apply(_addons, _toConsumableArray(getState().StepThreeReducer.addonSel));
        if (addons.includes(addon)) {
            _reactGa2.default.event({
                category: StepThreeCategory,
                action: 'Addon clicked',
                label: addon + ' clicked',
                value: 0
            });
            addons = addons.filter(function (item) {
                return item !== addon;
            });
        } else {
            _reactGa2.default.event({
                category: StepThreeCategory,
                action: 'Addon clicked',
                label: addon + ' clicked',
                value: 1
            });
            addons.push(addon);
        }
        dispatch({ type: _types.ADDONSEL, payload: addons });
    };
}

function priceCal() {
    return function (dispatch, getState) {
        var small = 'samllVehicle';
        var large = 'largeVehicle';
        var distance = getState().StepTwoReducer.dbDistance;
        var ambulanceType = getState().StepThreeReducer.isAmbSel;
        var addons = getState().StepThreeReducer.addonSel;
        var stanID = hospitalID.slice(0, 7);
        var selAmbType = '';
        if (ambulanceType === small) {
            if (addons.includes("WheelChair")) {
                selAmbType = "MUV";
            } else if (addons.includes("WheelChair")) {
                selAmbType = "EECO";
            } else {
                selAmbType = "OMNI";
            }
        } else if (ambulanceType === large) {
            if (addons.indexOf('Oxygen') > -1 && addons.indexOf('Technician') > -1 && addons.indexOf('AC') > -1) {

                selAmbType = "TEMPO";
            } else {
                selAmbType = "ALS";
            }
        }
        _axios2.default.post(_config2.default.priceApi, { distance: distance, ambtype: selAmbType, stanid: stanID }).then(function (response) {
            var TotalPrice = 0;
            addons.map(function (option) {
                if (option !== "WheelChair") {
                    TotalPrice += response.data[option];
                }
            });
            TotalPrice += response.data['Driver'];
            TotalPrice += response.data[selAmbType];
            dispatch({ type: _types.TOTALPRICE, payload: TotalPrice });
        }).catch(function () {
            console.log('error');
        });
    };
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(14);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(15);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.get('/', function (req, res) {

    res.send((0, _renderer2.default)());
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(16);

var _Main = __webpack_require__(17);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var content = (0, _server.renderToString)(_react2.default.createElement(_Main2.default, null));
    console.log('testing server');
    return '\n        <html lang="en">\n        <head>\n            <meta charset="UTF-8">\n            <meta name="viewport" content="width=device-width, initial-scale=1.0">\n            <meta http-equiv="X-UA-Compatible" content="ie=edge">\n            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">\n            <link rel="stylesheet" type="text/css" href="/styles.css" />\n            <title>Book Ambulance - Stanplus</title>\n        </head>\n\n        <body>\n\n            <div id="root">\n                ' + content + '\n            </div>\n            \n        <script  src="/bundle.js"></script>\n        </body>\n        </html>\n    ';
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(5);

__webpack_require__(10);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _reactGa = __webpack_require__(3);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _reactRouter = __webpack_require__(18);

var _reactRedux = __webpack_require__(4);

var _reactLoadable = __webpack_require__(19);

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _actions = __webpack_require__(6);

var _StepOne = __webpack_require__(9);

var _StepOne2 = _interopRequireDefault(_StepOne);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Step = _antd.Steps.Step;

_reactGa2.default.initialize(_config2.default.gAnalytics, {
    gaOptions: {
        // clientId: localStorage.getItem('password') ? localStorage.getItem('password') : 'undefined device'
    }
});

// import StepTwo from './StepTwo'
var S1 = (0, _reactLoadable2.default)({
    loader: function loader() {
        return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9));
    },
    loading: function loading() {
        return _react2.default.createElement(
            'div',
            null,
            'Loading...'
        );
    }
});
var S2 = (0, _reactLoadable2.default)({
    loader: function loader() {
        return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 26));
    },
    loading: function loading() {
        return _react2.default.createElement(
            'div',
            null,
            'Loading...'
        );
    }
});
var S3 = (0, _reactLoadable2.default)({
    loader: function loader() {
        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 27));
    },
    loading: function loading() {
        return _react2.default.createElement(
            'div',
            null,
            'Loading...'
        );
    }
});
var S4 = (0, _reactLoadable2.default)({
    loader: function loader() {
        return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 28));
    },
    loading: function loading() {
        return _react2.default.createElement(
            'div',
            null,
            'Loading...'
        );
    }
});
var S5 = (0, _reactLoadable2.default)({
    loader: function loader() {
        return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 29));
    },
    loading: function loading() {
        return _react2.default.createElement(
            'div',
            null,
            'Loading...'
        );
    }
});

var hospitalID = '[ ' + (localStorage.getItem('hospSel') ? JSON.parse(localStorage.getItem('hospList'))[localStorage.getItem('hospSel')]['HospitalID'] : 'unkown') + ']';

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this.next = function () {
            var stepChecker = _this.props.currentStep + 1;
            _this.props.StepsHandler(stepChecker);
            _reactGa2.default.event({
                category: 'Next Button clicked',
                action: 'clicked on Next Button',
                label: 'Moved to step ' + (stepChecker + 1)
            });
        };

        _this.prev = function () {
            var currentStep = _this.props.currentStep - 1;
            _this.props.StepsHandler(currentStep);
            _reactGa2.default.event({
                category: 'Previous Button clicked',
                action: 'clicked on previous Button',
                label: 'Moved to step ' + (currentStep + 1)
            });
        };

        _this.current = function (item) {
            if (item.title === "First") {
                if (!(_this.props.currentStep === 0)) {
                    var current = 0;
                    // this.setState({current})
                    _this.props.StepsHandler(current);
                }
                // && this.props.patientName && this.props.patientNumber && (this.props.patientNumber).length == 10 && this.props.rideDate && this.props.rideTime
            } else if (item.title === "Second") {
                if (!(_this.props.currentStep === 1)) {
                    var _current = 1;
                    _this.props.StepsHandler(_current);
                }
                // && this.props.pickupLocation && this.props.dropoffLocation
            } else if (item.title === "Third" && _this.props.pickupLocation && _this.props.dropoffLocation) {
                if (!(_this.props.currentStep === 2)) {
                    var _current2 = 2;
                    _this.props.StepsHandler(_current2);
                }
                // && this.props.selAmbulance && this.props.selAddons.length >0
            } else if (item.title === "Fourth" && _this.props.selAmbulance && _this.props.selAddons.length > 0) {
                if (!(_this.props.currentStep === 3)) {
                    var _current3 = 3;
                    _this.props.StepsHandler(_current3);
                }
                // && this.props.selAmbulance && this.props.selAddons.length >0
            } else if (item.title === "Last" && _this.props.selAmbulance && _this.props.selAddons.length > 0) {
                if (!(_this.props.currentStep === 4)) {
                    var _current4 = 4;
                    _this.props.StepsHandler(_current4);
                }
            }
        };

        _this.stepOne = function () {
            return _react2.default.createElement(S1, null);
        };

        _this.stepTwo = function () {
            return _react2.default.createElement(S2, null);
        };

        _this.stepThree = function () {
            return _react2.default.createElement(S3, null);
        };

        _this.stepFour = function () {
            return _react2.default.createElement(S4, null);
        };

        _this.stepFive = function () {
            return _react2.default.createElement(S5, null);
        };

        _this.state = {
            ph: false,
            phErr: false,
            splash: true
        };
        return _this;
    }
    //notification on 


    _createClass(Main, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.currentStep === 3) {}
            var current = this.props.currentStep;
            if (current === 0) {
                _reactGa2.default.event({
                    category: 'step One',
                    action: 'on Step1'
                });
            }
            if (current === 1) {
                _reactGa2.default.event({
                    category: 'step Two',
                    action: 'on step2'
                });
            }
            if (current === 2) {
                _reactGa2.default.event({
                    category: 'step Three',
                    action: 'on Step3'
                });
            }
            if (current === 3) {
                _reactGa2.default.event({
                    category: 'step 4',
                    action: 'on step4'
                });
            }
            if (current === 4) {
                _reactGa2.default.event({
                    category: 'step 5',
                    action: 'on step4'
                });
            }
        }
        //Data from Step One ends here
        //steps functions

        //components for different stages

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            //steps  code start here
            var steps = [{
                title: 'First',
                content: this.stepOne()
            }, {
                title: 'Second',
                content: this.stepTwo()
            }, {
                title: 'Third',
                content: this.stepThree()
            }, {
                title: 'Fourth',
                content: this.stepFour()
            }, {
                title: 'Last',
                content: this.stepFive()
            }];
            var nextButton = function nextButton() {

                if (_this2.props.currentStep < steps.length - 1) {
                    if (_this2.props.currentStep === 0) {
                        return _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(
                                _antd.Col,
                                { lg: { span: 9, offset: 1 }, xs: { span: 22, offset: 1 } },
                                _react2.default.createElement(
                                    _antd.Button,
                                    { type: 'primary', className: 'fwbs1', onClick: function onClick() {
                                            return _this2.next();
                                        }, disabled: !_this2.props.patientName || !_this2.props.patientNumber || _this2.props.patientNumber.length !== 10 || !_this2.props.rideDate || !_this2.props.rideTime },
                                    'Next'
                                )
                            )
                        );
                    } else if (_this2.props.currentStep === 1 && _this2.props.pickupConfirmButton === false && _this2.props.dropoffConfirmButton === false) {
                        return _react2.default.createElement(
                            _antd.Button,
                            { type: 'primary', className: 'fWPBtn', onClick: function onClick() {
                                    return _this2.next();
                                }, disabled: !_this2.props.pickupLocation || !_this2.props.dropoffLocation },
                            'Next'
                        );
                    } else if (_this2.props.currentStep === 2) {
                        return _react2.default.createElement(
                            _antd.Button,
                            { type: 'primary', className: 'fWPBtn', onClick: function onClick() {
                                    return _this2.next();
                                }, disabled: !_this2.props.selAmbulance || !_this2.props.selAddons.length > 0 },
                            'Next'
                        );
                    } else if (_this2.props.currentStep === 3) {
                        return _react2.default.createElement(
                            _antd.Button,
                            { type: 'primary', className: 'fWPBtn', onClick: function onClick() {
                                    return _this2.next();
                                } },
                            'Next'
                        );
                    }
                }
            };
            var prevButton = function prevButton() {
                if (_this2.props.currentStep > 0 && _this2.props.pickupConfirmButton === false && _this2.props.dropoffConfirmButton === false && _this2.props.currentStep != 4) {

                    return _react2.default.createElement(
                        _antd.Button,
                        { className: 'fWPBtn', onClick: function onClick() {
                                return _this2.prev();
                            } },
                        ' Previous '
                    );
                }
            };
            var doneButton = function doneButton() {
                _antd.message.success('Processing complete!');
                _reactGa2.default.event({
                    category: 'Done Button clicked',
                    action: 'clicked on Done Button',
                    label: 'Reset the App'
                });
                _this2.props.Reset();
            };
            var current = this.props.currentStep;
            //steps  code ends here

            return _react2.default.createElement(
                'div',
                { className: 'Main' },
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(
                        _antd.Col,
                        { lg: { span: 24 } },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _antd.Steps,
                                { current: current, className: 'stepsHeader' },
                                steps.map(function (item) {
                                    return _react2.default.createElement(Step, { key: item.title, title: item.title, onClick: function onClick() {
                                            return _this2.current(item);
                                        } });
                                })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'steps-content' },
                                steps[this.props.currentStep].content
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'steps-action' },
                                nextButton(),
                                this.props.currentStep === steps.length - 1 && _react2.default.createElement(
                                    _antd.Row,
                                    null,
                                    _react2.default.createElement(
                                        _antd.Col,
                                        { lg: { span: 9, offset: 8 } },
                                        _react2.default.createElement(
                                            _antd.Button,
                                            { type: 'primary', className: 'fWBtn', onClick: doneButton },
                                            'Done'
                                        )
                                    )
                                ),
                                prevButton()
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Main;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        currentStep: state.Main.CurrentStep,
        patientName: state.StepOneReducer.patient_name,
        patientNumber: state.StepOneReducer.patient_number,
        rideDate: state.StepOneReducer.ride_date,
        rideTime: state.StepOneReducer.ride_time,
        pickupLocation: state.StepTwoReducer.pickupLatlng,
        dropoffLocation: state.StepTwoReducer.dropoffLatlng,
        pickupConfirmButton: state.StepTwoReducer.pickBtn,
        dropoffConfirmButton: state.StepTwoReducer.dropBtn,
        selAmbulance: state.StepThreeReducer.isAmbSel,
        selAddons: state.StepThreeReducer.addonSel
    };
};

// export default Main;
exports.default = (0, _reactRedux.connect)(mapStateToProps, { StepsHandler: _actions.StepsHandler, Reset: _actions.Reset })(Main);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StepsHandler = StepsHandler;
exports.instantLeadHandler = instantLeadHandler;
exports.Reset = Reset;

var _types = __webpack_require__(0);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StepsHandler(step) {
    return function (dispatch, getState) {
        dispatch({ type: _types.CURRENT_STEP, payload: step });
        if (getState().Main.CurrentStep === 1) {
            var patientName = getState().StepOneReducer.patient_name;
            var patientNumber = getState().StepOneReducer.patient_number;
            var rideTime = getState().StepOneReducer.ride_time;
            var rideDate = getState().StepOneReducer.ride_date;
            _axios2.default.post(_config2.default.leadCreateApi, {
                name: patientName,
                mobile_number: patientNumber,
                rideStartDate: rideDate,
                rideStartTime: rideTime,
                lead_generated_by: 'Website',
                source: 'WBS'

            }).then(function (response) {

                var leadId = response.data.data.id;
                dispatch({ type: 'LeadId', payload: leadId });
            }).catch(function () {
                console.log('error');
            });
        } else if (getState().Main.CurrentStep === 2) {
            var LeadId = getState().Main.LeadId;
            var pickupAddress = getState().StepTwoReducer.pickupAddress;
            var pickupLat = getState().StepTwoReducer.pickupLatlng.lat;
            var pickupLng = getState().StepTwoReducer.pickupLatlng.lng;

            var dropoffAddress = getState().StepTwoReducer.dropoffAddress;
            var dropoffLat = getState().StepTwoReducer.dropoffLatlng.lat;
            var dropoffLng = getState().StepTwoReducer.dropoffLatlng.lng;
            _axios2.default.post(_config2.default.leadUpdateApi, {
                leadId: LeadId,
                pickup_location: { address: pickupAddress, pickup_latitude: pickupLat, pickup_longitude: pickupLng },
                drop_location: { address: dropoffAddress, dropoff_latitude: dropoffLat, dropoff_longitude: dropoffLng } }).then(function (response) {
                console.log(response.data);
            }).catch(function () {
                console.log('error');
            });
        } else if (getState().Main.CurrentStep === 4) {
            var _patientName = getState().StepOneReducer.patient_name;
            var _patientNumber = getState().StepOneReducer.patient_number;
            var _rideTime = getState().StepOneReducer.ride_time;
            var _rideDate = getState().StepOneReducer.ride_date;

            var _LeadId = getState().Main.LeadId;
            var _pickupAddress = getState().StepTwoReducer.pickupAddress;
            var _pickupLat = getState().StepTwoReducer.pickupLatlng.lat;
            var _pickupLng = getState().StepTwoReducer.pickupLatlng.lng;

            var _dropoffAddress = getState().StepTwoReducer.dropoffAddress;
            var _dropoffLat = getState().StepTwoReducer.dropoffLatlng.lat;
            var _dropoffLng = getState().StepTwoReducer.dropoffLatlng.lng;

            var distance = getState().StepTwoReducer.distance;

            var ambulanceType = getState().StepThreeReducer.isAmbSel;
            var addons = getState().StepThreeReducer.addonSel;
            var price = getState().StepThreeReducer.totalPrice;
            var strAddons = addons.join(',');
            var hospitalName = localStorage.getItem('hospSel') && JSON.parse(localStorage.getItem('hospList'))[localStorage.getItem('hospSel')]['Hospitals Name'];
            //convert time to 24 format
            var RideTime24 = (0, _moment2.default)(_rideTime, ["h:mm A"]).format("HH:mm");
            //convert date into yyyy/mm/dd
            var formattedDate = _rideDate.split("/").reverse().join("/");

            var small = 'samllVehicle';
            var large = 'largeVehicle';
            var selAmbType = '';
            if (ambulanceType === small) {
                if (addons.includes("WheelChair")) {
                    selAmbType = "MUV";
                } else if (addons.includes("AC")) {
                    selAmbType = "EECO";
                } else {
                    selAmbType = "OMNI";
                }
            } else if (ambulanceType === large) {
                if (addons.indexOf('Oxygen') > -1 && addons.indexOf('Technician') > -1 && addons.indexOf('AC') > -1) {

                    selAmbType = "TEMPO";
                } else {
                    selAmbType = "ALS";
                }
            }
            _axios2.default.post(_config2.default.enquiryApi, {
                "lead_id": _LeadId,
                "patient_name": _patientName,
                "patient_number": _patientNumber,
                "ride_date": formattedDate,
                "ride_time": RideTime24,
                "ambulance_type": selAmbType,
                "pickup_address": _pickupAddress,
                "pickup_lat": _pickupLat,
                "pickup_Long": _pickupLng,
                "destination": _dropoffAddress,
                "dropoff_lat": _dropoffLat,
                "dropoff_long": _dropoffLng,
                "distance": distance, //Math.round(distance),
                "fare": price,
                "addons": addons,
                "source": "Website",
                "src_id": "WBS",
                "createdby": ""
            }).then(function (response) {
                console.log(response.data);
                // })
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
}

function instantLeadHandler() {
    return function (dispatch, getState) {
        var patientName = getState().StepOneReducer.patient_name;
        var patientNumber = getState().StepOneReducer.patient_number;
        _axios2.default.post(_config2.default.leadCreateApi, { name: patientName, mobile_number: patientNumber, lead_generated_by: 'Digital kiosk', source: 'FLS' }).then(function (response) {
            dispatch({ type: _types.SUCCESSLEAD });
            setTimeout(function () {
                dispatch({ type: _types.RESET });
            }, 5000);
            console.log(response);
        }).catch(function () {
            console.log('error');
        });
    };
}
function Reset() {
    return function (dispatch) {
        dispatch({ type: _types.RESET });
    };
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.patientNameAction = patientNameAction;
exports.patientNumberAction = patientNumberAction;
exports.phoneErr = phoneErr;
exports.rideDateAction = rideDateAction;
exports.rideTimeAction = rideTimeAction;

var _types = __webpack_require__(0);

function patientNameAction(name) {
    return function (dispatch) {
        dispatch({ type: _types.PATIENT_NAME, payload: name });
    };
}
function patientNumberAction(val) {
    return function (dispatch) {
        dispatch({ type: _types.PATIENT_NUMBER, payload: val });
    };
}
function phoneErr(val) {
    return function (dispatch) {
        dispatch({ type: _types.PHERR, payload: val });
    };
}
function rideDateAction(date) {
    return function (dispatch) {
        dispatch({ type: _types.RIDE_DATE, payload: date });
    };
}

function rideTimeAction(time) {
    return function (dispatch) {
        dispatch({ type: _types.RIDE_TIME, payload: time });
    };
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.centerHandler = centerHandler;
exports.pickupAddHandler = pickupAddHandler;
exports.pickupHandler = pickupHandler;
exports.dropoffHandler = dropoffHandler;
exports.dropoffAddHandler = dropoffAddHandler;
exports.pickupSuffixHandler = pickupSuffixHandler;
exports.dropoffSuffixHandler = dropoffSuffixHandler;
exports.distanceHandler = distanceHandler;
exports.doubleDistanceHandler = doubleDistanceHandler;
exports.pickCnfmBtnHandler = pickCnfmBtnHandler;
exports.dropCnfmBtnHandler = dropCnfmBtnHandler;
exports.pickMarkerHandler = pickMarkerHandler;
exports.dropMarkerHandler = dropMarkerHandler;

var _types = __webpack_require__(0);

// step 2

function centerHandler(latlng) {
    return function (dispatch) {
        dispatch({ type: _types.CENTER, payload: latlng });
    };
}
function pickupAddHandler(address) {
    return function (dispatch) {
        dispatch({ type: _types.PICKUPADD, payload: address });
    };
}

function pickupHandler(latlng) {

    return function (dispatch) {
        dispatch({ type: _types.PICKUP_LATLNG, payload: latlng });
    };
}

function dropoffHandler(latlng) {
    return function (dispatch) {
        dispatch({ type: _types.DROPOFF_LATLNG, payload: latlng });
    };
}

function dropoffAddHandler(address) {
    return function (dispatch) {
        dispatch({ type: _types.DROPOFFADD, payload: address });
    };
}

function pickupSuffixHandler(val) {
    return function (dispatch) {
        dispatch({ type: _types.PICKUPSUFFIX, payload: val });
    };
}
function dropoffSuffixHandler(val) {
    return function (dispatch) {
        dispatch({ type: _types.DROPOFFSUFFIX, payload: val });
    };
}
function distanceHandler(val) {
    return function (dispatch) {
        dispatch({ type: _types.DISTANCE, payload: val });
    };
}

function doubleDistanceHandler(val) {
    return function (dispatch) {
        dispatch({ type: _types.DOUBLEDISTANCE, payload: val });
    };
}

function pickCnfmBtnHandler() {
    return function (dispatch, getState) {
        var val = getState().StepTwoReducer.pickBtn;
        dispatch({ type: _types.PICKBTN, payload: !val });
    };
}
function dropCnfmBtnHandler() {
    return function (dispatch, getState) {
        var val = getState().StepTwoReducer.dropBtn;
        dispatch({ type: _types.DROPBTN, payload: !val });
    };
}

function pickMarkerHandler() {
    return function (dispatch, getState) {
        var val = getState().StepTwoReducer.pickMarker;
        dispatch({ type: _types.PICKMARKER, payload: !val });
    };
}
function dropMarkerHandler() {
    return function (dispatch, getState) {
        var val = getState().StepTwoReducer.dropMarker;
        dispatch({ type: _types.DROPMARKER, payload: !val });
    };
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signinUser = signinUser;
exports.signupUser = signupUser;
exports.authError = authError;
exports.singoutUser = singoutUser;

var _types = __webpack_require__(0);

var ROOT_URL = 'http://localhost:3090';

function signinUser(_ref) {
    var email = _ref.email,
        password = _ref.password;

    return function (dispatch) {
        // Submit email/password to the server
        axios.post(ROOT_URL + '/signin', { email: email, password: password }).then(function (response) {
            //update state to  indicate user  is authenticate
            dispatch({ type: _types.AUTH_USER });
            //save the jwt token
            localStorage.setItem('token', response.data.token);
            //-redirect to route
            history.push('/contactus');
        }).catch(function () {
            dispatch(authError('Please Check Your Credentials'));
        });
    };
}

function signupUser(_ref2) {
    var email = _ref2.email,
        password = _ref2.password;

    return function (dispatch) {
        axios.post(ROOT_URL + '/signup', { email: email, password: password }).then(function (response) {
            dispatch({ type: _types.AUTH_USER });
            localStorage.setItem('token', response.data.token);
            history.push('/contactus');
        }).catch(function (response) {
            // console.log(JSON.stringify(response))
            dispatch(authError(response.response.data.error));
        });
    };
}
function authError(error) {
    return {
        type: _types.AUTH_ERROR,
        payload: error
    };
}
function singoutUser() {
    localStorage.removeItem('token');
    return { type: _types.UNAUTH_USER };
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("rc-time-picker/assets/index.css");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("rc-time-picker");

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps/lib/components/places/StandaloneSearchBox");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
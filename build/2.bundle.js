exports.ids = [2];
exports.modules = {

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(67);

var _antd = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepFour = function StepFour(props) {
    return _react2.default.createElement(
        _antd.Row,
        { className: 'stepFour' },
        _react2.default.createElement(
            _antd.Col,
            { lg: { span: 12, offset: 6 } },
            _react2.default.createElement(
                _antd.Card,
                { className: 'BkDetails', title: 'Please Confirm Booking Details' },
                _react2.default.createElement(
                    'table',
                    { style: { width: '100%' }, className: 'custom-table' },
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                'Pateint Name:'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                props.patientName
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                'Phone Number:'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                props.patientNumber
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                'Booking Date:'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                props.rideDate
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                'Booking Time:'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                props.rideTime
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                'Pick-up Location:'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                props.pickupAddress
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                'Drop-off Location:'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                props.dropoffAddress
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                'Ambulance Type:'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                props.AmbSelect === 'samllVehicle' ? "Small Vehicle" : "Large Vehicle"
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                'Addons:'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                props.Addons.toString()
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { style: { padding: '0.5rem' } },
                _react2.default.createElement(
                    'h5',
                    { style: { paddingLeft: '0.5rem' } },
                    '*On clicking next button you are accepting ',
                    _react2.default.createElement(
                        'a',
                        { href: 'https://www.stanplus.com/privacy-policy/#terms-conditions' },
                        'Terms and condition'
                    )
                )
            )
        )
    );
};
var mapStateToProps = function mapStateToProps(state) {
    return {
        patientName: state.StepOneReducer.patient_name,
        patientNumber: state.StepOneReducer.patient_number,
        rideDate: state.StepOneReducer.ride_date,
        rideTime: state.StepOneReducer.ride_time,
        pickupAddress: state.StepTwoReducer.pickupAddress,
        dropoffAddress: state.StepTwoReducer.dropoffAddress,
        AmbSelect: state.StepThreeReducer.isAmbSel,
        Addons: state.StepThreeReducer.addonSel
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(StepFour);

/***/ })

};;
//# sourceMappingURL=2.bundle.js.map
exports.ids = [4];
exports.modules = {

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Step = _antd.Steps.Step;


var StepFour = function StepFour(props) {
    return _react2.default.createElement(
        _antd.Row,
        { className: 'stepFive' },
        _react2.default.createElement(
            _antd.Col,
            { lg: { span: 9, offset: 8 }, xs: { span: 24 } },
            screen.width > 576 && _react2.default.createElement(
                'div',
                { className: 'stepsStyle' },
                _react2.default.createElement(
                    _antd.Steps,
                    { progressDot: true, current: 1, className: 'prgSteps' },
                    _react2.default.createElement(Step, { title: 'Finished', description: 'We Received Booking .' }),
                    _react2.default.createElement(Step, { title: 'In Progress', description: 'Assigning Ambulance.' }),
                    _react2.default.createElement(Step, { title: 'Waiting', description: 'On the Ride.' })
                )
            )
        ),
        _react2.default.createElement(
            _antd.Col,
            { lg: { span: 6, offset: 11 }, xs: { span: 12, offset: 6 } },
            _react2.default.createElement(
                'div',
                { className: 'checkmark-circle' },
                _react2.default.createElement('div', { className: 'background' }),
                _react2.default.createElement('div', { className: 'checkmark draw' })
            )
        ),
        _react2.default.createElement(
            _antd.Col,
            { lg: { span: 9, offset: 8 }, xs: { span: 24 }, className: 'sucMsg' },
            _react2.default.createElement(_antd.Alert, {
                message: 'Hi ' + props.patientName + ' Our Patient Counsellor Will Call You In Less Than 1 Minute To The Following Phone: ' + props.patientNumber,
                description: 'Press Done To complete Process.',
                type: 'success',
                showIcon: true
            })
        )
    );
};
var mapStateToProps = function mapStateToProps(state) {
    return {
        patientName: state.StepOneReducer.patient_name,
        patientNumber: state.StepOneReducer.patient_number

    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(StepFour);

/***/ })

};;
//# sourceMappingURL=4.bundle.js.map
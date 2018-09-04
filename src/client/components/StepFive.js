import React from 'react';
import { Row, Col,Alert,Steps} from 'antd';
const Step = Steps.Step;
import {connect} from 'react-redux';

const StepFour = (props) =>{
    return (
        <Row className="stepFive" >
            <Col lg={{span:9,offset:8}} xs={{span:24}} >
                {screen.width > 576 && <div className="stepsStyle">
                <Steps progressDot current={1}  className="prgSteps">
                    <Step title="Finished" description="We Received Booking ." />
                    <Step title="In Progress" description="Assigning Ambulance." />
                    <Step title="Waiting" description="On the Ride." />
                </Steps>
               </div>}
               
            </Col>
            <Col lg={{span:6,offset:11}} xs={{span:12,offset:6}} >
                <div className="checkmark-circle">
                    <div className="background"></div>
                    <div className="checkmark draw"></div>
                </div>
            </Col>
            <Col lg={{span:9,offset:8}} xs={{span:24}} className="sucMsg">
            {/* <h2></h2> */}
                <Alert
                    message={`Hi ${props.patientName} Our Patient Counsellor Will Call You In Less Than 1 Minute To The Following Phone: ${props.patientNumber}`}
                    description="Press Done To complete Process."
                    type="success"
                    showIcon
                />
            </Col>
        </Row>
    )
}
const mapStateToProps = (state) => {
    return {
        patientName:state.StepOneReducer.patient_name,
        patientNumber:state.StepOneReducer.patient_number,
        
    }
}
export default connect(mapStateToProps,{})(StepFour);
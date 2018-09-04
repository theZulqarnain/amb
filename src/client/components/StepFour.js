import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col,Card} from 'antd';
import {connect} from 'react-redux';


const StepFour = (props) =>{
    return (
        <Row className="stepFour" >
            <Col lg={{span:12,offset:6}} >
            <Card className='BkDetails' title="Please Confirm Booking Details">
                <table style={{width:'100%'}} className="custom-table">
                    <tbody>
                        <tr>
                            <th>Pateint Name:</th>
                            <td>{props.patientName}</td>
                        </tr>
                        <tr>
                            <th>Phone Number:</th>
                            <td>{props.patientNumber}</td>
                        </tr>
                        <tr>
                            <th>Booking Date:</th>
                            <td>{props.rideDate}</td>
                        </tr>
                        <tr>
                            <th>Booking Time:</th>
                            <td>{props.rideTime}</td>
                        </tr>
                        <tr>
                            <th>Pick-up Location:</th>
                            <td>{props.pickupAddress}</td>
                        </tr>
                        <tr>
                            <th>Drop-off Location:</th>
                            <td>{props.dropoffAddress}</td>
                        </tr>
                        <tr>
                            <th>Ambulance Type:</th>
                            
                            <td>{props.AmbSelect==='samllVehicle' ? "Small Vehicle" : "Large Vehicle"}</td>
                        </tr>
                        <tr>
                            <th>Addons:</th>
                            <td>{props.Addons.toString()}</td>
                        </tr>
                    </tbody>
                </table>
            </Card>
            <div style={{padding:'0.5rem'}}>
                <h5 style={{paddingLeft:'0.5rem'}}>*On clicking next button you are accepting <a href='https://www.stanplus.com/privacy-policy/#terms-conditions'>Terms and condition</a></h5>
            </div>
            </Col>
        </Row>
    )
}
const mapStateToProps = (state) => {
    return {
        patientName:state.StepOneReducer.patient_name,
        patientNumber:state.StepOneReducer.patient_number,
        rideDate:state.StepOneReducer.ride_date,
        rideTime:state.StepOneReducer.ride_time,
        pickupAddress:state.StepTwoReducer.pickupAddress,
        dropoffAddress:state.StepTwoReducer.dropoffAddress,
        AmbSelect:state.StepThreeReducer.isAmbSel,
        Addons:state.StepThreeReducer.addonSel
    }
}
export default connect(mapStateToProps,{})(StepFour);
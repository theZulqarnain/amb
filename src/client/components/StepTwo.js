import React from 'react';
import { Row, Col,Button,Alert} from 'antd';
import {connect} from 'react-redux';
import {centerHandler,pickupHandler,pickupAddHandler,dropoffHandler,dropoffAddHandler,pickupSuffixHandler,dropoffSuffixHandler,MapCenterHandler,pickCnfmBtnHandler,dropCnfmBtnHandler,dropMarkerHandler,pickMarkerHandler} from '../actions';
import config from '../../../config'
import Map from './Map';
import Sidebar from './Sidebar';
class StepTwo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mapZoomLevel:15
        }
        if (navigator.geolocation) {
            
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.props.centerHandler({lat:position.coords.latitude,lng:position.coords.longitude})
            })
        }else{
            alert('please enable GPS or check internet connection')
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.pickupConfirmButton === true){
            this.setState({mapZoomLevel:17})
            
        }else if(nextProps.dropoffConfirmButton === true){
            this.setState({mapZoomLevel:17})
            
        }
        else{
            this.setState({mapZoomLevel:15});
        }
    }
    
    pickupMakerButton = () => {
        this.props.pickCnfmBtnHandler();
        this.props.dropMarkerHandler();
    }
    mapZoomLevelHandler = (val) =>{
        this.setState({mapZoomLevel:val})
    }

    
    dropoffMarkerButton = () =>{
        this.props.pickMarkerHandler();
        this.props.dropCnfmBtnHandler();
    }

    render(){
            return(
                <Row type="flex" justify="space-around" align="middle" className='stepTwo'>
                    <Col lg={{span:10}} xs={{span:24}} className="form" >
                        <Sidebar/>
                    </Col>
                    <Col lg={{span:13}} xs={{span:24}}>
                        <div className='map'>
                        {(this.props.pickupConfirmButton === true || this.props.dropoffConfirmButton === true) ? <Alert message="After Setting location please click on confirm Button " type="warning" showIcon /> :  <Alert message="Tap on Marker to set exact Location" type="info" showIcon />}
                        <Map
                            googleMapURL={config.MapApi}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            pickupButton={this.pickupMakerButton} 
                            pickupConfirm={this.props.pickupConfirmButton}
                            isShowPickMarker={this.props.isShowPickMarker}
                            dropoffButton={this.dropoffMarkerButton}
                            dropoffConfirm={this.props.dropoffConfirmButton}
                            isShowDropMarker={this.props.isShowDropMarker}
                            mapZoom={this.state.mapZoomLevel}
                        />
                        </div>

                        {this.props.pickupConfirmButton && <Button  className="cnfrmBtn"  size="large" onClick={this.pickupMakerButton}>Confirm Location</Button> }
                        {this.props.dropoffConfirmButton && <Button className="cnfrmBtn" size="large" onClick={this.dropoffMarkerButton}>Confirm Location</Button> } 
                    </Col>
                </Row>
            )
        }
}


const mapStateToProps = (state) =>{
    return{
        pickupAddress:state.StepTwoReducer.pickupAddress,
        pickupLocation:state.StepTwoReducer.pickupLatlng,
        pickupSuffix:state.StepTwoReducer.pickupSuffix,
        dropoffLocation:state.StepTwoReducer.dropoffLatlng,
        dropoffAddress:state.StepTwoReducer.dropoffAddress,
        dropoffSuffix:state.StepTwoReducer.dropoffSuffix,
        pickupConfirmButton:state.StepTwoReducer.pickBtn,
        dropoffConfirmButton:state.StepTwoReducer.dropBtn,
        isShowPickMarker:state.StepTwoReducer.pickMarker,
        isShowDropMarker:state.StepTwoReducer.dropMarker,
    }
}

export default connect(mapStateToProps,{centerHandler,pickupAddHandler,pickupHandler,dropoffHandler,dropoffAddHandler,pickupSuffixHandler,dropoffSuffixHandler,MapCenterHandler,pickCnfmBtnHandler,dropCnfmBtnHandler,dropMarkerHandler,pickMarkerHandler})(StepTwo);


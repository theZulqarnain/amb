import React from 'react';
import {connect} from 'react-redux';
import {splash,patientNameAction,patientNumberAction,instantLead} from '../actions'
import { Row, Col,Button,Icon,Input,Divider,Alert} from 'antd';
import config from '../../../config';
import ReactGA from 'react-ga';
ReactGA.initialize(config.gAnalytics, {
    gaOptions: {
        clientId: localStorage.getItem('password') ? localStorage.getItem('password') : 'undefined device'
    }
});

const splashScreen = 'splashScreen'
const Splash =  (props) =>{
    const SplashHandler = () =>{
        ReactGA.event({
            category: splashScreen,
            action: 'Clicked on Start Button',
            label: 'Start Button'
          });
        props.splash()
    }
    const patientNameHandler = (e) =>{
        props.patientNameAction(e.target.value)
    }
    const patientNameGA = () =>{
        ReactGA.event({
            category: splashScreen,
            action: 'Patient Name Field Focused',
            label:'Patient Name Field'
        });
    }
    const check = (e) =>
       {

        if(e.target.value.length < 10){
            props.tempNumberHandler(e.target.value);
            props.phErrHandler(true)
        }else{
            props.phErrHandler(false)
        }
       }
       const keyPressFunc = (e) =>{
           
           if(e.target.value.length === 10){
               return e.preventDefault()
           }
       }
    const PatientNumber =(e) =>{
        
        props.patientNumberAction(e.target.value);
    }
    const PatientNumGA =() =>{
        ReactGA.event({
            category: splashScreen,
            action: 'Patient Number Field Focused',
            label:'Patient Number Field'
        });
    }
    const instantLead = () =>{
        ReactGA.event({
            category: splashScreen,
            action: 'Instant Lead generated on Splash Screen',
            label:'Instant Lead Button'
        });
        this.props.instantLeadHandler();
    }
    return(
        <div className={props.splashState ? 'Splash' : 'hideSplash'} >
                    {/*<div className={this.state.splash ? 'Splash' : 'hideSplash'} onClick={this.splash}>*/}
                    <Row >
                        <Col lg={{span:11,offset:1}} sm={{span:11,offset:1}}  xs={{span:11,offset:1}} className='branding'>
                            {/*<img src={require('../../public/images/logo.png')} alt="logo" height="50%" width="50%" className="logoStyle"/>*/}
                            {localStorage.getItem('hospSel') === 'HYDH133B001' ?
                                <img src={require('../../public/images/AIG_logo.png')} alt="logo" height="50%" width="50%" className="logoStyle"/>
                                :<img src={require('../../public/images/logo.png')} alt="logo" height="50%" width="50%" className="logoStyle"/> }

                            <h2 className="h2Text">
                            Book your
                            </h2>
                            <h1 className="h1Text">
                                AMBULANCE
                            </h1>
                            {localStorage.getItem('hospSel') === 'HYDH133B001' ?
                                <Button  onClick={SplashHandler} className="btnStartBlue">
                                    Click To Start
                                </Button>
                                :
                                <Button  onClick={SplashHandler} className="btnStartGreen">
                                    Click To Start
                                </Button>
                            }

                        </Col>
                        <Col lg={{span:1}}>
                            <div>
                                <Divider type="vertical" className='firstDivider' />
                                    <span className='or'>OR</span>
                                <Divider type="vertical" className='secDivider'/>
                            </div>
                        </Col>
                        <Col lg={{span:11}} sm={{span:11}}  xs={{span:11}} >
                        
                            {/* {localStorage.getItem('hospSel') === 'HYDH133B001' && <img src={require('../../public/images/SPpwd.png')} alt="logo" height="60%" width="60%"  style={{marginLeft:'263px',marginTop:'-47px'}}/>} */}
                            <div className="shortForm">
                            
                                <h1 className='FHeading'>Shall We Contact ???</h1>
                                {props.successLead && <Alert
                                    message={`Hi, ${props.patientName}`}
                                    description="Our Patient Counsellor will call you in less than 1 minute on submitted number."
                                    type="success"
                                    showIcon
                                />}
                                
                                <h1>Give us your number</h1>
                                <Input 
                                    prefix={<Icon type="user" style={{fontSize:'1.6rem'}}/>}
                                    placeholder='Patient Name'
                                    className='input'
                                    onChange={patientNameHandler}
                                    onFocus={patientNameGA}
                                    value={props.patientName}
                                />
                                <Input 
                                    prefix={<img src={require('../../public/images/phone.png')} alt="phone" height="7%" width="7%"/>}
                                    placeholder='Mobile Number'
                                    className='input'
                                    type='number'
                                    onChange={PatientNumber}
                                    value={props.patientNumber}
                                    onKeyUp={(e)=>check(e)}
                                    onKeyPress={(e)=>keyPressFunc(e)}
                                    onFocus={PatientNumGA}
                                />
                                <Button shape="circle" icon="arrow-right" className={ props.phErr || props.patientName===null || props.patientNumber.length===0  ? 'dFbtn' : 'sFbtn'} onClick={instantLead} disabled={props.phErr || props.patientName===null || props.patientNumber.length===0}/>
                                {props.phErr && <Alert message="Please enter 10 digits" type="error" style={{width:'45rem',marginTop:'1rem'}}/> }
                            </div>
                        </Col>
                    </Row>
                    </div>
    )
}
const mapStateToProps = (state) => {
    return {
        splashState:state.Main.splash,
        successLead:state.Main.successLead,
        patientName:state.StepOneReducer.patient_name,
        patientNumber:state.StepOneReducer.patient_number,
        
    }
};
export default connect(mapStateToProps,{splash,patientNameAction,patientNumberAction,instantLead})(Splash);
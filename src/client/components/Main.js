import React from 'react';
import { Row, Col,Button,Steps,message} from 'antd';
const Step = Steps.Step;
import 'antd/dist/antd.css';
import config from '../../../config';
import ReactGA from 'react-ga';
import {Link} from 'react-router'
ReactGA.initialize(config.gAnalytics, {
    gaOptions: {
        // clientId: localStorage.getItem('password') ? localStorage.getItem('password') : 'undefined device'
    }
});
import {
    connect
} from "react-redux";
import Loadable from 'react-loadable';
import{StepsHandler,Reset} from "../actions"
import StepOne from  './StepOne';
// import StepTwo from './StepTwo'
const S1 = Loadable({
    loader: () => import('./StepOne'),
    loading() {
        return <div>Loading...</div>
      }
  });
const S2 = Loadable({
    loader: () => import('./StepTwo'),
    loading() {
        return <div>Loading...</div>
      }
  });
const S3 = Loadable({
    loader: () => import('./StepThree'),
    loading() {
        return <div>Loading...</div>
      }
  });
const S4 = Loadable({
    loader: () => import('./StepFour'),
    loading() {
        return <div>Loading...</div>
      }
  });
const S5 = Loadable({
    loader: () => import('./StepFive'),
    loading() {
        return <div>Loading...</div>
      }
  });

const hospitalID =`[ ${localStorage.getItem('hospSel') ? JSON.parse(localStorage.getItem('hospList'))[localStorage.getItem('hospSel')]['HospitalID'] : 'unkown'}]`
class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ph:false,
            phErr:false,
            splash:true
        };
    }
    //notification on 
    componentDidUpdate(){
        if(this.props.currentStep===3) {


        }
        const current = this.props.currentStep;
        if(current === 0){
            ReactGA.event({
                category: 'step One',
                action: 'on Step1',
            });
        }
        if(current === 1){
            ReactGA.event({
                category: `step Two`,
                action: 'on step2',
            });
        }
        if(current === 2){
             ReactGA.event({
                category: `step Three`,
                action: 'on Step3',
            });
        }
        if(current === 3){
            ReactGA.event({
                category: `step 4`,
                action: 'on step4',
            });
        }
        if(current === 4){
            ReactGA.event({
                category: `step 5`,
                action: 'on step4',
            });
        }

    }
    //Data from Step One ends here
    //steps functions
    next = () => {
        const stepChecker =this.props.currentStep+1;
        this.props.StepsHandler(stepChecker)
        ReactGA.event({
            category: `Next Button clicked`,
            action: 'clicked on Next Button',
            label:`Moved to step ${stepChecker+1}`
        });
    };
    prev = () => {
        let currentStep = this.props.currentStep - 1;
        this.props.StepsHandler(currentStep);
        ReactGA.event({
            category: `Previous Button clicked`,
            action: 'clicked on previous Button',
            label:`Moved to step ${currentStep+1}`
        });
    };
    current = (item) =>{
        if(item.title==="First"){
            if(!(this.props.currentStep===0)){
                const current = 0;
                // this.setState({current})
                this.props.StepsHandler(current)
            }
            // && this.props.patientName && this.props.patientNumber && (this.props.patientNumber).length == 10 && this.props.rideDate && this.props.rideTime
        }else if(item.title==="Second" ){
            if(!(this.props.currentStep===1) ){
                const current =1;
                this.props.StepsHandler(current)
            }
            // && this.props.pickupLocation && this.props.dropoffLocation
        }else if(item.title==="Third" && this.props.pickupLocation && this.props.dropoffLocation){
            if(!(this.props.currentStep===2)){
                const current =2;
                this.props.StepsHandler(current)
            }
            // && this.props.selAmbulance && this.props.selAddons.length >0
        }else if(item.title==="Fourth" && this.props.selAmbulance && this.props.selAddons.length >0){
            if(!(this.props.currentStep===3)){
                const current =3;
                this.props.StepsHandler(current)
            }
            // && this.props.selAmbulance && this.props.selAddons.length >0
        }
        else if(item.title==="Last" && this.props.selAmbulance && this.props.selAddons.length >0){
            if(!(this.props.currentStep===4)){
                const current =4;
                this.props.StepsHandler(current)
            }
        
        }
    };
    //components for different stages
    stepOne= () =>{
        return <S1/>
    };
    stepTwo =() =>{
        return <S2/>
    };
    stepThree   = () =>{
        return <S3/>
    };
    stepFour   = () =>{
        return <S4 />
    };
    stepFive   = () =>{
        return <S5/>

    };


    render() {
        //steps  code start here
        const steps = [{
            title: 'First',
            content:  this.stepOne(),
        }, {
            title: 'Second',
            content:this.stepTwo() ,
        }, {
            title: 'Third',
            content:this.stepThree(),
        }
        , {
            title: 'Fourth',
            content: this.stepFour(),
        }
        , {
            title: 'Last',
            content: this.stepFive(),
        }
    ];
        const nextButton = () =>{

            if(this.props.currentStep < steps.length - 1){
                if(this.props.currentStep === 0 ){
                return   <Row>
                            <Col lg={{span:9,offset:1}} xs={{span:22,offset:1}}>
                                <Button type="primary" className="fwbs1" onClick={() => this.next()} disabled={(!this.props.patientName || !this.props.patientNumber || (this.props.patientNumber).length !== 10 || !this.props.rideDate || ! this.props.rideTime)}>Next</Button>
                            </Col>
                        </Row>

                }else if(this.props.currentStep ===1 && this.props.pickupConfirmButton === false && this.props.dropoffConfirmButton===false){
                    return <Button type="primary" className="fWPBtn" onClick={() => this.next()} disabled={!this.props.pickupLocation || !this.props.dropoffLocation}>Next</Button>
                }else if(this.props.currentStep ===2){
                    return <Button type="primary" className="fWPBtn" onClick={() => this.next()} disabled={!this.props.selAmbulance || !this.props.selAddons.length > 0}>Next</Button>
                }else if(this.props.currentStep ===3){
                    return <Button type="primary" className="fWPBtn" onClick={() => this.next()} >Next</Button>
                }
            }
        };
        const prevButton = () =>{
            if(this.props.currentStep > 0 && this.props.pickupConfirmButton === false && this.props.dropoffConfirmButton===false && this.props.currentStep !=4){
                
                return <Button className="fWPBtn" onClick={() => this.prev()}> Previous </Button>
            }
        };
        const doneButton = () =>{
            message.success('Processing complete!');
            ReactGA.event({
                category: `Done Button clicked`,
                action: 'clicked on Done Button',
                label:`Reset the App`
            });
            this.props.Reset();
        }
        const  current  = this.props.currentStep
        //steps  code ends here
        
        return (
                <div className="Main">
                    <Row>
                        <Col lg={{span:24}} >
                            <div >
                                <Steps current={current} className="stepsHeader">
                                    {steps.map(item => <Step key={item.title} title={item.title}  onClick={() => this.current(item) }/>)}
                                </Steps>
                                <div className="steps-content" >{steps[this.props.currentStep].content}</div>
                                <div className="steps-action">
                                    {
                                        nextButton()
                                    }
                                    {
                                        this.props.currentStep === steps.length - 1
                                        &&<Row >
                                            <Col lg={{span:9,offset:8}}  >
                                                <Button type="primary" className="fWBtn" onClick={doneButton}>Done</Button>
                                            </Col>
                                        </Row>
                                    }
                                    {prevButton()}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentStep:state.Main.CurrentStep,
        patientName:state.StepOneReducer.patient_name,
        patientNumber:state.StepOneReducer.patient_number,
        rideDate:state.StepOneReducer.ride_date,
        rideTime:state.StepOneReducer.ride_time,
        pickupLocation:state.StepTwoReducer.pickupLatlng,
        dropoffLocation:state.StepTwoReducer.dropoffLatlng,
        pickupConfirmButton:state.StepTwoReducer.pickBtn,
        dropoffConfirmButton:state.StepTwoReducer.dropBtn,
        selAmbulance:state.StepThreeReducer.isAmbSel,
        selAddons:state.StepThreeReducer.addonSel,
    }
};

// export default Main;
export default connect(mapStateToProps,{StepsHandler,Reset})(Main);


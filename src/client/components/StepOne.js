import React from 'react';
import moment from "moment/moment";
import { Row, Col,Button,Steps,Alert,Input,Icon,DatePicker} from 'antd';
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';
import config from "../../../config";
import ReactGA from 'react-ga';
ReactGA.initialize(config.gAnalytics, {
    debug: true,
    titleCase: false,
    gaOptions: {
        // clientId: localStorage.getItem('password') ? localStorage.getItem('password') : 'undefined device'
    }
});
import {connect} from 'react-redux';
import {patientNameAction,patientNumberAction,rideDateAction,rideTimeAction} from '../actions'

const StepOneCategory = 'step One';
const hospitalID =`[ ${localStorage.getItem('hospSel') ? JSON.parse(localStorage.getItem('hospList'))[localStorage.getItem('hospSel')]['HospitalID'] : 'unkown'}]`
class StepOne  extends React.Component{
    constructor(props){
        super(props);
         this.date =new Date();
         this.hr = this.date.getHours();
         this.now =moment().hour(this.hr).minute(this.date.getMinutes());
         this.state = {
            ph:false,
            phErr:false
         }
    }
    componentDidMount(){
        this.props.rideTimeAction(this.now.format('h:mm a'));
        this.props.rideDateAction(moment().format('DD/MM/YYYY'));
    }

    nameEnterPressed=(event)=>{
        let code = event.keyCode || event.which;
        if(code === 13) { //13 is the enter keycode
            //Do stuff in here

            this.phNumber.focus()
        }
    };
    //google analytics
    patientNameGA = () =>{
        ReactGA.event({
            category: StepOneCategory ,
            action: `Patient Name field selected`,
            label:'Patient Name Field'
        });
    }
    patientNumbGA = () =>{
        ReactGA.event({
            category: StepOneCategory,
            action: `Patient Numb field selected`,
            label: 'Patient Num Field',
        });
    };
    rideDateGA = () =>{
        ReactGA.event({
            category: StepOneCategory,
            action: `Ride Date field selected`,
            label: 'Ride Date',
        });
    };
    rideTimeGA = () => {
        ReactGA.event({
            category: StepOneCategory,
            action: `Ride Time field selected`,
            label: 'Ride Time',
        });
    };
   render(){
       const dateFormat = 'DD/MM/YYYY';
       const format = 'h:mm a';

       const disabledHours = ()  => {
        if((moment().format('DD/MM/YYYY') === this.props.rideDate)){
            let disHour = []
            let mmt = moment();
            // Your moment at midnight
            let mmtMidnight = mmt.clone().startOf('day');

            // Difference in minutes
            let diffHours = mmt.diff(mmtMidnight, 'hour');

            for (let i = 0; i < diffHours-1; i++) {
                disHour.push(i+1)
            }
            return disHour;
        }


    };


       const disabledMinutes = () => {
           let r_time =moment(this.props.rideTime, ["h:mm A"]).format("HH:mm").slice(0, 2)
           if(moment().hour() == r_time ){
               if((moment().format('DD/MM/YYYY') === this.props.rideDate)){
                   if(r_time >= 12){
                       let disAm = null;
                        let x = document.getElementsByClassName('rc-time-picker-panel-select');
                       for (let i = 0; i < x.length; i++) {
                           disAm= x[2].getElementsByTagName("ul")[0].getElementsByTagName("li")[0];
                       }
                       if(disAm !== null){
                           disAm.style.pointerEvents = "none"
                           disAm.style.opacity = 0.3;
                       }

                   }
                   let disMint = [];
                   let diffMinutes = moment().get('minute');
                   for (let i = 0; i < diffMinutes; i++) {
                       disMint.push(i)
                   }
                   return disMint;
               }
           }


       }
       const check = (e) =>
       {

           if(e.target.value.length < 10){
               this.setState({ph:e.target.value},()=>{
                   this.setState({phErr:true});

               })
           }else{
               this.setState({phErr:false})
           }
       }
       const keyPressFunc = (e) =>{
           let code = e.keyCode || e.which;
           if(code === 13) { //13 is the enter keycode
               this.dateSelect.focus()
           }

           if(e.target.value.length === 10){

               document.getElementById("phoneNo").style.border="1px solid red";

               setTimeout(() => {
                   document.getElementById("phoneNo").style.border="";
               }, 500);
               return e.preventDefault()
           }
       }
       const  nameHandler= (e)=>{
           this.props.patientNameAction(e.target.value)
       };
       const phoneHandler = (e) =>{
           this.props.patientNumberAction(e.target.value)
       };
       const dateHandler =(date, dateString) =>{
           this.props.rideDateAction(dateString);
       }
       const timeHandler = (value) => {

           if(this.now !== (value.format(format))){

               let updatedTime=value.format(format);
               this.props.rideTimeAction(updatedTime);
           }
       };

       return(
           <Row className="stepOne">
               <Col lg={{span:9,offset:1}} xs={{span:22,offset:1}}>
               {screen.width<768 && <h2>
                    Request your ambulance here. We’ll do our best to serve your journey
                    </h2>}
                   <div className="formBorder">
                       <label>Patient Name</label>
                       <Input
                           prefix={<Icon type="user" />}
                           placeholder="Name"
                           id="name"
                           className="PhInpt"
                           onChange={nameHandler}
                           onKeyPress={this.nameEnterPressed}
                           onFocus={this.patientNameGA}
                           value={this.props.patientName}
                       />
                       <label>Phone Number</label>
                       <Input
                           type="number"
                           prefix={<img src={require('../../../public/images/phone.png')} alt="phone" height="7%" width="7%"/>}
                           placeholder="Phone Number" id='phoneNo'
                           className="PhInpt"
                           onKeyUp={(e)=>check(e)}
                           onKeyPress={(e)=>keyPressFunc(e)}
                           onChange={phoneHandler}
                           ref={(phNumber) => { this.phNumber = phNumber }}
                           onFocus={this.patientNumbGA}
                           value={this.props.patientNumber}
                       />
                       {this.state.phErr && <Alert message="Please enter 10 digits" type="error" /> }
                       <label>Booking Date</label>
                       <DatePicker
                           defaultValue={moment()}
                           format={dateFormat}
                           className="datePicker"
                           onChange={dateHandler}
                           ref={(dateSelect) => { this.dateSelect = dateSelect }}
                           disabledDate={(current) => {
                           return  moment().add(-1, 'days')  >= current ;
                             }}
                           onFocus={this.rideDateGA}
                       />
                       <label>Booking Time</label>
                       <TimePicker
                           showSecond={false}
                           defaultValue={this.now}
                           onChange={timeHandler}
                           format={format}
                           use12Hours
                           inputReadOnly
                           allowEmpty={false}
                           defaultOpenValue={moment()}
                           disabledMinutes={disabledMinutes}
                           disabledHours={disabledHours}
                           ref={(timeSelect) => { this.timeSelect = timeSelect }}
                           onFocus={this.rideTimeGA}
                       />
                   </div>
               </Col>
               <Col lg={{span:12,offset:1}}>
                    {screen.width>768 && <div>
                        <h1 className="h1TextS1">STANPLUS</h1>
                        <h2 className="h2TextS1">India's Largest Private Ambulance Network</h2>
                    </div>}

               </Col>
           </Row>
       )
   }
}
const mapStateToProps = (state) => {
    return {
        patientName:state.StepOneReducer.patient_name,
        patientNumber:state.StepOneReducer.patient_number,
        rideDate:state.StepOneReducer.ride_date,
        rideTime:state.StepOneReducer.ride_time
    }
}
export default connect(mapStateToProps,{patientNameAction,patientNumberAction,rideDateAction,rideTimeAction})(StepOne);

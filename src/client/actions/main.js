import {SPLASH,CURRENT_STEP,RESET,SUCCESSLEAD} from "./types";
import axios    from    'axios';
import moment from "moment/moment";
import config from '../../../config'
export function StepsHandler(step) {
    return function(dispatch,getState) {
        dispatch({ type: CURRENT_STEP,payload:step });
        if(getState().Main.CurrentStep === 1){
        let patientName = getState().StepOneReducer.patient_name;
        let patientNumber =getState().StepOneReducer.patient_number;
        let rideTime =getState().StepOneReducer.ride_time;
        let rideDate= getState().StepOneReducer.ride_date
        axios.post(config.leadCreateApi,
                {
                    name:patientName,
                    mobile_number:patientNumber,
                    rideStartDate:rideDate,
                    rideStartTime:rideTime,
                    lead_generated_by:'Website',
                    source:'WBS',
                    
                })
                .then(response =>{
                    
                    let leadId = response.data.data.id;
                    dispatch({ type: 'LeadId',payload:leadId });
                })
                .catch(()=>{
                    console.log('error')
                })
        }else if(getState().Main.CurrentStep === 2){
            let LeadId = getState().Main.LeadId;
            let pickupAddress = getState().StepTwoReducer.pickupAddress;
            let pickupLat = getState().StepTwoReducer.pickupLatlng.lat;
            let pickupLng = getState().StepTwoReducer.pickupLatlng.lng;

            let dropoffAddress = getState().StepTwoReducer.dropoffAddress;
            let dropoffLat = getState().StepTwoReducer.dropoffLatlng.lat;
            let dropoffLng = getState().StepTwoReducer.dropoffLatlng.lng;
            axios.post(config.leadUpdateApi,
            {
                leadId:LeadId,
                pickup_location:{address:pickupAddress,pickup_latitude:pickupLat,pickup_longitude:pickupLng},
                drop_location:{address:dropoffAddress,dropoff_latitude:dropoffLat,dropoff_longitude:dropoffLng}})
            .then(response =>{
                console.log(response.data);
            })
            .catch(()=>{
                console.log('error')
            })
        }else if(getState().Main.CurrentStep === 4){
        let patientName = getState().StepOneReducer.patient_name;
        let patientNumber =getState().StepOneReducer.patient_number;
        let rideTime =getState().StepOneReducer.ride_time;
        let rideDate= getState().StepOneReducer.ride_date

        let LeadId = getState().Main.LeadId;
        let pickupAddress = getState().StepTwoReducer.pickupAddress;
        let pickupLat = getState().StepTwoReducer.pickupLatlng.lat;
        let pickupLng = getState().StepTwoReducer.pickupLatlng.lng;

        let dropoffAddress = getState().StepTwoReducer.dropoffAddress;
        let dropoffLat = getState().StepTwoReducer.dropoffLatlng.lat;
        let dropoffLng = getState().StepTwoReducer.dropoffLatlng.lng;

        let distance = getState().StepTwoReducer.distance;

        let ambulanceType = getState().StepThreeReducer.isAmbSel;
        let addons = getState().StepThreeReducer.addonSel;
        let price = getState().StepThreeReducer.totalPrice;
        let strAddons = addons.join(',');
        let hospitalName = localStorage.getItem('hospSel') && JSON.parse(localStorage.getItem('hospList'))[localStorage.getItem('hospSel')]['Hospitals Name']
        //convert time to 24 format
        let RideTime24 = moment(rideTime, ["h:mm A"]).format("HH:mm");
        //convert date into yyyy/mm/dd
        let formattedDate = rideDate.split("/").reverse().join("/");
        
        let small = 'samllVehicle';
        let large = 'largeVehicle';
        let selAmbType=''
        if(ambulanceType === small){
            if(addons.includes("WheelChair")){
                selAmbType="MUV"
            }else if(addons.includes("AC")){
                selAmbType="EECO"
            }else{
                selAmbType="OMNI"
            }
        }else if(ambulanceType === large){
            if(addons.indexOf('Oxygen') > -1 && addons.indexOf('Technician') > -1  && addons.indexOf('AC') > -1){
                
                selAmbType="TEMPO"
            }else{
                selAmbType="ALS"
            }
        }
        axios.post(config.enquiryApi, {
            "lead_id":LeadId,
            "patient_name":patientName,
            "patient_number":patientNumber,
            "ride_date":formattedDate,
            "ride_time":RideTime24,
            "ambulance_type":selAmbType,
            "pickup_address":pickupAddress,
            "pickup_lat":pickupLat,
            "pickup_Long":pickupLng,
            "destination":dropoffAddress,
            "dropoff_lat":dropoffLat,
            "dropoff_long":dropoffLng,
            "distance": distance, //Math.round(distance),
            "fare":price,
            "addons":addons,
            "source":"Website",
            "src_id":"WBS",
            "createdby":"",
        })
            .then(response => {
                console.log(response.data);
                // })
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    };
}

export function instantLeadHandler(){
    return function (dispatch,getState){
        let patientName = getState().StepOneReducer.patient_name;
        let patientNumber =getState().StepOneReducer.patient_number;
        axios.post(config.leadCreateApi,
                {name:patientName,mobile_number:patientNumber,lead_generated_by:'Digital kiosk',source:'FLS'})
                .then(response =>{
                    dispatch({ type: SUCCESSLEAD});
                    setTimeout(() => {
                        dispatch({ type: RESET});
                      }, 5000)
                    console.log(response);
                })
                .catch(()=>{
                    console.log('error')
                })
    }
}
export function Reset() {
    return function(dispatch) {
        dispatch({ type: RESET});
    };
}

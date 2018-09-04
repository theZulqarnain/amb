import { ISAMBSEL,ADDONSEL,TOTALPRICE } from './types';
import config from '../../../config';
import axios    from    'axios';
import ReactGA from 'react-ga';
ReactGA.initialize(config.gAnalytics, {
    gaOptions: {
        clientId: localStorage.getItem('password') ? localStorage.getItem('password') : 'undefined device'
    }
});

const StepThreeCategory = 'step Three ';
const hospitalID =`${localStorage.getItem('hospSel') ? JSON.parse(localStorage.getItem('hospList'))[localStorage.getItem('hospSel')]['HospitalID'] : 'unkown'}`;
//it will check which type of abmulance is selected
export function ambSelected(ambType){
    return function(dispatch){
        let small = 'samllVehicle';
        let large = 'largeVehicle';
        if(ambType === small){
            ReactGA.event({
                category: StepThreeCategory,
                action: `Vehicle type selected`,
                label: `${small} Selected`
            });
        }else{
            ReactGA.event({
                category: StepThreeCategory,
                action: `Vehicle type selected`,
                label: `${large} Selected`
            });
        }
        dispatch({type:ISAMBSEL,payload:ambType})
    }
};

//this function add and remove addons 
export function addOnSelected(addon){
        return function(dispatch,getState){
        let addons=[];
        addons.push(...getState().StepThreeReducer.addonSel)
        if(addons.includes(addon)) {
            ReactGA.event({
                category: StepThreeCategory,
                action: `Addon clicked`,
                label: `${addon} clicked`,
                value: 0
              });
            addons = addons.filter(function(item) { 
                return item !== addon
            })
        }
        else {
            ReactGA.event({
                category: StepThreeCategory,
                action: `Addon clicked`,
                label: `${addon} clicked`,
                value: 1
              });
            addons.push(addon)
        }
        dispatch({type:ADDONSEL,payload:addons})
    }
}

export function priceCal(){
    return function(dispatch,getState){
        let small = 'samllVehicle';
        let large = 'largeVehicle';
        let distance = getState().StepTwoReducer.dbDistance;
        let ambulanceType = getState().StepThreeReducer.isAmbSel;
        let addons = getState().StepThreeReducer.addonSel;
        let stanID= hospitalID.slice(0, 7)
        let selAmbType=''
        if(ambulanceType === small){
            if(addons.includes("WheelChair")){
                selAmbType="MUV"
            }else if(addons.includes("WheelChair")){
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
        axios.post(config.priceApi,
            { distance:distance, ambtype:selAmbType,stanid:stanID })
                .then(response =>{
                    let TotalPrice=0;
                    addons.map((option)=>{
                        if(option !== "WheelChair"){
                            TotalPrice += response.data[option];
                        }
                    
                    })
                    TotalPrice += response.data['Driver'];
                    TotalPrice += response.data[selAmbType];
                    dispatch({type:TOTALPRICE,payload:TotalPrice})
                })
                .catch(()=>{
                    console.log('error')
                })
       
    }
}
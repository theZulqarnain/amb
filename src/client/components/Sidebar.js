
import React from 'react';
import {connect} from 'react-redux'
import {pickupHandler,pickupAddHandler,dropoffHandler,dropoffAddHandler,pickupSuffixHandler,dropoffSuffixHandler} from '../actions';
import config from '../../../config'
import { Input,Icon,Button} from 'antd';
import 'antd/dist/antd.css';
import ReactGA from 'react-ga';
ReactGA.initialize(config.gAnalytics, {
    gaOptions: {
        // clientId: localStorage.getItem('password') ? localStorage.getItem('password') : 'undefined device'
    }
});
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} = require("react-google-maps");
const { StandaloneSearchBox } = require("react-google-maps/lib/components/places/StandaloneSearchBox");
const MapWithASearchBox = compose(
  withProps({
    googleMapURL: config.MapApi,
    loadingElement: <div style={{ height: `0%` }} />,
    containerElement: <div style={{ height: `60px` }} />,
    mapElement: <div style={{ height: `0%` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}
      const StepTwoCategory = 'step Two ';

      this.setState({
        bounds: null,
        center: {
          lat: 17.385044, lng: 78.486671
        },
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          })
        },
        onPickupMounted: ref => {
          refs.pickupBox = ref;
        },
        onDropoffMounted:(ref) =>{
          refs.dropoffBox = ref
        },
        onPickPlacesChanged: () => {
          let places = refs.pickupBox.getPlaces();
    
          places.map(({ place_id, formatted_address, geometry: { location } }) =>{
            this.props.pickupHandler({lat:location.lat(),lng:location.lng()})
            this.props.pickupAddHandler(formatted_address)
          })
          
        },
        ondropPlacesChanged: () =>{
          let places = refs.dropoffBox.getPlaces();
    
          places.map(({ place_id, formatted_address, geometry: { location } }) =>{
            this.props.dropoffHandler({lat:location.lat(),lng:location.lng()})
            this.props.dropoffAddHandler(formatted_address)
          })
        },
        pickupField : (e) =>{
          // console.log(e.target.value)
          this.props.pickupAddHandler(e.target.value)
        },
        dropoffField : (e) =>{
          // console.log(e.target.value)
          this.props.dropoffAddHandler(e.target.value)
      },
      pickupsuffix: () =>{
            this.props.pickupAddHandler('')
            this.props.pickupHandler(false);
      },
      dropoffsuffix: () =>{
        this.props.dropoffAddHandler('');
        this.props.dropoffHandler(false);
      },
      curLocation:()=>{
        if (navigator.geolocation) {
            
          navigator.geolocation.getCurrentPosition(
              position => {
                  let latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                  let geocoder = new window.google.maps.Geocoder();
                    geocoder.geocode( {'location': latlng}, (results, status)=> {
                        if (status == 'OK') {
                            this.props.pickupHandler({lat:position.coords.latitude,lng:position.coords.longitude});
                            this.props.pickupAddHandler(results[0].formatted_address)
                        } else {
                            alert('Geocode was not successful for the following reason: ' + status);
                        }
                    });
              }
          )
      }else{
          alert('unable to fetch Location!')
      }
      },
      pickupGA : ()=>{
        ReactGA.event({
            category: StepTwoCategory,
            action: 'Pickup Field Selected',
            label: 'Pickup Field'
          });
    },
    dropoffGA : ()=>{
      ReactGA.event({
          category: StepTwoCategory,
          action: 'Dropoff Field Selected',
          label: 'Dropoff Field'
        });
    },
    // this function swap pick and drop location and set text input values
    swapLocation : () => {
      if(this.props.pickupLocation && this.props.dropoffLocation === false){
          this.props.dropoffHandler(this.props.pickupLocation)
          this.props.dropoffAddHandler(this.props.pickupAddress)
          this.props.pickupHandler(false);
          this.props.pickupAddHandler('')
          ReactGA.event({
              category:  StepTwoCategory,
              action: 'Pickup location swapped',
              label: 'Swapp Button'
          });
          
      }else if(this.props.dropoffLocation && this.props.pickupLocation === false){
          this.props.pickupHandler(this.props.dropoffLocation);
          this.props.pickupAddHandler(this.props.dropoffAddress)
          this.props.dropoffHandler(false)
          this.props.dropoffAddHandler('')
          ReactGA.event({
              category: StepTwoCategory,
              action: 'dropoff location swapped',
              label: 'Swapp Button'
            });
      }else{
          this.props.pickupHandler(this.props.dropoffLocation);
          this.props.pickupAddHandler(this.props.dropoffAddress)
          this.props.dropoffHandler(this.props.pickupLocation)
          this.props.dropoffAddHandler(this.props.pickupAddress)
          ReactGA.event({
              category: StepTwoCategory,
              action: 'Pickup and drop locations swapped',
              label: 'Swapp Button'
            });
      }
    }
    })
    },
    componentWillReceiveProps(nextProps){
      const currentStanHospital =localStorage.getItem('hospSel') && JSON.parse(localStorage.getItem('hospList'))[localStorage.getItem('hospSel')];
      if(nextProps.pickupAddress.length > 0 ){
          this.props.pickupSuffixHandler(true);
      }else if(nextProps.pickupAddress.length === 0){
          this.props.pickupSuffixHandler(false);
      }

      if(nextProps.dropoffAddress.length > 0){
          this.props.dropoffSuffixHandler(true);
      }else if(nextProps.dropoffAddress.length === 0){
          this.props.dropoffSuffixHandler(false);
      }

  }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <div>
    <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
  >
  </GoogleMap>
    <StandaloneSearchBox
      ref={props.onPickupMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPickPlacesChanged}
    >
      <Input
        prefix={<Icon type="environment-o" style={{ color: '#EA4335' }} />}
        type="text"
        placeholder='Enter Pick-up Location'
        onChange={props.pickupField}
        onFocus={props.pickupGA}
        value={props.pickupAddress}
        className='input'
        suffix={props.pickupSuffix ? <Icon type="close-circle" onClick={props.pickupsuffix}/> :<Icon type="pushpin" onClick={props.curLocation} />}
      />
    </StandaloneSearchBox>
    <div style={{padding:'1rem'}} align='center'>
        <Button  className="swapButton" onClick={props.swapLocation}><Icon type="swap" className="swapIcon" /> </Button><span style={{fontSize:'1rem'}}>*Reverse Location</span>
    </div>
    <StandaloneSearchBox
      ref={props.onDropoffMounted}
      bounds={props.bounds}
      onPlacesChanged={props.ondropPlacesChanged}
    >
      <Input
        prefix={<Icon type="environment-o" style={{ color: '#00E64D' }} />}
        type="text"
        placeholder='Enter Drop-off Location'
        onChange={props.dropoffField}
        onFocus={props.dropoffGA}
        value={props.dropoffAddress}
        className='input'
        suffix={props.dropoffSuffix ? <Icon type="close-circle" onClick={props.dropoffsuffix}/> :''}
      />
    </StandaloneSearchBox>
  </div>
);

const mapStateToProps = (state) =>{
  return{
      pickupAddress:state.StepTwoReducer.pickupAddress,
      pickupLocation:state.StepTwoReducer.pickupLatlng,
      pickupSuffix:state.StepTwoReducer.pickupSuffix,
      dropoffLocation:state.StepTwoReducer.dropoffLatlng,
      dropoffAddress:state.StepTwoReducer.dropoffAddress,
      dropoffSuffix:state.StepTwoReducer.dropoffSuffix
  }
}


export default connect(mapStateToProps,{pickupAddHandler,pickupHandler,pickupSuffixHandler,dropoffHandler,dropoffAddHandler,dropoffSuffixHandler})(MapWithASearchBox)
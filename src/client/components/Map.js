
import React from 'react';
import {connect} from 'react-redux';
import {pickupHandler,pickupAddHandler,dropoffHandler,dropoffAddHandler,distanceHandler,MapCenterHandler,doubleDistanceHandler} from '../actions';
const { compose,withProps, withState,lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer
} = require("react-google-maps");

const Map = compose(
  withProps({
    refs:{}
  }),
  withState('center'),
  lifecycle({

    componentWillMount(){  
      
        this.setState({
          
          onMapMounted: ref => {
            this.props.refs.map = ref;
            
          },
          pickupMarkerListener: () =>{  
            this.props.pickupButton()
            this.props.refs.map.panTo(this.props.pickupLocation)
         }
        })
        // setTimeout(()=>this.props.refs.map.panTo(this.props.pickupLocation), 1000)
    },
    componentWillReceiveProps(nextProps) {
              if((
                (nextProps.pickupLocation !== false && nextProps.pickupConfirm === false) || 
                (nextProps.dropoffLocation !== false && nextProps.dropoffConfirm === false)) && !(nextProps.pickupLocation && nextProps.dropoffLocation)){
                this.props.refs.map.panTo((nextProps.pickupLocation || nextProps.dropoffLocation) ? (nextProps.pickupLocation ? nextProps.pickupLocation : nextProps.dropoffLocation) : {lat: 17.385044, lng: 78.486671})
              }
              
              this.setState({
                onCenterChanged: () =>{
                  if(nextProps.pickupConfirm && nextProps.isShowDropMarker === false){
                    let centerLatlng = this.props.refs.map.getCenter()
                      this.props.pickupHandler({lat:centerLatlng.lat(),lng:centerLatlng.lng()})
                      let geocoder = new google.maps.Geocoder();
                      if(geocoder){
                          geocoder.geocode({'location': {lat:centerLatlng.lat(),lng:centerLatlng.lng()}}, (results, status) =>{
                              if (status === 'OK') {
                                  this.props.pickupAddHandler(results[0].formatted_address)
                              }else{
                                  console.log('address not found')
                              }
                          })
                      }else{
                          console.log('unable to get location')
                      }
                      
                  }
      
                  if(this.props.dropoffConfirm && this.props.isShowPickMarker === false){
                    
                    let centerLatlng = this.props.refs.map.getCenter()
                      this.props.dropoffHandler({lat:centerLatlng.lat(),lng:centerLatlng.lng()})
                      let geocoder = new google.maps.Geocoder();
                      if(geocoder){
                          geocoder.geocode({'location': {lat:centerLatlng.lat(),lng:centerLatlng.lng()}}, (results, status) =>{
                              if (status === 'OK') {
                                  this.props.dropoffAddHandler(results[0].formatted_address)
                              }else{
                                  console.log('address not found')
                              }
                          })
                      }else{
                          console.log('unable to get location')
                      }
                  }
                  
                },
                pickupMarkerListener: () =>{  
                    this.props.pickupButton()
                    this.props.refs.map.panTo(nextProps.pickupLocation)
                },  
                dropoffMarkerListener: () =>{
                  this.props.dropoffButton();
                  this.props.refs.map.panTo(nextProps.dropoffLocation)
                }
              })
              let DirectionsService='';
              if(this.props.refs.map){
                DirectionsService = new google.maps.DirectionsService();
              }
              
              if(nextProps.pickupLocation === false || nextProps.dropoffLocation === false){
                this.setState({
                  directions: null,
                });
              }
      
              if(nextProps.isShowPickMarker === false || nextProps.isShowDropMarker === false){
                this.setState({
                  directions: null,
                });
              }
              if(nextProps.pickupLocation && nextProps.dropoffLocation && nextProps.isShowPickMarker === true && nextProps.isShowDropMarker === true ){   
                  DirectionsService.route({
                      origin:  new google.maps.LatLng(nextProps.pickupLocation.lat, nextProps.pickupLocation.lng),
                      destination: new google.maps.LatLng(nextProps.dropoffLocation.lat, nextProps.dropoffLocation.lng),
                      travelMode: google.maps.TravelMode.DRIVING,
                    },(result, status) => {
                      if (status === google.maps.DirectionsStatus.OK) {
                          this.setState({
                          directions: result,
                        });
                        this.props.distanceHandler(result.routes[0].legs[0].distance.text)
                        this.props.doubleDistanceHandler((result.routes[0].legs[0].distance.value * 2)/1000)


                      } else {
                          console.error(`error fetching directions ${result} and ${status}`);
                      }
                    });
              }
            }
  }),
  withScriptjs,
  withGoogleMap,
)(props =>
  <div>
  {/* {console.log(props,'map url is loaded')} */}
  {/* gestureHandling: "greedy"  */}
   <GoogleMap
    defaultCenter={props.MapCenter}
    zoom={props.mapZoom}
    ref={props.onMapMounted}
    onCenterChanged={props.onCenterChanged}
    defaultOptions={{streetViewControl: false,mapTypeControl: false,
    styles:[
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]
    }}
  >
  
  {props.directions  && <DirectionsRenderer directions={props.directions} options={{suppressMarkers: true}} />}
    {props.pickupLocation && 
       <Marker 
       position={props.pickupLocation}
       onClick={props.pickupConfirm === false ? props.pickupMarkerListener: null}
       visible={props.isShowPickMarker ? true : false}
       icon={require('../../../public/images/pick.png')}
     >
     </Marker>
     }  
     {props.dropoffLocation && <Marker
       position={props.dropoffLocation}
       onClick={props.dropoffConfirm === false ? props.dropoffMarkerListener: null}
       visible={props.isShowDropMarker ? true : false} 
       icon={require('../../../public/images/drop.png')}
     >
       </Marker>
       }
  </GoogleMap>
  </div>
);
const mapStateToProps = (state) =>{
    return{
        pickupAddress:state.StepTwoReducer.pickupAddress,
        pickupLocation:state.StepTwoReducer.pickupLatlng,
        dropoffLocation:state.StepTwoReducer.dropoffLatlng,
        MapCenter:state.StepTwoReducer.center
    }
}
export default connect(mapStateToProps,{pickupAddHandler,pickupHandler,dropoffHandler,dropoffAddHandler,distanceHandler,MapCenterHandler,doubleDistanceHandler})(Map);
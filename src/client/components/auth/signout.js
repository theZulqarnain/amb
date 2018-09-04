import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from  '../../actions';

class Singout extends Component{
    componentWillMount(){
        this.props.singoutUser();
    }
    render(){
        return <div>Sorry to see you go...</div>
    }
}

export default connect(null,actions)(Singout);
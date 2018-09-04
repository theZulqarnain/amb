import React from 'react';
import {
    Row,
    Col
} from 'antd';

import {connect} from 'react-redux';
import {Reset} from '../actions'

import MenuMarkup from './nested/MenuMarkup';
import ResponsiveNav from './nested/ResponsiveNav.js';

class Header extends React.PureComponent{
    // state = { };
    constructor(props) {
        super(props);
    }
    render(){
        return(
                // <Row justify="center" className="header">
                //     <Col  lg={{span:4,offset:10}} xs={{span:20}}>
                //             <img src={require('../../public/images/logoZ.png')} alt="logo" height="90%" width="90%"/>
                //     </Col>
                //     <Col lg={{span:8,offset:2}}>
                //         <ResponsiveNav
                //         activeLinkKey={location.pathname}
                //         menuMarkup={MenuMarkup}
                //         placement='bottomLeft'
                //         />
                //     </Col>
                // </Row>
                <Row justify="center" className="header">
                    <Col  lg={{span:6,offset:10}} xs={{span:20,offset:4}}>
                            <img src={require('../../../public/images/logoZ.png')} alt="logo" height="70%" width="70%"/>
                    </Col>
                </Row> 

                
        )
    }
}

export default connect(null,{Reset})(Header) ;
import React from 'react';
import { Card,Row,Col } from 'antd';
const { Meta } = Card;
import { connect } from 'react-redux'
import { ambSelected,addOnSelected,priceCal } from '../actions/stepThree';


class StepThree extends React.PureComponent{
    constructor(props){
        super(props)
    }
    componentDidUpdate(){
        if(this.props.AmbSelect && this.props.Addons.length > 0){
            this.props.priceCal()
        }
    }
    render(){
        let small = 'samllVehicle';
        let large = 'largeVehicle';
        let sc='20%';
        if(screen.width > 768){
            sc='20%';
        }else{
            sc='40%';
        }
        const addonsOptions = { Helper:'Helper','Medical Technician':'Technician','Freezer Box':'FreezerBox',Oxygen:'Oxygen',AC:'AC','Wheel Chair':'WheelChair' };
        return(
            <Row className='stepThree'>
                <Col lg={{span:11,offset:1}} xs={{span:24}} style={{padding:'0.5rem'}}>
                    <Card className='ambCards' title="SELECT VEHICLE TYPE (Click to Select)">
                        <Card
                            type="inner"
                            title="Small Vehicle"
                            hoverable
                            onClick={()=>this.props.ambSelected(small)}
                            className={`innerCard ${this.props.AmbSelect===small ? 'ambSelected' : ''}`}
                        >
                            <Row>
                                <Col lg={{span:8,offset:0}} xs={{span:20,offset:4}}>
                                    <img src={require('../../../public/images/v_Muv.png')} alt="small Ambulance" width="60%" height="60%"/>
                                </Col>
                                <Col lg={{span:16,offset:0}} xs={{span:20,offset:4}}  className='featureTxt'>
                                    <p>Front Setting : 1 Person</p>
                                    <p>Back Setting : 2 Person</p>
                                    <p>Strecture Height: 5.6"</p>
                                </Col>
                            </Row>
                        </Card>
                        <Card
                            style={{ marginTop: 16 }}
                            type="inner"
                            title="Large Vehicle"
                            hoverable
                            onClick={()=>this.props.ambSelected(large)}
                            className={this.props.AmbSelect===large ? 'ambSelected' : ''} >
                            <Row>
                                <Col lg={{span:8,offset:0}} xs={{span:20,offset:4}}>
                                <img src={require('../../../public/images/v_ALS.png')} alt="large Ambulance" width="60%" height="60%"/>
                                </Col>
                                <Col lg={{span:16,offset:0}} xs={{span:20,offset:4}} className='featureTxt'>
                                    <p>Front Setting : 2 Person</p>
                                    <p>Back Setting : 3 Person</p>
                                    <p>Strecture Height: 6.5"</p>
                                </Col>
                            </Row>
                        </Card>
                    </Card>
                </Col>
                <Col lg={{span:10,offset:1}} xs={{span:24}} style={{padding:'0.5rem'}}>
                <Card title="SELECT ADD-ON (Click to Select)" className='Addons'>
                <Row  type="flex" justify="space-around" align="middle" gutter={16} className='addonRow'>
                {
                    Object.keys(addonsOptions).map((option)=>{
                        return <Col lg={{span:12}} key={option}>
                            <Card 
                                hoverable
                                onClick={()=>this.props.addOnSelected(addonsOptions[option])}
                                className={`${this.props.Addons.includes(addonsOptions[option]) ? 'addonSelected' : ''} addCard`}
                            >   
                            <div align='center'> 
                                <img src={require(`../../../public/images/${addonsOptions[option]}${this.props.Addons.includes(addonsOptions[option]) ?'_Sel.png' :'.png' }`)} alt={`${option} Image`} width={sc} height='20%' style={{marginTop:'1rem'}}/>
                                <p style={{textAlign:'center',paddingTop:'0.5rem'}}>{option}</p>
                            </div>
                            </Card>     
                    </Col>
                    })
                }
                </Row>
                </Card>         
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        AmbSelect:state.StepThreeReducer.isAmbSel,
        Addons:state.StepThreeReducer.addonSel
    }
}
export default connect(mapStateToProps,{ambSelected,addOnSelected,priceCal})(StepThree);
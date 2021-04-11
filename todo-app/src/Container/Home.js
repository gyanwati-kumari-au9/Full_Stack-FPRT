import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




class Home extends Component{
    constructor(){
        super()
        this.state = {
            // 
        };
        
    }
   
    
    render(){
        return(
            <Container fluid>
                <Row md={{ span: 12 }} style={{backgroundImage:"url(/Images/banner.png)",height:"500px",width:"1500px"}}>
                    <Col md={{ span: 6 ,offset: 3}}>
                        <Form inline style={{marginTop:"200px"}} >
                            <FormControl  type="text" placeholder="Search" className="mr-sm-2" style={{width:"450px"}} />
                            <Button variant="outline-light"  style={{marginLeft:"-10.5px", backgroundColor:"#51AF2B"}}>Find</Button>
                        </Form>

                    </Col>
                </Row>

            </Container>   

        )
    }
}

function mapStateToProps(state){
    console.log("==== MAp State========>",state)
    
}


export default  withRouter(connect(mapStateToProps)(Home));
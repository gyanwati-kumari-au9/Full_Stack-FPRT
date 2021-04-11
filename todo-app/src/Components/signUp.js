import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import * as USER from "../api/apiActions.js";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Signup extends Component {
  state = {
    isRegistered: false,
    user: {},
    text: "",
  };

  register = async () => {
    const { user, message } = await USER.signup(this.state.user);
    if (user) {
      this.setState({
        isRegistered: true,
      });
    } else {
      this.setState({
        ...this.state,
        text: message,
      });
    }
  };

  onChange = (e) => {
    this.setState({
      ...this.state,
      text: "",
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    if (this.state.isRegistered) {
      return <Redirect to="/login" />;
    }
    return (
      <Container>
                <Row > 
                    <Col md={{span:12}} style={{display:"flex", margin:"100px", boxShadow:"5px 5px 5px 5px", padding:"20px"}}>
                    <div className="item"  >
                        <img src="Images/loginside.png" alt="" style={{width:"600px",borderRadius:"20px 0px 0px 20px"}}/>
                    </div>
                    <div className="item" style={{marginLeft:"100px"}} >
                    <form>
                        <img className="logo" src="images/logo.png"  alt="logo" />
                        <h1>Create an account</h1>
                        <div className="form-group">
                          <label>{this.state.text}</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="username"
                            onChange={this.onChange}
                          />
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            name="email"
                            onChange={this.onChange}
                          />

                          <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Password"
                            name="password"
                            onChange={this.onChange}
                          />
                        </div>

                        <div className="login-button">
                          <button onClick={this.register} type="button" style={{backgroundColor:"#51AF2B",width:"350px",border:"#51AF2B",color:"white"}}>
                            Signup
                          </button>
                        </div>

                        <div className="checkbox">
                          <label>
                            Don't have an account? <Link to="/login">Sign In</Link>
                          </label>
                        </div>
                    </form>
                    </div>

                    </Col>
                </Row>
            </Container> 
      // <div className="login-page">
      //   <div
      //     className="row"
      //     // style={{ backgroundImage: `url(${icon.loginBack})` }}
      //   >
      //     <div className="col-6 login-col hide-div"></div>
      //     <div className="col-6 login-col">
      //       <form className="login-form">
      //         <img className="logo" src="images/logo.png"  alt="logo" />

      //         <h1>Create an account</h1>

      //         <div className="form-group">
      //           <label>{this.state.text}</label>
      //           <input
      //             type="text"
      //             className="form-control"
      //             placeholder="Name"
      //             name="username"
      //             onChange={this.onChange}
      //           />
      //           <input
      //             type="email"
      //             className="form-control"
      //             id="email"
      //             placeholder="Email"
      //             name="email"
      //             onChange={this.onChange}
      //           />

      //           <input
      //             type="password"
      //             className="form-control"
      //             id="pwd"
      //             placeholder="Password"
      //             name="password"
      //             onChange={this.onChange}
      //           />
      //         </div>

      //         <div className="login-button">
      //           <button onClick={this.register} type="button">
      //             Signup
      //           </button>
      //         </div>

      //         <div className="checkbox">
      //           <label>
      //             Don't have an account? <Link to="/login">Sign In</Link>
      //           </label>
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
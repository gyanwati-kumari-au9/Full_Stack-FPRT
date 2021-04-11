import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import * as USER from "../api/apiActions.js";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GroupTasks from './GroupTasks';


class Login extends Component {
  state = {
    user: {},
    text: "Login to manage your account",
    tasks: [{
        "id":"123",
        "task":"Buy Grocery",
        "group": "To DOs",
        "completed": false,
        "favorite": false
    }],
    groups: [
        "To DOs",
        "On going",
        "Done"
    ]
  };

  formatTodos = (groups, tasks) => {
    const formattedToDos = {}
    const added = [];
    for(let group in groups){
        const groupTask = tasks.filter(task => {added.push(task.id); return task.group == group });
        formattedToDos.push({group, tasks: groupTask});
    }
    const uncategorizedTodos = tasks.filter(task => !added.includes(task.id));
    formattedToDos.push({group: "Uncategorized", tasks: uncategorizedTodos});
    return formattedToDos;
  }

  login = async () => {
    const { token, user, message, error  } = await USER.login(this.state.user);
    if (user) {
      this.props.dispatch({
        type: "AUTH_LOGIN",
        payload: { token, user },
      });
      localStorage.setItem("user", user);
      localStorage.setItem("_tkn", token);
      alert(message);
      this.props.history.push("/dash");
    } else {
      this.setState({
        text: message,
      });
      alert(error);
    }
  };

  onChange = (e) => {
    this.setState({
      ...this.state,
      text: "Login to manage your account",
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    if (localStorage.getItem("user")) {
      return <Redirect to="/dash" />;
    }
    const groups = this.formatTodos(this.state.groups, this.state.tasks);
    return (
        <Container style={{ marginTop: "3em"}}>
        <Row > 
            <Col>
                <center><h1>{"All Your TODOs"}</h1></center>
            </Col>
        </Row>
        <Row>
            {groups.map(group => <GroupTasks group={group.group} tasks={group.tasks}/>)}
        </Row>
    </Container> 
     
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Login);
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as USER from "../api/apiActions.js";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GroupTasks from './GroupTasks';


class TrelloBoard extends Component {
  state = {
    user: {},
    text: "Login to manage your account",
    tasks: [{
        "id":"123",
        "task":"Buy Grocery",
        "group": "To DOs",
        "createdAt": "",
        "comleteAt": "",
        "completed": false,
        "favorite": false,
        "tags": ["Urgent","Gyan"]
    }],
    groups: [
        {id:1, name: "To DOs"},
        {id:2, name: "On going"},
        {id:3, name: "Done"}
    ]
  };

  formatTodos = (groups, tasks) => {
    let formattedToDos = [];
    const added = [];
    groups.forEach(group => {
        console.log("Processing groups", group.id, group.name);
        const groupTask = tasks.filter(task => {added.push(task.id); return task.group === group.name });
        formattedToDos.push({id: group.id, group: group.name, tasks: groupTask});
    })
    const uncategorizedTodos = tasks.filter(task => !added.includes(task.id));
    formattedToDos= [{id: 0, group: "Uncategorized", tasks: uncategorizedTodos}].concat(formattedToDos);
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
    if (!localStorage.getItem("user")) {
      return <Redirect to="/login" />;
    }
    const groups = this.formatTodos(this.state.groups, this.state.tasks);
    console.log(groups);
    return (
        <Container fluid>
        <Row > 
            <Col>
              <p>drkytrbm</p>
            </Col>
        </Row>
        <Row>
            {groups.map(group => <Col><GroupTasks key={group.id} group={group.group} tasks={group.tasks}/></Col>)}
        </Row>
    </Container> 
     
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(TrelloBoard);
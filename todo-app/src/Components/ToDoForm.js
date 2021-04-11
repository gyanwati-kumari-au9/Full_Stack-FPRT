import React, {useState} from 'react';
import { Modal, Button, Form } from "react-bootstrap";

const ToDoForm = ({ onSubmit, eTask }) => {
    const [task, setTask] = useState(eTask && eTask.task);
    const [group, setGroup] = useState(eTask && eTask.group);
    return (
      <Form onSubmit={onSubmit}>
        <Form.Control
          type="text"
          placeholder="What you want to complete?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Type Group"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        />
      </Form>
    );
  };

  export default ToDoForm;
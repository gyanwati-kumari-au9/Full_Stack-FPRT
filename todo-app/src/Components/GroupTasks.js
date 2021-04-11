import React, {useState} from 'react';
import TaskCard from './TaskCard';
import { PlusCircle } from 'react-bootstrap-icons';
import { Modal, Button, Form } from "react-bootstrap";
import ToDoForm from './ToDoForm';


const GroupTasks = ({group, id, tasks, handleTask}) => {
    const [show, setShow] = useState(false);
    const handleShow = (flag) => setShow(flag);

    const [task, setTask] = useState("");
    
    const handleTaskUpdate = (task) => {
        setTask(task);
        handleShow(true);
    };

    return(
        <div className="container" style={{textAlign:"center",boxShadow:"5px 5px 5px 5px", padding:"20px",borderRadius:"10px",marginTop:"50px",height:"500px"}}>
           <h2>{group}</h2>
           <button onClick={e=>handleShow(true)} ><PlusCircle/> Add New ToDo</button>
           {tasks.map(task => <TaskCard key={task.id} task={task}  updateToDo={handleTaskUpdate} />)}
            <Modal show={show} onHide={e=> handleShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <ToDoForm task={task} onSubmit={handleTask}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={e=>handleShow(false)} variant="secondary">Add ToDo</Button>
                </Modal.Footer>
            </Modal>
        </div>
       
    )
}

export default GroupTasks; 
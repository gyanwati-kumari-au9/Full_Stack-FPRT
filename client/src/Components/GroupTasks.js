import React, {useState} from 'react';
import TaskCard from './TaskCard';
import { PlusCircle } from 'react-bootstrap-icons';
import { Modal, Button, Form } from "react-bootstrap";
import ToDoForm from './ToDoForm';


const GroupTasks = ({group, id, tasks, handleTask, toggleFavorite, toggleComplete, deleteToDo}) => {
    const [show, setShow] = useState(false);
    const handleShow = (flag) => {
        if(!flag){
            setTask(undefined);
            setUpdate(false);
        }
        setShow(flag);
    };

    const [task, setTask] = useState("");
    const [update, setUpdate] = useState(false);
    
    const handleTaskUpdate = (task) => {
        setTask(task);
        handleShow(true);
        setUpdate(true);
    };
    const header = update? "Update ToDo Details" : "Add New Todo";
    const btnAct = update? "Update To Do" : "Add ToDo";
    return(
        <div className="container" style={{textAlign:"center",boxShadow:"5px 5px 5px 5px", padding:"20px",borderRadius:"10px",marginTop:"50px",height:"500px"}}>
           <h2>{group}</h2>
           <button onClick={e=>handleShow(true)} ><PlusCircle/> Add New ToDo</button>
           {tasks.map(task => <TaskCard key={task._id} task={task}  updateToDo={handleTaskUpdate} toggleFavorite={toggleFavorite} toggleComplete={toggleComplete} deleteToDo={deleteToDo} />)}
            <Modal show={show} onHide={e=> handleShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <ToDoForm eTask={task} onSubmit={handleTask}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={e => handleTask(e, task)} variant="secondary">{btnAct}</Button>
                </Modal.Footer>
            </Modal>
        </div>
       
    )
}

export default GroupTasks; 
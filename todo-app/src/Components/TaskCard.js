import React from 'react';
import { Container, Row, Col, Form }  from 'react-bootstrap';
import { Star, StarFill, XCircle, Pencil } from 'react-bootstrap-icons';


const TaskCard = ({task, toggleFavorite, toggleComplete, deleteToDo, updateToDo }) => {
    return(
        <Container style={{textAlign:"center",boxShadow:"5px 5px 5px 5px pink",marginTop:"20px",padding:"20px",borderRadius:"8px",color:"white",backgroundColor:"lightblue"}}>
            <Row>
                <Col>{task.favorite? <StarFill onClick={e=> toggleFavorite()} size={23} />: <Star size={23} onClick={e=> toggleFavorite()}/>}</Col>
            </Row>
            <Row>
                <Col>
                    <Form.Check type="checkbox" checked={task.complete} onChange={e => toggleComplete(e.target.checked) }/>
                </Col>
                <Col>
                    {task.complete?<del>{task.task}</del> : task.task }
                </Col>
                <Col>
                    <Pencil size={23} onClick={ e => updateToDo(task)} />
                    <XCircle size={23} onClick={ e => deleteToDo() }/>
                </Col>
            </Row>
            <Row>
                Tags: 
                {task.tags && task.tags.map(tag=> <Col>{tag}</Col>)
                    
                }
            </Row>
        </Container>
       
    )
}

export default TaskCard;
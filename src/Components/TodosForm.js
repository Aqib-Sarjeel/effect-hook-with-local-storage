import React, {useState} from "react";
import {
FormGroup,
Input,
InputGroup,
InputGroupAddon,
Form,
Button,


} from "reactstrap";
import {v4} from "uuid";


const TodoForm = ({addTodos}) => {
    const [todoString,setTodoString] = useState("")
 const SubmitHandler = (e)=>{
        e.preventDefault();
        if(todoString===""){
            alert("plz fill a todo")
        }else{

            const todo={
                todoString,
                id:v4()
            }
            setTodoString("")
            addTodos(todo)
        }
       

 }


    return(
        <Form onSubmit={SubmitHandler}>
            <FormGroup>
                <InputGroup>
                            <Input 
                            type="text"
                            placeholder="Add Your TODOs HERE"
                            name="todo"
                            id="todo"
                            value={todoString}
                            onChange={e => setTodoString(e.target.value)}
                            />
                            <InputGroupAddon addonType="prepend">
                                                <Button
                                                color="success"
                                                
                                                >ADD TODO</Button>
                            </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;
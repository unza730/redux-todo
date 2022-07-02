import "./App.css";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import { addTodo } from './action/action.js';
function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-container">
        <div className="inner-container">
         
            {/* <TextField
              id="filled-basic"
              label="Filled"
              variant="filled"
              name="add"
              onChange={(e)=> setInput(e.target.value)}
            /> */}
            <input type="text" onChange={(e) => setInput(e.target.value) } />
            <h1>hell</h1>
            {/* <Button variant="outlined" href="#outlined-buttons">
              <AddIcon onClick={() => dispatch(addTodo(input))} />
            </Button> */}
         
          <div className="button">
            <button onClick={() => dispatch(addTodo(input), setInput(''))} >Add</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

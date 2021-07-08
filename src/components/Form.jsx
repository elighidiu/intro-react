import React, { useRef } from "react";

function Form({todos, setTodos, count}) {

  const inputRef = useRef();

  function clickHandler() {
    const inputNewToDo = inputRef.current;
    console.log(inputNewToDo.value);  
    let newArr = JSON.parse(JSON.stringify(todos));
    newArr.push({ id:count++, task: inputNewToDo.value, checked: false });
    setTodos(newArr);
    console.log(newArr);
    console.log(todos);
  }


  return (
    <div className="content">
      <div className="Form">
          <div className="InputField">
            <input ref={inputRef} type="text" placeholder="Type a new todo" />
          </div>
          <div className="SubmitButton">
            <button onClick={clickHandler} value="Submit" >Submit</button>
            <hr />
          </div>
      </div>
    </div>
  );
}

export default Form;
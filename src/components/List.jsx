function List({todos, setTodos}) {

  const handleClick = (todo) => {
    let newArr = todos; //create a new array which at this moment is the same as the array above
    const clicked = newArr.find(element => element.id === todo.id); //loop through the array and find the element clicked.
    clicked.checked = !clicked.checked; //change the checked state from false to true
    setTodos(newArr); //set initialTodos to be the new arr
    console.log(clicked);

  };

  return (
    <div className="content">
    <div className="List">
      <ul>
        {todos.map((todo) =>
        //When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its’ children. React uses the key prop to create a relationship between the component and the DOM element.
        (<li key={todo.id}> 
          <input onClick={()=>handleClick(todo)} type="checkbox" id="list" defaultChecked={todo.checked} /> {todo.task}
        </li>))
        }
      </ul>
    </div>
    </div>
  );
}

export default List;
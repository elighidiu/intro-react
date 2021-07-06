
function List(props) {
    return (
      <div className="List">
         <input type="checkbox" id="list" />
            <label htmlFor="list">{props.name}</label>
      </div>
    );
  }
  
  export default List;
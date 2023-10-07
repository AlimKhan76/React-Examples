import './App.css';

function App() {
  // Creating a Array that we will use to demonstrate map function
  const data = ["Apple", "Banana", "Orange"];


  // Creating a array of objects to store data with multiple fields
  const object = [{
    id: "1",
    name: "Apple",
    type: "Fruit",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo laboriosam minus necessitatibus, molestias odio saepe."
  },
  {
    id: "2",
    name: "Tomato",
    type: "Vegetables",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quibusdam sunt fugiat amet, quisquam ipsa."
  },
  {
    id: "3",
    name: "Jackfruit",
    type: "Exotic fruits",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quibusdam sunt fugiat amet, quisquam ipsa."
  }



  ]

  return (
    <>
      {/* Bootstrap can be added in multiple way 
    Either you can include it in the index.html which will make it available to the whole app
    Or
    You can include it in a component, if you want to use it in just a single component */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />


      {/* Without the map method we will have to manually write all the divs again and again
This is the advantage of using component based architecture reusable components */}

      <h1>Without the map method </h1>
      <div className="card">
        <div className="card-body">
          {data[0]}
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          {data[1]}
        </div>
      </div>

      <div className="card">
        <div className="card-body">

          {data[2]}
        </div>
      </div>

      <br />
      <br /><br />





      <h1>With the map function in use</h1>

      {/* Open to curly brackets write Javascript inside JSX */}

      {/* data is the name of the array and map is a javascript function that loops through the array
      then inside the map function we use a callback function and put a variable inside it, in this case it is the variable "e" and we just use it normally */}
      {data.map((e) => {
        // if you want to render something then put it inside render
        return (
          <div className="card">
            <div className="card-body">
              {e}
            </div>
          </div>
        )
      })}

      <br /><br /><br />

      

      <h1>Using the map function on an array of object</h1>

      {object.map((data) => {
        return (

          // While using map function, you should keep in mind that every render of the jsx should have a key
          // attribute at the top level element to let react differentiate the element with the other elements
          // Otherwise it will show a error on the console
          <div key={data.id} className="card" >
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{data.type}</h6>
              <p className="card-text">{data.desc}</p>

            </div>
          </div>

        )
      })}
    </>
  );
}

export default App;

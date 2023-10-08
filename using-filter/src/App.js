import './App.css';
import { useState } from 'react';

function App() {
   // Creating a array of objects to store data with multiple fields
   const [object, setObject] = useState([{
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
    type: "Fruit",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quibusdam sunt fugiat amet, quisquam ipsa."
  },
  {
    id:"4",
    name:"Banana",
    type:"Fruit",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt laboriosam excepturi illo. Doloremque iure fugit delectus quisquam incidunt! Illo nulla quod animi reprehenderit amet?"
  } ,
  {
    id:"5",
    name:"Coffee",
    type:"Refreshment",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt laboriosam excepturi illo. Doloremque iure fugit delectus quisquam incidunt! Illo nulla quod animi reprehenderit amet?"
  }  
])

  const usingFilterToShowFruits=()=>{
    const fruitObject= object.filter((e)=>{
      return e.type==="Fruit";
    })
    setObject(fruitObject);
  }

  return (
    <>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />

          <h1>Using the map function on an array of object</h1>

{object.map((data) => {
  return (
    // While using map function, you should keep in mind that every render of the jsx should have a key
    // attribute at the top level element to let react differentiate the element with the other elements
    // Otherwise it will show a error on the console
    <div key={data.id} className="card container" >
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{data.type}</h6>
        <p className="card-text">{data.desc}</p>

      </div>
    </div>

  )
})}


<div className="container">
  <button onClick={usingFilterToShowFruits} className="btn btn-lg btn-primary">Show Only fruits</button>
</div>
    </>
     );
}

export default App;

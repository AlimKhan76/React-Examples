import { useState } from 'react';
import './App.css';

function App() {

  const [boolean, setBoolean] = useState(false)
  return (
    <>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>


<div className='container mt-5 text-center align-items-center mb-3'>
    <button className='btn btn-primary' onClick={()=>{setBoolean(!boolean)}}>Show div</button>



{/* Ternary operator syntax condition ? true : false  */}
{ boolean ?
  <div className="card" style={{ width: "18rem" }}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>


:
   <div>false</div>

}


{/* Another operator is && the syntax is conditon && true 
if the condition is true then the code after the && will run otherwise nothing will run*/}


{boolean && 
 <div className="card" style={{ width: "18rem" }}>
 <img src="..." className="card-img-top" alt="..." />
 <div className="card-body">
   <h5 className="card-title">Card title</h5>
   <p className="card-text">
     Some quick example text to build on the card title and make up the bulk of
     the card's content.
   </p>
   <a href="#" className="btn btn-primary">
     Go somewhere
   </a>
 </div>
</div>

}



</div>
    </>
     );
}

export default App;

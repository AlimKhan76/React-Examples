import './App.css';
import { useState } from "react"

function App() {

  // One can store the data from the form in many manner however there are some techniques which are 
  // more efficient then others
  // For example we can use create a state for every field in the form and make onchange handler for 
  // every fields, this will make coding redundant

  const [name, setName] = useState("fhsdghfhj")
  const [age, setAge] = useState("")

  const [email, setEmail] = useState("")
  const [phone_number, setPhone_Number] = useState("")


  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleAge = (e) => {
    setAge(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePhonenumber = (e) => {
    setPhone_Number(e.target.value)
  }

  //The above code will work perfectly and as expected but it is redundant

  // A more sophisitated way is to use a object and store the data in a key:value pattern 
  // and
  // using a single handle function for all of them 


  // Creating a state with a single object which can be empty or have some data in it
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    phone_number: ""
  })


  // THis will handle all the inputs of the form
  const allInputHandler = (e) => {

    // Here we are setting the form 
    // the ...form means copy the data in the form 
    // and
    // the e.target.name is the key value of the object and it should be in a [] 
    // and the name field in html should have the name attribute
    // e.target.value will contain the value
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <form >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name='name'
              // value={name}
              // onChange={handleName}
              value={form.name}
              onChange={allInputHandler}
            />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              name='age'
              // value={age}
              // onChange={handleAge}
              value={form.age}
              onChange={allInputHandler}


            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name='email'
              // value={email}
              // onChange={handleEmail}
              value={form.email}
              onChange={allInputHandler}


            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone number
            </label>
            <input
              type="number"
              className="form-control"
              name='phone_number'
              // value={phone_number}
              // onChange={handlePhonenumber}
              value={form.phone_number}
              onChange={allInputHandler}

            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;

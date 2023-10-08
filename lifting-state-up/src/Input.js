import  { useState } from "react";

// There are two ways to accept a prop 
// either you can use the props object this will contain all the props and
//  you can do props.name and select the props

// The other way is destructing you just write the name of the prop u are sending and write them like below
export const Input=({input,setInput})=>{

// export const Input=(props)=>{
    // const [input, setInput] = useState("");

    return(
        <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <div className='mt-5 container'>
        <form >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
            id='exampleInputEmail1'
              type="text"
              className="form-control"   
              value={input}           
            //   value={props.input}

              // The onchange handlers can also be defined in the same line too
              // One can create a anonymous arrow function and define the function in it
              // And 
              // Also when you need to pass show parameter with the function

              // Wrong
              // You can't type onChange={function(parameter)}   WRONG WAY
              // This will call the function as soon as the component renders

              // Right Way onchange={()=>{function(parameter)}}
              onChange={(e)=>{
                setInput(e.target.value)
              }}
            />
          </div>
        </form>
      </div>
      </>
    )
}

function One(){
  return <>One component</>
}


function Two(){
  return <>Two component</>
}



function Navbar() {
  return (
      <div style={{
        border:"1px solid black",
        display:"flex",
        justifyContent:"center"
      }}
      ><ul className="flex">
          <li className="mr-6">
          <Link to="/one">One</Link>
          </li>
          <li className="mr-6">
          <Link to="/two">Two</Link>
          </li>
      
      </ul></div>
  )
}

 import { Routes ,Route,Link} from "react-router-dom"
function App (){




  return (

    <div>
      <Navbar />
       <Routes>
       <Route path="/one" element={<One/>}/>
       <Route path="/two" element={<Two/>}/>
       </Routes>
    </div>
  )
}

export default App  
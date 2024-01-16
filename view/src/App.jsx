// import { useEffect, useState, useCallback } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import New from "./components/New";

// function App() {
//   const [movies, setMovies] = useState([])

//   const getMovies = useCallback(async () => {
//     const response = await fetch('http://localhost:3000/movies')
//     const moviesData = await response.json()
//     setMovies(moviesData)
//   }, [setMovies])

//   console.log(window.location.pathname)

//   useEffect(() => {
//     getMovies()
    
//   }, [getMovies])
//   return <>
//     <Navbar />
//     {
//       window.location.pathname =="/movies" && <>movie list</>
//     }
//       {
//       window.location.pathname =="/new" && <New/>
//     }
//   </>;
// }

// export default App;




import {useEffect ,useState} from 'react'
import List from "./components/List"
import Navbar from './components/Navbar'
import New from './components/New'
import Filter from './components/Filter'
function App (){
 const [movies,setMovies] = useState([])
 const [filtred , setFiltred] = useState([])

const getMovies = async ()=> {
   const response = await fetch('http://localhost:3000/movies',{
    method:"GET",
    headers : { 
      "Content-type" : "application/json"
    },
   })
   if(response.ok){
    const data = await response.json()
    setMovies(data)
   }
}


useEffect(()=>{
 getMovies()
},
[])

  return (
    <div>
      <Navbar />
       { window.location.pathname=="/" &&<List movies={filtred.length >0 ? filtred:movies} />}
       { window.location.pathname=="/new" &&<New setMovies={setMovies} />}

      <Filter movies={movies} setFiltred={setFiltred} />
    </div>
  )
}

export default App  
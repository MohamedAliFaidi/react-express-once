import { useEffect, useState } from "react"
import Card from "./Card"
import axios from "axios"
function UsersList() {
const [users,setUsers]=useState([])


useEffect(() => {
    // Axios GET request to jsonplaceholder API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);



  return (
    <div style={{display:"flex" ,flexWrap:"wrap" ,justifyContent:"center"}}>
     {
         users.map((user,index) => {
             return <Card key={index} user={user}/>
         })
     }

    </div>
  )
}

export default UsersList
import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    useEffect(()=> {
        const userEmail = user?.email;        
        if(userEmail){                       
            axios.get(`http://localhost:5000/admin/${userEmail}`)
            .then(data => {
                setAdmin(data.data.isAdmin)
            })
        }



    } ,[user])
    return [admin]

}
export default  useAdmin;




// const article = { title: 'Axios PUT Request Example' };
// const headers = { 
//     'Authorization': 'Bearer my-token',
//     'My-Custom-Header': 'foobar'
// };
// axios.put('https://reqres.in/api/articles/1', article, { headers })
//     .then(response => element.innerHTML = response.data.updatedAt);
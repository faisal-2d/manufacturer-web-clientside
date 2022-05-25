import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(()=> {
        const userEmail = user?.user?.email;
        console.log(userEmail);
        const currentUser = {email : userEmail};
        if(userEmail){            
            axios.put(`http://localhost:5000/user/${userEmail}`, currentUser)
            .then(data => {
                console.log(data.data)
                const accessToken = data.data.token;
                localStorage.setItem("accessToken",accessToken)
                setToken(accessToken)
            })
        }



    } ,[user])
    return [token]

}
export default  useToken;




// const article = { title: 'Axios PUT Request Example' };
// const headers = { 
//     'Authorization': 'Bearer my-token',
//     'My-Custom-Header': 'foobar'
// };
// axios.put('https://reqres.in/api/articles/1', article, { headers })
//     .then(response => element.innerHTML = response.data.updatedAt);
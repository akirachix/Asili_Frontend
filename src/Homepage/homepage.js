import React,{useEffect, useState} from "react";


 const User = () =>{
    const[user,setUser] = useState();
    const[loading, setLoading] = useState(false);

    useEffect(()=>{
        userData();
    },[])
    
    const userData = ()=>{
        fetch('http://127.0.0.1:8000/cloth/')
        .then(res => res.json())
        .then(data =>{ 
            setUser(data)
            setLoading(true)
            console.log("fetched ---->", data)})
        .catch(e => console.log(e))
    }
        if(!loading){
            return <div> loading...</div>
        }
        return(
            <div>
                {user.map(item =>
                    <div>
                        <img src= {item.image} alt = "user"/>
                        
                    </div>
                        
                    )}
    
            </div>
            );
        };
       
 export default User;
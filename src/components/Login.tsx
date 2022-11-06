import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Login = ():JSX.Element =>{


    const navigate = useNavigate()
    const [formData, setFormData] = useState<{username:string; password:string}>({
        username:'',
        password:''
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()

        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(formData)
    }
    const fetchD = async()=>{


    const data = await fetch('/Territories/All', {
    method:'GET',
    headers: {
        'accept': '*/*'
    }
    })


    const res = await data.json()

    }
    const fetchuser = async()=>{
          const data = await fetch('/Account/SignIn', {
    method:'POST',
    headers: {
        'accept': '*/*'
    }
    })

    }

    const onSubmit = async(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const {username, password} = formData
        const userData = {
            username: username,
            password:password
        }
    try{
     const User =await fetch("/Account/SignIn",{method: 'POST',
      headers: {
        'accept': 'text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)})

      const fetchedData = await User.json()
      console.log(fetchedData)


      if(User.status == 200){

        localStorage.setItem('UserData', JSON.stringify(fetchedData));
        window.location.reload()
        console.log('nice')
      }else{
        console.log(User.status)
      }

     }catch(e){
        console.log(e)
    }
}





    return(
        <div className="Logincont">
            <div className="loginformcont">
                <h2 > Login Account</h2>
                <form onSubmit={onSubmit}>
                    <label>Username:</label>
                    <input required onChange={handleChange} name="username" type='string'></input>
                    <label>Password:</label>
                    <input required onChange={handleChange} name="password" type='password'></input>
                    <button type='submit'>Login</button>
                </form>
            </div>

        </div>
    )




}

export default Login
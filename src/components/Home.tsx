import { useState, useEffect } from "react";

const Home = ():JSX.Element =>{

    const [data, setData] = useState<any>('')

    const fetchData = async()=>{
    const data = await fetch('/Territories/All', {
    method:'GET',
    headers: {
        'accept': '*/*'
    }
    })
    const res = await data.json()
    console.log(res.data)
    setData(res.data)
    }

    useEffect(()=>{
        fetchData()

    },[])


    return(
        <div>

            <p>Home</p>
        </div>
    )
}

export default Home;

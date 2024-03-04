import { useState } from "react"
import axios from "axios"

function App()
{
    const [deg,setdeg]= useState("0")
    const [city,setcity]= useState("france")
    const [desc,setdesc]= useState("Rainy")
    const [evalue,setevalue]= useState("")

    function getchange(event){
         setevalue(event.target.value)
    }

     function getweather(){
        var weatherdata=axios(`https://api.openweathermap.org/data/2.5/weather?q=${evalue}&appid=fd0241c510a4f61cb76a0251a3b24903`)
       console.log(weatherdata) 

       weatherdata.then(
        function(dalta){
            setdeg(dalta.data.main.temp)
            setcity(dalta.data.name)
            setdesc(dalta.data.weather[0].main)
        }
       )
    }
    return(
    <div className="flex flex-col justify-center h-[100vh] items-center ">
        <h1 className="p-8 rounded-md text-3xl text"> Welcome to <b>Knowea 😊</b> </h1>
        <div style={{"backgroundImage": "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)" }} className="p-2 rounded-md shadow">
            <h2 color="red">Hey ! ⛅</h2>
            <p>Do You want to know the weather Report :)</p>
            <input onChange={getchange} className="rounded-md h-6 p-1 outline-none" placeholder="City Name"></input>
        <br></br>
            <button onClick={getweather} className="bg-black text-white rounded-md p-1 mt-2 text-xs">Get Report ⚡</button>
            <p className="p-1">Degree:{deg} | City:{city} | Weather:{desc}</p>
        </div>
    </div>
    )
}

export default App
import React from 'react'
import SideBar from './SideBar'
import Slider from './Slider'
import { useEffect,useState } from 'react' 

const MainContainer = () => {
    const [getData, setGetData] = useState([])
 useEffect(() => {
     fetch('https://assessment-edvora.herokuapp.com').then(res=>res.json()).then(data=>setGetData(data))
 }, []) 
 
    return (
        <section className='main-container'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <SideBar fetchData={ getData}/>
                    </div>
                    <div className='col-lg-9 '>
                        <Slider fetchData={ getData}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainContainer

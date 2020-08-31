import React from 'react'
import church2 from './church2.jpg'
import './index.css'

function Home() {
    return (
        <div className="bodyelement">
            <img className="welcomeimage" src={church2} alt="church2"/>
            <div className="home1">
                <h3>Everyone's Welcomed</h3>
                <h4>at</h4>
                <h1>Jesus Culture</h1>
                <p className="branch">Find a Branch near You!</p>
                </div>
            <div className="home2">
                <img className="greetingimage" src={church2} alt="church2"/>
                <div className="greetings">
                    <h1> Greetings/Welcome</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Assumenda, est? Nobis vero nemo similique ducimus, 
                    et vitae laborum expedita perferendis, iure labore illum animi. 
                    Voluptatum omnis excepturi repudiandae voluptatem harum.</p>
                </div>
            </div>
            <footer>
            <p>copyright &#169; 2020.C.H.G.E.M | Lack to surplus</p>
            </footer>
        </div>
        
    )
}

export default Home

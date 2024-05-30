import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../Assets/pizza.jpeg'
import '../Styles/Home.css'

function Home() {
  return (
    <div className='home'>
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <h1>Peddros pizzera</h1>
            <p>PIZZA TO FIT ANY TEST</p>
            <Link to='/menu'>
                <button>ORDER NOW</button>
            </Link>
        </div>
    </div>
  )
}

export default Home
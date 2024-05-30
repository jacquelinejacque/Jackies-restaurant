import React from 'react'
import MultiplePizzas from '../Assets/multiplePizzas.jpeg'
import '../Styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop'  style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>
            Welcome to Foodie, where culinary excellence meets warm hospitality. Our journey began with a passion for crafting delicious dishes that celebrate the vibrant flavors of cuisine type.
            At Foodie, we take pride in sourcing the finest ingredients, working closely with local farmers and producers to ensure freshness and quality in every bite. Our talented team of chefs brings creativity and expertise to the kitchen, crafting innovative and memorable dishes that delight the senses.
            Beyond our culinary offerings, we are committed to providing an exceptional dining experience for our guests. Our inviting atmosphere, attentive service, and commitment to excellence create a welcoming environment for friends, families, and food enthusiasts alike.
            Whether you're joining us for a casual lunch, an intimate dinner, or a special celebration, we look forward to sharing our passion for food and hospitality with you. Come experience the flavors of Foodie and discover why we're more than just a restaurant – we're a culinary destination
            </p> 
        </div>
    </div>
  )
}

export default About
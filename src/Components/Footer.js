import React from 'react'
import InstagramIcon from '../Assets/instagram-logo.png'
import TwitterIcon from '../Assets/twitter-logo.png'
import FacebookIcon from '../Assets/facebook-logo.png'
import LinkedinIcon from '../Assets/linkedin-logo.png'
import '../Styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <img className='img' src={InstagramIcon}/> 
            <img className='img'src={TwitterIcon}/>
            <img className='img'src={FacebookIcon}/>
            <img className='img'src={LinkedinIcon}/>
        </div>
        <p>&copy; 2024 pedrotechpizza.com</p>
    </div>
  )
}

export default Footer
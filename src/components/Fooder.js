import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import "./Fooder.css"
function Fooder() {
  return (
    <div className='footer-container'>
        <section  className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Hello, I'm Mohamed Shames, I Made This a website 
            </p>
            <p className='footer-subscription-text'>
                You can looking This a website
            </p>
            <div className='input-areas'>
                <form>
                    <input type="email" name='email' placeholder='Enter Your Email' className='footer-input'/>
                    <Button
                    buttonStyle='btn--outline'>Sign Up</Button>
                </form>
            </div>
        </section>
        <div className='footer-link'>
            <div className='footer-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Twitter</Link>
                    <Link to='/'>Youtube</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-mesia-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        REACT <i class="fab fa-react"></i>
                    </Link>
                </div>
                <small className='wedsite-rights'>REACT © 2022 </small>
                <div className='social-icons'>
                    <Link 
                    className='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                        <i className='fab fa-facebook'></i>
                    </Link>
                    <Link 
                    className='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link 
                    className='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                        <i className='fab fa-twitter'></i>
                    </Link>
                    <Link 
                    className='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                        <i className='fab fa-youtube'></i>
                    </Link>
                    <Link 
                    className='social-icon-link linkein'
                    to='/'
                    target='_blank'
                    aria-label='LinkeIn'
                    >
                        <i class="fab fa-linkedin" ></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Fooder
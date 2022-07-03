import React from 'react'
import Cartditme from './Cartditme'
import "./Cards.css"
function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                     <Cartditme 
                    src='/images/pro-1.jpg'
                    text='React makes it painless to create interactive UIs.'
                    label='React'
                    path='/products'
                    />
                     <Cartditme 
                    src='/images/pro-2.jpg'
                    text='. Design simple views for each state in your application, '
                    label='React'
                    path='/products'
                    />   
                     <Cartditme 
                    src='/images/pro-3.jpg'
                    text='and React will efficiently update and render just the right components when your data changes.'
                    label='React'
                    path='/products'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
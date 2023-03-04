import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import pic1 from '../images/voice.jpg'
import pic2 from '../images/hospitality.jpeg'
import pic3 from '../images/reservation.jpeg'
import pic4 from '../images/staff.jpeg'

function Cards() {
    return (
        <div className='page'>
        <div className='cards'>
            <h1>FEATURES</h1>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        
                        <CardItem
                            src={pic1}
                            // text= <a href='http://127.0.0.1:5000'> Authenticate Website urls and find whether they are fishy or Safe</a>
                            text =  'The system enables voice-based ordering in multiple languages, reducing human interaction.'
                            label ='Voice Control'
                        />
                        <CardItem
                            src={pic2}
                            text="Our system offers user-friendly and efficient service, utilizing AI software for personalized customer hospitality."
                            label='Hospitality'
                            path='/services'
                        />


                    </ul>


                    <ul className='cards__items'>
                        <CardItem
                            src={pic3}
                            text="The system includes a reservation model that allows customers to place orders based on historical data and reserve a table before arriving."
                            label='Reservation System'
                            path='/t&cfraud'
                        />
                        <CardItem
                            src={pic4}
                            text="We will also manage the staff according to the demands and schedule timings."
                            label='Staff Management'
                            path='/smsfraud'
                        />
                    </ul>
                </div>

            </div>

        </div>
        </div>
    )
}

export default Cards

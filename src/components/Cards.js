import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Our Services</h1>
            <div className='cards_container'>
                <div className='cards__wrapper'>
                    <ul className="cards__items">
                        <CardItem
                        src='images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg'
                        title='Home Cleaning'
                        text='Let us give you the professional clean touch in your home, office, garden, etc.'
                        label='Services'
                        path='/services'
                        />
                        <CardItem
                        src='images/engin-akyurt-yCYVV8-kQNM-unsplash.jpg'
                        title='Laundry Services'
                        text='We pay utmost attention while handling your linen, making sure you appear smart, always!'
                        label='Services'
                        path='/services'
                        />
                        <CardItem
                        src='images/anton-SnKfmC1I9fU-unsplash.jpg'
                        title='Fumigation Services'
                        text='You hate pest and insects? we hate them too! Lets help you achive a pest free home/office.'
                        label='Services'
                        path='/services'
                        />
                        <CardItem
                        src='images/markus-winkler-3vlGNkDep4E-unsplash.jpg'
                        title='Logistics Services'
                        text='Need to get something in your favourite store, we shop on your behalf while you relax.'
                        label='Services'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

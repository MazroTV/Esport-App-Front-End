import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import image9 from '../../images/igl.png';
import image2 from '../../images/red.jpg';
import image3 from '../../images/new merch.png';
import image4 from '../../images/newwebsite.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Accouncments!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={image9}
              text='New IGL Annoucments.'
              label='Announcment'
              path='/announcements'
            />
            <CardItem
              src={image2}
              text='Roster Changes are Happening, Join up!'
              label='Announcment'
              path='/announcements'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image3}
              text='New Merch!'
              label='Announcment'
              path='/announcementss'
            />
            <CardItem
              src={image4}
              text='Changes to the Website.'
              label='Announcment'
              path='/announcements'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

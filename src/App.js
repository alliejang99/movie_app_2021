import React from 'react';
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
    <h4>{rating}/5.0</h4>
  </div>;  
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    name: "Cake",
    image: 
      "https://i.ytimg.com/vi/CkkaCdEV5nY/maxresdefault.jpg",
    rating: 5.0
  },
  {
    name: "Apple",
    image: 
      "https://blog.kakaocdn.net/dn/cBBuc7/btqu2Iwt10t/pTpkSad7J0p6c40g4K7Xi1/img.jpg",
      rating: 3.9
  },
  {
    name: "Coffee",
    image: 
      "https://www.thescoop.co.kr/news/photo/202001/37882_51286_3655.jpg",
      rating: 4.5
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  )
}

export default App;

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import foodImg from '../assets/r2.jpg';

// ✅ Importing the icons you're using
import { BsStopwatchFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa'; // assuming FatHeart = FaHeart?

export default function RecipeItems() {
  const allRecipes = useLoaderData();
  console.log(allRecipes);

  return (
    <>
      <div className="card-container">
        {Array.isArray(allRecipes?.data) ? (
          allRecipes.data.map((item, index) => (
            <div key={index} className="card">
              <img src={foodImg} height="120px" width="100px" alt="food" />
              <div className="card-body">
                <div className="title">{item.title}</div>
                <div className="icons">
                  <div className="timer">
                    <BsStopwatchFill /> {item.time || '30min'}
                  </div>
                  <FaHeart />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </>
  );
}

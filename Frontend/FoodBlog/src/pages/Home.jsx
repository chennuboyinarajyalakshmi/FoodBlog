import React from 'react';
import r1 from '../assets/r1.jpg';
import RecipeItems from '../components/RecipeItems';
import '../App.css'; 

export default function Home() {
  return (
    <>
      <section className="Home">
        <div className="left">
          <h1>Food Recipe</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dicta
            sunt quibusdam. Eos illum eius alias numquam unde assumenda et
            
          </h5>
          <button>Share your Recipe</button>
        </div>
        <div className="right">
          <img src={r1} width="360px" height="300px" alt="Food Recipe" />
        </div>
      </section>

      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d4f6e8"
            fillOpacity="1"
            d="M0,160L60,176C120,192,240,224,360,245.3C480,267,600,277,720,240C840,203,960,117,1080,106.7C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="recipe">
        <RecipeItems />
      </div>
    </>
  );
}

import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ menuImg = '', title = 'Default Title', description = 'Default description text.' }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={menuImg}
      bgImageAlt={title}
      strength={-200}
      
    >
      <div className="hero h-[600px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md flex flex-col justify-center items-center">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nam molestias inventore adipisci distinctio nihil similique tempore quisquam modi laboriosam ducimus necessitatibus, explicabo, labore neque nisi ratione error, dolores architecto?</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;

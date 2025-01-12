import React from 'react';
import SectionTitle from './Sectiontitle';
import "./Featured.css"


const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-24'
        >
            <SectionTitle subHeading={"check it out"} heading={"Featured item"}></SectionTitle>
            <div className='md:flex justify-center items-center py-20 px-24 gap-6 md:gap-10 bg-slate-700 bg-opacity-40'>
                <div>
                    <img src="../../home/featured.jpg" alt="" />
                </div>
                <div>
                    <p className='text-xl '>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ullam. Est similique suscipit dignissimos iste deserunt ea nostrum omnis, id iure facilis consectetur eos in totam delectus a obcaecati explicabo.
                    Esse fugiat, aliquid itaque sit sapiente quas adipisci. Illo, totam. Recusandae, nihil sequi reprehenderit ratione, praesentium maiores</p>
                    <button className='btn btn-outline border-0 border-b-4 my-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
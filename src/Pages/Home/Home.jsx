import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from '../../Components/Featured';
import Testimonials from '../../Components/Testimonials';

const Home = () => {
    return (
        <div className='w-full'>
            <header>
                <Banner></Banner>
            </header>
            <section>
                <Category></Category>
                <PopularMenu></PopularMenu>
                <Featured></Featured>
                <Testimonials></Testimonials>
            </section>
        </div>
    );
};

export default Home;
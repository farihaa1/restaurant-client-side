import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <header>
                <Banner></Banner>
            </header>
            <section>
                <Category></Category>
                <PopularMenu></PopularMenu>
            </section>
        </div>
    );
};

export default Home;
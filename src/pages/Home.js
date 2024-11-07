import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import GameList from '../components/GameList';
import useFetchGames from '../hooks/useFetchGames';
import '../styles/global.css'

const Home = () => {
    const {} = useFetchGames();

    return (
        <div className="app-container">
            <BannerCarousel className="banner-carousel"/>
            <div>
                <GameList/>
            </div>
        </div>

    );
};

export default Home;
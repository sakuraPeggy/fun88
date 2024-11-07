import React, { useState } from 'react';
import '../styles/global.css'
import GameCard from './GameCard';
import StartIcon from '../assets/SVGIcons/fire-svgrepo-com 1.svg'
import NewIcon from '../assets/SVGIcons/NEW.svg';
import LiveIcon from '../assets/SVGIcons/casino-dealer-illustration-2-svgrepo-com 1.svg';
import jackpot from '../assets/SVGIcons/jackpots.svg';
import TableGames from '../assets/SVGIcons/card.svg'
import BINGO from '../assets/SVGIcons/coins 1.svg'
import Others from '../assets/SVGIcons/APP SQUARE.svg'
import badWolf from '../assets/GameIcons/Group72.webp'
import sakura from '../assets/GameIcons/Group75.webp';
import candy from '../assets/GameIcons/gpas_etpop_pop.webp.webp';
import dargon from '../assets/GameIcons/Group70.webp';
import gamess from '../assets/GameIcons/Group86.webp'
import bingo from '../assets/GameIcons/Group94.webp';
import candybar from '../assets/GameIcons/Group84.webp';

const GameList = () => {

    const games = [
        { name: 'Bad wolfie NEW', img: badWolf,provider: 'Provider1', category: 'NEW' },
        { name: 'sakura NEW', img: badWolf, provider: 'Provider1', category: 'NEW' },
        { name: 'egypt wolfie NEW', img: badWolf, provider: 'Provider1', category: 'NEW' },
        { name: 'Bad Horse LIVE', img: bingo, provider: 'Provider2', category: 'LIVE' },
        { name: 'Dragon Hunt LIVE', img: bingo, provider: 'Provider2', category: 'LIVE' },
        { name: 'egypt wolfie LIVE', img: bingo, provider: 'Provider2', category: 'LIVE' },
        { name: 'baby Hunt JaCKPOTS', img: candybar, provider: 'Provider3', category: 'JACKPOT' },
        { name: 'Bad wolfie JaCKPOTS', img: candybar, provider: 'Provider3', category: 'JACKPOT' },
        { name: 'sakura JaCKPOTS', img: candybar, provider: 'Provider3', category: 'JACKPOT' },
        { name: 'Dragon Baby SLOTS', img: sakura, provider: 'Provider4', category: 'SLOTS' },
        { name: 'Dragon Hunt SLOTS', img: sakura, provider: 'Provider4', category: 'SLOTS' },
        { name: 'Dragon Hunt SLOTS', img: sakura, provider: 'Provider4', category: 'SLOTS' },
        { name: 'Dragon Hunt SLOTS', img: sakura, provider: 'Provider4', category: 'SLOTS' },
        { name: 'Bad wolfie TABLE_GAMES', img: candy, provider: 'Provider5', category: 'TABLE_GAMES' },
        { name: 'baby Hunt TABLE_GAMES', img: candy, provider: 'Provider5', category: 'TABLE_GAMES' },
        { name: 'egypt wolfie TABLE_GAMES', img: candy, provider: 'Provider5', category: 'TABLE_GAMES' },
        { name: 'Dragon Baby TABLE_GAMES', img: candy, provider: 'Provider5', category: 'TABLE_GAMES' },
        { name: 'baby Hunt OTHERS', img: dargon, provider: 'Provider6', category: 'OTHERS' },
        { name: 'sakura OTHERS ', img: dargon, provider: 'Provider6', category: 'OTHERS' },
        { name: 'egypt BINGO', img: bingo, provider: 'Provider7', category: 'BINGO' },
        { name: 'Dragon BINGO', img: candy, provider: 'Provider7', category: 'BINGO' },
        { name: 'baby BINGO', img: candy, provider: 'Provider7', category: 'BINGO' },
        { name: 'Dragon Baby ALL', img: gamess, provider: 'Provider8', category: 'ALL' },
        { name: 'sakura ALL', img: gamess, provider: 'Provider8', category: 'ALL' },
    ];



    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [favorites, setFavorites] = useState([]);
    const toggleFavorite = (game) => {
        setFavorites((prev) => {
            if (prev.includes(game)) {
                return prev.filter((fav) => fav.name !== game.name); // Remove from favorites
            }
            return [...prev, game]; // Add to favorites
        });
    };

    const filteredGames = games.filter(game =>
        (selectedCategory === 'ALL' || game.category === selectedCategory) &&
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <>
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search for a game"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="category-buttons button .category-icon">

                    <button onClick={() => setSelectedCategory('ALL')}>
                        <img src={StartIcon} alt="ALL" style={{ width: 15, height: 15, marginRight: 4 }}/>
                        START</button>
                    <button onClick={() => setSelectedCategory('NEW')}>
                        <img src={NewIcon} alt="NEW" style={{ width: 15, height: 15, marginRight: 4 }}/>
                        New</button>
                    <button onClick={() => setSelectedCategory('SLOTS')}>
                        <img src={jackpot} alt="SLOTS" style={{ width: 15, height: 15, marginRight: 4 }}/>SLOTS
                    </button>
                    <button onClick={() => setSelectedCategory('LIVE')}>
                        <img src={LiveIcon} alt="LIVE" style={{width: 15, height: 15, marginRight: 4 }}/>
                        LIVE</button>
                    <button onClick={() => setSelectedCategory('JACKPOT')}>
                        <img src={jackpot} alt="JACKPOT" style={{ width: 15, height: 15, marginRight: 4 }}/>
                        JACKPOT</button>
                    <button onClick={() => setSelectedCategory('TABLE_GAMES')}>
                    <img src={TableGames} alt="TABLE GAMES" style={{ width: 15, height: 15, marginRight: 4}}/>
                    TABLE GAMES</button>
                    <button onClick={() => setSelectedCategory('BINGO')}>
                        <img src={BINGO} alt="BINGO" style={{ width: 24, height: 24, marginRight: 8 }}/>
                        BINGO</button>
                   <button onClick={() => setSelectedCategory('OTHERS')}>
                    <img src={Others} alt="OTHERS" style={{ width: 24, height: 24, marginRight: 8 }}/>
                    OTHERS</button>
            </div>


            <div className="favorites">
                <h2>Favorites</h2>
                {favorites.length === 0 ? (
                    <p>No favorites selected yet.</p>
                ) : (
                    <div className="favorite-games">
                        {favorites.map((favorite) => {
                            console.log(favorite); // Debugging: check the favorite object
                            return (
                                <div key={favorite.name} className="favorite-card">
                                    <img src={favorite.img} alt={favorite.name} />
                                    <h3>{favorite.name}</h3>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            <div className="favorites-list">
                {favorites.length > 0 ? (
                    favorites.map(fav => (
                        <GameCard
                            key={fav.name}
                            game={fav}
                            isFavorite={true}
                            onToggleFavorite={() => toggleFavorite(fav)}
                        />
                    ))
                ) : (
                    <p>No favorites added yet.</p>
                )}
            </div>

            <h2>All Games</h2>
            <div className="game-list game-list button:hover">
                {filteredGames.map(game => (
                    <GameCard
                        key={game.name}
                        game={game}
                        isFavorite={favorites.includes(game.name)}
                        onToggleFavorite={() => toggleFavorite(game.name)}
                    />
                ))}
            </div>
        </>
    );
};

export default GameList;
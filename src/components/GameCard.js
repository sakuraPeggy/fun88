import React from 'react';

const GameCard = ({ game, isFavorite, onToggleFavorite }) => {
    return (
        <div className="game-card">
            {/* Directly use the image string */}
            <img src={game.img} alt={game.name} />
            <h3>{game.name}</h3>
            <button onClick={onToggleFavorite}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
};

export default GameCard;
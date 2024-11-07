import { useState, useEffect } from 'react';
import { fetchGames } from '../services/api';

const useFetchGames = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchGames().then(data => {
            setGames(data);
            setLoading(false);
        });
    }, []);

    return { games, loading };
};

export default useFetchGames;
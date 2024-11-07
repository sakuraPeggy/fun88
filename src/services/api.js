import badWolf from '../assets/GameIcons/Group72.webp'
import sakura from '../assets/GameIcons/Group75.webp';
import candy from '../assets/GameIcons/gpas_etpop_pop.webp.webp';
import dargon from '../assets/GameIcons/Group70.webp';
import gamess from '../assets/GameIcons/Group86.webp'
import bingo from '../assets/GameIcons/Group94.webp';
import candybar from '../assets/GameIcons/Group84.webp';





export const fetchGames = () =>{
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
    return new Promise((resolve) => {
        setTimeout(() => resolve(games), 3000);
    });
};
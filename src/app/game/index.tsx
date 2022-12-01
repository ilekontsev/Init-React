import { useEffect } from 'react';
import Knight from '../../_Katana/classes/knight/Knight';
import './index.scss';

function Game() {
    const players = [];
    useEffect(() => {
        const knight = new Knight({
            speed: 0.2,
            speedAttack: 1,
            position: {
                x: 0,
                y: 0,
            },
        });
        players.push(knight);
        requestAnimationFrame(renderScene);
        requestAnimationFrame(renderScene);
    }, []);
    const renderScene = () => {
        players.forEach((item) => {
            item.moveKey();
            item.getLayers();
        });
        requestAnimationFrame(renderScene);
    };

    return <div id='gameField' className='game-field'></div>;
}

export default Game;

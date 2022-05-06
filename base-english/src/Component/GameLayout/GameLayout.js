import './GameLayout.css';
import {useEffect, useState} from "react";

const GameLayout = () => {
    const [answer, setAnswer] = useState('');
    const [time, setTime] = useState(60);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTime(() => time - 1);
            if (time <= 0) {
                clearTimeout(timeout);
            }
        }, 1000);
    }, [time]);

    const answerHandler = (e) => {
        setAnswer(e.target.innerHTML);
    }

    return (
        <div className='game_container'>
            <div className='game_inner'>
                <div className='game-header'>
                    <div className='game-logo'/>
                    <div className='game-sidebar'/>
                </div>
                <div className='game-category'>
                    <h1 className='game-category_title'>Emotions 1</h1>
                </div>
                <div className='game-content'>
                    <div className='timer-block'>
                        <p className='game-question'>What emotion do you see?</p>
                        <p className='timer-text'>Time left: <br/> <strong> {time} </strong> </p>
                    </div>
                    <div className='emotion-icon'/>
                    <div className='answers-input'>
                        <div className='answer-input'>{answer}</div>
                        <div className='answers'>
                            <div className='answer' onClick={(e) => {answerHandler(e)}}>sad</div>
                            <div className='answer' onClick={(e) => {answerHandler(e)}}>happy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameLayout;
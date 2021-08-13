import { useState, useEffect } from 'react';

const ClickCounter = (props) => {

    const [count, setCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = e => {
        setCount(cur => cur + 1);
    };

    useEffect(() => {
        if(count === 10) {
            setIsDisabled(true);
        };
    }, [count])

    return (
        <div>
            <button onClick={handleClick} disabled={isDisabled}>CLICK ME</button>
            <p>Current Count: {count}</p>
            { count > 10 ? <p>You have clicked the button too many times!!!</p> : <></>}
        </div>
    );
};

export default ClickCounter;

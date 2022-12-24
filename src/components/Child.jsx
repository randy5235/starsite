import { useState } from 'react';

import './Child.css';

function Child(props) {
    const [count, setCount] = useState(0)
    const [lost, setLost] = useState(0)
    const reset = () => {
        setLost(0);
        setCount(0);
    }
    return (
        <div className="Child">
            <div className="Display">
           <h1>{props.name}</h1>
                &#9733; Earned: {count - lost || 0}
            <br></br>
                &#9733; Lost: {lost || 0}
            </div>
            <div className='Actions'>
                <button onClick={() => setCount(count + 1)} > Add &#9733;</button>
                <button onClick={() => setLost(lost + 1)} > Lose &#9733;</button>
                <button onClick={() => reset()} > Reset &#9733;</button>
            </div>
        </div>
    );
}

export default Child;
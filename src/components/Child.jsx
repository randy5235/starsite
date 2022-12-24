import { useState } from 'react';

import './Child.css';

function Child(props) {
    const [count, setCount] = useState(0)
    const [lost, setLost] = useState(0)
    return (
        <div className="Child">
            <div className="Display">
           {props.name}
            <br></br>
                Stars Earned:
            <br></br>
                {count - lost || 0}
            <br></br>
                Stars Lost:
            <br></br>
                {lost || 0}
            </div>
            <div className='Actions'>
                <button onClick={() => setCount(count + 1)} >Add &#9733;</button>
                <button onClick={() => setLost(lost + 1)} >Lose &#9733;</button>
            </div>
        </div>
    );
}

export default Child;
import { useState } from 'react';

import './Child.css';

function Child(props) {
    const child = props.child;
    console.log("child: ", child);// const [count, setCount] = useState(0)
    // const [lost, setLost] = useState(0)
    // const reset = () => {
    //     setLost(0);
    //     setCount(0);
    // }
    return (
        <div className="Child">
            <div className="Display">
           <h1>{child.name}</h1>
                <div className='value'>
                &#9733; Earned: {child.count - child.lost || 0}
                </div>
                <br></br>
                <div className='value'>
                &#9733; Lost: {child.lost || 0}
                </div>
           </div>
            <div className='Actions'>
                <button onClick={() => child.setCount(child.count + 1)} > Add &#9733;</button>
                <button onClick={() => child.setLost(child.lost + 1)} > Lose &#9733;</button>
                <button onClick={() => child.reset()} > Reset &#9733;</button>
            </div>
        </div>
    );
}

export default Child;
import { useState, useEffect } from 'react';

function Test() {
    const [currentTime, setCurrentTime] = useState(0);


/**
 * Si on ajoute 
 *  "proxy": "http://localhost:5000/"
 * 
 *  On peut mettre:
 *  fetch('http://localhost:5000/time')
 */

    useEffect(() => {
        fetch('http://localhost:5000/time').then(res => res.json()).then(data => {
          setCurrentTime(data.time);
        });
      }, []);


    return (<div>
            <p> The current time is {currentTime} </p>
            <p> Flask is working </p>
        </div>
    )
}

export default Test;

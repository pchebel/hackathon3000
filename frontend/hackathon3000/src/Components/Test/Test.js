import { useState, useEffect } from 'react';

function Test() {
    const [currentTime, setCurrentTime] = useState(0);


/**
 * Dans package.json, la ligne:
 *  "proxy": "http://localhost:5000/"
 * permet à fetch d'effectuer la requete au bon endroit
 *  
 *  
 */

    useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {

          console.log(data);
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

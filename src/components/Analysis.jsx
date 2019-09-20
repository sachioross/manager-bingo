import React, {useState} from 'react';
import {Columns, Button} from 'react-bulma-components';

function Analysis(props) {

    const [results, setResults] = useState([]);

    function handleClick(e) {
        console.log(e);
        let selectedElements = document.getElementsByClassName("selected");
        let results = [];
        [].forEach.call(selectedElements, el => {
            let attr = el.getAttribute("data-key");
            console.log(attr);
            results.push(attr);
        })
        setResults(results);
    }

    return (
        <Columns>
            <Columns.Column className="analysis"> 
                <Button onClick={(e) => handleClick(e)}>Analyze</Button>
            </Columns.Column>
            <Columns.Column className="results">
                <ul>
                {results.map(result => 
                    <li>{result}</li>
                )}
                </ul>
            </Columns.Column>
        </Columns> 
    )
}

export default Analysis;
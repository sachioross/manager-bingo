import React from 'react';
import {Columns, Table} from 'react-bulma-components';

let managers = ["Robert", "Daniel", "Val", "Jeff"];
let questions = ["Why are we doing this?", "Who's paying for this?", "What's the plan?"];

function Board(props) {

    function handleClick(e) {
        let currentName = e.target.className;
        e.target.className = currentName === "not-selected" ? "selected" : "not-selected";
    }

    return (
        <div className="board">
            <Columns>
                <Columns.Column>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    Person
                                </th>
                                { questions.map(q => 
                                    <th key={q}>{q}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {managers.map(m => 
                                <tr key={m}>
                                    <td>{m}</td>
                                    {questions.map(q => 
                                        <td key={`${m}: ${q}`} data-key={`${m}: ${q}`} className="not-selected" onClick={e => handleClick(e)}>YES/NO</td>
                                    )}
                                </tr>
                            )}
                        </tbody>
                    </Table> 
                </Columns.Column>
            </Columns>
        </div>
    )
}

export default Board;
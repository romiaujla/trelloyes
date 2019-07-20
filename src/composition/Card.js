import React from 'react';

function Card(props){
    return (
        <li className="card">
            <div className="flex-div">
                <h3>{props.title}</h3>
                <button type="button" class="card-delete-button">delete</button>
            </div>
            <p>{props.content}</p>
        </li>
    );
}

export default Card;
import React from 'react';

class Card extends React.Component {

    render(){
        const props = this.props;
        return (
            <li className="card">
                <div className="flex-div">
                    <h3>{props.title}</h3>
                    <button type="button" className="card-delete-button" onClick={() => this.props.handleDeleteButtonClick(this.props.id)}>delete</button>
                </div>
                <p>{props.content}</p>
            </li>
        );
    }
}

export default Card;
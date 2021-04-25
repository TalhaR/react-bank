import React from "react";

const Card = ({ type, description, amount, date }) => {
    return (
        <div className="card">
            <div className="cardHeader">
                <h2> {description} </h2>
            </div>
            <div>
                <h5>
                    {type} amount: {amount}
                </h5>
                <h5>Date: {date}</h5>
            </div>
        </div>
    );
};

export default Card;

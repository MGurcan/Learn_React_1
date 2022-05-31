import React from "react";
import PropTypes from 'prop-types'



const Card = (probs) => {
    console.log(probs)
    return (

        <div>
            <div className="card w-100" style={{width: '18rem'}}>

                <img src={probs.image} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{probs.cardTitle}</h5>
                        <p className="card-text">{probs.cardText}</p>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>

                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>

                </div>
        </div>
    )
}


Card.defaultProps = {
    cardTitle: "Default Card Title"
}
Card.propTypes = {
    cardText: PropTypes.string.isRequired
}

export default Card;
/*

    First Class Functions

    const Test = function() {
        console.log("hadi test first class");
    }

    Test()
*/
import React from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const Options = (props) => {
    const itemHash = slugify(JSON.stringify(props.item))
    return (
        <div key={itemHash} className="feature__item">
            <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(props.feature)}
                checked={props.item.name === props.selected[props.feature].name}
                onChange={e => this.update(props.feature, props.item)}
            />
            <label htmlFor={itemHash} className="feature__label">
                {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
            </label>
        </div>
    )
}

export default Options;
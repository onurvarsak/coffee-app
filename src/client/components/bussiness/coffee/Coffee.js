import React from 'react';
import PropTypes from 'prop-types'
import '../../../styles/Coffee.css';


function Coffee({
    category,
    description,
    id,
    ingredients,
    title
}) {

    const getIngreditionWithFormat = () => {
        if (ingredients && ingredients.length > 0) {
            let out = ingredients[0];

            for(let i = 1; i < ingredients.length; i++) {
                out += `, ${ingredients[i]}`;
            }

            return out;
        }

        return '';
    }


  return (
    <div className="CoffeeContainer">
        <div className="Title">{title}</div>
        <div className="Description">{description}</div>
        <div className="Ingredients">Ingreditions: {getIngreditionWithFormat()}</div>
    </div>
  );
}

Coffee.propTypes = {
    category: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    ingredients: PropTypes.array,
    title: PropTypes.string
}

Coffee.defaultProps = {
    category: '',
    description: '',
    id: -1,
    ingredients: [],
    title: '',
};
export default Coffee;

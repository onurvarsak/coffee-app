import React from 'react';
import PropTypes from 'prop-types'
import '../../../styles/RightSide.css';
import Coffee from '../coffee/Coffee';


function RightSide({
    filteredCoffeeData,
}) {

  return (
    <div className="RightSideContainer">
      {
        filteredCoffeeData.map(coffee => {
          return <Coffee 
            title={coffee.title}
            description ={coffee.description}
            ingredients ={coffee.ingredients}
            category = {coffee.category}
            id = {coffee.id}
            key={coffee.id.toString()}
          />
        })
      }
    </div>
  );
}

RightSide.propTypes = {
    filteredCoffeeData: PropTypes.array
}

RightSide.defaultProps = {
    filteredCoffeeData: [],
};
export default RightSide;

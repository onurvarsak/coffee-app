import React from 'react';
import PropTypes from 'prop-types'
import '../../../styles/LeftSide.css';
import CategoryButton from './CategoryButton';


function LeftSide({
    categories,
    currentSelectCategory,
    searchKey,
    onChangeSearchKey,
    onChangeSelectCategory,
}) {
    

  return (
    <div className="LeftSideContainer">
        <input className="Input"
            placeholder="Search"
            type="text"
            value={searchKey}
            onChange={onChangeSearchKey} 
        />
        {
            categories.map(category => <CategoryButton key={category.id.toString()} category={category} onChangeSelectCategory={onChangeSelectCategory}/>)
        }
    </div>
  );
}

LeftSide.propTypes = {
    categories: PropTypes.array,
    description: PropTypes.string,
    id: PropTypes.number,
    ingredients: PropTypes.array,
    title: PropTypes.string
}

LeftSide.defaultProps = {
    categories: [],
    description: '',
    id: -1,
    ingredients: [],
    title: '',
};
export default LeftSide;

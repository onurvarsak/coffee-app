import React from 'react';
import PropTypes from 'prop-types'
import '../../../styles/LeftSide.css';


function CategoryButton(props) {
  const { onChangeSelectCategory } = props;
  const {
        name,
        isSelect,
    } = props.category;
    

  const getButton = () => {
      if(isSelect) {
          return <div className="Button Active" onClick={() => onChangeSelectCategory(name)}>{name}</div>;
      }
      return <div className="Button" onClick={() => onChangeSelectCategory(name)}>{name}</div>;
  }

  return getButton();
}

CategoryButton.propTypes = {
    name: PropTypes.string,
    isSelect: PropTypes.bool,
}

CategoryButton.defaultProps = {
    name: '',
    isSelect: false,
};
export default CategoryButton;

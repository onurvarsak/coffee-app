import React, { useEffect, useState } from 'react';
import { getCoffees } from './server/CoffeeWs';
import './App.css';
import LeftSide from './client/components/bussiness/LeftSide/LeftSide';
import RightSide from './client/components/bussiness/RightSide/RightSide';

function App() {
  const [allCoffeesData, setAllCoffeesData] = useState([])
  const [filteredCoffees, setFilteredCoffees] = useState([])
  const [coffeeCategories, setCoffeeCategories] = useState([])
  const [searchKey, setSearchKey] = useState('');
  const [currentSelectedCategoryName, setCurrentSelectedCategoryName] = useState('');

  useEffect(() => {
    getCoffees().then((res) => {
      const categories = new Set();

      if(res && res.length > 0) {
        categories.add('all coffees');
        res.forEach(coffee => categories.add(coffee.category))
      }
      setAllCoffeesData(res);
      setFilteredCoffees(res);
      
      const tempCategoriesArr = [...categories];
      const allCategoriesObject = tempCategoriesArr.map((category, index) => {
        return {
          id: index,
          name: category,
          isSelect: false,
        }
      })
      setCoffeeCategories(allCategoriesObject);
    })
  }, [])

  useEffect(() => {
     function changeFilteredCoffees(key) {
      let filteredForCategory = [];
  
      if(currentSelectedCategoryName.toLowerCase() === 'all coffees' || currentSelectedCategoryName.toLowerCase() === '') {
        filteredForCategory = [...allCoffeesData];
      } else {
        filteredForCategory = allCoffeesData.filter(coffee => coffee.category.toLowerCase() === currentSelectedCategoryName.toLowerCase())
      }
  
  
      if (key === '') {
        setFilteredCoffees([...filteredForCategory]);
      } else {
        setFilteredCoffees([...filteredForCategory.filter(coffee => coffee.title.toLowerCase().includes(key.toLowerCase()))]);
      }
    }

    changeFilteredCoffees(searchKey);
  }, [searchKey, currentSelectedCategoryName, allCoffeesData])

  const searchInputOnChange = (event) => {
    setSearchKey(event.target.value);
  }

  const onChangeSelectCategory= (categoryName) => {
    coffeeCategories.forEach(category => {
      if(category.name.toLowerCase() === categoryName.toLowerCase()) {
        if(category.isSelect) {
          category.isSelect = false;
          setCurrentSelectedCategoryName('');
        } else {
          category.isSelect = true;
          setCurrentSelectedCategoryName(categoryName);
        }
      } else {
        category.isSelect = false;
      }
    })
  }

  

  return (
    <div className="AppContainer">
      <LeftSide categories={coffeeCategories}
        searchKey={searchKey}
        onChangeSearchKey={searchInputOnChange}
        onChangeSelectCategory={onChangeSelectCategory} />
      <RightSide filteredCoffeeData={filteredCoffees} />
    </div>
  );
}

export default App;
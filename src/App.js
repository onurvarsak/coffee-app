import React, { useEffect, useState } from 'react';
import Coffee from './client/components/bussiness/coffee/Coffee'
import { getCoffees } from './server/CoffeeWs';
import './App.css';

function App() {
  const [allCoffeesData, setAllCoffeesData] = useState([])
  const [coffeeCategories, setCoffeeCategories] = useState([])

  useEffect(() => {
    getCoffees().then((res) => {
      const categories = new Set();

      if(res && res.length > 0) {
        categories.add('all coffees');
        res.forEach(coffee => categories.add(coffee.category))
      }
      setAllCoffeesData(res);
      setCoffeeCategories([...categories]);
    })
  }, [])

  

 
  return (
    <div>
      {
        allCoffeesData.map(coffee => {
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

export default App;


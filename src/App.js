import './App.css';
import { lazy, useState, useEffect } from 'react';
import Home from './Components/Pages/Home';
import ItemView from './Components/ItemView';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import NavBar from './Components/NavBar';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './State/store';

const url = "https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db";

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url);
        console.log("res : ", result);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

  }, []);

  console.log("dara : ", data);

  if(!data){
    return(
      <div>
         Loading...
      </div>
    )
  }

  return (
    <Provider store={store}>
    <div className='px-[8vw] pt-5'>
      <BrowserRouter>
        <NavBar logoUrl={data.ecommerce.logo} />
        <Routes>
          <Route path='/' element={<Home productList={data.ecommerce.products} />} />
          <Route path='/item-view' element={<ItemView/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;

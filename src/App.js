import React, {useState, useEffect} from 'react';
import './App.css';
import Item from './Components/Item'
import Nav from './Components/Nav'
import Cart from './Components/Cart'

function App() {
  const[items, setItems] = useState([])
  const[search, setSearch] = useState('')
  const[query, setQuery] = useState('pizza')
  const[styleMode, setStyleMode] = useState('D')
  
  const[cartClass, setCartClass] = useState('cart')
  const[container, setContainer] = useState([]);

  const apiKey = '16c23f40f1d0a268e2ae82bf495da6f6'
  const appId = '10ba69d8'
  const getItems = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&from=0&to=15&app_id=${appId}&app_key=${apiKey}`)
  const data = await response.json();
  setItems(data.hits)
  console.log(data.hits)
  }

  useEffect(
    () =>{
      getItems()
    },
  [query]);

  useEffect(
    () =>{
      console.log(container)
    },
  [container]);


  
const handleSubmit = e =>{
  e.preventDefault()
  setQuery(search)
}
const handleInputChange = e =>{
setSearch(e.target.value)
}

const handleModeChange = () =>{
  if(styleMode === 'D'){
    setStyleMode('L')
  }
  else{
    setStyleMode('D')
  }
}
const handleCartClick = () =>{
  setCartClass('cartOpen')
}
const addToCart = (e, text)=>{
 setContainer([text ,...container])
}

  return (
    <div className={`App ${styleMode}`}>
      <Nav 
      onSubmit={handleSubmit}
      onChange={handleInputChange}
      value={search}
      mode={styleMode}
      modeChange={handleModeChange}
      cartClick={handleCartClick}
      ></Nav>
      <div onClick={() =>{setCartClass('cart')}} className="app-wrapper">
        {items.map(
          item =>(
            <Item key={item.recipe.label} src={item.recipe.image} 
            desc = {item.recipe.label}
            price = {`${(item.recipe.label).length}$`} 
            onClick={(e)=> addToCart(e, item.recipe.label)}
            
            />
            
          )
        )}
        
        </div>
        {console.log(cartClass)}
        <Cart className={cartClass}><div className="cartText">{container.map(x=>(
          <h1 className="cartText">{x}</h1>
        ))}</div></Cart>
    </div>
  );
}

export default App;

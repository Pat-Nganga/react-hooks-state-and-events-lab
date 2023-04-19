// import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import React,{useState} from "react";



function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"
  const [toggle,setToggle]=useState(false)
  const toggleDescription=()=>{
    setToggle(!toggle)
  }
  const appClass = toggle ? 'App dark' : 'App light'

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDescription}>{toggle? "Dark Mode": "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

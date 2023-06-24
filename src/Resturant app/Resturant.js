import React from 'react'
import "./style.css"
import Menu from "./menuApi.js"
import MenuCard from './menuCard.js'
import NavBar from './navBar.js'


const res = [...new Set (Menu.map ((currEle) => {
    return currEle.category;
  }))];

const Resturant = () => {
  const [menuData, setMenuData] = React.useState (Menu);
  const [menuList, setMenuList] = React.useState (res);
  console.log (res);
  
  const filterCategory = (category) =>{
    if (category == "all"){
        setMenuData (Menu);
    }
    else{
        const res = Menu.filter ((currEle) => {
            return currEle.category == category;
        });

        setMenuData (res);
    }

    
  }
  return (
    <>
        <NavBar filterCategory = {filterCategory} menuList = {menuList}></NavBar>
        <MenuCard menuData = {menuData} />

    </>
  )
} 

export default Resturant;
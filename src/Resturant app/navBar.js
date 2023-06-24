import React from 'react'

const NavBar = ({filterCategory, menuList}) => {
  
 console.log ("in NavBar");
  return (
    <>
        <nav className='navbar'>
            <div className='btn-group'>
                {menuList.map ((currEle) => {
                    console.log (currEle);
                    return (
                        <>
                            <button className = "btn-group__item" onClick={() => {filterCategory (currEle)}}>{currEle}</button>

                        </>
                    )
                })}
                <button className='btn-group__item' onClick={() => filterCategory ("all")}>All</button>
            </div>
        </nav>

    </>
    
  );
}

export default NavBar;
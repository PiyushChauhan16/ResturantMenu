import React from 'react'

const menuCard = ({menuData}) => {
    // console.log (menuData);
  return (
    <>
        <div className='main-card--container' >
        {menuData.map ((currEle) => {
            return (
                <>
                    
                        <div className='card-container' key={currEle.id}>
                            <div className='card'>
                                <div className='card-body'>
                                    <div>
                                        <span className = "card-number card-circle subtle">{currEle.id}</span>
                                    </div>
                                    <div>
                                        <span className='card-author subtle'>{currEle.category}</span>
                                    </div>
                                    <div>
                                        <h2 className='card-title'>{currEle.name}</h2>
                                    </div>
                                    <div>
                                        <span className='card-description subtle'>
                                            {currEle.description}
                                        </span>
                                    </div>
                                    
                                    <div className='card-read'>Read</div>
                                    <div>
                                        <img src = {currEle.image} alt = "images" className='card-media'></img>
                                    </div>
                                    <div>
                                        <span className='card-tag subtle'>Order Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    
                </>
            );
        })}
        </div>
    </>
  )
}

export default menuCard
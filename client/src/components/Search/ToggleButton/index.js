import React,{useState} from 'react'
import SearchBox from '../SearchBox';
import ListItem from '../ListItem';
function ToggleButton({productList}) {
    const [isToggled, setIsToggled] = useState(true);

    const handleToggle = () => {
      setIsToggled(!isToggled);
      console.log(isToggled);
    }
  
    return (
      <div>
        <button onClick={handleToggle}  className="idPassCard">
          {isToggled ? 'Show All Products' : 'Search DataBase'}
        </button>
        {!isToggled ?(<ListItem productList={productList} />):(<SearchBox/>)}
      </div>
    );
  }

export default ToggleButton
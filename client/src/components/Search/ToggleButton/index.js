import React,{useState} from 'react'
import SearchBox from '../SearchBox';
import ListItem from '../ListItem';
function ToggleButton({productList}) {
    const [isToggled, setIsToggled] = useState(true);
    const [isToggledRec, setIsToggledRec] = useState(true);
    const handleToggle = () => {
      setIsToggled(!isToggled);
   
    }
    const handleToggleReclamation = () => {
      setIsToggledRec(!isToggledRec);
      setIsToggled(true);
      console.log(isToggled);
    }

    return (
      <div>
        <button onClick={handleToggle}  className="idPassCard">
          {isToggled ? 'Show All Claims' : 'Search Claims DataBase by Lemonsoft ID'}
        </button>
        <button onClick={handleToggleReclamation}  className="idPassCard">
          {isToggledRec ? 'Show All Reclamations' : 'Search Reclamation DataBase'}
        </button>
        {!isToggled ?(<ListItem productList={productList} />):(<SearchBox/>)}
      </div>
    );
  }

export default ToggleButton
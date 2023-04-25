import React, { useState } from "react";
import "../index.css";

function ListItem({ productList }) {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);
  };

  return (
    <div>
      <h1>List of Claimed/Fixed/Internal Reclaimed Products</h1>
      {productList.map((val, key) => {
        return (
          <div key={key} className="productCard">
            <p className="title">Product Name: </p>
            {isToggled ? (
              <p className="data">{val.productName} </p>
            ) : (
              <input className="data" placeholder={val.productName} />
            )}
            <p className="title">Product Serial No: </p>
            {isToggled ? (
              <p className="data">{val.productSerialNumber} </p>
            ) : (
              <input className="data" placeholder={val.productSerialNumber} />
            )}

            <p className="title">Issue Date: </p>
            {isToggled ? (
              <p className="data"> {val.issueDate} </p>
            ) : (
              <input className="data" placeholder={val.issueDate} />
            )}
            <p className="title">Repair Date: </p>
            {isToggled ? (
              <p className="data">{val.repairDate} </p>
            ) : (
              <input className="data" placeholder={val.repairDate} />
            )}
            <p className="title">Manufacturing Date:</p>
            {isToggled ? (
              <p className="data">{val.manufacturingDate} </p>
            ) : (
              <input className="data" placeholder={val.manufacturingDate} />
            )}
            <p className="title">PCB Model: </p>
            {isToggled ? (
              <p className="data">{val.pcbModelNo} </p>
            ) : (
              <input className="data" placeholder={val.pcbModelNo} />
            )}
            <p className="title">Laser S/N: </p>
            {isToggled ? (
              <p className="data">{val.laserSerialNumber} </p>
            ) : (
              <input className="data" placeholder={val.laserSerialNumber} />
            )}
            <p className="title">LemonSoft S/N: </p>
            {isToggled ? (
              <p className="data">{val.lemonSoftIssueNumber} </p>
            ) : (
              <input className="data" placeholder={val.lemonSoftIssueNumber} />
            )}
            <p className="title">Country: </p>
            {isToggled ? (
              <p className="data">{val.country} </p>
            ) : (
              <input className="data" placeholder={val.country} />
            )}

            <p className="title">Report by Customer: </p>
            {isToggled ? (
              <p className="data">{val.productSerialNumber} </p>
            ) : (
              <input className="data" placeholder={val.reportByCustomer} />
            )}
            <p className="title">Report by Ecoaims: </p>
            {isToggled ? (
              <p className="data">{val.reportByEcoaims} </p>
            ) : (
              <input className="data" placeholder={val.reportByEcoaims} />
            )}
            <p className="title">Cause is known ?(Y/N)</p>
            {isToggled ? (
              <p className="data">{val.causeKnown} </p>
            ) : (
              <input className="data" placeholder={val.causeKnown} />
            )}
            <p className="title">What is the cause ?</p>
            {isToggled ? (
              <p className="data">{val.whatIsTheCause} </p>
            ) : (
              <input className="data" placeholder={val.whatIsTheCause} />
            )}
            <p className="title">Conclusion: </p>
            {isToggled ? (
              <p className="data">{val.Conclusion} </p>
            ) : (
              <input className="data" placeholder={val.Conclusion} />
            )}
            <p className="title">Message To Customer: </p>
            {isToggled ? (
              <p className="data">{val.whatMsgToCustomer} </p>
            ) : (
              <input className="data" placeholder={val.whatMsgToCustomer} />
            )}
            <p className="title">Components Used In Repair: </p>
            {isToggled ? (
              <p className="data">{val.componentsUsedInRepair} </p>
            ) : (
              <input
                className="data"
                placeholder={val.componentsUsedInRepair}
              />
            )}
            <p className="title">Repairer Name: </p>
            {isToggled ? (
              <p className="data">{val.userName} </p>
            ) : (
              <input className="data" placeholder={val.userName} />
            )}
            <button onClick={handleToggle} className="idPassCard">
              {!isToggled ? "Cancel Editing" : "Edit"}
            </button>
            <button
              onClick={() => {
                console.log("updated");
              }}
              className="idPassCard"
            >
              Update
            </button>
            <button
              onClick={() => {
                console.log("Deleted");
              }}
              className="idPassCard"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ListItem;

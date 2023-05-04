import React from "react";
import "../index.css";
import Axios from "axios";
import EditPage from "../EditPage";

function ListItem({ productList }) {
  


  //Delete Handler Function
  const handleDelete = (id) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this product listing?");
  
    if (shouldDelete) {
      Axios.delete(`http://localhost:5001/claims/${id}`)
        .then((response) => {
          console.log(response.data);
          // Do something after successful deletion, such as updating state or displaying a message to the user
          alert("Product Listing Deleted!");
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
          // Handle error, such as displaying an error message to the user
        });
    }
  };
  
  const EditPageFunct = () => {
    return (
      <EditPage productList={productList}/>
    );
  }
  return (
    <div className="fullPage">
      <h1>List of Claimed/Fixed/Internal Reclaimed Products</h1>
      {productList.map((val, key) => {
        return (
          <div key={key} className="productCard">
            <p className="title">Product Name: </p>

            <p className="data">{val.productName} </p>

            <p className="title">Product Serial No: </p>

            <p className="data">{val.productSerialNumber} </p>


            <p className="title">Issue Date: </p>

            <p className="data"> {val.issueDate} </p>

            <p className="title">Repair Date: </p>

            <p className="data">{val.repairDate} </p>

            <p className="title">Manufacturing Date:</p>

            <p className="data">{val.manufacturingDate} </p>

            <p className="title">PCB Model: </p>

            <p className="data">{val.pcbModelNo} </p>

            <p className="title">Laser S/N: </p>

            <p className="data">{val.laserSerialNumber} </p>

            <p className="title">LemonSoft S/N: </p>

            <p className="data">{val.lemonSoftIssueNumber} </p>

            <p className="title">Country: </p>

            <p className="data">{val.country} </p>


            <p className="title">Report by Customer: </p>

            <p className="data">{val.productSerialNumber} </p>

            <p className="title">Report by Ecoaims: </p>

            <p className="data">{val.reportByEcoaims} </p>

            <p className="title">Cause is known ?(Y/N)</p>

            <p className="data">{val.causeKnown} </p>

            <p className="title">What is the cause ?</p>

            <p className="data">{val.whatIsTheCause} </p>

            <p className="title">Conclusion: </p>

            <p className="data">{val.Conclusion} </p>

            <p className="title">Message To Customer: </p>

            <p className="data">{val.whatMsgToCustomer} </p>

            <p className="title">Components Used In Repair: </p>

            <p className="data">{val.componentsUsedInRepair} </p>

            <p className="title">Repairer Name: </p>

            <p className="data">{val.userName} </p>

           <button
              className="idPassCard"
              onClick={EditPageFunct}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(val._id)
              }
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

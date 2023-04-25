import React from 'react'
import '../index.css'
function EditCard({productList}) {
  return (
  <div>  <h1>List of Claimed/Fixed/Internal Reclaimed Products</h1>
            {productList.map((val, key) => {
                return <div key={key} className="productCardEdit">
  
    <p className="title">Product Name: </p>
    <input className="data" placeholder={val.productName} />

    <p className="title">Product Serial No: </p>
    <input className="data" placeholder={val.productSerialNumber} />
 
    <p className="title">Issue Date: </p>
    <input type='Date' className="data" placeholder={val.issueDate} />
 
    <p className="title">Repair Date: </p>
    <input className="data" placeholder={val.repairDate} />

    <p className="title">Manufacturing Date:</p>
    <input className="data" placeholder={val.manufacturingDate} />
 
    <p className="title">PCB Model: </p>
    <input className="data" placeholder={val.pcbModelNo} />

    <p className="title">Laser S/N: </p>
    <input className="data" placeholder={val.laserSerialNumber} />

    <p className="title">LemonSoft S/N: </p>
    <input className="data" placeholder={val.lemonSoftIssueNumber} />

    <p className="title">Country: </p>
    <input className="data" placeholder={val.country} />

    <p className="title">Report By Customer: </p>
    <input className="data" placeholder={val.reportByCustomer} />

    <p className="title">Report By Ecoaims: </p>
    <input className="data" placeholder={val.reportByEcoaims} />

    <p className="title">Cause Known: </p>
    <input className="data" placeholder={val.causeKnown} />

    <p className="title">What is the Cause: </p>
    <input className="data" placeholder={val.whatIsTheCause} />

    <p className="title">Conclusion: </p>
    <input className="data" placeholder={val.Conclusion} />

    <p className="title">Message To Customer: </p>
    <input className="data" placeholder={val.whatMsgToCustomer} />
  
    <p className="title">Components Used In Repair: </p>
    <input className="data" placeholder={val.componentsUsedInRepair} />
 
    <p className="title">Repairer Name: </p>
    <input className="data" placeholder={val.userName} />
  </div>


                    {/* <input type="text" placeholder={val.productName}  onChange={(event)=>{setNewProductName(event.target.value) }}/>
                    <button onClick={()=> updateProductName(val._id)}>Update Changes</button> */}
                 
            })}</div>
  )
}

export default EditCard
import React from 'react'
import '../index.css'
import EditButton from '../EditButton'

function ListItem({productList}) {
  return (
  <div>  <h1>List of Claimed/Fixed/Internal Reclaimed Products</h1>
            {productList.map((val, key) => {
                return <div key={key} className="productCard">
                    <p className="title">Product Name: </p> <p className="data">{val.productName} </p>
                    <p className="title">Product Serial No: </p> <p className="data">{val.productSerialNumber} </p>
                    <p className="title">Issue Date: </p> <p className="data"> {val.issueDate} </p>
                    <p className="title">Repair Date: </p> <p className="data">{val.repairDate} </p>
                    <p className="title">Manufacturing Date:</p> <p className="data"> {val.manufacturingDate} </p>
                    <p className="title">PCB Model: </p> <p className="data">{val.pcbModelNo} </p>
                    <p className="title">Laser S/N: </p> <p className="data">{val.laserSerialNumber} </p>
                    <p className="title">LemonSoft S/N: </p> <p className="data">{val.lemonSoftIssueNumber} </p>
                    <p className="title">Country: </p> <p className="data">{val.country} </p>
                    <p className="title">Product Name: </p> <p className="data">{val.reportByCustomer} </p>
                    <p className="title">Product Name: </p> <p className="data">{val.reportByEcoaims} </p>
                    <p className="title">Product Name: </p> <p className="data">{val.causeKnown} </p>
                    <p className="title">Product Name: </p> <p className="data">{val.whatIsTheCause} </p>
                    <p className="title">Conclusion: </p> <p className="data">{val.Conclusion}</p>
                    <p className="title">Message To Customer: </p> <p className="data">{val.whatMsgToCustomer} </p>
                    <p className="title">Components Used In Repair: </p> <p className="data">{val.componentsUsedInRepair} </p>
                    <p className="title">Repairer Name: </p> <p className="data">{val.userName} </p>
                    <EditButton productList={productList} />
                    </div>
            })}</div>
  )
}

export default ListItem
import React, { useState } from "react";
import "../index.css";
import Axios from "axios";

function EditPage({ productList }) {

    const [productUpdated, setProductUpdated] = useState({});

    const updateProductName = (id) => {
        Axios.post(`http://localhost:5001/update/${id}`, {
            id: id, // use the productId state variable here
            newProductUpdate: productUpdated,
        })
            .then(() => {
                console.log("Product name updated successfully with" + productUpdated);
            })
            .catch((error) => {
                console.error("Error updating product name:", error);
            });
    };

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setProductUpdated((prevProductInfo) => ({
            ...prevProductInfo,
            [name]: value,
        }));
    };
console.log(productList.val);

    return (
        <div className="fullPage">
            <h1>List of Claimed/Fixed/Internal Reclaimed Products</h1>
            {productList.map((val, key) => {
                return (
                    <div key={key} className="productCard">
                        <form>
                            <p className="title">Product Name: </p>
                            <input
                                className="data"
                                value={val.productName}
                                type="text"
                                name="productName"
                                onChange={handleInputChange}
                            />

                            <p className="title">Product Serial No: </p>

                            <input
                                className="data"
                                value={val.productSerialNumber}

                                type="text"
                                name="productSerialNumber"
                                onChange={handleInputChange}
                            />


                            <p className="title">Issue Date: </p>

                            <input
                                className="data"
                                value={val.issueDate}

                                type="Date"
                                name="issueDate"
                                onChange={handleInputChange}
                            />

                            <p className="title">Repair Date: </p>

                            <input
                                className="data"
                                value={val.repairDate}

                                type="Date"
                                name="repairDate"
                                onChange={handleInputChange}
                            />
           
                            <p className="title">Manufacturing Date:</p>

                            <input
                                className="data"
                                value={val.manufacturingDate}

                                type="Date"
                                name="manufacturingDate"
                                onChange={handleInputChange}
                            />

                            <p className="title">PCB Model: </p>

                            <input
                                className="data"
                                value={val.pcbModelNo}

                                type="text"
                                name="pcbModelNo"
                                onChange={handleInputChange}
                            />

                            <p className="title">Laser S/N: </p>

                            <input
                                className="data"
                                value={val.laserSerialNumber}

                                type="text"
                                name="laserSerialNumber"
                                onChange={handleInputChange}
                            />

                            <p className="title">LemonSoft S/N: </p>

                            <input
                                className="data"
                                value={val.lemonSoftIssueNumber}

                                type="text"
                                name="lemonSoftIssueNumber"
                                onChange={handleInputChange}
                            />

                            <p className="title">Country: </p>

                            <input
                                className="data"
                                value={val.country}

                                type="text"
                                name="country"
                                onChange={handleInputChange}
                            />


                            <p className="title">Report by Customer: </p>

                            <input
                                className="data"
                                value={val.reportByCustomer}

                                type="text"
                                name="reportByCustomer"
                                onChange={handleInputChange}
                            />

                            <p className="title">Report by Ecoaims: </p>

                            <input
                                className="data"
                                value={val.reportByEcoaims}

                                type="text"
                                name="reportByEcoaims"
                                onChange={handleInputChange}
                            />

                            <p className="title">Cause is known ?(Y/N)</p>

                            <input
                                className="data"
                                value={val.causeKnown}

                                type="text"
                                name="causeKnown"
                                onChange={handleInputChange}
                            />

                            <p className="title">What is the cause ?</p>

                            <input
                                className="data"
                                value={val.whatIsTheCause}

                                type="text"
                                name="whatIsTheCause"
                                onChange={handleInputChange}
                            />

                            <p className="title">Conclusion: </p>

                            <input
                                className="data"
                                value={val.Conclusion}

                                type="text"
                                name="Conclusion"
                                onChange={handleInputChange}
                            />

                            <p className="title">Message To Customer: </p>

                            <input
                                className="data"
                                value={val.whatMsgToCustomer}

                                type="text"
                                name="whatMsgToCustomer"
                                onChange={handleInputChange}
                            />

                            <p className="title">Components Used In Repair: </p>

                            <input
                                className="data"
                                value={val.componentsUsedInRepair}

                                type="text"
                                name="componentsUsedInRepair"
                                onChange={handleInputChange}
                            />

                            <p className="title">Repairer Name: </p>

                            <input
                                className="data"
                                value={val.userName}

                                type="text"
                                name="userName"
                                onChange={handleInputChange}
                            />


                            <button
                                className="idPassCard"
                                onClick={() => updateProductName(val._id)}
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                );
            })}
        </div>
    );
}

export default EditPage;

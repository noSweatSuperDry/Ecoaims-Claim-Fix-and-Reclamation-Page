import React, { useState } from "react";


function Claim() {
    const [productInfo, setProductInfo] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductInfo((prevProductInfo) => ({
            ...prevProductInfo,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(productInfo);
    };



    return (
        <div className="pageOutlet">
            <h2>Report Claims and Fixes Here.</h2>
            <p>Please fill up the forms carefully. In case you made mistakes, please edit or delete and re-entry</p>

            <div className="textAndButton">
                <label>Product Name: </label>
                <input type="text" name="productName"
                    onChange={handleInputChange} /><br />
                <label>Device Serial Number: </label>
                <input type="number" name="productSerialNumber"
                    onChange={handleInputChange} /><br />
                <label>Issue Date: </label>
                <input type="Date" name="issueDate"
                    onChange={handleInputChange} /><br />
                <label>Repair Date: </label>
                <input type="Date" name="repairDate"
                    onChange={handleInputChange} /><br />
                <label>Device Manufacturing Date: </label>
                <input type="Date" name="manufacturingDate"
                    onChange={handleInputChange} /><br />
                <label>PCB Model Number: </label>
                <input type="text" name="pcbModelNo"
                    onChange={handleInputChange} /><br />
                <label>Laser Serial Number: </label>
                <input type="text" name="laserSerialNumber"
                    onChange={handleInputChange} /><br />
                <label>LemonSoft Issue Number: </label>
                <input type="number" name="lemonSoftIssueNumber"
                    onChange={handleInputChange} /><br />
                <label>Country: </label>
                <input type="text" name="country"
                    onChange={handleInputChange} /><br />
                <label>Report By Customer: </label>
                <input type="text" name="reportByCustomer"
                    onChange={handleInputChange} /><br />
                <label>Report By Eko-aims: </label>
                <input type="text" name="reportByEcoaims"
                    onChange={handleInputChange} /><br />
                <label>Cause is known ? </label>
                <input type="text" name="causeKnown"
                    onChange={handleInputChange} /><br />
                <label>What is the cause ? </label>
                <input type="text" name="whatIsTheCause"
                    onChange={handleInputChange} /><br />
                <label>Conclusion: </label>
                <input type="text" name="Conclusion"
                    onChange={handleInputChange} /><br />

                <label>What message sent to customer? </label>
                <input type="text" name="whatMsgToCustomer"
                    onChange={handleInputChange} /><br />
                <label>Repaired/Changed components: </label>
                <input type="text" name="componentsUsedInRepair"
                    onChange={handleInputChange} /><br />
                <label>Please Write your Name: </label>
                <input type="text" name="userName"
                    onChange={handleInputChange} /><br />
                <br />
                <button className="idPassCard" type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );

}

export default Claim;
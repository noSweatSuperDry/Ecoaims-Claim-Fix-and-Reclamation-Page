import React from "react";


function Claim(){
return(
<div className="pageOutlet">
<h2>Report Claims and Fixes Here.</h2>
<p>Please fill up the forms carefully. In case you made mistakes, please edit or delete and re-entry</p>

<div className="textAndButton">
<label>Issue Date: </label>
<input type="Date"/><br/>
<label>Repair Date: </label>
<input type="Date"/><br/>
<label>Device Manufacturing Date: </label>
<input type="Date"/><br/>
<label>Product Name: </label>
<input type="text"/><br/>
<label>Device Serial Number: </label>
<input type="number"/><br/>
<label>PCB Model Number: </label>
<input type="text"/><br/>
<label>Laser Serial Number: </label>
<input type="text"/><br/>
<label>LemonSoft Issue Number: </label>
<input type="number"/><br/>
<label>Country: </label>
<input type="text"/><br/>
<label>Report By Customer: </label>
<input type="text"/><br/>
<label>Report By Eko-aims: </label>
<input type="text"/><br/>


<label>Cause is known ? </label>
<select> 
<option>Yes</option>
<option>No</option>
</select><br/>
<label>What is the cause ? </label>
<input type="text"/><br/>
<label>Conclusion: </label>
<input type="text"/><br/>

<label>What message sent to customer? </label>
<input type="text"/><br/>
<label>Repaired/Changed components: </label>
<input type="text"/><br/>
<label>Please Write your Name: </label>
<input type="text"/><br/>
<br/>
<button className="idPassCard"
//type="submit"
//onClick={{}=}
> Submit</button>
</div>
</div>
);
}

export default Claim;
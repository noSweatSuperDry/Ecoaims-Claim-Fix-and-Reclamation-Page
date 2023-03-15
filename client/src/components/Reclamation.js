import React from "react";
import "../css/App.css";

function Reclamation(){
return(
<div className="pageOutlet">

<h2>Report Internal Reclamations.</h2>
<p>Please fill up the forms carefully. In case you made mistakes, please edit or delete and re-entry</p>
<div className="textAndButton">
<label>Issue Date: </label>
<input type="Date"/><br/>

<label>Part Name: </label>
<input type="text"/><br/>
<label>Device Serial Number: </label>
<input type="number"/><br/>
<label>How many ? </label>
<input type="number"/><br/>
<label>LemonSoft Issue Number: </label>
<input type="number"/><br/>
<label>Electrical component type ?</label>
<input type="text"/><br/>
<label>Mechanical component type ?</label>
<input type="text"/><br/>
<label>Information: </label>
<input type="text"/><br/>
{/* photo adding feature will be incomming */}

<label>Cause is known ? </label>
<input type="checkbox"/><br/>
<label>What is the cause ? </label>
<input type="text"/><br/>
<label>Conclusion: </label>
<input type="text"/><br/>

<label>Repaired/Changed components: </label>
<input type="text"/><br/>
<label>Please Write your Name: </label>
<input type="text"/><br/>
<br/>
<button className="idPassCard">Submit</button>
</div>
</div>
);
}

export default Reclamation;
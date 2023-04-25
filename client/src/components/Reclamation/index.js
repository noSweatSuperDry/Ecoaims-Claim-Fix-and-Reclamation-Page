import React from "react";

function Reclamation() {
  return (
    <div className="pageOutlet">
      <h2>Report Internal Reclamations.</h2>
      <p>
        Please fill up the forms carefully. In case you made mistakes, please
        edit or delete and re-entry
      </p>
      <div className="textAndButton">
        <label>1. Issue Date: </label>
        <input type="Date" />
        <br />

        <label>2. Product/Part Name: </label>
        <input type="text" />
        <br />
        <label>3. Device Serial Number: </label>
        <input type="number" />
        <br />
        <label>4. How many ? </label>
        <input type="number" />
        <br />
        <label>5. LemonSoft Issue Number: </label>
        <input type="number" />
        <br />
        <label>6. Electrical component type ?</label>
        <input type="text" />
        <br />
        <label>7. Mechanical component type ?</label>
        <input type="text" />
        <br />
        <label>8. Information: </label>
        <input type="text" />
        <br />
        {/* photo adding feature will be incomming */}

        <label>9. Cause is known ? </label>
        <input type="checkbox" />
        <br />
        <label>10. What is the cause ? </label>
        <input type="text" />
        <br />
        <label>11. Conclusion: </label>
        <input type="text" />
        <br />

        <label>12. Repaired/Changed components: </label>
        <input type="text" />
        <br />
        <label>13. Please Write your Name: </label>
        <input type="text" />
        <br />
        <br />
        <button className="idPassCard">Submit</button>
      </div>
    </div>
  );
}

export default Reclamation;

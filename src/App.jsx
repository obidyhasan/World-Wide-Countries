import { useState } from "react";
import "./App.css";
import Countries from "./Component/Countries/Countries";

// import Products from "./Component/Props-Drilling/Products";

function App() {
  const [marks, setMarks] = useState([]);

  function handelMarksCountries(country) {
    const addedArray = [...marks, country];
    setMarks(addedArray);
  }

  const [flags, setFlags] = useState([]);

  function handelFlagsCountries(flag) {
    const addedFlags = [...flags, flag];
    setFlags(addedFlags);
  }

  return (
    <>
      {/* <Products name="Obidy" age="20" isStudent={true}></Products> */}

      <h1>React Rest Countries</h1>
      <hr />
      <h2>Mark Countries</h2>
      <ul>
        {marks.map((mark) => (
          <li key={mark}>{mark}</li>
        ))}
      </ul>
      <hr />
      <h2>Countries Flags</h2>
      <div className="div-img">
        {flags.map((flag) => (
          <img width={"100px"} key={flag} src={flag}></img>
        ))}
      </div>
      <hr />
      <Countries
        handelMarksCountries={handelMarksCountries}
        handelFlagsCountries={handelFlagsCountries}
      ></Countries>
    </>
  );
}

export default App;

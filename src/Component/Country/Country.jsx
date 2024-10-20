import { useState } from "react";
import "./Country.css";

function Country({ country, handelMarksCountries, handelFlagsCountries }) {
  const { name, flags, continents } = country;

  const [visit, setVisited] = useState(false);

  const handelVisitedCountry = () => {
    setVisited(!visit);
  };

  return (
    <div className={visit ? "country-div-visited" : "country-div"}>
      <div>
        <img className="flag-img" src={flags.png} alt=""></img>
        <h3>{name.common}</h3>
        <p>{continents}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handelVisitedCountry}>
          {visit ? "Visited" : "Going"}
        </button>
        <button onClick={() => handelMarksCountries(name.common)}>Mark</button>
        <button onClick={() => handelFlagsCountries(flags.png)}>Flag</button>
      </div>
    </div>
  );
}

export default Country;

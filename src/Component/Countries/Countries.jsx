import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

function Countries({ handelMarksCountries, handelFlagsCountries }) {
  // Create State for Countries API
  const [countries, setCountries] = useState([]);

  // useEffect Countries API
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <br />
      {/* Countries Container */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handelMarksCountries={handelMarksCountries}
            handelFlagsCountries={handelFlagsCountries}
          ></Country>
        ))}
      </div>
    </>
  );
}

export default Countries;

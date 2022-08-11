import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [result, setResult] = useState("");
  //
  // set prefix to proxy/url (see default as example)
  // WARNING: YOU MUST INCLUDE THE '/' AFTER PREFIX
  //
  const prefix = "http://localhost:5000/https://lindogourmet.com/";

  useEffect(() => {
    axios.get(prefix + "app/category/list").then((res) => {
      setResult(res.data);
      //
      // check console for data; if no data is displayed, check your proxy address and url
      //
      console.log(res.data);
    });
  }, []);

  return (
    //
    // example and arbitrary data display
    // make sure to check your data values and adapt this code to what you need
    //
    <div>
      {result ? (
        result.map((x) => <li key={x.categoryEntityId}>{x.label}</li>)
      ) : (
        <h1>No data</h1>
      )}
    </div>
  );
}

export default App;

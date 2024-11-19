import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("/api/hello")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <div>받아온 값 : {data}</div>;
}

export default App;

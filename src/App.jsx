import { useState, useEffect } from "react";
import "./App.css";
import StyledQuoteContainer from "./Components/QuoteContainer";

function App() {
  const [slip, setSlip] = useState({
    id: 149,
    advice: "As things get closer to the light, the shadows get darker.",
  });

  const fetchData = async () => {
    const url = "https://api.adviceslip.com/advice";
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json.slip);
      setSlip(json.slip);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <StyledQuoteContainer slip={slip} onClickCallback={fetchData} />
    </div>
  );
}

export default App;

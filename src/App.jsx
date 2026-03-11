import "./App.css";
import DateDropdown from "./components/DateDropdown";
import StrategyCards from "./components/Strategycards";
import ViewSlider from "./components/ViewSlider";
import { dateArray, viewsArray } from "./data/data";
import { useState } from "react";

function App() {
  const [view, setView] = useState(viewsArray[0]);
  const [date, setDate] = useState(dateArray[0]);

  return (
    <div className="container">
      <ViewSlider viewsArray={viewsArray} view={view} setView={setView} />
      <DateDropdown dateArray={dateArray} date={date} setDate={setDate} />
      <StrategyCards date={date} view={view} />
    </div>
  );
}

export default App;

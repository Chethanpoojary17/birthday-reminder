import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <div className="container">
        <h3>{people.length} BIRTHDAY'S TODAYS</h3>

        {people.map((e) => {
          return <List key={e.id} {...e} />;
        })}
        <button className="btn" onClick={() => setPeople([])}>
          Clear All
        </button>
      </div>
    </>
  );
}

export default App;

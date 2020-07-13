import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {

  const entries = emojipedia.map(entry => {
    return (
      <Entry key={entry.id} name={entry.name} meaning={entry.meaning} emoji={entry.emoji} />
    );
  });

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {entries}
      </dl>
    </div>
  );
}

export default App;

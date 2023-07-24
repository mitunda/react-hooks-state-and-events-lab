
import React, { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeChange = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`} data-testid="app-container">
      <button onClick={handleModeChange}>Toggle Mode</button>
    </div>
  );
};

export default App;

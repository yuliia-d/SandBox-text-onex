import React from "react";
import TextField from "./components/TexyField";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TextField
        size="sm"
        label="Text field"
        helpText="help text"
        errorMessage="error message"
        type="password"
      />
    </div>
  );
}

export default App;

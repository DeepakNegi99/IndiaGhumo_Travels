import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>This is APP</h1>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </div>
  );
}

export default App;

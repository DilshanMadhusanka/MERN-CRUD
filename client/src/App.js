import Header from "./componetns/Header";
import AddStudent from "./componetns/AddStudent";
import AllStudent from "./componetns/AllStudent";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/add" element={<AddStudent />} />
        <Route path="/" element={<AllStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

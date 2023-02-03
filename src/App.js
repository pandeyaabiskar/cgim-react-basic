import Counter from "./pages/Counter";
import Todo from "./pages/Todo";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

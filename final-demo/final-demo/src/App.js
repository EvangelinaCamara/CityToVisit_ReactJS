import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Allcities from "./pages/AllCities";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Allcities />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;

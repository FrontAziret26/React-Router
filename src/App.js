import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Product from "./component/product/Product";
import { Details } from "./component/product/Details";
import MyCart from "./component/my-cart/MyCart";
import MyOrders from "./component/my-orders/MyOrders";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path={"/product"} element={<Product />} />
        <Route path={"/product/:id/details"} element={<Details />} />
        <Route path={"/mycart"} element={<MyCart />} />
        <Route path={"/myorders"} element={<MyOrders />} />
      </Routes>
    </div>
  );
}

export default App;

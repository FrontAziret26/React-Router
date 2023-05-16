import styled from "styled-components";
import {  NavLink } from "react-router-dom";
import { colors } from "@mui/material";

const Header = () => {
  return (
    <Headers>
      <Logo style={{ paddingLeft: "50px" }}>iStore</Logo>
      <UL>
        <NavLink style={{textDecoration:"none"}}  to={"/Product"}><h2>Product</h2></NavLink>
        <NavLink style={{textDecoration:"none"}}  to={"/MyCart"}><h2>My Cart</h2></NavLink>
        <NavLink style={{textDecoration:"none"}}  to={"/MyOrders"}><h2>My Orders</h2></NavLink>
      </UL>
    </Headers>
  );
};
export default Header;

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: #1d7bdaa6;
`;

const UL = styled.div`
  display: flex;
  gap: 100px;
  padding-right: 50px;
  margin-top: 15px;
`;
// const StyledNavlink = styled(NavLink)`
//   color: white;
//   font-size: 24px;
//   font-weight: 500;
//   text-decoration: none;
// `;
const Logo = styled.h1`
  color: white;
`;

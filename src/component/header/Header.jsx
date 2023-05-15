import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Headers>
      <Logo style={{ paddingLeft: "50px" }}>iStore</Logo>
      <UL>
        <StyledNavlink to={"/Product"}>Product</StyledNavlink>
        <StyledNavlink to={"/MyCart"}>My Cart</StyledNavlink>
        <StyledNavlink to={"/MyOrders"}>My Orders</StyledNavlink>
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
  background-color: blue;
`;

const UL = styled.div`
  display: flex;
  gap: 100px;
  padding-right: 50px;
  margin-top: 35px;
`;
const StyledNavlink = styled(Link)`
  color: white;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
`;
const Logo = styled.h1`
  color: white;
`;

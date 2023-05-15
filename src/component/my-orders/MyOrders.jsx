import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const MyOrders = () => {
  const navigate = useNavigate();

  const WindowHistory = () => {
    navigate(-1);
  };
  return (
    <Wrapper>
    <Container>
      <Block>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          sapiente numquam. Incidunt perferendis odio doloribus aliquid sit
          nostrum quod? Temporibus tempore corporis incidunt perspiciatis rerum
          nisi aut consequatur corrupti reprehenderit!
        </p>
      </Block>
    </Container>
      <Button style={{marginTop:"20px",width:'150px', height:"50px"}} variant="contained" color="error" onClick={WindowHistory}>Go Back</Button>
    </Wrapper>
  );
};
export default MyOrders;

const Wrapper=styled.div`
   background-image: url("https://azure.kg/wp-content/uploads/2017/06/sport_resort_azure_issykkui1.jpg");
   background-repeat: no-repeat/cover;
   background-size: 100% 100%;

width: 100%;
height: 85vh;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
 

`;
const Block = styled.div`
border-radius: 12px;
width: 70%;
height: 12vh;
  background-color: beige;
  background: rgb(206,221,179);
background: linear-gradient(17deg, rgba(206,221,179,1) 11%, rgba(154,243,200,1) 90%);
`;

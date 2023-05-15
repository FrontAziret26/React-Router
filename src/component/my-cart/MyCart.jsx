import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import styled from "styled-components";

const MyCart = () => {
  const navigate = useNavigate();

  const WindowHistory = () => {
    navigate(-1);
  };

  return (
    <Img>
      <WrapperContainer>
        <Container>
          <h2 style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            autem cumque.{" "}
          </h2>
        </Container>
      </WrapperContainer>
      <Button style={{marginTop:"20px",width:'150px', height:"50px"}} variant="contained" color="error" onClick={WindowHistory}>
        GoBack
      </Button>
    </Img>
  );
};
export default MyCart;
const Img = styled.div`
  background-image: url("https://35photo.pro/photos_main/371/1859155.jpg");
  background-repeat: no-repeat/cover;
  background-size: 100% 100%;
  width: 100%;
  height: 85vh;
`;
const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: 10%; */
`;
const Container = styled.div`
  display: flex;
  width: 50%;
  height: 15vh;
  border-radius: 15px;
  background: wheat;
  background: rgb(206,221,179);
background: linear-gradient(17deg, rgba(206,221,179,1) 11%, rgba(180,173,173,0.12657563025210083) 86%);
`;

import { useParams,useNavigate } from "react-router-dom";
import styled from "styled-components";
import { data } from "../../utils/Constans";
import { Button } from "@mui/material";

export const Details = () => {
  const navigate = useNavigate();

  const WindowHistory = () => {
    navigate(-1);
  };
  const { id } = useParams();

  return (
    <Container>
      {data.map((item) => {
        return (
          id === item.id && (
            <DetailsContainer key={item.id}>
              <img src={item.img} alt="" />
              <div style={{ marginTop: "50px" }}>
                <Button onClick={WindowHistory} color="secondary" variant="contained" >Go Back</Button>
                
                <h1>{item.title}</h1>
                <h2>{item.price}</h2>
                <Info>{item.subTitle}</Info>
              </div>
            </DetailsContainer>
          )
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const DetailsContainer = styled.div`
  width: 80%;
  height: 60vh;
  background: silver;
  border: none;
  border-radius: 20px;
  display: flex;
  background: rgb(228,214,174);
background: linear-gradient(17deg, rgba(228,214,174,1) 21%, rgba(96,77,77,0.12657563025210083) 98%);
`;
const Info = styled.div`
  width: 600px;
`;

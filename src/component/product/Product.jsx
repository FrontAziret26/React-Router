import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
import {data} from '../../utils/Constans'
import { Button } from "@mui/material";
const Product = () => {
  
  const navigate = useNavigate();

  const WindowHistory = () => {
    navigate(-1);
  };
  return (
    <WrapperImg>
    <Container> 
      <WrapperContainer>
        {data.map((el) => (
          <Block>
            <DetailsLink to={`${el.id}/details`}>
              <IphoneImg src={el.img} alt="" />
        </DetailsLink>
              <div>
                <h2>{el.title}</h2>
                <h2>{el.price}</h2>
              </div>
            </Block>
        ))}
      </WrapperContainer>
    </Container>
      <Button style={{marginTop:"20px",width:"150px",height:"50px"}} onClick={WindowHistory} variant="contained"> Go Back </Button>
        </WrapperImg>
  );
};
export default Product;
const WrapperImg=styled.div`
   background-image: url('https://strannik.kg/upload/img/blog2/jati_oguz_05.jpg');
   cursor: pointer;
  background-repeat: no-repeat/cover;
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
 
`;
const IphoneImg = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 50px;
`;
const WrapperContainer = styled.div`
display: flex;
gap: 50px;
`;
const Block = styled.div`
  width: 350px;
  height: 550px;
  background-color: white;
  margin-top: 20px;
  border-radius: 10px;
  background: rgb(195,191,181);
background: linear-gradient(17deg, rgba(195,191,181,1) 21%, rgba(96,77,77,0.12657563025210083) 98%);
`;
const DetailsLink=styled(Link)`
  text-decoration: none;
`

import * as React from 'react';
import Option from './components/Option';
import styled from "styled-components";
import GoogleFontLoader from 'react-google-font-loader';
import data, {changeActive, findActive, findActiveWeight, findActivePrice} from './data.js';
const cartImg = require("./img/shopping_cart.svg") as string;


const Container = styled.form`
  font-family: Roboto;
  margin: 40px 0 0 20px;
  padding: 24px;
  width: 335px;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  display: grid;
  grid-template-rows: 133px 96px;
`
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 21px;
  padding-bottom: 2px;`
const ContDown = styled.div`
  padding: 27px 25px 16px 25px;
  display: flex;
  justify-content: space-between;`
const Price = styled.div`
font-size: 24px;
line-height: 28px;
padding-top: 13px;`
const CartBtn = styled.button`
border: none;
background: #6CA22C;
border-radius: 8px;
margin-top: 3px;
padding: 16px 16px 16px 48px;
position: relative;
color: #ffffff;
font-weight: bold;
font-size: 14px;
line-height: 16px;`
const CartImg = styled.img`
position: absolute;
top: 12px;
left: 15px;
width: 29px;`
const Input = styled.input`
display:none;`


const TestApp = () => {
  
  const options = data.map((el) => (
    <Option 
      weight={el.weight} 
      price={el.price} 
      active={el.active}
      onBtnClick={() => changeActive(el.id)} 
    />
  ))

  return (
    <Container onSubmit={() => findActive}>
      <Input value={findActiveWeight()} />
      <Input value={findActivePrice()} />
      <GoogleFontLoader
        fonts={[
          {
            font: 'Roboto',
            weights: [400, '400i'],
          },
          {
            font: 'Roboto Mono',
            weights: [400, 700],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />

      <div className='ContUp'>
        <Title>
          <span>Тип</span>
          <span>Ціна</span>
        </Title>
        <div className='options'>
          {options}
        </div>
      </div>
      <ContDown>
        <Price>500 грн</Price>
        <div>
          <CartBtn type='submit' >
            <CartImg src={cartImg} alt='#'></CartImg>
            До кошика
          </CartBtn>
        </div>
      </ContDown>
    </Container>
  )
}
export default TestApp

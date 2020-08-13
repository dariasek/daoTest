import * as React from 'react';
import styled from "styled-components";
import RadioBtn from './RadioBtn';
const OptionDiv = styled.div`
margin-top: 11.5px;
display: flex;
justify-content: space-between;`
const RadioCont = styled.div`
position: relative;
display: grid;
grid-template-columns: 24px 1fr;
grid-template-rows: 24px;
grid-column-gap: 16px;`


const Option = (props) => {
    const Weight = styled.div`
        font-size: 16px;
        line-height: 19px;
        color: ${() => props.active ? 'black' : '#999999'};
        margin-top: 5px;`
    const Price = styled.div`
        color: ${() => props.active ? 'black' : '#999999'};
        font-weight: ${() => props.active ? 'bold' : 'normal'};
        font-size: 16px;
        line-height: 19px;
        padding: 5px 2px 0 0 ;`

        

    return (
    <OptionDiv>
        <RadioCont>
            <RadioBtn active={props.active} />
            <Weight>
                {props.weight} г
            </Weight>
        </RadioCont>
        <Price>
            {props.price} грн
        </Price>
    </OptionDiv>
  )
}
export default Option

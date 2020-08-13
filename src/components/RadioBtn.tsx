import * as React from 'react';
import styled from "styled-components";

const RadioBtn = (props) => {
    const RadioBtnTest = styled.button`
        width: 24px;
        height: 24px;
        border: 1px solid;
        border-color: ${() => props.active ? '#6CA22C' : '#999999'};
        border-radius: 50%;
        background:#ffffff;
        position: relative;`
    const RadioBtnFilled = styled.div`
        position: absolute;
        width: 8px;
        height: 8px;
        left: 7px;
        top: calc(50% - 8px/2);
        border-radius: 50%;
        background: ${() => props.active ? '#6CA22C' : '#ffffff'};`
    
    return (
    <RadioBtnTest>
        <RadioBtnFilled></RadioBtnFilled>
    </RadioBtnTest>
  )
}
export default RadioBtn

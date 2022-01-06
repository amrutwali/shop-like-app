import React from 'react'
// Styles
import { Wrapper, Content } from './DropDownBar.styles';
// Components
import DropDown from '../DropDown';

const DropDownBar = () => (
    <Wrapper>
        <Content>
            <DropDown />
            <DropDown />
            <DropDown />
            <DropDown />
        </Content>
    </Wrapper>
);

export default DropDownBar;

import React from 'react'
// Styles
import { Wrapper, Content, LogoImg } from './Navbar.Styles';

const Navbar = () => (
    <Wrapper>
        <Content>
            <LogoImg />
            <input type="text" placeholder='Seach Phone'/>
            <span>Select city</span>
            <button type='button'>Login</button>
        </Content>
    </Wrapper>
);

export default Navbar;

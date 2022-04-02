import React from 'react';
import logo from '../../utilities/logo.png'

const Header = () => {
    return (
        < div style={{textAlign:'center'}}>
            <img style={{width:"220px"}} src={logo} alt="website logo" />
        </div>
    );
};

export default Header;
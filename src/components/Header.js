import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Header.css';
import logo from './../img/logo.jpg';

const Header = () => {
return (


<div class="example-div">
<div className="logo">
<img src={logo} alt="Foto" className="logo" />
</div>
<nav>    
<ul>
<li>
<Link to="/perfil" className="no-underline black">
Perfil
</Link>
</li>
<li>
<Link to="/" className="ml1 no-underline black">
Motocicletas
</Link>
</li>
<li>
<Link to="/create" className="ml1 no-underline black">
Agregar
</Link>
</li>
</ul>
</nav>
</div>
);
};

export default Header;
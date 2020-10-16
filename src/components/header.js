import React, {useState} from 'react';

const Header = () => {
    const [display, setDisplay] = useState(false)
    const showOptions = () => {
        document.querySelector('header ul').classList.toggle('displayNav');
        setDisplay(!display);
    }
    const closeOption = () => {
        document.querySelector('header ul').classList.remove('displayNav');
        setDisplay(false);

    }
    
    return ( 
        <header>
            <a href='#home'><h1>YT</h1></a>
            <ul>
            <a onClick={closeOption} href='#home'><li>Home</li></a>
            <a onClick={closeOption} href='#projects'><li>Projects</li></a>
            <a onClick={closeOption} href='#about'><li>About</li></a>
            <a onClick={closeOption} href='#contact'><li>Contact</li></a>
            </ul>
            <i onClick={showOptions} className={display ? 'fa fa-close' : 'fa fa-bars'}></i>
            
        </header>
     );
}
 
export default Header;
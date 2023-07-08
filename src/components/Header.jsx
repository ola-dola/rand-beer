import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
import logo from "./logo.png"
import Search from "./Search";

const Header = ({ beers, setBeers }) => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks((prevLinks) => !prevLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px` /* if showLinks true set height: 160px; */
      : '0px',
  };

  return (
    <header>
      <nav>
        <div className='nav-center'>

          <div className='nav-header'>
            <img src={logo} className='logo' alt='logo' /> 
            <div className='search-container'>
            <Search beers={beers} setBeers={setBeers} />
            <button className='nav-toggle' onClick={toggleLinks}>
              <FaBars />
            </button>
            </div>            
          </div>

            <div className='links-container' ref={linksContainerRef} style={linkStyles} /* if the showLinks state is true (set by clicking the toggle btn) then set height to 160px, else 0) */>
              <ul className='links' ref={linksRef}>
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './ProductHome.css';
import { FaHome, FaShoppingCart, FaUser, FaStore, FaBullhorn,FaBars,FaUserCircle,FaSearch,FaBell, FaEnvelope } from 'react-icons/fa';

function ProductHome () {
    const[isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);
    const [dropdownOpen, setDropdownOpen] = useState(false); 
    const [showDropdown, setShowDropdown] = useState(false); 
    const toggleDropdown = () => setShowDropdown(!showDropdown);  
    const imageUrl='/images/img-9.jpg';

    const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

    return(
        <div style={{backgroundColor:'black'}}>
        {/*<img src='/images/img-9.jpg' alt='hsh'/>*/}
        <nav className='navbar'>
        <div className='navbar-container'>
        <div className='sideIcon'>
        <FaBars onClick={toggle} />
        </div>
          <Link to='/' className='navbar-logo' >
          <img src='images/img-9.jpg' alt="Build Angles Logo" style={{ height: '50px',width:'50px',marginRight: '10px' }} />
              Build <span>Angles</span>
          </Link>
          
          <ul className='nav-menu active' >
          <li className='nav-item'>
          <div className="nav-links">
        <FaSearch className="search-icon" onClick={handleSearchClick}/>
        {!isSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          )}
          {isSearchOpen && (
        <div className="full-screen-search">
          <input
            type="text"
            placeholder="Search..."
            className="full-screen-search-input"
          />
          <button className="close-search" onClick={handleSearchClick}>X</button>
        </div>
      )}
      </div>
      </li>
           <li className='nav-item'>
            <button className='nav-links bttnn'>
        <FaBullhorn /> 
        <span className="button-text">Search</span>
        </button>
            </li>
            <li className='nav-item'>
            <FaBell className='nav-links' /> 
            </li>
            <li className='nav-item'>
            <FaEnvelope className='nav-links'/> 
            </li>
            <li className='nav-item dropp' onClick={() => setDropdownOpen(!dropdownOpen)} >
            <div className="profile-icon nav-links"  >
      {imageUrl ? (
        <img src={imageUrl} alt="Profile" className="profile-image" />
      ) : (
        <FaUserCircle size={40} color="#555" />
      )}
    </div>
              {dropdownOpen && (
                <ul className='dropdown-menu'>
                  <li>
                    <Link
                      to='#'
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Ongoing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='#'
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Completed
                    </Link>
                  </li>
                  </ul>
                )}
            </li>
            
          </ul>
          
          
          
        </div>
      </nav>
      <nav className='sidebar'>{/*{isOpen ? 'sidebar activess':*/}
     
      <ul className='sidebar-container'>
      <li>
      <Link to="/product">
      <div className='iconss'>
            <FaHome/>
            
            <div className="link_text">Home</div>

</div>
</Link>
            </li>
            <li>
          <div className='iconss'>
        <FaShoppingCart />
        
            <div className="link_text">Home</div>
            </div>
        </li>
            <li>
            <div className='iconss'>
        <FaUser /> 

            <div className="link_text">Home</div>
</div>
        </li>
            <li>
            <div className='iconss'>
        <FaStore />

      
            <div className="link_text">Home</div>
            </div>
        </li>
            <li>
            <div className='iconss'>
        <FaBullhorn />

       
            <div className="link_text">Home</div> 
            </div>
         </li>

      </ul>

      </nav>
            
            {/*<div className='product-view'>
            
        </div>*/}
        </div>
    );
}
export default ProductHome;
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingBag, FaChevronDown, FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import '../../assets/styles/Layout.css';
import { useNavigate } from 'react-router-dom';
import SearchOverlay from './../custom/SearchOverlay';

const Header = ({ children }) => {
    const [isAlertVisible, setIsAlertVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpenSearch = () => {
        setIsSearchOpen(true);
        setIsMenuOpen(false);
    };

    const handleCloseSearch = () => {
        setIsSearchOpen(false);
    };
    const goToSignup = () => {
        navigate('/Login');
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 1;
            if (scrolled !== isScrolled) {
                setIsScrolled(scrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isScrolled]);

    const handleCloseAlert = () => {
        setIsAlertVisible(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navbarTop = isAlertVisible ? '40px' : '0';
    const headerContainerClasses = `header-container ${isScrolled ? 'fixed-scrolled' : 'static-initial'}`;

    let contentPaddingTop = '0px';

    if (isAlertVisible) {
        // contentPaddingTop = '10px';
    }
    const contentStyle = {
        paddingTop: contentPaddingTop,
        // boxSizing: 'border-box'  
    };


    return (
        <>

            {isAlertVisible && (
                <nav className='alert-header'>
                    <div className="alert-content">
                        <span className="alert-text">
                            🎁 30% off storewide — Limited time!
                        </span>
                        <Link to="/allproducts/" className="shop-link">
                            Shop Now <FaArrowRight className="arrow-icon" />
                        </Link>
                        <button
                            onClick={handleCloseAlert}
                            aria-label="Close alert"
                            className="close-btn"
                        >
                            <FaTimes />
                        </button>
                    </div>
                </nav>
            )}

            <div
                className={headerContainerClasses}
                style={{ top: navbarTop }}
            >
                <header className='my-header'>
                    <div className='header-left'>
                        <h3 className='logo'>3legant.</h3>
                    </div>


                    <nav className={`header-center ${isMenuOpen ? 'active' : ''}`}>
                        <FaTimes className="close-icon" onClick={toggleMenu} />
                        <Link className='nav-link' to="/" onClick={toggleMenu}>Home</Link>
                        <Link className='nav-link' to="/allproducts/" onClick={toggleMenu}>Products</Link>

                        <div
                            className="dropdown-link-container"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                            onClick={(e) => {
                                if (window.innerWidth <= 768) {
                                    e.preventDefault();
                                    toggleDropdown();
                                }
                            }}
                        >
                            <div className="dropdown-trigger">
                                <Link className='nav-link' to="/allproducts/">Shop</Link>
                                <FaChevronDown className="dropdown-icon" />
                            </div>
                            {isDropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/oneproduct/1" onClick={toggleMenu}>Product</Link></li>
                                    <li><Link to="/shop/living" onClick={toggleMenu}>Living Room</Link></li>
                                    <li><Link to="/shop/bedroom" onClick={toggleMenu}>Bedroom</Link></li>
                                    <li><Link to="/shop/dining" onClick={toggleMenu}>Dining</Link></li>
                                    <li><Link to="/shop/office" onClick={toggleMenu}>Office</Link></li>
                                </ul>
                            )}
                        </div>

                        <Link className='nav-link' to="/contact/" onClick={toggleMenu}>Contact Us</Link>
                        <Link className='nav-link' to="/about/" onClick={toggleMenu}>About</Link>
                    </nav>

                    {isSearchOpen && (
                        <SearchOverlay onClose={handleCloseSearch} />
                    )}

                    <div className='header-right'>
                        <FaSearch
                            className="icon"
                            onClick={handleOpenSearch}
                            style={{ cursor: 'pointer' }}
                        />
                        <FaUser
                            className="icon desktop-only"
                            onClick={goToSignup}
                            style={{ cursor: 'pointer' }}
                        />

                        <div className="cart-icon-container">
                            <FaShoppingBag className="icon" />
                            <span className="cart-count">2</span>
                        </div>

                        <FaBars className="hamburger-icon" onClick={toggleMenu} />
                    </div>
                </header>
            </div>

            <div className="page-content-wrapper" style={contentStyle}>
                {children}
            </div>
        </>
    );
};

export default Header;
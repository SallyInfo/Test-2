import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingBag, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'; // تم استيراد FaBars و FaTimes
import '../../assets/styles/Layout.css';

const Header = () => {
    // حالة للتحكم في ظهور القائمة المنسدلة
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // حالة جديدة للتحكم في ظهور القائمة على الجوال
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // دالة لفتح/إغلاق القائمة المنسدلة
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // دالة لفتح/إغلاق قائمة الجوال
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div style={{position: "fixed"}} className="header-container">
            <header className='my-header'>
                <div className='header-left'>
                    <h3 className='logo'>3legant.</h3>
                </div>

                {/* القائمة الرئيسية: ستختفي على الجوال وتظهر بشكل جانبي */}
                <nav className={`header-center ${isMenuOpen ? 'active' : ''}`}>
                    <FaTimes className="close-icon" onClick={toggleMenu} /> {/* زر الإغلاق للقائمة الجانبية */}
                    <Link className='nav-link' to="/" onClick={toggleMenu}>Home</Link>
                    
                    <div 
                        className="dropdown-link-container"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        // في وضع الجوال، يمكن استخدام onClick
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <div className="dropdown-trigger">
                            <Link className='nav-link' to="/shop">Shop</Link>
                            <FaChevronDown className="dropdown-icon" />
                        </div>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><Link to="/shop/all" onClick={toggleMenu}>All Products</Link></li>
                                <li><Link to="/shop/living" onClick={toggleMenu}>Living Room</Link></li>
                                <li><Link to="/shop/bedroom" onClick={toggleMenu}>Bedroom</Link></li>
                                <li><Link to="/shop/dining" onClick={toggleMenu}>Dining</Link></li>
                                <li><Link to="/shop/office" onClick={toggleMenu}>Office</Link></li>
                            </ul>
                        )}
                    </div>

                    <Link className='nav-link' to="/contact/" onClick={toggleMenu}>Contact Us</Link>
                    <Link className='nav-link' to="/about" onClick={toggleMenu}>About</Link>
                </nav>

                <div className='header-right'>
                    <FaSearch className="icon" />
                    <FaUser className="icon desktop-only" /> {/* أيقونة المستخدم تختفي على الجوال */}
                    <div className="cart-icon-container">
                        <FaShoppingBag className="icon" />
                        <span className="cart-count">2</span>
                    </div>
                    {/* أيقونة القائمة الجانبية (hamburger menu)، تظهر فقط على الجوال */}
                    <FaBars className="hamburger-icon" onClick={toggleMenu} />
                </div>
            </header>
        </div>
    );
};

export default Header;
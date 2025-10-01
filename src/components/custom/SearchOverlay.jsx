import { useEffect, useRef } from 'react';
// import {FaClose} from 'react-icons/fa';

function SearchOverlay({ onClose }) {
    const inputRef = useRef(null);

    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [onClose]);

    return (
        <div className="search-overlay-backdrop">

            <div className="search-modal-content" onClick={(e) => e.stopPropagation()}>

                <div className="search-input-container">
                    <label htmlFor=""> Search :   </label>
                    <input ref={inputRef} type="text" placeholder="" className="search-input p4"
                    />
                </div>
                <button className="close-button" onClick={onClose} aria-label="">
                    &times;
                    {/* <FaClose  /> */}
                </button>

            </div>
        </div>
    );
}

export default SearchOverlay;   
// src/app/SearchBar.js
"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const searchBarContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0',
        width: '100%',
    };

    const searchInputWrapperStyle = {
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
    };

    const searchInputStyle = {
        padding: '10px',
        width: '100%',
        paddingRight: '40px', // Add some padding to the right to make space for the icon
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
    };

    const searchIconStyle = {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none', // Ensure the icon does not block input interaction
    };
    return (
        <div className={styles.searchBarContainer}>
            <div className={styles.searchInputWrapper}>
                <input
                    type="text"
                    placeholder="Search for products"
                    value={searchTerm}
                    onChange={handleChange}
                    className={styles.searchInput}

                />
                <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} style={{marginLeft:-100}}/>
            </div>
        </div>
    );
};

export default SearchBar;

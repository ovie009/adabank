import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Iconly/Bold/Login">
        <g id="Login">
        <path id="Login_2" fill-rule="evenodd" clip-rule="evenodd" d="M22 11.8861L22 16.9254C22 19.445 20 21.5 17.56 21.5L6.44 21.5C3.99 21.5 2 19.445 2 16.9047L2 11.8758C2 9.35611 3.99 7.29083 6.43 7.29083L11.23 7.29083L11.23 13.6932L9.63 12.041C9.33 11.7312 8.84 11.7312 8.54 12.041C8.39 12.1959 8.32 12.4024 8.32 12.6089C8.32 12.8051 8.39 13.0117 8.54 13.1666L11.45 16.1819C11.59 16.3368 11.79 16.4194 12 16.4194C12.2 16.4194 12.4 16.3368 12.54 16.1819L15.45 13.1666C15.75 12.8568 15.75 12.3508 15.45 12.041C15.15 11.7312 14.66 11.7312 14.36 12.041L12.77 13.6932L12.77 7.29083L17.55 7.29083C20 7.29083 22 9.35611 22 11.8861ZM12.0001 2.5C12.4201 2.5 12.7701 2.85523 12.7701 3.2815L12.7701 7.29052L11.2301 7.29052L11.2301 3.2815C11.2301 2.85523 11.5701 2.5 12.0001 2.5Z" fill="#09703E"/>
        </g>
        </g>
    </svg>
`;

const TopUpIcon = () => <SvgXml xml={xml} />;

export default TopUpIcon;

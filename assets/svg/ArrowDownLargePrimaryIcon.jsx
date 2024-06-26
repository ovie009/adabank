import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.66669 3.33329L10.3334 7.99996L5.66669 12.6666" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;

const ArrowDownLargePrimaryIcon = () => <SvgXml xml={xml} />;

export default ArrowDownLargePrimaryIcon;

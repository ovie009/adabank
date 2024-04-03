import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="193" height="84" viewBox="0 0 193 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse opacity="0.1" cx="25.4334" cy="113" rx="166.614" ry="113" fill="white"/>
    </svg>
`;

const BottomEllipse = () => <SvgXml xml={xml} />;

export default BottomEllipse;

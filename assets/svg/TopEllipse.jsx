import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="193" height="84" viewBox="0 0 193 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse opacity="0.08" cx="167.566" cy="-29" rx="166.614" ry="113" fill="white"/>
    </svg>
`;

const TopEllipse = () => <SvgXml xml={xml} />;

export default TopEllipse;

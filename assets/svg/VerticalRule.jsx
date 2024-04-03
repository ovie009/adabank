import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="2" height="59" viewBox="0 0 2 59" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" d="M1 0V59" stroke="#080422" stroke-width="0.5" stroke-dasharray="7 7"/>
    </svg>
`;

const VerticalRule = () => <SvgXml xml={xml} />;

export default VerticalRule;

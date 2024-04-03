import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_123_3314" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2H21.4768V21.477H2V2Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_123_3314)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7388 3.5C7.19579 3.5 3.49979 7.195 3.49979 11.738C3.49979 16.281 7.19579 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5ZM11.7388 21.477C6.36879 21.477 1.99979 17.108 1.99979 11.738C1.99979 6.368 6.36879 2 11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 17.108 17.1088 21.477 11.7388 21.477Z" fill="#080422"/>
        </g>
        <mask id="mask1_123_3314" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="17" y="17" width="6" height="6">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.24 17.7069H22.264V22.7217H17.24V17.7069Z" fill="white"/>
        </mask>
        <g mask="url(#mask1_123_3314)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.4602 18.9887C17.1672 18.6957 17.1662 18.2207 17.4592 17.9277C17.7512 17.6327 18.2262 17.6347 18.5202 17.9257L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217Z" fill="#080422"/>
        </g>
    </svg>
`;

const SearchIcon = () => <SvgXml xml={xml} />;

export default SearchIcon;

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Iconly/Light-Outline/Location">
        <g id="Location">
        <path id="Fill 1" fill-rule="evenodd" clip-rule="evenodd" d="M12.2505 8.5C11.2855 8.5 10.5005 9.285 10.5005 10.251C10.5005 11.216 11.2855 12 12.2505 12C13.2155 12 14.0005 11.216 14.0005 10.251C14.0005 9.285 13.2155 8.5 12.2505 8.5ZM12.2505 13.5C10.4585 13.5 9.0005 12.043 9.0005 10.251C9.0005 8.458 10.4585 7 12.2505 7C14.0425 7 15.5005 8.458 15.5005 10.251C15.5005 12.043 14.0425 13.5 12.2505 13.5Z" fill="#9F2EF9"/>
        <g id="Group 5">
        <mask id="mask0_77_819" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="4" y="2" width="17" height="20">
        <path id="Clip 4" fill-rule="evenodd" clip-rule="evenodd" d="M4 2H20.4995V21.5H4V2Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_77_819)">
        <path id="Fill 3" fill-rule="evenodd" clip-rule="evenodd" d="M12.2495 3.5C8.5275 3.5 5.4995 6.557 5.4995 10.313C5.4995 15.092 11.1235 19.748 12.2495 19.996C13.3755 19.747 18.9995 15.091 18.9995 10.313C18.9995 6.557 15.9715 3.5 12.2495 3.5ZM12.2495 21.5C10.4555 21.5 3.9995 15.948 3.9995 10.313C3.9995 5.729 7.7005 2 12.2495 2C16.7985 2 20.4995 5.729 20.4995 10.313C20.4995 15.948 14.0435 21.5 12.2495 21.5Z" fill="#9F2EF9"/>
        </g>
        </g>
        </g>
        </g>
    </svg>
`;

const LocationIcon = () => <SvgXml xml={xml} />;

export default LocationIcon;

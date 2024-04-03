import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.182 5.52507L5.52514 11.1819C5.33186 11.3752 5.01131 11.3752 4.81803 11.1819C4.62476 10.9886 4.62476 10.6681 4.81803 10.4748L10.4749 4.81796C10.6682 4.62469 10.9887 4.62469 11.182 4.81796C11.3753 5.01124 11.3753 5.33179 11.182 5.52507Z" fill="#09703E"/>
        <path d="M11.182 11.182C10.9887 11.3753 10.6682 11.3753 10.4749 11.182L4.81803 5.52518C4.62476 5.33191 4.62476 5.01135 4.81803 4.81808C5.01131 4.6248 5.33186 4.6248 5.52514 4.81808L11.182 10.4749C11.3753 10.6682 11.3753 10.9888 11.182 11.182Z" fill="#09703E"/>
    </svg>
`;

const CloseIcon = () => <SvgXml xml={xml} />;

export default CloseIcon;
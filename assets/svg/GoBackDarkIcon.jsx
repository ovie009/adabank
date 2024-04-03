import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5598 2.66663H21.4532C26.1598 2.66663 29.3332 5.69463 29.3332 10.2133V21.7733C29.3332 26.2933 26.1598 29.3333 21.4532 29.3333H10.5598C5.83984 29.3333 2.6665 26.2933 2.6665 21.7733V10.2133C2.6665 5.69463 5.83984 2.66663 10.5598 2.66663ZM12.9732 17H21.4398C21.9998 17 22.4398 16.5466 22.4398 16C22.4398 15.44 21.9998 15 21.4398 15H12.9732L16.2798 11.7066C16.4665 11.52 16.5732 11.2533 16.5732 11C16.5732 10.748 16.4665 10.4933 16.2798 10.2933C15.8932 9.90663 15.2532 9.90663 14.8665 10.2933L9.83984 15.2933C9.4665 15.6666 9.4665 16.3333 9.83984 16.7066L14.8665 21.7066C15.2532 22.0933 15.8932 22.0933 16.2798 21.7066C16.6665 21.3066 16.6665 20.68 16.2798 20.28L12.9732 17Z" fill="#080422"/>
    </svg>
`;

const GoBackDarkIcon = () => <SvgXml xml={xml} />;

export default GoBackDarkIcon;
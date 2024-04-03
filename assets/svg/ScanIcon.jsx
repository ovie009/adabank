import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Iconly/Bold/Scan">
        <g id="Scan">
        <path id="Scan_2" fill-rule="evenodd" clip-rule="evenodd" d="M8.4277 3C8.8477 3 9.1887 3.33438 9.1887 3.74722C9.1887 4.15907 8.8487 4.49345 8.4277 4.49345L6.7987 4.49444C5.4467 4.4964 4.3467 5.57604 4.3467 6.90279V8.76201C4.3467 9.17386 4.0047 9.50923 3.5847 9.50923C3.1647 9.50923 2.8237 9.17386 2.8237 8.76201V6.90279C2.8237 4.75331 4.6067 3.00294 6.7977 3.00098L8.4267 3H8.4277ZM15.6006 3.00029H17.1936C19.3906 3.00029 21.1766 4.75165 21.1766 6.90603V8.7623C21.1766 9.17415 20.8366 9.50952 20.4156 9.50952C19.9956 9.50952 19.6546 9.17415 19.6546 8.7623V6.90603C19.6546 5.57535 18.5506 4.49277 17.1936 4.49277H15.6006C15.1806 4.49277 14.8396 4.15936 14.8396 3.74751C14.8396 3.33468 15.1806 3.00029 15.6006 3.00029ZM14.7625 6.74266H9.2385C7.9745 6.75541 6.9585 7.76837 6.9695 9.00883V10.2542C6.9725 10.3993 7.0915 10.518 7.2395 10.5229H16.7595C16.9085 10.5189 17.0275 10.4003 17.0325 10.2542V9.00883C17.0335 8.40968 16.7975 7.83407 16.3715 7.40554C15.9485 6.98094 15.3675 6.74266 14.7625 6.74266ZM1.762 12.0412H22.239C22.659 12.0412 23 12.3756 23 12.7885C23 13.2003 22.659 13.5337 22.239 13.5337H21.177V17.0933C21.177 19.2486 19.39 21 17.194 21H15.601C15.18 21 14.839 20.6656 14.839 20.2528C14.839 19.8409 15.18 19.5065 15.601 19.5065H17.194C18.551 19.5065 19.655 18.4249 19.655 17.0933V13.5337H17.032V14.5251C17.042 15.7656 16.027 16.7795 14.762 16.7913H9.238C7.974 16.7795 6.959 15.7656 6.969 14.5251V13.5337H4.346V17.0972C4.346 18.424 5.447 19.5036 6.8 19.5056L8.428 19.5065C8.848 19.5065 9.189 19.8409 9.189 20.2528C9.188 20.6656 8.848 21 8.427 21L6.798 20.999C4.607 20.9971 2.823 19.2467 2.823 17.0972V13.5337H1.762C1.342 13.5337 1 13.2003 1 12.7885C1 12.3756 1.342 12.0412 1.762 12.0412Z" fill="white"/>
        </g>
        </g>
    </svg>
`;

const ScanIcon = () => <SvgXml xml={xml} />;

export default ScanIcon;

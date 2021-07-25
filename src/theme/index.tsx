import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const THEME: DefaultTheme = {
	colors: {
		darkGray: '#696969',
		lightGray: '#E3E4E7',
		lightBlue: '#ADB9C3',
		darkBlue: '#3878A2',
		white: '#fff',
	},
	gutters: {
		xSmall: '5px',
		small: '10px',
		regular: '15px',
		large: '20px',
		xLarge: '30px',
		x3Large: '50px',
	},
	timeIndicator: {
		borderRadius: '2px',
		height: '5px',
		background: '#eaeaea',
		ontimeColor: '#188977',
		overtimeColor: '#DB471E',
	},
	mediaQueries: {
		mobile: '@media screen and (max-width: 428px)',
		tablet: '@media screen and (max-width: 768px)',
		desktab: '@media screen and (max-width: 1140px)', // added for intermediary between desktop and tab
		desktop: '@media screen and (max-width: 1280px)',
		largeScreen: '@media screen and (min-width: 1280px)',
	},
	fontSizes: {
		xSmall: '10px',
		small: '12px',
		medium: '14px',
		large: '16px',
		xLarge: '18px',
		x2Large: '20px',
		x3Large: '24px',
		x4Large: '30px',
		x5Large: '38px',
	},
	FONT_WEIGHTS: {
		light: 300,
		regular: 400,
		semiBold: 600,
		bold: 700,
		extraBold: 800,
	},
	component: {
		backgroundColor: '#FFFFFF',
		headerBackgroundColor: '#EAEAEA',
		padding: '10px',
	},
	zIndex: {
		normal: 1,
		higher: 2,
		highest: 3,
	},
};

export const GlobalStyle = createGlobalStyle`
  html { 
   overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0;
	display: grid;
	place-items: center;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
    h1, h2, h3, h4, h5, h6{
        margin-bottom:0; 
    }
   
  }
  
`;

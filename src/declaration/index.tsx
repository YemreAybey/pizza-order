// import original module declarations
import 'styled-components';
// and extend them!

declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	export interface DefaultTheme {
		colors: {
			darkGray: string;
			lightGray: string;
			lightBlue: string;
			darkBlue: string;
			white: string;
		};
		gutters: {
			xSmall: string;
			small: string;
			regular: string;
			large: string;
			xLarge: string;
			x3Large: string;
		};

		timeIndicator: {
			borderRadius: string;
			height: string;
			background: string;
			ontimeColor: string;
			overtimeColor: string;
		};

		mediaQueries: {
			mobile: string;
			tablet: string;
			desktab: string;
			desktop: string;
			largeScreen: string;
		};

		component: {
			backgroundColor: string;
			headerBackgroundColor: string;
			padding: string;
		};

		fontSizes: {
			xSmall: string;
			small: string;
			medium: string;
			large: string;
			xLarge: string;
			x2Large: string;
			x3Large: string;
			x4Large: string;
			x5Large: string;
		};

		FONT_WEIGHTS: {
			light: number;
			regular: number;
			semiBold: number;
			bold: number;
			extraBold: number;
		};

		zIndex: {
			normal: number;
			higher: number;
			highest: number;
		};
	}
}

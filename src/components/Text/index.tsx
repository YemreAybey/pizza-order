import { StyledGenericType } from '@src/shared/constants';
import { font } from '@src/utils/fonts';
import { createElement } from 'react';
import styled from 'styled-components';

import { CSSObject, DefaultTheme } from 'styled-components';

interface ITextInterface {
	fontSize?: keyof DefaultTheme['fontSizes'] | Array<keyof DefaultTheme['fontSizes']>;
	color?: keyof DefaultTheme['colors'];
	fontWeight?: keyof DefaultTheme['FONT_WEIGHTS'];
	letterSpacing?: string;
	tag?: string;
	children?: unknown;
	onClick?: (arg?: unknown) => void;
	css?: CSSObject;
	lineHeight?: string;
	textAlign?: string;
	disabled?: boolean;
}

export const Text: StyledGenericType<ITextInterface> = styled(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	({ tag = 'p', onClick, fontSize, fontWeight, letterSpacing, lineHeight, color, children, textAlign, ...rest }: ITextInterface) =>
		createElement(tag, { onClick, ...rest }, children),
)<ITextInterface>`
	margin: 0;
	color: ${({ color, theme }) => theme?.colors?.[color] ?? '#FFF'};
	letter-spacing: ${({ letterSpacing }) => letterSpacing ?? '0.1px'};
	line-height: ${({ lineHeight }) => lineHeight ?? null};
	text-align: ${({ textAlign }) => textAlign ?? 'left'};

	${({ theme }) => theme?.mediaQueries?.largeScreen} {
		${({ fontSize, fontWeight, theme }) =>
			font(
				(fontSize instanceof Array ? theme?.fontSizes?.[fontSize[0]] : theme?.fontSizes?.[fontSize]) ?? theme?.fontSizes?.medium,
				theme?.FONT_WEIGHTS?.[fontWeight] ?? theme?.FONT_WEIGHTS?.regular,
			)};
	}

	${({ theme }) => theme?.mediaQueries?.desktop} {
		${({ fontSize, fontWeight, theme }) =>
			font(
				(fontSize instanceof Array ? theme?.fontSizes?.[fontSize[1]] : theme?.fontSizes?.[fontSize]) ?? theme?.fontSizes?.medium,
				theme?.FONT_WEIGHTS?.[fontWeight] ?? theme?.FONT_WEIGHTS?.regular,
			)};
	}

	${({ theme }) => theme?.mediaQueries?.tablet} {
		${({ fontSize, fontWeight, theme }) =>
			font(
				(fontSize instanceof Array ? theme?.fontSizes?.[fontSize[2]] : theme?.fontSizes?.[fontSize]) ?? theme?.fontSizes?.medium,
				theme?.FONT_WEIGHTS?.[fontWeight] ?? theme?.FONT_WEIGHTS?.regular,
			)};
	}

	${({ theme }) => theme?.mediaQueries?.mobile} {
		${({ fontSize, fontWeight, theme }) =>
			font(
				(fontSize instanceof Array ? theme?.fontSizes?.[fontSize[3]] : theme?.fontSizes?.[fontSize]) ?? theme?.fontSizes?.medium,
				theme?.FONT_WEIGHTS[fontWeight] ?? theme?.FONT_WEIGHTS?.regular,
			)};
	}

	${({ css }) => css};
`;

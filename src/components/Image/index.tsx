import React, { memo, NamedExoticComponent, useEffect, useState } from 'react';
import styled, { CSSObject, DefaultTheme, StyledComponentBase } from 'styled-components';

interface IImageInterface {
	/**
	 * Source of the given image.
	 */
	src?: string;
	/**
	 * Locally stored image name to be used with require();
	 */
	name?: string;
	/**
	 * object-fit property to handle image inner state.
	 */
	fit?: string;
	/**
	 * width Property for Image Component
	 */
	width?: string;
	/**
	 * height Property for Image Component
	 */
	height?: string;
	/**
	 * maxHeight Property for Image Component
	 */
	maxHeight?: string;
	/**
	 * maxWidth Property for Image Component
	 */
	maxWidth?: string;
	/**
	 * waterMark Property for Image Component
	 */
	waterMark?: boolean;
	/**
	 * To set specific className for thubmnails.
	 */
	className?: string;
	/**
	 * To set borderRadius.
	 */
	borderRadius?: string;
	/**
	 * ProductCard Specifier
	 */
	productCard?: boolean;
	/** To customize img component further */
	css?: CSSObject;
	/**
	 * Onclick Event
	 */
	onClick?(event: React.MouseEvent<HTMLImageElement>): void;
}

const ImageComponent: string & StyledComponentBase<NamedExoticComponent, DefaultTheme, IImageInterface, never> = styled(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	({ src, fit, maxWidth, maxHeight, borderRadius, css, name, ...props }: IImageInterface) => {
		const [lazySrc, setLazySrc] = useState(null);

		useEffect(() => {
			if (!!src) {
				const lazyLoadImg: HTMLImageElement = new Image();

				lazyLoadImg.onload = () => setLazySrc(src);
				lazyLoadImg.src = src;
			}
		}, [src]);

		return <img alt={`pizza-${name ?? ''}`} src={lazySrc || require(`@src/images/${name}`)} {...props} loading="lazy" />;
	},
)<IImageInterface>`
	object-fit: contain;
	width: ${({ width }) => width ?? '100%'};
	height: ${({ height, productCard }) => (productCard ? '147px' : height ?? '100%')};
	max-height: ${({ maxHeight }) => maxHeight ?? undefined};
	max-width: ${({ maxWidth }) => maxWidth ?? undefined};
	border-radius: ${({ borderRadius }) => borderRadius ?? '3px'};
	${({ css }) => css};
`;

export const LazyImage: NamedExoticComponent<IImageInterface> = memo(ImageComponent);

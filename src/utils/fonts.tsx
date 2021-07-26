import { THEME } from '@src/theme';

export const font = (size: string = THEME.fontSizes.medium, weight: number = THEME.FONT_WEIGHTS.regular): string => {
	let fontWeight: string;

	switch (weight) {
		case THEME.FONT_WEIGHTS.extraBold:
			fontWeight = `
        font-weight: '900';
      `;
			break;
		case THEME.FONT_WEIGHTS.bold:
			fontWeight = `
        font-weight: '800';
      `;
			break;
		case THEME.FONT_WEIGHTS.semiBold:
			fontWeight = `
        font-weigth: '600';
      `;
			break;
		case THEME.FONT_WEIGHTS.light:
			fontWeight = `
        font-weigth '300';
      `;
			break;
		default:
			fontWeight = `
        font-weigth '400';
      `;
			break;
	}

	return `
    ${fontWeight}
    font-size: ${size}
  `;
};

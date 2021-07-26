import styled from 'styled-components';

export const TwoColumns = styled.div(props => ({
	display: 'grid',
	padding: props.theme.gutters.small,
	gridTemplateColumns: '1fr 1fr',
}));

export const FormRow = styled.div`
	display: grid;
	grid-gap: 8px;
	margin-bottom: 12px;
	max-width: 700px;
	justify-content: space-around;
`;

export const FormGeneralContainer = styled.div<{ gap?: string }>`
	background: ${({ theme }) => theme.colors.white};
	box-shadow: 4px 4px 30px rgba(206, 206, 206, 0.25);
	border-radius: 8px;
	width: 700px;
	padding: 24px;
	display: grid;
	gap: ${({ gap }) => gap || '12px'};
	${({ theme }) => theme.mediaQueries.tablet} {
		padding: 16px;
		max-width: 700px;
		width: 100%;
	}
	${({ theme }) => theme.mediaQueries.mobile} {
		padding: 8px;
	}
`;

export const FormRowGrid = styled.div`
	display: grid;
	gap: 24px;
`;

export const CenterGrid = styled.div`
	display: grid;
	place-items: center;
`;

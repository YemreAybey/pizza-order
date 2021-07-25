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

export const FormGeneralContainer = styled.div`
	background: ${({ theme }) => theme.colors.white};
	box-shadow: 4px 4px 30px rgba(206, 206, 206, 0.25);
	border-radius: 8px;
	max-width: 700px;
	padding: 24px;
	display: grid;
	gap: 12px;
	${({ theme }) => theme.mediaQueries.tablet} {
		padding: 16px;
	}
	${({ theme }) => theme.mediaQueries.mobile} {
		padding: 8px;
	}
`;

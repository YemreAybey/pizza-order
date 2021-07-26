import styled from 'styled-components';

export const AutoInputRow = styled.div`
	display: grid;
	grid-gap: 8px;
	max-width: 700px;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	width: 100%;
`;

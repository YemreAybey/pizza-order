import styled from 'styled-components';

export const AutoInputRow = styled.div`
	display: grid;
	grid-gap: 8px;
	max-width: 700px;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	width: 100%;
`;

export const FallBackContainer = styled.div<{ visible: boolean }>`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
	background-color: #1616178f;
	width: 100%;
	height: 100%;
	display: ${({ visible }) => (visible ? 'grid' : 'none')};
	place-items: center;
`;

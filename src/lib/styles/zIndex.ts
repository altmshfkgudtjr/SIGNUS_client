export const zIndexSet = (layer: number) => `
	${layer}
`;

const zIndex = {
	header: zIndexSet(50),
	modal: zIndexSet(100),
	tooltip: zIndexSet(500),
	snackbar: zIndexSet(400),
};

export default zIndex;
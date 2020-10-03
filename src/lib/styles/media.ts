export const mediaQuery = (maxWidth: number) => `
	@media (max-width: ${maxWidth}px)
`;

const media = {
	xlarge : mediaQuery(1728),
	large : mediaQuery(1440),
	medium : mediaQuery(1200),
	small : mediaQuery(767),
	xsmall : mediaQuery(350),
	custom : mediaQuery,
};

export default media;
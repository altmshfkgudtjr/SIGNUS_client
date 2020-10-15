export const mediaQuery = (maxWidth: number) => `
	@media (max-width: ${maxWidth}px)
`;

export const mediaValue = {
	xlarge : 1728,
	large : 1440,
	medium : 1248,
	small : 702,
	xsmall : 350	
};

const media = {
	xlarge : mediaQuery(mediaValue.xlarge),
	large : mediaQuery(mediaValue.large),
	medium : mediaQuery(mediaValue.medium),
	small : mediaQuery(mediaValue.small),
	xsmall : mediaQuery(mediaValue.xsmall),
	custom : mediaQuery,
};

export default media;
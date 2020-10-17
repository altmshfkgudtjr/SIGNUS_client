export const noselect = ()=> `
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

export const transition = ()=>`
	cubic-bezier(0.25, 0.1, 0.25, 1);
`;

export const boxShadow = {
	light: "0px 2px 8px rgba(0, 0, 0, 0.1)",
	regular: "0px 4px 8px rgba(0, 0, 0, 0.2)",
	bold: "0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 8px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)",

	header: "0px 2px 2px rgba(0, 0, 0, 0.05)",
	btn: "0px 2px 2px rgba(0,0,0,0.2)"
};
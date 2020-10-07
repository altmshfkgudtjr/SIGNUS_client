import { keyframes } from 'styled-components';

const fadeIn = keyframes`
	0% { opacity: 0; }
	100% { opacity: 1;}
`;
const fadeOut = keyframes`
	0% { opacity: 1; }
	100% { opacity: 0; }
`;
const fadeInTop = keyframes`
	0% { opacity: 0; top: -50%; }
	100% { opacity: 1; top: 0px; }
`;
const fadeOutTop = keyframes`
	0% { opacity: 1; bottom: 0px; }
	100% { opacity: 0; bottom: -50%; }
`;
const fadeInBottom = keyframes`
	0% { opacity: 0; bottom: -50%; }
	100% { opacity: 1; bottom: 0px; }
`;
const fadeOutBottom = keyframes`
	0% { opacity: 1; bottom: 0px; }
	100% { opacity: 0; bottom: -50%; }
`;
const fadeInLeft = keyframes`
	0% { opacity: 0; left: -50%; }
	100% { opacity: 1; left: 0px; }
`;
const fadeOutLeft = keyframes`
	0% { opacity: 1; left: 0px; }
	100% { opacity: 0; left: -50%; }
`;
const fadeInRight = keyframes`
	0% { opacity: 0; right: -50%; }
	100% { opacity: 1; right: 0px; }
`;
const fadeOutRight = keyframes`
	0% { opacity: 1; right: 0px; }
	100% { opacity: 0; right: -50%; }
`;
const zoomIn = keyframes`
	0% { opacity: 0; transform: scale(.5, .5); }
	100% { opacity: 1; transform: scale(1, 1); }
`;
const zoomOut = keyframes`
	0% { opacity: 1; transform: scale(1, 1); }
	100% { opacity: 0; transform: scale(.5, .5); }
`;
const tooltip = keyframes`
	0% { opacity: 0; }
	40% { opacity: 0; }
	50% { opacity: 1; } 
	100% { opacity: 1; }
`;
const animations = {
	fadeIn,
	fadeOut,
	fadeInLeft,
	fadeOutLeft,
	fadeInRight,
	fadeOutRight,
	fadeInTop,
	fadeOutTop,
	fadeInBottom,
	fadeOutBottom,
	zoomIn,
	zoomOut,
	tooltip
};

export default animations
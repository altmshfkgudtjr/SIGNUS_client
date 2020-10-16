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
	0% { opacity: 0; transform: translate(0, -50%); }
	100% { opacity: 1; transform: translate(0, 0); }
`;
const fadeOutTop = keyframes`
	0% { opacity: 1; transform: translate(0, 0); }
	100% { opacity: 0; transform: translate(0, -50%); }
`;
const fadeInBottom = keyframes`
	0% { opacity: 0; transform: translate(0, 50%); }
	100% { opacity: 1; transform: translate(0, 0); }
`;
const fadeOutBottom = keyframes`
	0% { opacity: 1; transform: translate(0, 0); }
	100% { opacity: 0; transform: translate(0, 50%); }
`;
const fadeInLeft = keyframes`
	0% { opacity: 0; transform: translate(-50%, 0); }
	100% { opacity: 1; transform: translate(0, 0); }
`;
const fadeOutLeft = keyframes`
	0% { opacity: 1; transform: translate(0, 0); }
	100% { opacity: 0; transform: translate(-50%, 0); }
`;
const fadeInRight = keyframes`
	0% { opacity: 0; transform: translate(50%, 0); }
	100% { opacity: 1; transform: translate(0, 0); }
`;
const fadeOutRight = keyframes`
	0% { opacity: 1; transform: translate(0, 0); }
	100% { opacity: 0; transform: translate(50%, 0); }
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
const noticeSlider = keyframes`
	0% { transform: translateX(100%); }
	100% { transform: translateX(-100%); };
`;
const doLike = keyframes`
	0% { transform: scale(1, 1); }
	50% { transform: scale(1.2, 1.2); }
	80% { transform: scale(.9, .9); }
	100% { transform: scale(1, 1); }
`;
const blink = keyframes`
	0% { opacity: 1; }
	50% { opacity: .5; }
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
	tooltip,
	noticeSlider,
	doLike,
	blink
};

export default animations
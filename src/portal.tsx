import React from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
	id: string,
	children: React.ReactNode
};
const Portal = ({id, children}: PortalProps) => {
	const targetElement = getTargetElement(id);
	return createPortal(children, targetElement);
}

const getTargetElement = (id: string): HTMLElement => {
	const targetElement: (HTMLElement | null) = document.getElementById(id);
	if (targetElement !== null) {
		return targetElement;
	}

	const newElement : HTMLElement = document.createElement('div');
	newElement.setAttribute('id', id);
	document.body.appendChild(newElement);

	return newElement;
}

export default Portal
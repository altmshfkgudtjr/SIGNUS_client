export const modalToggle = (state: boolean) => {
	if (state) {
		(document.querySelector('body') as HTMLElement).style.overflow = 'hidden';
	} else {
		(document.querySelector('body') as HTMLElement).removeAttribute('style');
	}
}
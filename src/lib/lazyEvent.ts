// debounce
export function debounce(func: Function, wait: number=200) {
	let timeout: number;
	return function(this: any) {
		const args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			func.apply(this, args);
		}, wait);
	};
}

// throttle
export const throttle = (func: Function, limit: number=200) => {
	let inThrottle: boolean;
	return function(this: any) {
		const args = arguments;
		const context = this;
		if (!inThrottle) {
			func.apply(context, args);
			inThrottle = true;
			setTimeout(() => inThrottle = false, limit)
		}
	}
}
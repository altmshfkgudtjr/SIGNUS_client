export const dateFormatter = (date: number): string => {
	const a = new Date();
	const b = new Date(date);
	
	const yyyy = b.getFullYear();
	const mm = b.getMonth() + 1;
	const dd = b.getDate();
	
	let msg: string = a > b
											? `${yyyy}년 ${mm}월 ${dd}일`
											: `${yyyy}년 ${mm}월 ${dd}일까지`;

	return msg;
}

export const clipboardCopy = (ele: HTMLTextAreaElement): Promise<void> => {
	if (navigator && navigator.clipboard) {
		navigator.clipboard.writeText(ele.value);
	} else {
		ele.select();
		ele.setSelectionRange(0, 9999);
		document.execCommand('Copy');
	}

	return Promise.resolve();
}
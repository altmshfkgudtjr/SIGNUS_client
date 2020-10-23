export const dateFormatter = (date: number): string => {
	const a = new Date();
	const b = new Date(date);
	// DB에 KST(+9) 기준으로 UTC(+0)로 저장되어 있음: Saved Miss
	// 그래서 표시할 때, 9시간을 빼줌: Revise Time
	b.setHours(b.getHours() - 9);
	
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
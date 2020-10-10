export const dateFormatter = (date: string): string => {
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
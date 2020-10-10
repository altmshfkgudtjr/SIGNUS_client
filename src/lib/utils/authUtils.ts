/* 빈 값 검사 */
export const emptyChecker = (keyword: string): boolean => {
	if (keyword === '') {
		return false;
	}
	return true;
}
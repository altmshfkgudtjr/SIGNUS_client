/* 검색어 Checker */
export const searchChecker = (keyword: string): boolean => {
	if (keyword.length === 0) {
		return false;
	}
	return true;
}
/* 검색어 Checker */
export const searchChecker = (keyword: string): boolean => {
	if (keyword.length === 0) {
		return false;
	}
	return true;
}

/* 검색어 공백 및 + 치환 */
export const changeKeyword = (keyword: string): string => {
	return keyword.replace(/\+/gi, '%2B')
								.replace(/ /gi, '+');
}
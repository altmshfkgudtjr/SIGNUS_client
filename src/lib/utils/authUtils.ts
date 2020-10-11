/* 빈 값 검사 */
export const emptyChecker = (keyword: string): boolean => {
	if (keyword === '') {
		return false;
	}
	return true;
}

/* 아이디 값 유효성 검사 */
export const validationIdChecker = (keyword: string): boolean => {

	return true;
}

/* 비밀번호 값 유효성 검사 */
export const validationPwChecker = (keyword: string): boolean => {

	return true;
}

/* 비밀번호 재확인 값 유효성 검사 */
export const validationRePwChecker = (pw: string, rePw: string): boolean => {
	if (pw !== rePw) {
		return false;
	}

	return true;
}
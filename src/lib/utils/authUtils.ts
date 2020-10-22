export type validationType = {
	valid: boolean,
	type: string
};

/* 빈 값 검사 */
export const emptyChecker = (keyword: string): boolean => {
	if (keyword === '') {
		return false;
	}
	return true;
}

/* 아이디 값 유효성 검사 */
export const validationIdChecker = (keyword: string): validationType => {
	if (!emptyChecker(keyword)) {
		return {
			valid: false,
			type: "EMPTY"
		}
	}

	if (keyword.length < 2) {
		return {
			valid: false,
			type: "TOO_SHORT"
		};
	}

	if (50 < keyword.length) {
		return {
			valid: false,
			type: "TOO_LONG"
		};
	}

	return {
		valid: true,
		type: "SUCCESS"
	};
}

/* 비밀번호 값 유효성 검사 */
export const validationPwChecker = (keyword: string): validationType => {
	if (!emptyChecker(keyword)) {
		return {
			valid: false,
			type: "EMPTY"
		}
	}

	if (keyword.length < 6) {
		return {
			valid: false,
			type: "TOO_SHORT"
		};
	}

	if (100 < keyword.length) {
		return {
			valid: false,
			type: "TOO_LONG"
		};
	}

	return {
		valid: true,
		type: "SUCCESS"
	};
}

/* 비밀번호 재확인 값 유효성 검사 */
export const validationRePwChecker = (pw: string, rePw: string): validationType => {
	if (!emptyChecker(rePw)) {
		return {
			valid: false,
			type: "EMPTY"
		}
	}

	if (pw !== rePw) {
		return {
			valid: false,
			type: "DIFFERENCE"
		}
	}
	return {
		valid: true,
		type: "SUCCESS"
	};
}

/* 닉네임 값 유효성 검사 */
export const validationNicknameChecker = (keyword: string): validationType => {
	if (!emptyChecker(keyword)) {
		return {
			valid: false,
			type: "EMPTY"
		}
	}

	if (keyword.length < 1) {
		return {
			valid: false,
			type: "TOO_SHORT"
		};
	}

	if (10 < keyword.length) {
		return {
			valid: false,
			type: "TOO_LONG"
		};
	}

	return {
		valid: true,
		type: "SUCCESS"
	};
}
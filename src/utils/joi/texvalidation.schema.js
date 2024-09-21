import joi from "joi"

//joi는 자료형, 패턴, 최대최소, 필수항목 여부, 에러 시 메시지 등을 정할 수 있다
 const textValidation = {
    account: joi.object({
        id: joi.string().pattern(new RegExp('^[a-z0-9]+$')).min(4).max(20).required()
        .messages({
            'string.pattern.base': "아이디는 영소문자 및 숫자로 구성해 주세요.",
            'string.empty': "아이디를 입력해 주세요.",
            'string.min': "아이디를 4자 이상 입력해 주세요.",
            'string.max': "아이디를 20자 이하로 입력해 주세요.",
        }),

        name: joi.string().pattern(new RegExp('^[가-힣]+$')).min(2).max(8).required()
        .messages({
            'string.empty': "이름을 입력해 주세요.",
            'string.pattern.base': "올바른 이름을 입력해 주세요."
        }),

        password: joi.string().min(6).max(20).required()
        .messages({
            'stirng.empty': "비밀번호를 입력해 주세요.",
            'string.min': "비밀번호를 6자 이상 입력해 주세요.",
            'string.max': "비밀번호를 20자 이하로 입력해 주세요."
        }),

        passwordConfirm: joi.string().min(6).max(20).required()
        .messages({
            'stirng.empty': "비밀번호 확인을 입력해 주세요.",
            'string.min': "비밀번호를 6자 이상 입력해 주세요.",
            'string.max': "비밀번호를 20자 이하로 입력해 주세요."
        })
    }) 
}

export default textValidation;
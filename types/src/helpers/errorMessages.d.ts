declare enum errors {
    NOT_AUTHORIZED = "Usu\u00E1rio n\u00E3o autorizado a realizar essa opera\u00E7\u00E3o.",
    SERVER_COMMUNICATION = "Erro ao comunicar com servidor.",
    OPERATION_ERROR = "Erro ao realizar opera\u00E7\u00E3o."
}
export default errors;
interface CODE {
    code?: string;
}
interface ERROR {
    extensions?: CODE;
}
export declare function forbidenError(errors: ERROR[] | undefined): boolean;

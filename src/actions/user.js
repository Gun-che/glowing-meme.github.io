export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'
export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST'
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE'
export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST'
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS'
export const REFRESH_TOKEN_FAILURE = 'REFRESH_TOKEN_FAILURE'


export const createRequest = () => ({ type: SIGN_IN_REQUEST })
export const createExitRequest = () => ({ type: SIGN_OUT_REQUEST })
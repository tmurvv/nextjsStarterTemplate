export const resultInfoReducer = (state, action) => {
    switch (action.type) {
        case 'initial': 
            return {
                resultContainer: 'none',
                resultText: 'none',
                resultOkButton: 'none',
                resultTryAgainButton: 'none',
                tryAgainMarginLeft: '0',
                resultImg: 'none'
            }
        case 'loadingImage':
            return {
                resultContainer: 'block',
                resultText: 'none',
                resultOkButton: 'none',
                resultTryAgainButton: 'none',
                tryAgainMarginLeft: '0',
                resultImg: 'block'
            }
        case 'OK':
            return {
                resultContainer: 'block',
                resultText: 'block',
                resultOkButton: 'block',
                resultTryAgainButton: 'none',
                tryAgainMarginLeft: '0',
                resultImg: 'none'
            }
        case 'tryAgain':
            return {
                resultContainer: 'block',
                resultText: 'block',
                resultOkButton: 'none',
                resultTryAgainButton: 'block',
                tryAgainMarginLeft: '0',
                resultImg: 'none'
            }
        case 'okTryAgain':
            return {
                resultContainer: 'block',
                resultText: 'block',
                resultOkButton: 'block',
                resultTryAgainButton: 'block',
                tryAgainMarginLeft: '30px',
                resultImg: 'none'
            }
        }
}
export const activeWindowReducer = (state, action) => {
    switch (action.type) {
        case 'initial': 
            return {
                active: 'login',
                loginClasses: 'login-signup l-attop',
                signupClasses: 'login-signup s-atbottom'
            }
        case 'login':
            return {
                active: 'login',
                loginClasses: 'login-signup l-attop',
                signupClasses: 'login-signup s-atbottom'
            }
        case 'signup':
            return {
                active: 'signup',
                loginClasses: 'login-signup l-atbottom',
                signupClasses: 'login-signup s-attop'
            }
    }
}

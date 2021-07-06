import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../../../actions/userActions';
import { LoginContext } from '../../../contexts/loginContext';
import { saveUserOnCookie } from '../../../cookies/cookies';
import { loginToDB } from '../../../services/userService';

const RegisterForm = (props) => {
    const { dispatchUserData } = useContext(LoginContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailinputValid, setIsEmailInputValid] = useState(true);
    const [isPasswordInputValid, setIsPasswordInputValid] = useState(true);
    const [passwordRepeatedValid, setPasswordRepeatedValid] = useState(true);

    const history = useHistory();

    const isFormInavlid = () => {
        return email === "" || password === "" || !passwordRepeatedValid;
    };
    const onSubmitform = (event) => {
        event.preventDefault();
        loginToDB(email, password).then(
            (response) => {
                if (response.data) {
                    const userData = response.data;
                    saveUserOnCookie(userData)
                    dispatchUserData(loginAction(userData));
                    history.push('/home')
                }
            }).catch((err) => {
                console.log(err)
            })
    };

    const onClickSubscribe = () => {
        props.setIsLoginMode(true);
    };

    const onBlurEmailInput = (event) => {
        const theEmail = event.target.value.trim();
        if (theEmail === "") {
            setEmail("");
            setIsEmailInputValid(false);
        } else {
            setEmail(theEmail);
            setIsEmailInputValid(true);
        }
    };

    const onBlurPasswordInput = (event) => {
        const thePassword = event.target.value.trim();
        setPassword(thePassword === "" ? "" : thePassword);
        setIsPasswordInputValid(thePassword !== "");
    };
    const onBlurPasswordRepeated = (event) => {
        const passwordRepeated = event.target.value.trim();
        setPasswordRepeatedValid(password === passwordRepeated)
        return password === passwordRepeated;
    };

    return (
        <div className="login-form">
            <div className="form-header">
                <h3>הרשמה</h3>
                <p>הזן את הפרטים כדי להירשם</p>
            </div>
            <div className="form-container">
                <form onSubmit={onSubmitform}>
                    <div className="div1">
                        <div className="email">
                            <div className="form-label">כתובת מייל</div>
                            <input placeholder="your@email.com" onBlur={onBlurEmailInput} className={!isEmailinputValid ? 'invalid-input' : ''} />
                            {!isEmailinputValid && <div className="invalid-message">שדה חובה</div>}
                        </div>
                        <div className="password">
                            <div className="form-label">סיסמה</div>
                            <input type="password" placeholder="6 תווים, אותיות באנגלית וספרה" onBlur={onBlurPasswordInput} className={!isEmailinputValid ? 'invalid-input' : ''} />
                            {!isPasswordInputValid && <div className="invalid-message">שדה חובה</div>}
                            <input type="password" placeholder="חזור על הסיסמה שהקלדת" onBlur={onBlurPasswordRepeated} className={!isEmailinputValid ? 'invalid-input' : 'repeatedPassword'} />
                            {!passwordRepeatedValid && <div className="invalid-message">סיסמא לא תואמת</div>}
                        </div>
                    </div>
                    <div className="div2">
                        <button type="submit" disabled={isFormInavlid()}>הירשם</button>
                        <div className="suggestion">
                            <span>כבר רשום? </span>
                            <span className="switchMode" onClick={onClickSubscribe}>להתחברות</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm

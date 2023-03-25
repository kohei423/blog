import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {
    const navigate = useNavigate();
    // google login
    const loginWithGoogle = () => {
        signInWithPopup(auth,provider).then((result) => {
            localStorage.setItem("isAuth",true);
            setIsAuth(true);
            navigate("/");
        });
    };

    return (
    <div>
        <p>ログインする</p>
        <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
    )
};

export default Login;
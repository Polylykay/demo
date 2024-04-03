import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Loginpage = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function submit() {
        console.log(login,password)
        navigate("/application");
    }

    return (
        <div className="page">
        <form>
                <input type="text" name="name" placeholder="Введите логин" onInput={(e) => setLogin(e.target.value)} />
                <input type="password" placeholder="Введите пароль" name="password on" onInput={(e) => setPassword(e.target.value)} />
                <div className="login-button">
                    <button  onClick={submit}>submit</button>
                    <p><a href="/registration">Зарегистрироовать аккаунт</a></p>
                </div>
        </form>
        </div>
    )
}
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Registrationpage.css';

export const Registrationpage = () => {
   
    const navigate = useNavigate();

    function submit() {
        console.log(values)
        navigate("/application");
    }

    
    const [values, setValues] = useState({
        login: "",
        password: "",
        fio: "",
        phone: "",
        email: ""
      })

    

    return (
        <div className="page">
            <form>
                <input type="text" name="login" placeholder="Введите логин"  onChange={(e) => setValues({ ...values, login: e.target.value })} />
                <input type="password" name="password" placeholder="Введите пароль" onChange={(e) => setValues({ ...values, password: e.target.value })} />
                <input type="text" name="fio" placeholder="Введите ФИО" onChange={(e) => setValues({ ...values, fio: e.target.value })} />
                <input type="tel" name="tel" placeholder="Введите телефон"  onChange={(e) => setValues({ ...values, phone: e.target.value })} />
                <input type="email" name="e-mail" placeholder="Введите почту" onChange={(e) => setValues({ ...values, email: e.target.value })} />
                <div className="login-button">
                    <button  onClick={submit}>submit</button>
                </div>
            </form>
        </div>
    )
}
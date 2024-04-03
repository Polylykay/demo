import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Statementpage = () => {

    const [carnumber, setCarnumber] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate();

    function submit() {
        console.log(carnumber,text)
        navigate("/application");
    }

    return (
        <div className="page">
        <form>
           
                <input type="text" name="namber" placeholder="Введите гос номер автомобиля" onInput={(e) => setCarnumber(e.target.value)} />
                <textarea placeholder="Введите описание нарушения" onInput={(e) => setText(e.target.value)} />
                <div  className="select-form">
                <label for="pet-select">Выберите дату</label>
                <select >
                                    <option value="1">12.01.2024 - 20.01.2024</option>
                                    <option value="2">15.01.2024 - 23.01.2024</option>
                                   
                                </select>
                </div>
            
                <button  onClick={submit}>submit</button>
        </form>
        </div>
    )
}



   
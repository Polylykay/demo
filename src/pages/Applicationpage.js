import React from 'react';
import { useNavigate } from "react-router-dom";

export const Applicationpage = () => {
    const navigate = useNavigate();

    function submit() {
        navigate("/statement");
    }

    const testApplications = [
        {
            id: '№1',
            status: 'new',
            carName: 'Toyota',
            date: '12.01.2024 - 20.01.2024'
        },
        {
            id: '№2',
            status: 'rejected',
            carName: 'Toyota 200',
            date: '12.01.2024 - 20.01.2024'
        },
        {
            id: '№3',
            status: 'approved',
            carName: 'Ferrari',
            date: '12.01.2024 - 20.01.2024'
        },
    ]
    const getStatusName = (s) => {
        const statusNameMap = {
            approved: "Подтверждено",
            rejected: "Отклонено",
            new: "Новый",
        }
        return statusNameMap[s]
    }

    return (
        <div className="page">
        
        <div className="applicationpage">
        <div className="login-button">
                    <button  onClick={submit}>Оставить заявку</button>
                </div>
                <table>
                    <tr>
                        <th>Номер заявления</th>
                        <th>Машина</th>
                        <th>Дата</th>
                        <th>Статус</th>
                    </tr>
                    {
                        testApplications.map(el => 
                        <tr> 
                            <td>{el.id}</td>
                            <td>{el.carName}</td> 
                            <td>{el.date}</td> 
                            <td>{getStatusName(el.status)}</td> 
                        </tr>)
                    }
                </table>
            
            </div>
            
            </div>
    )
}
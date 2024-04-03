import React from 'react';

export const Adminpage = () => {
    const testApplications = [
        {

            fio: 'Волков Ильдар Ильдарович',
            tel: '+79123456819',
            email: 'bkwjbckj@mail.ru',
            status: 'new',
            carName: 'Toyota',
            date: '12.01.2024 - 20.01.2024'
        },
        {
            fio: 'Волков Ильдар Ильдарович',
            tel: '+79123436819',
            email: 'bfbddddddj@mail.ru',
            status: 'rejected',
            carName: 'Toyota 200',
            date: '12.01.2024 - 20.01.2024'
        },
        {
            fio: 'Волков Ильдар Ильдарович',
            tel: '+79123356819',
            email: 'bkwjbcdddkj@mail.ru',   
            status: 'approved',
            carName: 'Ferrari',
            date: '12.01.2024 - 20.01.2024'
        },
    ]
    

    return (
        <>
        <header>
            <p>Панель Админестратора</p>
        </header>
        <div className="page">

            <div className="applicationpage">

                <table>
                    <tr>
                        
                        <th>ФИО</th>
                        <th>Телефон</th>
                        <th>Почта</th>
                        <th>Машина</th>
                        <th>Дата</th>
                        <th>Статус</th>
                    </tr>
                    {
                        testApplications.map(el =>
                            <tr>
                               
                                <td>{el.fio}</td>
                                <td>{el.tel}</td>
                                <td>{el.email}</td>
                                <td>{el.carName}</td>
                                <td>{el.date}</td>
                                <td>
                                    <select name="" id="">
                                    <option value="">Подтверждено</option>
                                    <option value="">Отклонено</option>
                                    <option value="">Новое</option>
                                </select>
                                </td>
                                <div className="btn-admin">

                                </div>
                            </tr>)
                    }
                </table>

            </div>

        </div>
        </>
    )
}
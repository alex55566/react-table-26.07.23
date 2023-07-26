import React from 'react';
import { observer } from 'mobx-react-lite';
import { users } from '../store/store';

export const Table = observer(() => {
    function deleteUser(id) {
        users.deleteCurrentUser(id)
        sessionStorage.setItem('users', JSON.stringify(users.users))
    }
    return (
        <div className='table-wrap'>
            <table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Remove user</th>
                    </tr>
                </thead>
                <tbody>
                    {users.users.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index}</td>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            <td>{item.email}</td>
                            <td>
                                <button onClick={() => deleteUser(item.id)}>
                                    delete
                                </button>
                            </td>
                        </tr>
                    )}
                    <tr className='alert-add'>{users.users.length === 0 && (!sessionStorage.getItem('users') || JSON.parse(sessionStorage.getItem('users').length === 2)) && <td colSpan="5">Empty...add new users</td>}</tr>
                </tbody>
            </table>
        </div>
    )
})

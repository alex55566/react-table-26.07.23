import React, { useEffect, useState } from 'react'
import { Input } from './Input'
import { users } from '../store/store';
import { nanoid } from 'nanoid';
import { observer } from 'mobx-react-lite';

export const Form = observer(() => {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState()
    const [alert, setAlert] = useState(false)

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    useEffect(() => {
        if (users.users.length === 0 && sessionStorage.getItem('users')) {
            users.addStorage(JSON.parse(sessionStorage.getItem('users')))
        }
    }, [])

    function addNewUser() {
        users.isTouching(true)
        if (name && surname && name.length > 2 && surname.length > 2 && re.test(email)) {
            users.isAdding(true)
            users.addNewUser({ id: nanoid(), name: name, surname: surname, email: email })
            sessionStorage.setItem('users', JSON.stringify(users.users))
            setName()
            setSurname()
            setEmail()
            setAlert(false)
        }
        else {
            setAlert(true)
        }

    }

    return (
        <div className='form-wrap'>
            <Input placeholder={'Name'} setParentValue={setName} />
            <Input placeholder={'Surname'} setParentValue={setSurname} />
            <Input placeholder={'Email'} setParentValue={setEmail} />
            <button onClick={addNewUser}>add user</button>
            <div className="alert-wrapper">{
                alert && users.isTouch && <div className='alert-error'>Each input should be more than 2 letters and email should be correct</div>
            }</div>
        </div>
    )
})

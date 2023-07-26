import React, { useEffect } from 'react'
import { useState } from 'react'
import { users } from '../store/store'
import { observer } from 'mobx-react-lite'

export const Input = observer(({ placeholder, setParentValue }) => {
    const [value, setValue] = useState('')

    useEffect(() => setValue(''), [users.isAdd])

    function changeValue(e) {
        setValue(e.target.value)
        setParentValue(e.target.value)
        users.isTouching(false)
    }

    return (
        <input placeholder={placeholder} type="text" value={value} onClick={() => users.isAdding(false)} onChange={e => changeValue(e)} />
    )
})

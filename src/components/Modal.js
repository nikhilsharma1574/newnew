import React from 'react'
import { Dropdown } from 'flowbite-react'
    const Modal = () => {
    return (
        <div className='h-screen '>
            <Dropdown label="Dropdown button">
                <Dropdown.Item>
                    Dashboard
                </Dropdown.Item>
                <Dropdown.Item>
                    Settings
                </Dropdown.Item>
                <Dropdown.Item>
                    Earnings
                </Dropdown.Item>
                <Dropdown.Item>
                    Sign out
                </Dropdown.Item>
</Dropdown>
        </div>
    )
    }

    export default Modal
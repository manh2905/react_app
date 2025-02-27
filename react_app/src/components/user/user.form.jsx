import { Input } from 'antd';
import { Button, Flex } from 'antd';
import { useState } from 'react';

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const HandleClickBtn = () => {
        console.log(fullName)
    }

    return (
        <div className="user-form" style={{ margin: '20px 0' }}>
            <div style={{ display: "flex", gap: '15px', flexDirection: 'column' }}>
                <div>

                    <span>FullName</span>
                    <Input
                        onChange={(event) => { setFullName(event.target.value) }}
                        value={fullName}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        onChange={(event) => { setEmail(event.target.value) }}
                        value={email}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        onChange={(event) => { setPassword(event.target.value) }}
                        value={password}
                    />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input
                        onChange={(event) => { setPhone(event.target.value) }}
                        value={phone}
                    />
                </div>
                <div>
                    <Button
                        onClick={HandleClickBtn}
                        type="primary">Create </Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;
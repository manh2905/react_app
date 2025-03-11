import { useState } from "react";
import { Button, Flex, Input, notification, Modal } from 'antd';
import { createUserAPI } from "../../services/api.service";


const UpdateUserModal = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(true);

    const HandleSubmitBtn = async () => {

        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "create user",
                description: "tao user thanh cong"
            })
            resetAndCloseModal();
            await loadUser();
        }
        else {
            notification.error({
                message: "loi tao user",
                description: JSON.stringify(res.message)
            })
        }

    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
    }

    return (
        <Modal
            title="Update User  "
            open={isModalOpen}
            onOk={() => HandleSubmitBtn()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"Save"}
        >
            <div style={{ display: "flex", gap: '15px', flexDirection: 'column' }}>
                <div>

                    <span>Full Name</span>
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

            </div>
        </Modal>
    )
}

export default UpdateUserModal;
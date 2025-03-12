import { useEffect, useState } from "react";
import { Input, notification, Modal, } from 'antd';
import { updateUserAPI } from "../../services/api.service";


const UpdateUserModal = (props) => {
    const [fullName, setFullName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;

    // const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(true);
    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate])

    const HandleSubmitBtn = async () => {

        const res = await updateUserAPI(id, fullName, phone);
        if (res.data) {
            notification.success({
                message: "update user",
                description: "cap nhat user thanh cong",
            })
            resetAndCloseModal();
            await loadUser();
        }
        else {
            notification.error({
                message: "loi cap nhat user",
                description: JSON.stringify(res.message)
            })
            alert(JSON.stringify(res.message))
        }

    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setFullName("");
        setPhone("");
        setId("");
        setDataUpdate(null)
    }

    return (
        <Modal
            title="Update User  "
            open={isModalUpdateOpen}
            onOk={() => HandleSubmitBtn()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"Save"}
        >
            <div style={{ display: "flex", gap: '15px', flexDirection: 'column' }}>
                <div>
                    <span>Id</span>
                    <Input
                        disabled
                        value={id}
                    />
                </div>
                <div>

                    <span>Full Name</span>
                    <Input
                        onChange={(event) => { setFullName(event.target.value) }}
                        value={fullName}
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
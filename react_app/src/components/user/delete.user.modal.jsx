import { Popconfirm, notification } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import { deleteUserAPI } from "../../services/api.service";


const DeleteUserModal = (props) => {

    const { record, loadUser } = props;

    const HandleOKBtn = async () => {


        const res = await deleteUserAPI(record._id);
        if (res.data) {
            notification.success({
                message: "delete user",
                description: "xoa user thanh cong",
            })
            await loadUser();
        }
        else {
            notification.error({
                message: "loi xoa user",
                description: JSON.stringify(res.message)
            })
            alert(JSON.stringify(res.message))
        }

    }
    const cancel = () => {

    }
    return (
        <>
            <Popconfirm
                title="Delete User"
                description="Are you sure to delete this user?"
                onConfirm={HandleOKBtn}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
            >
                <DeleteOutlined style={{ cursor: "pointer", color: "red" }}
                    onClick={() => {
                        console.log(record._id)
                    }}
                />

            </Popconfirm>
        </>
    )
}

export default DeleteUserModal;
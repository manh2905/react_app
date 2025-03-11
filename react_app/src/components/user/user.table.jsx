import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';
import UpdateUserModal from './update.user.modal';



const UserTable = (props) => {

    const { dataUsers } = props;


    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <>
                        <a href="#">{record._id}</a>
                    </>

                )

            }

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>

                    <EditOutlined style={{ cursor: "pointer" }} />
                    <DeleteOutlined style={{ cursor: "pointer" }} />
                </div>

            ),
        },


    ];




    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
            <UpdateUserModal />

        </>
    )
}

export default UserTable;
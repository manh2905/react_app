import { EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import DeleteUserModal from './delete.user.modal';



const UserTable = (props) => {

    const { dataUsers, loadUser } = props;

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const [isModalViewUserOpen, setIsModalViewUserOpen] = useState(false);
    const [dataView, setDataView] = useState(null);




    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <>

                        <a href="#" onClick={() => {
                            setDataView(record)
                            setIsModalViewUserOpen(true);
                        }}>{record._id}</a>
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

                    <EditOutlined
                        style={{ cursor: "pointer", color: "yellow" }}
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true);
                        }}
                    />
                    <DeleteUserModal
                        loadUser={loadUser}
                        record={record}
                    />
                </div>

            ),
        },


    ];




    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <ViewUserDetail
                isModalViewUserOpen={isModalViewUserOpen}
                setIsModalViewUserOpen={setIsModalViewUserOpen}
                dataView={dataView}
                setDataView={setDataView}

            />

        </>
    )
}

export default UserTable;
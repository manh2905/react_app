import { Drawer } from "antd";
import { useState } from "react";

const ViewUserDetail = (props) => {

    const { isModalViewUserOpen, setIsModalViewUserOpen, dataView, setDataView } = props;

    const onClose = () => {
        setIsModalViewUserOpen(false);
        setDataView(null);
    };
    return (
        <Drawer title="chi tiet" onClose={onClose} open={isModalViewUserOpen}>
            {dataView ?
                <>
                    <p>Id: {dataView._id}</p> <br />
                    <p>Full Name: {dataView.fullName}</p> <br />
                    <p>Email: {dataView.email}</p> <br />
                    <p>Phone Number: {dataView.phone}</p> <br />
                </>
                :
                <>
                    <p>Khong co thong tin</p>
                </>
            }
        </Drawer >
    )
}

export default ViewUserDetail;
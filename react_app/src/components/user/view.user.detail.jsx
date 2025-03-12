import { Drawer } from "antd";


const ViewUserDetail = (props) => {

    const { isModalViewUserOpen, setIsModalViewUserOpen, dataView, setDataView } = props;

    const onClose = () => {
        setIsModalViewUserOpen(false);
        setDataView(null);
    };
    return (
        <Drawer width={"40vw"} title="chi tiet" onClose={onClose} open={isModalViewUserOpen}>
            {dataView ?
                <>
                    <p>Id: {dataView._id}</p> <br />
                    <p>Full Name: {dataView.fullName}</p> <br />
                    <p>Email: {dataView.email}</p> <br />
                    <p>Phone Number: {dataView.phone}</p> <br />
                    <p>Avatar:</p> <br />
                    <div>
                        <img height={250} width={300}
                            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataView.avatar}`} alt="" />
                    </div>
                    <div>
                        <label htmlFor="uploadBtn" style={{
                            display: "block",
                            background: "yellow",
                            width: "fit-content",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>Upload Avatar</label>
                        <input type="file" hidden id="uploadBtn" />
                    </div>
                    {/* <Button type="primary">Upload </Button> */}
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
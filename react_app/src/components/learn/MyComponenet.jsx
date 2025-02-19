import './style.css';


const MyComponent = () => {
    // const a = "manh";
    // const a = [1, 2, 3];
    const a = {
        name: "manh",
        age: 25
    }

    return (
        <>
            <div className="child"
                style={{ fontSize: "30px" }}
            >{JSON.stringify(a)} & manh </div>
            <div>{console.log("hello")}</div>

        </>
    );
}

export default MyComponent;
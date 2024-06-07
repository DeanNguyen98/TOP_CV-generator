export function BasicInfoEdit (props) {
    const {data, handleChange} = props;
    return (
        <>
        <form className="form-container">
            <label className="form-label" htmlFor="firstname">
                <span>First name</span>
                <input type="text" id="firstname" value ={data.firstname} onChange={handleChange} name="firstname"></input>
            </label>
            <label className="form-label" htmlFor="lastname">
                <span>Last name</span>
                <input type="text" id="lastname" value={data.lastname} onChange={handleChange} name='lastname'></input>
            </label>
            <label className="form-label" htmlFor="title">
                <span>Title</span>
                <input type="text" value={data.title} onChange={handleChange} id="title" name="title"></input>
            </label>
            <label className="form-label" htmlFor="phonenumber">
                <span>Phone number</span>
                <input type="text" id="phonenumber" value={data.phonenumber} onChange={handleChange} name="phonenumber"></input>
            </label>
            <label className="form-label" htmlFor="email">
                <span>Email</span>
                <input type="email" id="email" value={data.email} onChange={handleChange} name="email"></input>
            </label>
            <label className="form-label" htmlFor="address">
                <span>Address</span>
                <input type="address" id="address" value={data.address} onChange={handleChange} name="address"></input>
            </label>

        </form>
        </>
    )
}
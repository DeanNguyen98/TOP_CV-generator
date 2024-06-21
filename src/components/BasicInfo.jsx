export function BasicInfoEdit (props) {
    const {data, handleChange} = props;
    return (
        <>
        <form className="form-container">
            <h2>Personal Details</h2>
            <label className="form-label" htmlFor="firstname">
                <span>First name</span>
                <input type="text" id="firstname" value ={data.firstname} onChange={handleChange} name="firstname" placeholder="John"></input>
            </label>
            <label className="form-label" htmlFor="lastname">
                <span>Last name</span>
                <input type="text" id="lastname" value={data.lastname} onChange={handleChange} name='lastname' placeholder="Doe"></input>
            </label>
            <label className="form-label" htmlFor="title">
                <span>Title</span>
                <input type="text" value={data.title} onChange={handleChange} id="title" name="title" placeholder=""></input>
            </label>
            <label className="form-label" htmlFor="phonenumber">
                <span>Phone number</span>
                <input type="text" id="phonenumber" value={data.phonenumber} onChange={handleChange} name="phonenumber" placeholder="+61 123 345 678"></input>
            </label>
            <label className="form-label" htmlFor="email">
                <span>Email</span>
                <input type="email" id="email" value={data.email} onChange={handleChange} name="email" placeholder="example@email.com"></input>
            </label>
            <label className="form-label" htmlFor="address">
                <span>Address</span>
                <input type="address" id="address" value={data.address} onChange={handleChange} name="address" placeholder="Sydney NSW"></input>
            </label>
            <label className="form-label" htmlFor="about">
                <span>About yourself</span>
                <textarea id="about" value={data.about} name="about" onChange={handleChange} placeholder="Write a short paragraph about yourself here."></textarea>
            </label>

        </form>
        </>
    )
}
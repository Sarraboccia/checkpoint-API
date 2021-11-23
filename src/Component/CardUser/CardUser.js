import "./carduser.css";
const CardUser=({user})=>{
    return(
        <div className="card">
            <h1 className="name">{user.name}</h1>
            <h4 className="phone">{user.phone}</h4>
            <h2 className="email">{user.email}</h2>
            <h3 className="website">{user.website}</h3>
        </div>
    )
}

export default CardUser;
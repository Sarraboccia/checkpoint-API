import "./listusers.css";
import CardUser from "../CardUser/CardUser"

const ListUsers=({users})=>{
    return(
        <div className="list">
            {
                users.map(user=>
                <CardUser user={user}/>)
            }
        </div>
    )
}

export default ListUsers
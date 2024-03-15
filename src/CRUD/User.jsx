import { useEffect, useState } from "react"
import axios from "axios"
import style from './home.module.css'
import { Link } from "react-router-dom"
const User = () => {
    let [user, setUser] = useState([])
    let [reload, setReload] = useState(false)


    useEffect(() => {
        axios.get("http://localhost:5000/employee")
            .then((response) => { setUser(response.data) })
            .catch(() => { console.log("Errorrr"); })
    }, [reload])

    let deleteUser = (id) => {
        axios.delete(`http://localhost:5000/employee/${id}`)
        setReload(true)
        window.location.reload("/user")
    }


    return (
        <div id={style.userPage}>
            {user.map((user) => {
                return (
                    <div>
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>{user.empName}</td>
                            </tr>
                            <tr>
                                <td>Salary</td>
                                <td>{user.empSalary}</td>
                            </tr>
                            <tr>
                                <td>Company</td>
                                <td>{user.empCompany}</td>
                            </tr>
                            <tr>
                                <td><button><Link to={`/edit/${user.id}`}>Edit</Link></button></td>
                                <td><button onClick={() => { deleteUser(user.id) }}>Delete</button></td>
                            </tr>
                        </table>
                    </div>
                )
            })}
        </div>
    );
}
export default User
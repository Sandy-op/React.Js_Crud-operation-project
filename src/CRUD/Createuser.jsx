import { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Createuser = () => {
    let [name, setName] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")

    let navigate = useNavigate()
    let getName = (e) => {
        setName(e.target.value)
    }

    let getCompany = (e) => {
        setCompany(e.target.value)
    }
    let getSalary = (e) => {
        setSalary(e.target.value)
    }
    let formHandle = (e) => {
        e.preventDefault()
        let payload = {
            empName: name,
            empSalary: salary,
            empCompany: company
        }
        axios.post("http://localhost:5000/employee", payload)
            .then(() => { console.log("Data has been stored"); })
            .catch(() => { console.log("Errorrr"); })

        navigate("/user")
    }
    return (
        <div id={style.createUser}>
            <form action="">
                <label>Name</label>
                <input type="text" value={name} onChange={getName} />
                <label>Salary</label>
                <input type="text" value={salary} onChange={getSalary} />
                <label>Company</label>
                <input type="text" value={company} onChange={getCompany} />
                <button onClick={formHandle}>submit</button>
            </form>
        </div>
    )
}
export default Createuser
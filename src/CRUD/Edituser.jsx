import React, { useEffect, useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
const Edituser = () => {
    const userId = useParams()
    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [salary, setSalary] = useState("")
    let navigate = useNavigate()

    const getName = (e) => {
        setName(e.target.value);
    }
    const getCompany = (e) => {
        setCompany(e.target.value)
    }
    const getSalary = (e) => {
        setSalary(e.target.value)
    }

    const formHandle = (e) => {
        e.preventDefault()
        const payload = {
            empName: name,
            empSalary: salary,
            empCompany: company
        }

        axios.put(`http://localhost:5000/employee/${userId.abc}`, payload)
            .then((response) => {
                console.log(response.data);
                navigate("/user")
            })

            .catch(() => {
                console.log("error updating data:");
            })
    }
    useEffect(() => {
        axios.get(`http://localhost:5000/employee/${userId.abc}`)
            .then((response) => {
                setName(response.data.empName)
                setSalary(response.data.empSalary)
                setCompany(response.data.empCompany)
            })
            .catch(() => { console.log("Eroorrr"); })
    }, [userId])


    return (
        <div id={style.createUser}>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={getName} />
                <label htmlFor="">Company</label>
                <input type="text" value={company} onChange={getCompany} />
                <label htmlFor="">Salary</label>
                <input type="text" value={salary} onChange={getSalary} />
                <button onClick={formHandle}>Update</button>
            </form>
        </div>
    )
}
export default Edituser
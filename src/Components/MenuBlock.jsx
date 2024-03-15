import React from "react";
import style from "./findcoder.module.css"
import { Link } from "react-router-dom";

const MenuBlock = () => {
    return (
        <ul id={style.MenuBlock}>
            <li><Link to="/explore">Explore Work</Link></li>
            <li><Link to="/hire">Hire Talent</Link></li>
            <li><Link to="/dev">Dev board</Link></li>
            <li><Link to="/challenge">Challeges</Link></li>
        </ul>
    )
}
export default MenuBlock
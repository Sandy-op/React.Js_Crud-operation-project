import style from "./findcoder.module.css"
import LogoBlock from "./LogoBlock"
import MenuBlock from "./MenuBlock"
import Btn from "./Btn"

const Findcoder = () => {
    return (
        <section id={style.nav}>
            <article>
                <div className={style.Logo}><LogoBlock /></div>
                <div className={style.Menu}><MenuBlock /></div>
                <div className={style.Btn}><Btn /></div>
            </article>
        </section>
    )
}
export default Findcoder
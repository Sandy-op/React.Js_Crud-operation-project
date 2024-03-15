// import Findcoder from "./Components/Findcoder"
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Explore from "./Components/Explore"
// import Dev from "./Components/Dev"
// import Challenge from "./Components/Challenge"
// import Hire from "./Components/Hire"
import Home from "./CRUD/Home"
import Createuser from "./CRUD/Createuser"
import User from "./CRUD/User"
import Edituser from "./CRUD/Edituser"

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Home />
                <Routes>
                    <Route element={<Createuser />} path="/" />
                    <Route element={<User />} path="/user" />
                    <Route element={<Edituser />} path="/edit/:abc"></Route>
                </Routes>
            </BrowserRouter>

            {/* <BrowserRouter>
            <Findcoder/>
                
                    <Routes>
                        <Route element={<Explore/>} path="/explore"/>
                        <Route element={<Dev/>} path="/dev"/>
                        <Route element={<Challenge/>} path="/challenge"/>
                        <Route element={<Hire/>} path="/hire"/>
                    </Routes>
            </BrowserRouter> */}

        </div>
    )
}
export default App
import SignUp from "./SignUp";
import Login from './LogIn'
import Logout from './LogOut'
import PrivateText from "./PrivateText";
import { useState } from "react";
const User = ({ currUser, setCurrUser }) => {
    const [show, setShow] = useState(true)
    if (currUser)
        return (
            <div>
                Hello {currUser.email}
                <PrivateText currUser={currUser} />
                <Logout setCurrUser={setCurrUser} />
            </div>
        )
    return (
        <div>
            {show ?
                <Login setCurrUser={setCurrUser} setShow={setShow} />
                :
                <SignUp setCurrUser={setCurrUser} setShow={setShow} />
            }
        </div>
    )
}
export default User
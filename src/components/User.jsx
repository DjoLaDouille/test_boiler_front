import SignUp from "./SignUp";
import LogIn from './LogIn'
import LogOut from './LogOut'
import PrivateText from "./PrivateText";
import { useState } from "react";
const User = ({ currUser, setCurrUser }) => {
    const [show, setShow] = useState(true)
    if (currUser)
        return (
            <div>
                Hello {currUser.email}
                <PrivateText currUser={currUser} />
                <LogOut setCurrUser={setCurrUser} />
            </div>
        )
    return (
        <div>
            {show ?
                <LogIn setCurrUser={setCurrUser} setShow={setShow} />
                :
                <SignUp setCurrUser={setCurrUser} setShow={setShow} />
            }
        </div>
    )
}
export default User
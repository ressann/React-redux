import "./admin.css"
import {AiFillCaretDown} from 'react-icons/ai'
import Adminleftside from "../AdminDashboard/AdminLeftSide/Adminleftside"
import Adminrgihtside from '../AdminDashboard/AdminRightSide/Adminrightside'
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom"



const Admin = () => {
    const user = useSelector(state=>state.auth.user)
    const navigate = useNavigate()
  return (
    <div className="admin">
        <nav>
            <div className="logo">
                <h1>Admin Dashboard</h1>
            </div>
            <ul>
                <li>{user.info.email}</li>
                <li>
                    <img src={user.info.avatar} alt="" />
                </li>
                <li className="icons">
                    <AiFillCaretDown className="arr-icon"/>
                    <div className="setting">
                        <button>Logout</button>
                        <button onClick={()=>navigate('/admin/controller')}>Setting</button>
                    </div>
                </li>
            </ul>
        </nav>
        <div className="container">
            <Adminleftside/>
            <Adminrgihtside/>
        </div>
    </div>
  )
}

export default Admin
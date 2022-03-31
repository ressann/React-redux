import "./adminleftside.css"
import React from 'react'
import {FiUsers} from 'react-icons/fi'
import {RiAdminLine} from 'react-icons/ri'
import {AiOutlineHome} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Adminleftside = () => {
  return (
    <div className="adminleftside">
      <div className="dashboard">
        <h2>Dashboard</h2>
        <ul>
          <Link className="li" to={'/admin'}>
            <AiOutlineHome/>
            <span>Home</span>
          </Link>
          <Link className="li" to={'/admin/users'}>
            <FiUsers/>
            <span>User</span>
          </Link>
          <Link className="li" to={'/admin/controller'}>
            <RiAdminLine/>
            <span>Admin</span>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Adminleftside
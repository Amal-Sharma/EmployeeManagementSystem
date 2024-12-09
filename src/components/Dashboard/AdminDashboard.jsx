import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import AdminHeader from '../other/AdminHeader'

const AdminDashboard = (props) => {
  return (
        <div className='h-screen w-full p-10'>
            <AdminHeader changeUser={props.changeUser}/>
            <CreateTask />
            <AllTask />
        </div>

  )
}

export default AdminDashboard
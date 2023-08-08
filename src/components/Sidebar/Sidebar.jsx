import React from 'react'
import message from '../../assets/message.png'
const Sidebar = () => {
  return (
    <>
        <aside>
        <ul>
            <li><img src={message} alt="" />Home</li>
            <li><img src={message} alt="" />Users</li>
            <li><img src={message} alt="" />Products</li>
            <li><img src={message} alt="" />Orders</li>
            <li><img src={message} alt="" />Bulk Orders</li>
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
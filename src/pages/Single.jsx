import React from 'react'
import Delete from "../img/delete.jpg"
import Menu from "../components/Menu"

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https:images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https:images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>İpek</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <img src= {Delete} alt="" />
          </div>
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed corporis quos exercitationem odio adipisci mollitia odit nisi veniam sint! Quaerat accusantium officiis repellendus, inventore quasi ea aliquid esse perferendis quo!</p>

      </div>
      <Menu/>
    </div>
  )
}

export default Single
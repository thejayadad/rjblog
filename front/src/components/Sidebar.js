import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-item'>
            <span className='sidebar-title'>About Us</span>
            <img
            alt="pic3"
            src="https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <p>We are a place to share thoughts and Ideas with like minded people</p>
        </div>
        <div className='sidebar-item'>
        <span className='sidebar-title'>Categories</span>
        <ul className='sidebar-list'>
        <li className='sidebar-list-item'>Sports</li>
        <li className='sidebar-list-item'>Sports</li>
        <li className='sidebar-list-item'>Sports</li>
        <li className='sidebar-list-item'>Sports</li>
        </ul>
      </div>
      <div className='sidebar-item'>
      <span className='sidebar-title'>Follow Us</span>
      <div className='sidebar-social'>
      <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
      </div>

      </div>
        </div>
  )
}

export default Sidebar
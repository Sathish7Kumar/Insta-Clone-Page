import React from 'react'

function SwitchUser() {
  return (
    <>
    <div className='profile'>
        <div className='profile-left'>
            <div className='image'>
                <img src='https://www.whatsappimages.in/wp-content/uploads/2021/04/Sad-Whatsapp-Dp-Profile-Photo-HD-Download.jpg' alt='user-profile' height="56" width="56"/>
            </div>
            <div className='user-detais'>
                <p className='username'>User Name 1</p>
                <p className='surname'> <span style={{color:"grey"}}>user1</span></p>
            </div>
        </div>
        <div className='profile-right'>
            <button className='btn-switch'><p className='switch-user'>Switch</p></button>
        </div>
    </div>
    </>
  )
}

export default SwitchUser
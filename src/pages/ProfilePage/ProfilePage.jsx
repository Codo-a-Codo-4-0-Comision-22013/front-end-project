import React from 'react'
import Profile from '../../components/profile/Profile'

const ProfilePage = () => {
    const user = {
        name: 'Juan Ramirez',
        username: 'juanito',
        email: 'jramirez@gmail.com',
        photo: 'https://picsum.photos/200/300',
      }
  
    return (
      <>
        <Profile user={user}/>
      </>
    )
}

export default ProfilePage
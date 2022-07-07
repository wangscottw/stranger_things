import React, { useEffect, useState } from 'react'
import {getProfile} from '../api'

const Profile = (props) => {
    let token = '';
    const [myInfo, setMyInfo] = useState({})
    useEffect(() => {
        token = localStorage.getItem('token')
        async function getMyInfo(){
            const myReturnedInfo = await getProfile(token)
            setMyInfo(myReturnedInfo)
        }
        getMyInfo()
    }, [])
    return (
        <div className='box' key={myInfo._id}>
            <h3>{myInfo.username}</h3>
            <p><b></b></p>
            <p><b></b></p>

        </div>
    )
}

export default Profile
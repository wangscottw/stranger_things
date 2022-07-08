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
    console.log(myInfo.posts)

    const postMap = myInfo.posts.map((post, idx) => {
        return (<div></div>)
    })
    return (
        <div>
            {/* {myInfo.posts.map(({title, _id, messages}) => {
                return (
                <div key={_id} className='posts'>
                    <h2>{title}</h2>
                </div>
            )} )} */}
        </div>
    )
}

export default Profile
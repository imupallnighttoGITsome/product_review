import React from 'react';
import userAvatar from '../../public/user-avatar.png'

const UserInfo = () => {
    return (
        <div class="user">
            <img src={userAvatar}/>
            <h4>ina</h4>
        </div>
    )
}

export default UserInfo;
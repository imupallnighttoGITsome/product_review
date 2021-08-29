import React from 'react';
import userAvatar from '../../public/user-avatar.png'
import starFilled from '../../public/star-filled.png'
import starBlank from '../../public/star-blank.png'

const UserInfo = () => {
    return (
        <div class="user_container">
            <div class="user">
                <img class="user_photo" src={userAvatar}/>
                <p class="user_name">ina</p>
            </div>
            <div class="stars">
                <img class="star" src={starFilled}/>
                <img class="star" src={starFilled}/>
                <img class="star" src={starFilled}/>
                <img class="star" src={starBlank}/>
                <img class="star" src={starBlank}/>
            </div>
                <p>After a few days of experience, I found that the battery life is really great. The A13 process upgrade and <a href="">...</a></p>
        </div>
    )
}

export default UserInfo;
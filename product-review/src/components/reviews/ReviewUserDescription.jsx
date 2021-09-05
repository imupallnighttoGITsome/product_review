import React from 'react';
import userAvatar from '../../assets/user-avatar.png'
import starFilled from '../../assets/star-filled.png'
import starBlank from '../../assets/star-blank.png'

const UserInfo =(props) => {
    return (
        <div>
            <div className="container">
                <img className="user-photo" alt="user" src={userAvatar}/>
                <div className="stars">
                    <div className="user-name">ina</div>
                    <img className="star" alt="star" src={starFilled}/>
                    <img className="star" alt="star" src={starFilled}/>
                    <img className="star" alt="star" src={starFilled}/>
                    <img className="star" alt="star" src={starBlank}/>
                    <img className="star" alt="start" src={starBlank}/>
                </div>
            </div>
            <div className="container">
                <h3 className="review"><span>After a few days of experience, I found that the battery life is really great. The A13 process upgrade and<button onClick={props.onOpen} className='open'>...</button></span></h3>
            </div>
        </div>
  
    )
}

export default UserInfo;
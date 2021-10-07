import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
    dazzlynnnn: {
        name: '린',
        description: '리액트 공부 중'
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설의 주인공'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) { 
        return <div>존재하지 않는 사용자입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample/>
        </div>
    );
};

export default Profile;
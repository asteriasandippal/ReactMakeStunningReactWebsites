import React from 'react';

import userData from './../helps/user.json';

export default class ShowUser extends React.Component {
    render() {
        const isSmart = userData.smart ? "He is smart." : "He is not smart";
        return (
            <div>
                <h4>{userData.name}</h4>
                <p>He is at least {userData.age} yeras old. {isSmart}</p>
            </div>
        )
    }
}

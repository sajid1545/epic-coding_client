import React, { useContext } from 'react';
import { AuthContext } from './../../Contexts/UserContextProvider';

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default UserProfile;
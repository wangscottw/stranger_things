import React from 'react';
import Header from './Header'
import EditUserPosts from './EditUserPosts';
import DeleteUserPosts from './DeleteUserPosts';

const IndividualPost = () => {
    return (
        <>
            <EditUserPosts />
            <DeleteUserPosts />
        </>
    )
}

export default IndividualPost
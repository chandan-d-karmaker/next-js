import React from 'react';

const UserDetails = async ({ params }) => {
    const { userId } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    console.log(user);
    return (
        <div className="card bg-base-100 card-xl shadow-sm w-4/5 mx-auto mt-20">
            <div className="card-body">
                <h2 className="card-title">{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Call Now</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
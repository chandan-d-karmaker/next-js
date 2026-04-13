import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'All Users',
  description: 'All users data here',
}

const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return (
        <div className='w-4/5 mx-auto'>
            <h2>Users are coming...</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    users.map(user => <div key={user.id} className="card bg-base-100 card-sm shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="justify-end card-actions">
                                <Link href={`/users/${user.id}`} className="btn btn-primary">Show Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UserPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const format = (dateStr) => new Intl.DateTimeFormat('en-US').format(new Date(dateStr));

const Home = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || {});

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-[600px] bg-gray-100 p-12 rounded flex flex-col gap-5 items-start">
                <div className="flex gap-4 items-center">
                    <img src={user.profile_picture} className="w-[35px] h-[35px] object-cover rounded-full" />
                    <h1 className="text-4xl font-bold">Welcome back, {user.first_name}</h1>
                </div>
                <div className="flex flex-col text-xl">
                    <h3>{user.email}</h3>
                    <h3>{user.phone_number}</h3>
                    <h3>{format(user.date_of_birth)}</h3>
                </div>
                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Home;

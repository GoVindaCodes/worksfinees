import React from 'react';

const NotAdmin = () => {
    return (
        <div className="flex justify-center items-center h-screen "
        //  style={{
        //     backgroundImage: 'url(https://images.unsplash.com/photo-1699894013144-155c4d5ec299?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        //     backgroundRepeat: 'no-repeat'
        // }}
        >
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg " style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Access Denied
                    </h2>
                    <p className="text-gray-600 mb-4">
                        You are not authorized to access this page. Please contact your administrator for access.
                    </p>
                    <a
                        href="/"
                        className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-green-500 text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white hover:bg-green-600 h-12 mt-6 text-sm lg:text-base w-full sm:w-auto"
                    >
                        Back to Home
                    </a>
                </div>
            </div>
        </div >
    );
};

export default NotAdmin;

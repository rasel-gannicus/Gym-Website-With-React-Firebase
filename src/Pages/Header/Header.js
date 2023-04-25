import React from 'react';

const Header = () => {
    return (
        <div className="flex justify-between border-2 border-rose-600 mt-10 px-7 py-4 w-4/5 mx-auto rounded-md text-xl font-medium">
            <div className="">
                <h1>Fitness</h1>
            </div>
            <div className="">
                <a className="mr-4 hover:text-sky-600" href="">Home</a>
                <a className="mr-4 hover:text-sky-600" href="">About</a>
                <a className="mr-4 hover:text-sky-600" href="">Trainers</a>
                <a className="mr-4 hover:text-sky-600" href="">Blog</a>
                <a className="mr-4 hover:text-sky-600" href="">Contact</a>
            </div>
        </div>
    );
};

export default Header;
import React from "react";


function Button({ children, onClick }) {


    return (

        <button onClick={onClick} className="bg-blue-500 hover:gb-blue-700 text-white font-bold py-2 px-4 rounded">
            {children}
        </button>
    );
}


export default Button;
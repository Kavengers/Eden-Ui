import React from "react";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode
}
export const Button = (props: ButtonProps) => {
    return (
        <div className="button-wrapper">
            <button 
              className="button" 
              onClick={props.onClick}
            >
            {props.children}
            </button>
        </div>
    );
}
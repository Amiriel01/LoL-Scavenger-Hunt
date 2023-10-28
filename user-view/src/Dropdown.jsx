import React from "react";

export default function Dropdown({ onSelect }) {
    return (
        <div className="dropdown">
            <ul>
                <li onClick={() => onSelect("Amumu")}>Amumu</li>
                <li onClick={() => onSelect("Lulu")}>Lulu</li>
                <li onClick={() => onSelect("Fizz")}>Fizz</li>
                <li onClick={() => onSelect("Rammus")}>Rammus</li>
            </ul>
        </div>
    )
}
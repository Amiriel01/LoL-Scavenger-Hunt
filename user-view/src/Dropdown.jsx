import React from "react";
import { useState } from "react";

export default function Dropdown({ onSelect }) {

    return (
        <div className="dropdown">
            <ul>
                <li onClick={(e) => {
                    onSelect(e, "Amumu")
                    }}>Amumu</li>
                <li onClick={(e) => {
                    onSelect(e, "Lulu")
                    }}>Lulu</li>
                <li onClick={(e) => {
                    onSelect(e, "Fizz")
                    }}>Fizz</li>
                <li onClick={(e) => {
                    onSelect(e, "Rammus")
                    }}>Rammus</li>
            </ul>
        </div>
    )
}
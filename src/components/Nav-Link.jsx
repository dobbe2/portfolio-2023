import React from "react";

export default function NavLink ({ href, label }) {
    return (
        <a href={ href } className="text-base font-medium text-mercury transition hover:text-viking hover:ease-in-out">
            { label }
        </a>
    )
}
import React from "react";

const Year = new Date().getFullYear();
const Footer = () => {
    return (
        <>
            <footer className="text-center bg-white mx-1 margon ">
                <p>Created by<strong> Muhammad Jawad✔</strong>|All Right reserved {Year}.</p>
            </footer>
        </>
    )
}
export default Footer;
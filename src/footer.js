import React from 'react';
import './footer.css';

export default function footer() {
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });
    return (
        <>
            <section id='footer'>
                <p>© Shubham Giri | Mumbai,India</p>
                <p id='last-update'>Last updated: {formattedDate}</p>
            </section>
        </>
    );
}
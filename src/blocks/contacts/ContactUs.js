import React from 'react';

const ContactsUs = () => {
    return (
        <section id="contact-us" className="block">
            <div className="block spacer p-top-xl">
                <div className="wrapper text-center">
                    <div className="title">
                        <h2 style={{ fontFamily: "Encode" }}>Inquires</h2>
                    </div>

                    <a href={process.env.PUBLIC_URL + "/contacts"} className="btn btn-outline-secondary" style={{ fontFamily: "Encode" }}>Contact</a>
                </div>
                <br></br>
            </div>
        </section>
    );
};

export default ContactsUs;

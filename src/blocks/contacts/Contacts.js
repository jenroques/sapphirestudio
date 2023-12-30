import React from 'react';

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts-items">
                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <p style={{ fontFamily: 'Encode' }}>
                            <a href="mailto:company@domain.com">sheanahelton@gmail.com</a>
                        </p>
                    </div>

                    <div className="contacts-item-title">
                        <h6 style={{ fontFamily: 'Encode' }} >Email</h6>
                    </div>
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <p style={{ fontFamily: 'Encode' }} >311720 Baptist Church Rd
                            St. Louis, MO 63128
                            United States</p>
                    </div>

                    <div className="contacts-item-title">
                        <h6 style={{ fontFamily: 'Encode' }}>Address</h6>
                    </div>
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <p style={{ fontFamily: 'Encode' }} >
                            <a href="tel:3142870271">(314) 287-0271</a>
                        </p>
                    </div>

                    <div className="contacts-item-title">
                        <h6 style={{ fontFamily: 'Encode' }} >Phone</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;

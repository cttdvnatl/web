import React from 'react'
import data from '../../data-source/contacts';
import './styles.css';
import PropTypes from 'prop-types';

const Contact = ({title, phone, ext}) => (
    <div className="contact-row">
        <div className="title">{title}</div>
        <div className="contact-description">{`Phone: ${phone}`}</div>
        <div className="contact-description">{`Ext. ${ext}`}</div>
    </div>
)

const ContactInfo = () => {
    return (
        <div className="card-container has-padding">
            {
                data.map(({ name, title, officePhoneNumber, officePhoneNumberExtension }) =>
                    <Contact
                        key={name}
                        title={title}
                        phone={officePhoneNumber}
                        ext={officePhoneNumberExtension}
                    />
                )
            }
        </div>
    )
}

Contact.propTypes = {
    title: PropTypes.string,
    phone: PropTypes.string,
    ext: PropTypes.string,
};

export default ContactInfo;
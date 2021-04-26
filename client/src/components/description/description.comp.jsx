import React from 'react'
import Notification from '../notification/notification.comp';
import './description.styles.scss';


const Description = ({ src, alt, message, visible, level }) => {
    return (
        <div className="description">

            <p>I publish a newsletter once a month with behind the scenes info,
                updates and details of special offers and new releases.
                If you would be happy to hear from me please pop your email
                address in the box
            </p>
            <Notification src={src} alt={alt} message={message} visible={visible} level={level} />
        </div>
    )
}

export default Description

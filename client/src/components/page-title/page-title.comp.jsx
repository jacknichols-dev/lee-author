import React from 'react';
import './page-title.styles.scss';

const PageTitle = (props) => {
    return (
        <div className="page-title">
            <h2>{props.children}</h2>
        </div>
    )
}

export default PageTitle;

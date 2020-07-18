import React from 'react';
import IndexCss from '../styles/index.css';
import PageTitleCss from '../styles/pagetitle.css';

function PageTitle({ maintitle, subtitle }) {
    return (
        <>
        <div className='mainTitle'>
            <h2>{maintitle}</h2>
            <h3 className="subTitle">{subtitle}</h3>
        </div>
        <PageTitleCss />
        <IndexCss />
        </>
    )
}

export default PageTitle;

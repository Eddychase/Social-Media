import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets_article'>

            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )



    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>
                    LinkedIn News
                </h2>
                <InfoIcon />
            </div>
            {newsArticle('Eddy Chase is Back', 'Breaking news - 900 readers')}
            {newsArticle('Brian Ryan is Back', 'Breaking news - 1200 readers')}
            {newsArticle('Meta is the Future', 'Breaking news - 2500 readers')}
            {newsArticle('CryptoCurrency and Success', 'Breaking news - 2500 readers')}
            {newsArticle('Future of Web Development', 'Breaking news - 2500 readers')}
            {newsArticle('Skype-Fumble of the Decade', 'Breaking news - 2500 readers')}
        </div>

    )
}

export default Widgets;

import React from 'react';
import './Styles/Card.css'; // Import custom CSS for styling

const cardData = [
    {
        id: 1,
        title: 'Phenospex',
        text: 'Products for plant phenotyping',
        imgSrc: require('./Images/pheno.jpg'),
        link: 'https://www.phenospex.com/'
    },
    {
        id: 2,
        title: 'Grant Instruments',
        text: 'Scientific Laboratory Equipment & Data Acquisition Solutions',
        imgSrc: require('./Images/grant_instruments_2.png'),
        link: 'https://www.grantinstruments.com/'
    }
];

const Card = ({ title, text, imgSrc, link }) => {
    return (
        <div className="card my-3">
            <img src={imgSrc} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={link} className="btn btn-primary">visit site</a>
            </div>
        </div>
    );
};

const CardList = () => {
    return (
        <div className="card-container">
            {cardData.map(({ id, title, text, imgSrc, link }) => (
                <Card 
                    key={id}
                    title={title}
                    text={text}
                    imgSrc={imgSrc}
                    link={link}
                />
            ))}
        </div>
    );
};

export default CardList;

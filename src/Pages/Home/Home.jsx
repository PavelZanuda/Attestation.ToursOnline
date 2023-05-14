import React, {
    useEffect,
    useState
} from 'react';
import './Home.css';
import {
    Card
} from '../../Components/Card/Card';
import axios from 'axios';

import Spinner from 'react-bootstrap/Spinner';

export const Home = () => {
    const [cards, setCards] = useState([]);
    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
        getCards();
    }, []);

    const getCards = async () => {
        try {
            const response = await axios.get(
                'https://645f7bf39d35038e2d24068d.mockapi.io/goods'
            );
            setCards(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const nextSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide === 4 ? 1 : prevSlide + 1));
    };

    const prevSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide === 1 ? 4 : prevSlide - 1));
    };

    return ( <
        div className = 'wrapper' >
        <
        div className = 'container' >
        <
        div className = 'slider' >
        <
        div className = {
            `hero slide-${activeSlide}`
        } > < /div> <
        button className = 'prev-btn'
        onClick = {
            prevSlide
        } > < /button> <
        button className = 'next-btn'
        onClick = {
            nextSlide
        } > < /button> <
        /div>


        {
            cards.length === 0 ? ( <
                div className = 'spinner' >
                <
                Spinner animation = 'border'
                size = 'lg'
                variant = 'warning' / >
                <
                /div>
            ) : ( <
                div className = 'cards_wrapper' > {
                    cards.map((item) => {
                        return <Card {
                            ...item
                        }
                        key = {
                            item.id
                        }
                        />;
                    })
                } <
                /div>
            )
        } <
        /div> <
        /div>
    );
};
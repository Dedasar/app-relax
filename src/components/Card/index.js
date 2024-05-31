import React from 'react';
import styles from "./Card.module.css";
import { Link } from 'react-router-dom';
import iconFavorite from "./favorite.png"
import iconUnFavorite from "./unfavorite.png"
import { useFavoriteContext } from '../../contexts/favorites';

function Card({ id, cover }) {
    const {favorite, addFavorite} = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icon = !isFavorite ? iconFavorite : iconUnFavorite
    
    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`}> 
                <img src={cover} 
                alt="Capa" className={styles.capa}/>              
            </Link>  
            <figure className={styles.icons}>
                <img
                 src={icon} alt="icone"
                 onClick={()=>addFavorite({id})}
                 />
            </figure>    
        </section>
    );
}

export default Card;

import styles from "./Category.module.css";
import videos from "../../json/videos.json"
export const categories = [
  "Meditação",
  "AutoAjuda",
  "Respiração",
  "Paz",
  "Ambiente",
  "Reflexão",
  "Positividade",
  "Relaxamento",
  "Interioridade",
  "Espiritualidade",
  "Noite",
  ];
  
 export function filterCategory(category) {
    return videos.filter(video => video.category === category);
     
  }

  function Category({category,children}){
    return (
    <section className={styles.category}>
        <h2>{category}</h2>
        <div>
            {children}
        </div>
    </section>
    );
}

export default Category;

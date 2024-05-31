import styles from "./PageNotFound.module.css";
import Error404 from './Error404.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function PageNotFound() {
    return(
        <>
        <Header />
        <section className={styles.container}>
            <h2>Oops! Conteúdo não localizado!</h2>
            <img src={Error404} alt="Imagem de página não localizada"/>
        </section>
        <Footer/>
        </>
    );
}

export default PageNotFound;

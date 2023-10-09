import Card from '../card/Card';
import styles from './Section_04.module.scss';

export default function Section_04() {

    return (
        <section className={styles.section_04}>
            <Card src='/pack.png' alt='img produtos' h1='Produtos' h2='Criação de diversos conteúdos para a sua empresa.' />
            <Card src='/suit.png' alt='img produtos' h1='Online' h2='Sua marca online para todas as pessoas.' />
            <Card src='/clock.png' alt='img produtos' h1='Tempo de qualidade' h2='Tempo otimizado e maior qualidade presente em seus produtos.' />
            <Card src='/ilimited.png' alt='img produtos' h1='Suporte' h2='Suporte total para a sua empresa sempre.' />
        </section>
    );
}
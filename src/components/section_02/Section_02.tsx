import ImageBK from '../imageBK/ImageBK';
import styles from './Section_02.module.scss';

export default function Section_02() {
    return (
        <section className={styles.section_02}>
            <ImageBK src='/bg2.png' alt='Img bk' />
            <div className={styles.divRight}>
                <div className={styles.divTitle}>
                    <h2>O poder das Landing Pages nas empresas: Eficiência e Além!</h2>
                </div>
                <div className={styles.divLine}><div className={styles.line} /></div>
                <div className={styles.divText}>
                    <h3>A era atual de negócios demanda abordagens inovadoras para atender às crescentes necessidades de produtividade e eficiência. As landing pages, ou páginas de destino, desempenham um papel crucial nesse cenário em constante evolução.</h3>
                </div>
            </div>
        </section>
    );
}
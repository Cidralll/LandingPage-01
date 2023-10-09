import styles from './Section_01.module.scss';
import ButtonOrange from '../buttonOrange/ButtonOrange';
import ImageBK from '../imageBK/ImageBK';

export default function Section_01() {

    return (
        <section className={styles.section_01}>
            <div className={styles.divLeft}>
                <div className={styles.divTitle}>
                    <h2>Criamos e gerenciamos suas landing pages</h2>
                </div>
                <ButtonOrange text='Entre em contato' url='https://web.whatsapp.com/' />
            </div>
            <ImageBK src='/bg.png' alt='Img bk' />
        </section>
    );
}
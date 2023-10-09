import ButtonOrange from '../buttonOrange/ButtonOrange';
import ImageBK from '../imageBK/ImageBK';
import styles from './Section_05.module.scss'; 

export default function Section_05() {

    return (
        <section className={styles.section_05}>
            <ImageBK src='/bg3.png' alt='bg3' />
            <div  className={styles.divRight}>
                <h1 className={styles.h1}>Entre em contato</h1>
                <ButtonOrange text='WhatsApp' url='https://web.whatsapp.com/'/>
                <div className={styles.div}/>
                <ButtonOrange text='Facebook' url='https://facebook.com/' />
                <div className={styles.div}/>
                <ButtonOrange text='Instagram' url='https://instagram.com' />
            </div>
        </section>
    );
}
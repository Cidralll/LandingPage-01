import styles from './Card.module.scss';
import Image from 'next/image';

interface Props {
    src: string,
    alt: string,
    h1: string,
    h2: string
}

export default function Card({ src, alt, h1, h2 }: Props) {

    return (
        <div className={styles.card}>
            <Image 
                src={src}
                width={100}
                height={100}
                alt={alt}
                priority
                style={{ marginTop: '1rem'}}
            />
            <h1 className={styles.h1}>{ h1 }</h1>
            <div className={styles.divOrange} />
            <h2 className={styles.h2}>{ h2 }</h2>
        </div>
    );
}
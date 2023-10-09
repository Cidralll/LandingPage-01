import styles from './ButtonOrange.module.scss';
import Link from 'next/link'

interface Props {
    text: string;
    url: string;
}

export default function ButtonOrange({text, url}: Props) {

    return (
        <button className={styles.button}>
            <Link style={{textDecoration: 'none', color: 'white'}} href={url}>{ text }</Link>
        </button>
    );
}
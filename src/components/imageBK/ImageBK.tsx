import Image from 'next/image';
import styles from './ImageBK.module.scss';

interface Props {
    src: string,
    alt: string
}

export default function ImageBK({ src, alt }: Props) {
    return (
        <div className={styles.divImg}>
            <Image 
                src={src}
                width={560}
                height={360}
                alt={alt}
                priority
            />
        </div>
    );
}
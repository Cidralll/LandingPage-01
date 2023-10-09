import styles from './Header.module.scss';

export default function Header() {

    return (
        <header className={styles.header}>
            <section className={styles.sectionTitle}>
                <div className={styles.divTitle}>
                    <h1>LCPage</h1>
                </div>
            </section>
            <section className={styles.sectionLinks}>
                <h2>Quem somos nós</h2>
                <h2>Vantagens da LC-Page</h2>
                <h2>Contatos</h2>
            </section>
        </header>
    );
}
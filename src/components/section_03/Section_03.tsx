import ButtonOrange from '../buttonOrange/ButtonOrange';
import styles from './Section_03.module.scss';

export default function Section_03() {

    return (
        <section className={styles.section_03}>
            <h1 className={styles.h1}>O que são Landing Pages?</h1>
            <div className={styles.divOrange} />
            <div className={styles.divH2}>
                <h2>Landing pages, ou páginas de destino, são elementos cruciais no marketing digital. Elas são páginas web criadas especificamente para direcionar visitantes a uma ação desejada, como preencher um formulário, fazer uma compra ou se inscrever em uma newsletter. São projetadas com foco na conversão, com conteúdo relevante e call-to-action claro. As landing pages capturam informações valiosas do visitante e ajudam as empresas a impulsionar suas estratégias de geração de leads e vendas. Portanto, são uma ferramenta essencial para o sucesso online.</h2>
            </div>
            <ButtonOrange text='Faça o seu orçamento' url='https://web.whatsapp.com/' />
        </section>
    );
}
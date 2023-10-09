import styles from './page.module.scss'
import Header from '@/components/header/Header'
import Section_01 from '@/components/section_01/Section_01'
import Section_02 from '@/components/section_02/Section_02'
import Section_03 from '@/components/section_03/Section_03'
import Section_04 from '@/components/section_04/Section_04'
import Section_05 from '@/components/section_05/Section_05'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Section_01 />
      <Section_02 />
      <Section_03 />
      <Section_04 />
      <Section_05 />
    </main>
  )
}

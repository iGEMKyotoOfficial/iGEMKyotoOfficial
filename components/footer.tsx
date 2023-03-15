import Container from 'components/container'
import Logo from 'components/logo'
import styles from 'src/styles/footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return (
        <footer className={styles.wrapper}>
            < Container children={undefined} large={undefined} >
                <div className={styles.flexContainer}>
                    <Link href="/blog" legacyBehavior>
                        <a className="home">iGEM Kyoto</a>
                    </Link>
                    [ソーシャル]
                </div>
            </Container>
        </footer>
    )
}
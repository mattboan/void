import styles from "@/styles/connect.comp.module.scss"
import { Section } from "./Section"
import { Container } from "./Container"
import Link from "next/link"
import Image from "next/image"


// This component is for connecting with me, simple section with all of my socials
export const Connect = () => (
    <Section id="about-me">
        <Container>
            <h1>Let's Connect</h1>
            <p>Find me on all the usual places</p>
            <div className={styles.socails}>
                <Link href="https://www.instagram.com/voidstudios.com.au/" className={styles.socail}>
                    <Image src="/icons/insta.png" width={50} height={50} alt="Instagram" />
                </Link>
                <Link href="https://au.linkedin.com/in/matt-boan-656561129/" className={styles.socail}>
                    <Image src="/icons/linkedin.png" width={50} height={50} alt="LinkedIn" />
                </Link>
                <Link href="https://www.facebook.com/voidstudios.com.au/" className={styles.socail}>
                    <Image src="/icons/fb.png" width={50} height={50} alt="Facebook" />
                </Link>
                <Link href="mailto:matt@voidstudios.com.au" className={styles.socail_email}>
                    <Image src="/icons/mail.png" width={50} height={50} alt="Email" />
                </Link>
            </div>
        </Container >
    </Section >
)
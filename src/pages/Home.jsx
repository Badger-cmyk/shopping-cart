import { Link } from "react-router-dom";
import styles from "./Home.module.css"

export default function Home(){
    return(
        <main className={styles.page}>
            <h1 className={styles.title}>Home</h1>
            <p className={styles.text}>
                Browse our products and add your favourites to the cart
            </p>
            <Link to="/shop" className={styles.cta}>
                Start Shopping
            </Link>
        </main>
    )
}
import Typography from "../Typography/Typography";
import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
    return (
        <header className={styles.container}>
            <Typography size='20'>SOME NAME</Typography>

            
            <Navigation />
        </header>
    )

}

export default Header;
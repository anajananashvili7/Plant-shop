'use client'
import styles from "./page.module.css"

const Login = () => {



    return (
        <div id="id01" className={styles.modal}>
            <form className="modal-content animate" action="/action_page.php" method="post">
                <div className={styles.imgContainer}>
                    <span onClick={() => document.getElementById('id01')!.style.display = 'none'} className={styles.close} title="Close Modal">&times;</span>
                    <img src="/img_avatar2.png" alt="Avatar" className={styles.avatar} />
                </div>

                <div className={styles.container}>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked name="remember" /> Remember me
                    </label>
                </div>

                <div className={styles.container} style={{ backgroundColor: '#f1f1f1' }}>
                    <button type="button" onClick={() => document.getElementById('id01')!.style.display = 'none'} className={styles.cancelbtn}>Cancel</button>
                    <span className={styles.psw}>Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    )
}

export default Login;
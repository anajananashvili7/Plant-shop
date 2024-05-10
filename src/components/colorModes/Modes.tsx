import React, { useState } from "react";
import styles from "./page.module.css"


export default function Modal() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModal2 = () => {
    setModal2(!modal2);
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  if (modal2) {
    document.body.classList.add('active-modal2')
  } else {
    document.body.classList.remove('active-modal2')
  }


  return (
    <>

      {modal2 && (
        <div id="id01" className={styles.modal2}>
          <form className={styles.modalContent2} action="/action_page.php" method="post">
            <div className={styles.imgContainer}>
              <span onClick={() => document.getElementById('id01')!.style.display = 'none'} className={styles.close} title="Close Modal">&times;</span>
              <img src="/img_avatar2.png" alt="Avatar" className={styles.avatar} />
            </div>

            <div className={styles.container2}>
              <label htmlFor="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

              <button type="submit">Login</button>

            </div>

            <label>
              <input type="checkbox" /> Remember me
            </label>

            <div className={styles.container} style={{ backgroundColor: '#f1f1f1' }}>
              <button type="button" onClick={() => document.getElementById('id01')!.style.display = 'none'} className={styles.cancelbtn}>Cancel</button>
              <span className={styles.psw}>Forgot <a href="#">password?</a></span>
            </div>
          </form>
        </div>
      )}




      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modalContent}>
            <div className={styles.container}>
              <br />
              <br />
              <label htmlFor="email"><b>Email</b></label>
              <input className={styles.inputStyle} type="text" placeholder="Enter Email" name="email" id="email" required />
              <br />

              <label htmlFor="psw"><b>Password</b></label>
              <input className={styles.inputStyle} type="password" placeholder="Enter Password" name="psw" id="psw" required />
              <br />

              <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
              <input className={styles.inputStyle} type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
              <br />

              <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
              <br />
              <button type="submit" className={styles.registerbtn}>Register</button>
              <div className={styles.containerSignin}>
                <p>Already have an account? <a href="#">Sign in</a>.</p>
              </div>
            </div>
            <button className={styles.closeModal} onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}

      <div className={styles.firstSection}>
        <img src="/plant.png" alt="plantImage" />
        <div>
          <div className={styles.text}>
            <h1>HOME IS WHERE
              YOUR PLANTS ARE.</h1>
            <p>Green plants provide a substantial proportion of the world's molecular oxygen, and are the basis of most
              of Earth's ecosystems.</p>
          </div>
          <div className={styles.buttonsFirst}>
            <button onClick={toggleModal} className={styles.btnModal}>
              Register now
            </button>
            <button onClick={toggleModal2} className={styles.btnModal}>
              Log In
            </button>
          </div>
        </div>
      </div>



    </>
  );
}

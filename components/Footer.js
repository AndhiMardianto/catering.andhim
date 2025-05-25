import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} IC Catering Pekanbaru.. All rights reserved. Created by <a href="https://andhim.net">Andhim</a></p>
    </footer>
  );
}

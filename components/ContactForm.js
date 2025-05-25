import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
  return (
    <section className={styles.contact}>
      <h2>Pemesanan Cepat</h2>
      <a href="https://wa.me/6282385229947" className={styles.button}>Chat via WhatsApp</a>
    </section>
  );
}

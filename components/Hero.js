import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>IC Catering Pekanbaru</h1>
        <p className={styles.subtitle}>Lezat, Halal, dan Terjangkau – Mulai Rp 23.000/porsi!</p>
        <a href="https://wa.me/6282385229947" className={styles.cta}>Pesan Sekarang</a>
      </div>
    </section>
  );
}

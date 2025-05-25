import styles from '../styles/Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>Testimoni Pelanggan</h2>
      <blockquote>
        “Catering yang pernah saya coba di acara kantor!”
        <footer>— Bu Puspa BPSDM Kota Pekanbaru</footer>
      </blockquote>
    </section>
  );
}

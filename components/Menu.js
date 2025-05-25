import styles from '../styles/Menu.module.css';

export default function Menu() {
  return (
    <section className={styles.menu}>
      <h2>Menu Unggulan</h2>
      <div className={styles.grid}>
        <div className={styles.item}>
          <h3>Nasi Kotak Rendang, dendeng, ayam dan lain lain </h3>
          <p>Mulai dari Rp 23.000</p>
        </div>
        <div className={styles.item}>
          <h3>Paket Prasmanan</h3>
          <p>Mulai dari Rp 23.000/pax</p>
        </div>
        <div className={styles.item}>
          <h3>Snack Box</h3>
          <p>Mulai dari Rp 5.000/box</p>
          <p>Semua Menu diatas dapat di custom sesuai permintaan  anda.</p>
        </div>
      </div>
    </section>
  );
}

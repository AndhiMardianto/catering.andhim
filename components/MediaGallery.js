import styles from '../styles/MediaGallery.module.css';

const MediaGallery = () => {
  return (
    <section className={styles.gallery}>
  <h2 className={styles.heading}>Galeri IC Catering</h2>

  {/* Grid gambar */}
  <div className={styles.grid}>
    <div className={styles.item}><img src="/images/food1.jpg" alt="Menu 1" /></div>
    <div className={styles.item}><img src="/images/food2.jpg" alt="Menu 2" /></div>
    <div className={styles.item}><img src="/images/food3.jpg" alt="Menu 3" /></div>
    <div className={styles.item}><img src="/images/food4.jpg" alt="Menu 4" /></div>
  </div>
</section>

  );
};

export default MediaGallery;

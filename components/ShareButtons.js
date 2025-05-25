"use client";
import styles from '../styles/ShareButtons.module.css';
import { useState } from 'react';

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareToWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(pageUrl)}`;
    window.open(url, "_blank");
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    window.open(url, "_blank");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Gagal menyalin link:', err);
    }
  };

  return (
    <div className={styles.shareContainer}>
      <button onClick={shareToWhatsApp} className={styles.shareButton + ' ' + styles.whatsapp}>
        📱 WhatsApp
      </button>
      <button onClick={shareToFacebook} className={styles.shareButton + ' ' + styles.facebook}>
        📘 Facebook
      </button>
      <button onClick={copyToClipboard} className={styles.shareButton + ' ' + styles.copy}>
        📋 {copied ? "Link Disalin!" : "Salin Link"}
      </button>
    </div>
  );
}

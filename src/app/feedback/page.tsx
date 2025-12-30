"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./feedback.module.css";

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email Validation (only if provided)
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Please enter a valid email address (e.g., you@example.com)");
        return;
      }
    }
    
    // Clear error if valid or empty
    setEmailError("");

    // Simulate submission
    console.log({ rating, email }); 
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          {submitted ? (
            <div className={styles.successMessage}>
              <h3>Thank You! 🙏</h3>
              <p style={{ marginTop: "0.5rem", fontWeight: "normal" }}>
                Your feedback helps us build the perfect Indian finance app.
              </p>
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
                <Link href="/" className={styles.backLink} style={{ marginTop: 0, color: "var(--primary)" }}>
                  Home
                </Link>
                <Link href="/dashboard" className={styles.backLink} style={{ marginTop: 0, color: "var(--secondary)", fontWeight: "bold" }}>
                  Try Demo Again
                </Link>
              </div>
            </div>
          ) : (
            <>
              <h1 className={styles.title}>Rate Your Experience</h1>
              <p className={styles.subtitle}>
                Help us improve Dhan-Raashi for users like you.
              </p>
              
              <form onSubmit={handleSubmit} className={styles.form}>
                
                <div className={styles.inputGroup}>
                  <label className={styles.label}>How would you rate the experience?</label>
                  <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.25rem" }}>
                    {["😡", "😕", "😐", "🙂", "😍"].map((emoji, i) => (
                      <button key={i} type="button" className={`${styles.emojiBtn} ${rating === i + 1 ? styles.emojiBtnSelected : ''}`}
                      onClick={() => {setRating(i + 1)}}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>Your Email (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="name@example.com"
                    className={styles.input}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError(""); // Clear error on type
                    }}
                    style={emailError ? { borderColor: 'var(--error)' } : {}}
                  />
                  {emailError && <span className={styles.errorMessage}>{emailError}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="missing" className={styles.label}>What feature did you miss the most?</label>
                  <textarea 
                    id="missing" 
                    placeholder="e.g., Scan QR code, Bank Sync..." 
                    className={styles.textarea}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Would you pay ₹99/month for the full version?</label>
                  <select className={styles.select}>
                    <option>Yes, absolutely!</option>
                    <option>Maybe, if it saves me money.</option>
                    <option>No, I prefer free apps.</option>
                  </select>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Submit Feedback
                </button>
              </form>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
                  <Link href="/" className={styles.backLink} style={{marginTop: 0}}>
                    ← Home
                  </Link>
                  <Link href="/dashboard" className={styles.backLink} style={{marginTop: 0, color: "var(--secondary)"}}>
                    Back to Demo →
                  </Link>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

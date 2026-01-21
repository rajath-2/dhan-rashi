"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./checkout.module.css";

const COUPONS: { [key: string]: number } = {
  "SAVE20": 20,
  "WELCOME50": 50,
  "DHANPRO": 15
};

export default function CheckoutPage() {
  const [method, setMethod] = useState("upi");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  // Coupon State
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{code: string, percent: number} | null>(null);
  const [couponError, setCouponError] = useState("");

  const BASE_PRICE = 99;
  
  const handleApplyCoupon = () => {
    setCouponError("");
    const code = coupon.toUpperCase().trim();
    
    if (!code) return;
    
    if (COUPONS[code]) {
      setAppliedCoupon({ code: code, percent: COUPONS[code] });
      setCoupon(""); // clear input on success/applied
    } else {
      setCouponError("Invalid coupon code");
      setAppliedCoupon(null);
    }
  };

  const calculateTotals = () => {
    const discountAmount = appliedCoupon ? (BASE_PRICE * appliedCoupon.percent) / 100 : 0;
    const subTotal = BASE_PRICE - discountAmount;
    const gst = subTotal * 0.18;
    const total = subTotal + gst;
    
    return {
      discountAmount,
      subTotal,
      gst,
      total
    };
  };

  const { discountAmount, subTotal, gst, total } = calculateTotals();

  const handlePayment = () => {
    setProcessing(true);
    // Simulate Gateway Delay
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2000);
  };
  
  if (success) {
    return (
      <div className={styles.container}>
        <div className={styles.checkoutCard}>
          <div className={styles.successState}>
            <div className={styles.checkCircle}>✓</div>
            <h2 className={styles.title} style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Payment Successful!
            </h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
              Welcome to <strong>Dhan-Raashi Pro</strong>. Your subscription is active.
            </p>
            <Link href="/dashboard" className={styles.payButton} style={{ textDecoration: "none" }}>
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.checkoutCard}>
        
        {/* Header */}
        <div className={styles.header}>
          <div>
            <div className={styles.title}>Dhan-Raashi Pro</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Monthly Subscription</div>
          </div>
          <div className={styles.amount}>₹{total}</div>
        </div>

        {/* Body */}
        <div className={styles.body}>
          
          {/* Coupon Section */}
          <div className={styles.couponSection}>
             <label style={{fontSize: '0.85rem', fontWeight: 600}}>Have a Coupon?</label>
             <div className={styles.couponInputGroup}>
               <input 
                 type="text" 
                 className={styles.couponInput} 
                 placeholder="Enter Code"
                 value={coupon}
                 onChange={(e) => setCoupon(e.target.value)}
               />
               <button className={styles.applyBtn} onClick={handleApplyCoupon}>Apply</button>
             </div>
             {couponError && (
               <div className={`${styles.couponMessage} ${styles.couponError}`}>
                 ⚠️ {couponError}
               </div>
             )}
             {appliedCoupon && (
                <div className={`${styles.couponMessage} ${styles.couponSuccess}`}>
                  ✅ Code <strong>{appliedCoupon.code}</strong> applied! ({appliedCoupon.percent}% Off)
                </div>
             )}
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₹{BASE_PRICE}</span>
            </div>
            
            {appliedCoupon && (
              <div className={`${styles.summaryRow} ${styles.discountRow}`}>
                <span>Discount ({appliedCoupon.percent}%)</span>
                <span>-₹{discountAmount}</span>
              </div>
            )}

            <div className={styles.summaryRow}>
              <span>GST (18%)</span>
              <span>₹{gst}</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total to Pay</span>
              <span>₹{total}</span>
            </div>
          </div>

          <div style={{ marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>Select Payment Method</div>
          <div className={styles.paymentMethods}>
            <div 
              className={`${styles.method} ${method === 'upi' ? styles.selected : ''}`}
              onClick={() => setMethod('upi')}
            >
              <span className={styles.methodIcon}>📱</span>
              <span className={styles.methodName}>UPI / QR</span>
            </div>
            
            <div 
              className={`${styles.method} ${method === 'card' ? styles.selected : ''}`}
              onClick={() => setMethod('card')}
            >
              <span className={styles.methodIcon}>💳</span>
              <span className={styles.methodName}>Credit / Debit Card</span>
            </div>
            
            <div 
              className={`${styles.method} ${method === 'netbanking' ? styles.selected : ''}`}
              onClick={() => setMethod('netbanking')}
            >
              <span className={styles.methodIcon}>🏦</span>
              <span className={styles.methodName}>Netbanking</span>
            </div>
          </div>

          <button 
            className={styles.payButton} 
            onClick={handlePayment} 
            disabled={processing}
          >
            {processing ? "Processing..." : `Pay ₹${total.toFixed(2)}`}
          </button>

        </div>

        {/* Processing Loader Overlay */}
        {processing && (
          <div className={styles.processingOverlay}>
            <div className={styles.spinner}></div>
            <div style={{ fontWeight: "600", color: "var(--text-muted)" }}>
              Contacting Bank...
            </div>
            <div style={{ fontSize: "0.8rem", color: "#999", marginTop: "0.5rem" }}>
              Do not close this window
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

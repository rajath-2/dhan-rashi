import Link from "next/link";
import styles from "./page.module.css";
import pricingStyles from "./pricing.module.css";
import featureStyles from "./features.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navbar moved to layout */}

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Dhan-Raashi
          </h1>
          <h2  className={styles.h2Title }>
            Paisa bachega,<br />toh life banega.
          </h2>
          <p className={styles.heroSubtitle}>
            Expert financial control for the Indian wallet. Track cash & UPI, plan for festivals, and build your Musibat Fund.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/dashboard" className={styles.ctaButton}>
               Try Live Demo 
            </Link>
            <Link href="/feedback" className={styles.ctaButton} style={{ background: 'white', color: 'var(--primary)', border: '1px solid var(--primary)' }}>
               Feedback
            </Link>
          </div>
        </section>

        {/* Localized Features Grid */}
        <section className={styles.features}>
          
          {/* Feature 1: UPI & Chat Input */}
          <div className={featureStyles.featureSection}>
            <div className={featureStyles.featureContent}>
              <h2 className={featureStyles.featureTitle}>Track Fast.<br/>Like sending a WhatsApp.</h2>
              <p className={featureStyles.featureDesc}>
                No more SMS parsing errors. Just tap and type. Built for the Indian habit of "Chai-Sutta" and UPI scanning.
              </p>
              <ul className={pricingStyles.featureList}>
                <li>⚡ "Chai 20" Quick Add Widget</li>
                <li>⚡ Zero-Lag Manual Entry</li>
                <li>⚡ Works on 2G / Offline</li>
              </ul>
            </div>
            <div className={`${featureStyles.featureVisual} ${featureStyles.chatVisual}`}>
              <div className={featureStyles.chatBubble}>To: Dhan-Raashi Bot 🤖</div>
              <div className={`${featureStyles.chatBubble} ${featureStyles.user}`}>20 chai</div>
              <div className={featureStyles.chatBubble}>✅ Added ₹20 to Food. Balance: ₹4,500</div>
              <div className={`${featureStyles.chatBubble} ${featureStyles.user}`}>150 auto to work</div>
              <div className={featureStyles.chatBubble}>✅ Added ₹150 to Travel.</div>
            </div>
          </div>

          {/* Feature 2: Desi Nudges */}
          <div className={featureStyles.featureSection}>
            <div className={featureStyles.featureContent}>
              <h2 className={featureStyles.featureTitle}>"Log Kya Kahenge?"<br/>We handle that too.</h2>
              <p className={featureStyles.featureDesc}>
                Protect your savings from big Indian weddings and festive sales. Our "Festival Shield" keeps your budget safe during Diwali.
              </p>
              <ul className={pricingStyles.featureList}>
                <li>🛑 Diwali Sale Shield</li>
                <li>🛑 "Shagun" Gift Tracking</li>
                <li>🛑 EMI Truth Serum (Real Cost vs Cash)</li>
              </ul>
            </div>
            <div className={`${featureStyles.featureVisual} ${featureStyles.festivalVisual}`}>
              <span className={featureStyles.festivalIcon}>🪔</span>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Diwali Budget Locked!</h3>
              <p>You have saved ₹10,000 for gifts.</p>
              <div style={{background: 'rgba(255,255,255,0.2)', padding: '1rem', marginTop: '1.5rem', borderRadius: '10px'}}>
                ⚠️ Warning: Buying this phone will break your Musibat Fund.
              </div>
            </div>
          </div>

          {/* Feature 3: Variable Income (Gig Economy) */}
          <div className={featureStyles.featureSection}>
            <div className={featureStyles.featureContent}>
              <h2 className={featureStyles.featureTitle}>Freelancer or Gig Worker?<br/>We get it.</h2>
              <p className={featureStyles.featureDesc}>
                Salary doesn't always come on the 1st. toggle "Daily View" to track Good Days vs Bad Days.
              </p>
              <ul className={pricingStyles.featureList}>
                <li>📊 Daily Earnings Target</li>
                <li>📊 "Rainy Day" Buffer logic</li>
                <li>📊 Separate Business vs Personal expenses</li>
              </ul>
            </div>
            <div className={featureStyles.featureVisual} style={{background: '#f0f4f8', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
               <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', fontWeight: '800', color: 'var(--success)'}}>₹2,450</div>
                  <div style={{color: 'var(--text-muted)'}}>Earned Today (Good Day! 🚀)</div>
                  <hr style={{margin: '1.5rem 0', opacity: 0.2}}/>
                  <div style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)'}}>₹850</div>
                  <div style={{color: 'var(--text-muted)'}}>Daily Expenses</div>
               </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className={featureStyles.trustGrid}>
            <div className={featureStyles.trustBadge}>
              <span style={{fontSize: '1.5rem'}}>🔒</span>
              <div>
                <strong>No Data Selling</strong>
                <div style={{fontSize: '0.8rem', color: '#666'}}>We don't sell your data to banks.</div>
              </div>
            </div>
            <div className={featureStyles.trustBadge}>
              <span style={{fontSize: '1.5rem'}}>📱</span>
              <div>
                <strong>On-Device</strong>
                <div style={{fontSize: '0.8rem', color: '#666'}}>Data stays on your phone.</div>
              </div>
            </div>
             <div className={featureStyles.trustBadge}>
              <span style={{fontSize: '1.5rem'}}>🇮🇳</span>
              <div>
                <strong>Made for India</strong>
                <div style={{fontSize: '0.8rem', color: '#666'}}>Locally hosted server.</div>
              </div>
            </div>
          </div>

        </section>

        {/* Pricing Section */}
        <section className={pricingStyles.pricing}>
          <h2 className={styles.sectionTitle}>Simple, Transparent Pricing</h2>
          <div className={pricingStyles.pricingGrid}>
            
            {/* Free Tier */}
            <div className={pricingStyles.pricingCard}>
              <h3 className={pricingStyles.priceTitle}>Basic</h3>
              <div className={pricingStyles.priceAmount}>₹0<span>/mo</span></div>
              <ul className={pricingStyles.featureList}>
                <li>✅ Unlimited Expense Tracking</li>
                <li>✅ Basic Reports</li>
                <li>✅ Festival Shield Alert</li>
              </ul>
              <Link href="/dashboard" className={pricingStyles.pricingBtn}>
                Get Started
              </Link>
            </div>

            {/* Pro Tier */}
            <div className={`${pricingStyles.pricingCard} ${pricingStyles.pro}`}>
              <h3 className={pricingStyles.priceTitle}>Dhan-Raashi Pro</h3>
              <div className={pricingStyles.priceAmount}>₹99<span>/mo</span></div>
              <ul className={pricingStyles.featureList}>
                <li>✅ Everything in Basic</li>
                <li>✅ Family Sync (Shared Budget)</li>
                <li>✅ PDF Reports for CA</li>
                <li>✅ WhatsApp Integration</li>
              </ul>
              <Link href="/checkout" className={`${pricingStyles.pricingBtn} ${pricingStyles.primary}`}>
                Subscribe Now
              </Link>
            </div>

          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Dhan-Raashi. Made with ❤️ in India.</p>
        <p style={{ marginTop: "0.5rem", fontSize: "0.8rem", opacity: 0.7 }}>
          Your data stays on your device. We respect your privacy.
        </p>
      </footer>
    </div>
  );
}

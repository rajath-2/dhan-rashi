"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./dashboard.module.css";

interface Transaction {
  id: number;
  name: string;
  time: string;
  amount: number;
  type: 'debit' | 'credit';
  icon: string;
}

export default function Dashboard() {
  const [variableIncome, setVariableIncome] = useState(false);
  const [balance, setBalance] = useState(12450);
  
  // Transaction State
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, name: "Chai Point", time: "10:30 AM", amount: 20, type: "debit", icon: "☕" },
    { id: 2, name: "Uber Auto", time: "09:15 AM", amount: 85, type: "debit", icon: "🛺" },
    { id: 3, name: "Swiggy", time: "Yesterday", amount: 240, type: "debit", icon: "🍔" },
    { id: 4, name: "Freelance Pay", time: "Yesterday", amount: 5000, type: "credit", icon: "💰" },
  ]);

  // Form State
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [desc, setDesc] = useState("");

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !desc) return;

    const val = parseFloat(amount);
    const newTx: Transaction = {
      id: Date.now(),
      name: desc,
      time: "Just now",
      amount: val,
      type: 'debit',
      icon: getIconForCategory(category)
    };

    setTransactions([newTx, ...transactions]);
    setBalance(prev => prev - val);
    
    // Reset
    setAmount("");
    setDesc("");
  };

  const getIconForCategory = (cat: string) => {
    switch(cat) {
      case 'Food': return '🍲';
      case 'Travel': return '🛺';
      case 'Bills': return '💡';
      case 'Shopping': return '🛍️';
      default: return '💸';
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.welcome}>
          <span className={styles.date}>{new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short' })}</span>
          <h1 className={styles.userName}>Namaste, Rahul 🙏</h1>
        </div>
        <button className={styles.incomeToggle} onClick={() => setVariableIncome(!variableIncome)}>
          <span>{variableIncome ? "🔄 Daily View" : "📅 Monthly View"}</span>
        </button>
      </header>

      {/* Festival Shield Alert */}
      <div className={styles.shield}>
        <span className={styles.shieldIcon}>🛡️</span>
        <div className={styles.shieldText}>
          <strong>Festival Shield Active</strong><br/>
          Diwali Budget is locked. ₹5,000 saved for gifts!
        </div>
      </div>

      <div className={styles.mainGrid}>
        
        {/* Balance Card */}
        <div className={styles.balanceCard}>
          <div className={styles.balanceLabel}>Current Balance</div>
          <div className={styles.balanceAmount}>
            ₹{balance.toLocaleString('en-IN')}
          </div>
          <div className={styles.safeSpend}>
            Safe to spend: <strong>₹{(balance * 0.4).toLocaleString('en-IN')}</strong>
          </div>
        </div>

        {/* Add Expense Form */}
        <div className={styles.addExpenseCard}>
          <div className={styles.cardTitle}>Add New Expense</div>
          <form onSubmit={handleAddExpense} className={styles.formGrid}>
            <div className={styles.formRow}>
              <label className={styles.inputLabel}>Amount (₹)</label>
              <input 
                type="number" 
                className={styles.input} 
                placeholder="e.g. 50" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            
            <div className={styles.formRow}>
              <label className={styles.inputLabel}>Category</label>
              <select className={styles.select} value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Food">Food / Chai</option>
                <option value="Travel">Travel / Auto</option>
                <option value="Bills">Bills / EMI</option>
                <option value="Shopping">Shopping</option>
              </select>
            </div>

            <div className={styles.formRow}>
              <label className={styles.inputLabel}>Description</label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="e.g. Morning Chai" 
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Add Expense
            </button>
          </form>
        </div>

        {/* Recent Transactions */}
        <div className={styles.card} style={{ gridColumn: "1 / -1" }}>
          <div className={styles.cardTitle}>
            Recent Transactions
            <Link href="#" style={{ color: "var(--primary)", fontSize: "0.9rem" }}>View All</Link>
          </div>
          <div className={styles.transactionList}>
            {transactions.map(tx => (
              <div key={tx.id} className={styles.transaction}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.txIcon}>{tx.icon}</div>
                  <div className={styles.txDetails}>
                    <div className={styles.txName}>{tx.name}</div>
                    <div className={styles.txTime}>{tx.type === 'credit' ? 'Received' : 'Paid'} • {tx.time}</div>
                  </div>
                </div>
                <div className={`${styles.txAmount} ${tx.type === 'credit' ? styles.txCredit : styles.txDebit}`}>
                  {tx.type === 'debit' ? '-' : '+'}₹{tx.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

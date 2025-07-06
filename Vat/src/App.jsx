import { useState } from 'react';

export default function App() {
  const [basePrice, setBasePrice] = useState('');
  const vatRate = 7;

  const base = parseFloat(basePrice) || 0;
  const vat = base * vatRate / 100;
  const forwardTotal = base + vat;

  const [totalPrice, setTotalPrice] = useState('');
  const tot = parseFloat(totalPrice) || 0;
  const reverseBase = tot / (1 + vatRate / 100);
  const reverseVat = tot - reverseBase;

  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 400, margin: '2rem auto' }}>
      <h1>VAT Calculator (7%)</h1>

      <h2>Forward</h2>
      <input
        type="number"
        placeholder="Net price"
        value={basePrice}
        onChange={e => setBasePrice(e.target.value)}
      />
      <p>Total: <strong>{forwardTotal.toFixed(2)}</strong> (VAT: {vat.toFixed(2)})</p>

      <h2>Reverse</h2>
      <input
        type="number"
        placeholder="Total price (incl. VAT)"
        value={totalPrice}
        onChange={e => setTotalPrice(e.target.value)}
      />
      <p>Net: <strong>{reverseBase.toFixed(2)}</strong> + VAT: {reverseVat.toFixed(2)}</p>
    </main>
  );
}

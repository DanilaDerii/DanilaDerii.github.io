import { useState } from 'react';

export default function App() {
  const [price,    setPrice]    = useState(0);
  const [discount, setDiscount] = useState(0);

  const vat    = (price - discount) * 0.07;   // 7 % after discount
  const total  = Number(price) + vat - discount;

  return (
    <main style={{fontFamily:'sans-serif',maxWidth:420,margin:'2rem auto'}}>
      <h1>VAT Calculator</h1>

      <label>
        Price&nbsp;
        <input type="number" value={price}
               onChange={e => setPrice(+e.target.value)}/>
      </label>

      <br/><br/>

      <label>
        Discount&nbsp;
        <input type="number" value={discount}
               onChange={e => setDiscount(+e.target.value)}/>
      </label>

      <br/><br/>

      <p>VAT (7 %): <strong>{vat.toFixed(2)}</strong></p>
      <p>Total: <strong>{total.toFixed(2)}</strong></p>
    </main>
  );
}

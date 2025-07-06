import { useState } from 'react'

export default function App() {
  // forward calc
  const [net,  setNet ]  = useState('')
  const rate = 7 // VAT %

  const netNum = parseFloat(net) || 0
  const vat    = netNum * rate / 100
  const gross  = netNum + vat

  // reverse calc
  const [grossInp, setGrossInp] = useState('')
  const grossNum   = parseFloat(grossInp) || 0
  const netBack    = grossNum / (1 + rate / 100)
  const vatBack    = grossNum - netBack

  return (
    <main style={{fontFamily:'sans-serif',maxWidth:400,margin:'2rem auto'}}>
      <h1>VAT Calculator ({rate}%)</h1>

      <h2>Net → Gross</h2>
      <input type="number" placeholder="net price"
             value={net} onChange={e=>setNet(e.target.value)}/>
      <p>Total: <strong>{gross.toFixed(2)}</strong> (VAT {vat.toFixed(2)})</p>

      <h2>Gross → Net</h2>
      <input type="number" placeholder="gross price"
             value={grossInp} onChange={e=>setGrossInp(e.target.value)}/>
      <p>Net: <strong>{netBack.toFixed(2)}</strong> + VAT {vatBack.toFixed(2)}</p>
    </main>
  )
}

function calculate() {
    const p = $("#basePrice").val();
    const vatRate = 7;
    const vat = (p * vatRate) / 100;
    const total = parseFloat(p) + vat;
    
    $("#result").html(`${total.toFixed(2)} (VAT: ${vat.toFixed(2)})`);
}

function reverseCalculate() {
    const total = $("#totalPrice").val();
    const vatRate = 7;
    const base = total / (1 + vatRate / 100);
    const vat = total - base;
    
    $("#reverseResult").html(`${base.toFixed(2)} + VAT: ${vat.toFixed(2)}`);
}

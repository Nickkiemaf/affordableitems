// ============================================================
// EDIT: your WhatsApp number, in full international format.
// 09164620704 -> 2349164620704 (leading 0 replaced with 234)
// ============================================================
const WHATSAPP_NUMBER = "2348164620704";

// ============================================================
// EDIT: this is the single source of truth for the price.
// Change it here and it updates everywhere on the page.
// ============================================================
const UNIT_PRICE = 9900;

const qtyInput = document.getElementById('qty');
const totalAmtEl = document.getElementById('totalAmt');
const stickyPriceEl = document.getElementById('stickyPrice');
const orderBtn = document.getElementById('orderBtn');

function formatNaira(value) {
  const num = Number(value);
  if (Number.isNaN(num)) return `₦${value}`;
  return `₦${num.toLocaleString()}`;
}

function updateTotal() {
  let qty = parseInt(qtyInput.value, 10);
  if (Number.isNaN(qty) || qty < 1) qty = 1;
  const total = UNIT_PRICE * qty;
  const formatted = formatNaira(total);
  totalAmtEl.textContent = formatted;
  stickyPriceEl.textContent = formatted;
}

function sendOrder() {
  let qty = parseInt(qtyInput.value, 10);
  if (Number.isNaN(qty) || qty < 1) qty = 1;

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();

  if (!name || !phone || !address) {
    alert("Please fill in your name, phone number, and address before ordering.");
    return;
  }

  const message =
    `Hello, I want to order CloudNest™ Baby Support Pillow.
Quantity: ${qty}
Address: ${address}
WhatsApp phone number: ${phone}
Name: ${name}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

qtyInput.addEventListener('input', updateTotal);
orderBtn.addEventListener('click', sendOrder);

updateTotal();

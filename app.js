const form = document.getElementById('expense-form');
const descInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expense-list');
const totalCountEl = document.getElementById('total-count');
const totalAmountEl = document.getElementById('total-amount');

let expenses = [];

function updateUI() {
    expenseList.innerHTML = '';
    let totalSum = 0;

    expenses.forEach((expense, index) => {
        totalSum += expense.amount;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${expense.desc} - Rp ${expense.amount.toLocaleString()}</span>
            <button onclick="deleteExpense(${index})">Hapus</button>
        `;
        expenseList.appendChild(li);
    });

    totalCountEl.textContent = expenses.length;
    totalAmountEl.textContent = totalSum.toLocaleString();
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const desc = descInput.value;
    const amount = Number(amountInput.value);

    expenses.push({ desc, amount });
    
    descInput.value = '';
    amountInput.value = '';

    updateUI();
});

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateUI();
}
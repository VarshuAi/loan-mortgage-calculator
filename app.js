
            window.calcLoan = function() {
                const p = parseFloat(document.getElementById('loan-p').value);
                const r = parseFloat(document.getElementById('loan-r').value) / 100 / 12;
                const t = parseFloat(document.getElementById('loan-t').value) * 12;
                const res = document.getElementById('loan-res');
                if(!p || !r || !t) return;
                const m = (p * r * Math.pow(1+r, t)) / (Math.pow(1+r, t) - 1);
                res.innerHTML = `Monthly Payment: <strong>$${m.toFixed(2)}</strong>`;
            }
        
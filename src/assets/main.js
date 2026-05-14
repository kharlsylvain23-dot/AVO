document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq-q').forEach(function (button) {
    button.addEventListener('click', function () {
      var answer = button.nextElementSibling;
      if (!answer) return;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });

  document.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.id === 'js-add-to-cart') {
      var variantId = target.dataset.variant;
      if (!variantId) return;

      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: Number(variantId), quantity: 1 })
      })
        .then(function () {
          target.textContent = 'Added ✓';
          setTimeout(function () {
            target.textContent = 'Add to cart';
          }, 1200);
        })
        .catch(function () {
          alert('Could not add item to cart.');
        });
    }

    if (target && target.id === 'js-buy-now') {
      var buyVariantId = target.dataset.variant;
      if (!buyVariantId) return;

      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: Number(buyVariantId), quantity: 1 })
      })
        .then(function () {
          window.location.href = '/checkout';
        })
        .catch(function () {
          alert('Could not start checkout.');
        });
    }
  });
});

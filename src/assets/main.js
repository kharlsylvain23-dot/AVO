document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('form[action*="/cart/add"]').forEach(function (form) {
    form.addEventListener('submit', function () {
      var button = form.querySelector('button[name="add"]');
      if (button) {
        button.textContent = 'Adding...';
      }
    });
  });
});

document.querySelectorAll('.ripple-btn').forEach(button => {
  button.style.position = 'relative';
  button.style.overflow = 'hidden';

  button.addEventListener('click', function(event) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    const rect = button.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - radius}px`;
    ripple.style.top = `${event.clientY - rect.top - radius}px`;

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

const downloadBtn = document.getElementById('downloadPdf');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    downloadPDF();
  });
}

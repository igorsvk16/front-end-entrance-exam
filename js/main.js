// main.js - general page interactions

// Add ripple effect to elements with class 'ripple-btn'
document.querySelectorAll('.ripple-btn').forEach(button => {
  // Ensure the button is positioned relative for ripple containment
  button.style.position = 'relative';
  button.style.overflow = 'hidden';

  // Attach click event listener to create ripple effect on click
  button.addEventListener('click', function(event) {
    // Create a span element for the ripple circle
    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    // Calculate the size of the ripple (circle diameter) as the larger of the button's width or height
    const rect = button.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    // Set the ripple size and position, centered at the click position within the button
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - radius}px`;
    ripple.style.top = `${event.clientY - rect.top - radius}px`;

    // Add the ripple element to the button
    button.appendChild(ripple);

    // Remove the ripple element after the animation duration (600ms)
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Attach event listener to the "Download PDF" button to trigger PDF generation
const downloadBtn = document.getElementById('downloadPdf');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    // Call the function defined in resume.js to export the resume as PDF
    downloadPDF();
  });
}

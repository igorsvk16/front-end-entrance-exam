function downloadPDF() {
  const resumeElement = document.querySelector('.resume-container');

  const opt = {
    margin: 0,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(resumeElement).save();
}

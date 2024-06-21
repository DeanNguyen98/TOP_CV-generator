import html2pdf from 'html2pdf.js';

export function downloadCV() {
    const element = document.querySelector('.cv-preview');
    const opt = {
        margin: [10, 10, 10, 10],
        filename: 'myCV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save();
}
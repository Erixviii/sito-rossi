let n = 0;
let immagini = [
  'https://www.itisrossi.edu.it/wp-content/uploads/2022/09/panoramica-istituto-750x300.jpg',
  'https://www.itisrossi.edu.it/wp-content/uploads/2022/07/rossi-confindustria-panoramica-750x300.jpg',
  'https://www.itisrossi.edu.it/wp-content/uploads/2022/07/gnm-panoramica-750x300.jpg',
  'https://www.itisrossi.edu.it/wp-content/uploads/2022/06/nicola-home-750x300.jpg',
  'https://www.itisrossi.edu.it/wp-content/uploads/2022/06/foto-panoramica-2022-750x300.jpg',
];
window.Nextimg = Nextimg;

Nextimg(n);

function Nextimg(c) {
  n += c;

  let barra = document.getElementById('immaginiscorrevoli');

  if (n > immagini.length - 1) {
    n = 1;
  }
  if (n < 0) {
    n = immagini.length - 1;
  }

  barra.style.backgroundImage = 'url(' + immagini[n] + ')';
}

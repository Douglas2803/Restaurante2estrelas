let count = 1;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  const actualSlide = count++;

  if (count > 4) {
    count = 1;
  }

  const nextSlide = count;

  const actualSlideImage = document.getElementById(`radio${actualSlide}`);
  const nextSlideImage = document.getElementById(`radio${nextSlide}`);
  const actualLabel = document.getElementById(`label-radio-${actualSlide}`);
  const nextLabel = document.getElementById(`label-radio-${nextSlide}`);

  actualSlideImage.removeAttribute('checked');
  nextSlideImage.setAttribute('checked', true);
  actualLabel.classList.remove('active');
  nextLabel.classList.add('active');
}

document.getElementById('images-more').style.display = 'none';
document.getElementById('more').addEventListener('mouseover', function() {
  document.getElementById('images-more').style.display = 'grid';
});

document.getElementById('bottom').addEventListener('mouseout', function() {
  document.getElementById('images-more').style.display = 'none';
});
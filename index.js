
document.querySelector('#logo-animated').style.opacity = '0'; // set opacity primusovo for elements
document.querySelector('#stairs-animated').style.opacity = '0';
document.querySelector('#header').style.opacity = '0';
document.querySelector('#text-main').style.opacity = '0';
document.querySelector('#navigation-text').style.opacity = '0';
/*
document.getElementById('drop-menu-1').style.display = 'none';
document.getElementById('drop-menu-2').style.display = 'none';
*/

document.querySelector('.header-p').addEventListener('animationend', () => { // animation before animation
  document.querySelector('#logo-animated').classList.add('animation-logo');
  document.querySelector('#logo-animated').style.opacity = '1';
  document.querySelector('#stairs-animated').classList.add('animation-stairs');
  document.querySelector('#stairs-animated').style.opacity = '1';
});

document.querySelector('#logo-animated').addEventListener('animationend', () => { // animation before animation
  document.querySelector('#header').classList.add('animation-header');
  document.querySelector('#header').style.opacity = '1';
  document.querySelector('#text-main').classList.add('animation-text-main');
  document.querySelector('#text-main').style.opacity = '1';
  document.querySelector('#navigation-text').classList.add('animation-navigation-text');
  document.querySelector('#navigation-text').style.opacity = '1';

});

/*
document.getElementById('arrow-btn-1').onclick = function() {
  document.getElementById('drop-menu-1').style.opacity = '1';
  document.getElementById('drop-menu-1').style.display = 'block';
  document.getElementById('text1').style.display = 'none';
  document.getElementById('drop-menu-button-2').style.display = 'none';


};
document.getElementById('drop-menu-button-1').addEventListener('mouseout', function() {
  document.getElementById('drop-menu-1').style.opacity = '0';
  document.getElementById('drop-menu-2').style.display = 'none';
  document.getElementById('text1').style.display = 'block';
  document.getElementById('drop-menu-button-2').style.display = 'block';
});

document.getElementById('arrow-btn-2').onclick = function() {
  document.getElementById('drop-menu-2').style.opacity = '1';
  document.getElementById('drop-menu-2').style.display = 'block';
  document.getElementById('text1').style.display = 'none';
  document.getElementById('drop-menu-button-1').style.display = 'none';


};
document.getElementById('drop-menu-button-2').addEventListener('mouseout', function() {
  document.getElementById('drop-menu-2').style.opacity = '0';
  document.getElementById('drop-menu-2').style.display = 'none';
  document.getElementById('text1').style.display = 'block';
  document.getElementById('drop-menu-button-1').style.display = 'block';
});
*/

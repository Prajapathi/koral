const codebars = document.querySelectorAll('.code');
const animecodebar = function(){codebars.forEach(function(codebar){
codebar.style.width = codebar.getAttribute('data')+'%';
codebar.style.opacity = 1;
})};

const designbars = document.querySelectorAll('.design');
const animedesignbar = function(){designbars.forEach(function(designbar){
designbar.style.width = designbar.getAttribute('data')+'%';
designbar.style.opacity = 1;
})};

animecodebar();
animedesignbar();

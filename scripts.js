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

const bars = document.querySelector('.bars');
const options = { rootMargin : "0px 0px -300px 0px"};
const observer = new IntersectionObsever(function(entries, observer){
    animecodebar();
    animedesignbar();
},options);

observer.observe("bars");

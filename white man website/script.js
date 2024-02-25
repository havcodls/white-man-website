var btnScroll = document.querySelector('.scroll-btn');

btnScroll.addEventListener('click', () => {
    window.scrollTo({
        top: 890,
        behavior: "smooth"
    });
  });


var btnn = document.querySelector(".btn-sect2");
var container = document.querySelector(".container-container");
var paragraphs = container.querySelectorAll("p");

var originalHeight;

var clics = 0;

window.addEventListener('load', function() {
  originalHeight = container.clientHeight;
});

btnn.addEventListener('click', () => {
  if (window.innerWidth < 949) {
    if (clics === 0) {
      var totalHeight = 0;
      paragraphs.forEach(function(paragraph) {
        totalHeight += paragraph.offsetHeight + 60;
      });
      container.style.height = totalHeight + 'px';
      clics++;
    } else if (clics === 1) { 
      container.style.height = originalHeight + 'px';
      clics = 0;
    }
  }
});






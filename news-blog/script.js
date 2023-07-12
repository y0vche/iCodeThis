const mark = document.querySelectorAll('#bookmark');

for(const bookmark of mark) {

bookmark.addEventListener('click', (e)=> {
  if (e.target.classList.contains('marked')) {
    bookmark.classList.remove('marked');
  } else {
    bookmark.classList.add('marked');
  }
 });
}

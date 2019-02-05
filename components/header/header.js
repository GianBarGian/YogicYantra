const unorderedLists = document.querySelectorAll('header ul');
const icons = document.querySelectorAll('header span');
const header = document.querySelector('header')

const mainList = document.createElement('div');
mainList.classList.add('main-list');
mainList.appendChild(unorderedLists[0]);
mainList.appendChild(unorderedLists[1]);
mainList.appendChild(unorderedLists[2]);

header.appendChild(mainList);
console.log(icons[2]);
icons[2].addEventListener('click', () => mainList.classList.toggle('open'));
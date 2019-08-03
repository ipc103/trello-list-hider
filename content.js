console.log("Trello List Hider Loaded!")

const targetClass = '.list-header';
const toHideClass = 'list-cards';
const placeHolderClass = 'trello-list-hider--minimized';
const placeHolderText = '...'


const addPlaceHolderTo = (listHeader) => {
  let placeHolder = listHeader.getElementsByClassName(placeHolderClass)[0];

  if (placeHolder === undefined){
    placeHolder = document.createElement('div')
    placeHolder.classList.add(placeHolderClass);
    placeHolder.innerText = placeHolderText
    placeHolder.style.display = 'none';
    listHeader.append(placeHolder)
  }

  return placeHolder;
}

const toggleHidden = (listCards, placeHolder) => {
  const hidden = 'none';
  const shown = '';

  if ( listCards.style.display === hidden){
    listCards.style.display = shown;
    placeHolder.style.display = hidden;
  } else {
    listCards.style.display = hidden;
    placeHolder.style.display = shown;
  }
}

const minimizeList = (event) => {
  if( event.target.matches(targetClass) ) {
    const listHeader = event.target;
    const placeHolder = addPlaceHolderTo(listHeader);

    const list = listHeader.parentElement;
    const listCards = list.getElementsByClassName(toHideClass)[0]

    toggleHidden(listCards, placeHolder);
  }
}

document.addEventListener('click', minimizeList);

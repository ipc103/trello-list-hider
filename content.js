console.log("Trello List Hider Loaded!")

const minimizeList = (event) => {
  const targetClass = '.list-header';
  const toHideClass = 'list-cards';
  const placeHolderClass = 'trello-list-hider--minimized';
  const placeHolderText = 'Click to Expand'

  if( event.target.matches(targetClass) ) {
    const listHeader = event.target;
    const list = listHeader.parentElement;

    let placeHolder = listHeader.getElementsByClassName(placeHolderClass)[0];

    if (placeHolder === undefined){
      placeHolder = document.createElement('div')
      placeHolder.className = placeHolderClass;
      placeHolder.innerText = placeHolderText
      placeHolder.style.display = 'none';
      placeHolder.addEventListener('click', () => {
        listCards.style.display = '';
         placeHolder.style.display = 'none'
      })
      listHeader.append(placeHolder)
    }

    const listCards = list.getElementsByClassName(toHideClass)[0]

    console.log(placeHolder)
    if ( listCards.style.display === 'none' ){
      listCards.style.display = '';
      placeHolder.style.display = 'none'
    } else {
      listCards.style.display = 'none';
      placeHolder.style.display = '';
    }
  }
}

document.addEventListener('click', minimizeList);

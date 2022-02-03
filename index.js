// Input Change Function

let fake = document.querySelector('#qty');
fake.addEventListener('input', function(e) {
  let items = document.querySelector('.items')
  // Remove all items children to remake all the divs from the beginning
  document.querySelector('.items').innerHTML = ''

  // Loop To make new divs with the same stle of item div
  for (var i = 0; i < fake.value; i++) {
    // Item Div
    let item = document.createElement('div')
    item.classList.add('item')
    
    // Item Number Div
    let itemNo = document.createElement('div')
    itemNo.classList.add('item-no')
    
    // Number Span
    let spanItemNo = document.createElement('span')
    spanItemNo.innerHTML = i + 1

    itemNo.appendChild(spanItemNo)
    
    item.appendChild(itemNo)

    items.appendChild(item)
  }
})

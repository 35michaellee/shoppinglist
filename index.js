
$(function(){
    $('#js-shopping-list-form').on("submit",function(event) {
      event.preventDefault();//so sibmit doesnt refresh the page and senf the info to another server
      const listItem = $('#shopping-list-entry').val();//getting the value from user input

      
       console.log(listItem)
      $('ul').append(
        `<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
    });
  
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).closest('li').remove();//removes the closest link to the delete button wich in this case is the parant of the delete bitton in the DOM
    });
  
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked'); //applies a toggle to the check class so that when it is clicked it hcanges the behavior of the span tag 
    });
  
  });
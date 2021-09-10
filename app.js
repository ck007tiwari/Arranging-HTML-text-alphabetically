
  function sort() {
   // Declaring Variables
   var geek_list, i, run, li, stop;
   // Taking content of list as input
   geek_list = document.getElementById("GeekList");
   run = true;
   while (run) {
       run = false;
       li = geek_list.getElementsByTagName("div");

       // Loop traversing through all the list items
       for (i = 0; i < (li.length - 1); i++) {
           stop = false;
           if (li[i].innerHTML.toLowerCase() > 
               li[i + 1].innerHTML.toLowerCase()) {
               stop = true;
               break;
           }
       }

       /* If the current item is smaller than the next item then adding it after  it using insertBefore() method */
       if (stop) {
           li[i].parentNode.insertBefore(
                   li[i + 1], li[i]);

           run = true;
       }
   }
}

sort();




































// const div = document.querySelectorAll('#short');
// for(let text of div){
//    const test = (text.innerHTML).sort(function(a, b) {
//       if (a.textContent < b.textContent) {
//         return -1;
//       } else {
//         return 1;
//       }
//     }).appendTo('body');

//    console.log(text.innerHTML);
// }



// var alphabeticallyOrderedDivs = $('.member-name').sort(function(a, b) {
//    return String.prototype.localeCompare.call($(a).text().toLowerCase(), $(b).text().toLowerCase());
//  });
 
//  var container = $(".container");
//  container.detach().empty().append(alphabeticallyOrderedDivs);
//  $('body').append(container);
 
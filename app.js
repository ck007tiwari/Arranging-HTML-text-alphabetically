function sort() {
    var tiwari, i, run, li, stop;
    tiwari = document.getElementById("tiwari");
    run = true;
    while (run) {
        run = false;
        li = tiwari.getElementsByTagName("div");
        for (i = 0; i < (li.length - 1); i++) {
            stop = false;
            if (li[i].innerHTML.toLowerCase() >
                li[i + 1].innerHTML.toLowerCase()) {
                stop = true;
                break;
            }
        }
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
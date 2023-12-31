function findIndex(tableId){
  $('#' + tableId).on('click', 'th', function() {
    sortTable($(this).index(), tableId);
});
}

//code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sort_table_desc, but modified
function sortTable(n, tableId) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById(tableId);
  switching = true;
  dir = "asc";

  while (switching) {
    var rowlength = 0;
    switching = false;
    rows = table.rows;

    //change rowlength depending on table, because we want to exclude sorting of the input fields
    if (tableId == "tableSubs") {
      rowlength = rows.length - 1;
    } else if (tableId == "products"){
      rowlength = rows.length - 2;
    }

    for (i = 1; i < (rowlength); i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir == "asc") { //ascending order
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") { //descending order
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  } 
} //function sortTable


//Waiting for jQuery to get ready before executing the code.
$(function(){

  findIndex("products");
  findIndex("tableSubs");

});

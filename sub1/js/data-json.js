var xhr = new XMLHttpRequest();  

xhr.onload = function() { 
 
  responseObject = JSON.parse(xhr.responseText);  

  var newContent = '';

  newContent += '<table>';
  newContent += '<thead>';
  newContent += '<tr>';
  newContent += '<th class="first" scope="col">성장성</th>';
  newContent += '<th class="first" scope="col">2016</th>';
  newContent += '<th class="first" scope="col">2017</th>';
  newContent += '<th class="first" scope="col">2018</th>';
  newContent += '<th class="first" scope="col">2019</th>';
  newContent += '<th class="first" scope="col">2020</th>';
  newContent += '</tr>';
  newContent += '</thead>';
  newContent += '<tbody>';

  for (var i = 0; i < responseObject.company.length; i++) {
    newContent += '<tr>';
    newContent += '<th scope="row">' + responseObject.company[i].cmenu + '</th>';
    newContent += '<td>' + responseObject.company[i].cincome1 + '</td>';
    newContent += '<td>' + responseObject.company[i].cincome2 + '</td>';
    newContent += '<td>' + responseObject.company[i].cincome3 + '</td>';
    newContent += '<td>' + responseObject.company[i].cincome4 + '</td>';
    newContent += '<td>' + responseObject.company[i].cincome5 + '</td>';
    newContent += '</tr>';
  }
  newContent += '</tbody>';
  newContent += '</table>';
  document.getElementById('content2').innerHTML = newContent;
};

xhr.open('GET', './js/data.json', true);  
xhr.send(null);                             
// // Event listener for search button
// document.getElementById('searchBtn').addEventListener('click', function() {
//     // Get search input value
//     const searchInput = document.getElementById('searchInput').value;

//     // Perform search (dummy implementation)
//     search(searchInput);
// });

// // Dummy search function (replace with actual search functionality)
// function search(query) {
//     // Display dummy search results
//     const searchResultsSection = document.getElementById('searchResults');
//     searchResultsSection.innerHTML = `<h2>Search Results for "${query}":</h2>
//                                       <p>Search results will be displayed here...</p>`;
// }

// var list = document.getElementById('Dune');

// function onclickHandler(event){
//     var target = event.target || event.srcElement;
//     var targetValue = target.innerText;
//     const text = event.target.parentElement.querySelector('label').innerText;
//     console.log(text);
//     addItem(text);
//     console.log(targetValue);
//     event.target.parentElement.remove();}

// function addItem(value){
//     var newItem = document.createElement('li');
//     list.appendChild(newItem);
// }

// function createElement(value){
//     var item = document.createElement('div');
//     item.innerText = value;
//     return item;
// }

// // var list = document.getElementById('WantList');

// // function changeText2() {
// //     var WatchMark = document.getElementById('WatchMark').value;
// //     document.getElementById('Dune').innerHTML = WatchMark;
// //     var entry = document.createElement('li');
// //     entry.appendChild(document.createTextNode(WatchMark));
// //     list.appendChild(entry);
// // }
function addingEventListener() {
  //get input from the html page
  const input = document.getElementById('input')
  //use .addEventListener to set up event for that input;
  input.addEventListener('click', function(event){alert('I was clicked!');});
}

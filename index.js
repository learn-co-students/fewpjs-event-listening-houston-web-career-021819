const input = document.getElementById('input');
function addingEventListener() {
        
        input.addEventListener('click', function(event) {
        event.preventDefault();
        alert('I was clicked!');
        });
}
addingEventListener();
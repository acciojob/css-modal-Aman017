document.getElementById('openModal').onclick = function() {
  document.getElementById('myModal').style.display = "block";
};

// Close modal when clicking outside of it
window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  console.log(event.target, modal); // Debugging
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Close modal on clicking the close button
document.querySelector('.close-modal').onclick = function() {
  document.getElementById('myModal').style.display = "none";
};

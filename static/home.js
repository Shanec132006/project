function player_name(){
  var player = document.getElementById('uniqueID').value
  alert("You Have Set your play Name");
  localStorage.setItem("Name", player);;
}
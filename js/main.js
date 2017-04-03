var objPeople = [
  {
    username: "Shay",
    password: "chari"
  },
  {
    username: "Hodor",
    password: "holdthedoor"
  },
  {
    username: "Admin",
    password: "password"
  },
]
$('#submitForm').mousedown(function() {
  var name = document.getElementById("username").value
  var username = name[0].toUpperCase() + name.substring(1)
  var password = document.getElementById("password").value

  for(i = 0; i < objPeople.length; i++) {
    if(username == objPeople[i].username && password == objPeople[i].password){
      document.getElementById("status").innerHTML = username + " is logged in."
      document.getElementById("pwLink").innerHTML = "Update Password"
      console.log(username + " is logged in.")
      return
    }
  }
  for(i = 0; i < objPeople.length; i++) {
    if(username == objPeople[i].username && password != objPeople[i].password){
      document.getElementById("status").innerHTML = "Incorrect password"
      document.getElementById("pwLink").innerHTML = "Lost your password?"
      console.log ("Incorrect password")
      return
    }
  }
  document.getElementById("status").innerHTML = 'User "' + username + '"' + " does not exist."
  document.getElementById("pwLink").innerHTML = "Lost your password?"
    console.log ("User does not exist")
})

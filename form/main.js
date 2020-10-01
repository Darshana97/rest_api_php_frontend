const button = document.getElementById("ajax");

button.onclick = () => {
  const Name = document.getElementById("name").value;
  console.log(Name);
  const UserId = new Date().getTime();
  const Username = document.getElementById("user_name").value;
  const Password = document.getElementById("password").value;
  const CPassword = document.getElementById("cpassword").value;
  const Gender = document.getElementById("gender").value;
  const JoinedDate =
    new Date(document.getElementById("date").value).getTime() / 1000;

  if (!Name || !UserId || !Password || !Gender || !JoinedDate) {
    alert("Form submission is not valid!");
    return;
  }

  if (Password !== CPassword) {
    alert("Password is not matching!");
    return;
  }

  const xmlh = new XMLHttpRequest();
  xmlh.open(
    "POST",
    "http://localhost/darshana/RestFullApi/api/user/create.php",
    true
  );
  xmlh.setRequestHeader("Content-Type", "application/json");
  xmlh.send(
    JSON.stringify({ UserId, Name, Username, Password, Gender, JoinedDate })
  );
  xmlh.onload = () => {
    console.log(xmlh.response);
  };
};

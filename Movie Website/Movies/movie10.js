// Checking For Seats In localStorage
if (localStorage.getItem("seats10") === null) {
  localStorage.setItem("seats10", "[]");
} 
else {
  let item = JSON.parse(localStorage.getItem("seats10"));
  for (let key in item) {
    // (item[key]);
    let id = document.getElementById(item[key]);
    let para = id.childNodes[1];
    let para_2 = id.childNodes[3];
    id.style.backgroundColor = "red";
    para_2.style.display = "none";
    para.style.display = "block";
    id.style.pointerEvents = "none";
  }
}

// Seats Validation Function
const onSeat = (event) => {
  event.style.backgroundColor = "green";
  let para = event.childNodes[3];
  para.style.display = "block";
  let old_data = JSON.parse(localStorage.getItem("seats10"));
  old_data.push(event.getAttribute("id"));
  localStorage.setItem("seats10", JSON.stringify(old_data));
};
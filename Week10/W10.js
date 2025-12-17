 document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  const name = document.getElementById("name").value;
  const score = Number(document.getElementById("score").value); 
  if (name && score) {
    const studentDiv = document.createElement("div");
    studentDiv.classList.add("student-item");
    const color = score >= 5 ? "blue" : "red"; 
    studentDiv.innerHTML = `<span style="color: ${color};">${name} - ${score} điểm</span>`;
    document.getElementById("studentList").appendChild(studentDiv);
    document.getElementById("name").value = "";
    document.getElementById("score").value = "";
  } else {
    alert("Vui lòng nhập đầy đủ thông tin!");
  }
});
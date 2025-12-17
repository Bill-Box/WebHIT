const h1Elements = document.getElementsByTagName("h3");
console.log(h1Elements);
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const poin = Number(document.getElementById("score").value);
    if(name && poin){
        const list = document.createElement("p");
        list.classList.add("student-item");
        const color = poin >= 5 ? "blue" : "red";
        list.innerHTML = `<span style="color: ${color};">${name} - ${poin} điểm</span>`;
        document.getElementById("studentList").appendChild(list);
        document.getElementById("name").value = "";
        document.getElementById("score").value = "";
    }
    else{
        alert("Vui long nhap day du thong tin!");
    }
});

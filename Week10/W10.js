
const h1Elements = document.getElementsByTagName("h3");
console.log(h1Elements);
let o = h1Elements.length;
// let ha="Hello DOM";
// console.log(ha);
// h1Elements[0].style.color = "red";
// h1Elements[0].style.backgroundColor = "yellow";
// h1Elements[0].innerText = "Hello DOM Manipulation";
// const newTitle = document.createElement("h1");
// newTitle.innerText = "New Title";
// document.body.appendChild(newTitle);
let list=[];
let element = [];
// let title = document.createElement("h1");
//       title.className = "title";
//       title.style.fontSize = "24px";
//       title.textContent = "Creating HTML element DOM Day 2";
//       document.body.appendChild(title);
while(true){ 
    let Them =Number(prompt("Chon 1 de add:\nChon 2 de show:\nChon 3 de Exit:\n"));
    if(Them == 1){ 
        let name=prompt("Nhap ten: ");
        console.log("Name: ", name);
        let Poin=prompt("Nhap Poin: ");
        console.log("Poin: ", Poin);
        element.push(name);
        element.push(Poin);
        list.push(element);
        console.log("Them Thanh Cong: ", element);
        alert("Them Thanh Cong: " + name + " - " + Poin);
        let title = document.createElement("h3");
        title.className = "title";
        title.style.fontSize = "30px";
        if(Poin >= 5){
            title.style.color = "blue";
        }
        else{
            title.style.color = "red";
        }
        title.textContent = "Tên: " + name + " - " + "Điểm: "+ Poin;
         document.body.appendChild(title);
    } 
    else if(Them == 2){
        if(list.length == 0){
            console.log("Mang Rong Khong the Show!");
            alert("Mang Rong Khong the Show!");
        } 
        else{
            o++;
            console.log("Mang:\n");
            for(let i of list){
                alert(i[0] + " - " );
                console.log(i[0] + " - ");
                let title = document.createElement("h3");
                title.className = "title";
                title.style.fontSize = "20px";
                title.textContent = "Mang Rong Khong the Show!" ;
            }
        }
    }
    else if(Them == 3){
        console.log("Thoat Thanh Cong!");
        alert("Cảm ơn đã sử dụng chương trình. Tạm biệt!");
        break;
    }
     
}
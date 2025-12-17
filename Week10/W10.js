
// const h1Elements = document.getElementsByTagName("h3");
// console.log(h1Elements);
// let o = h1Elements.length;
// // let ha="Hello DOM";
// // console.log(ha);
// // h1Elements[0].style.color = "red";
// // h1Elements[0].style.backgroundColor = "yellow";
// // h1Elements[0].innerText = "Hello DOM Manipulation";
// // const newTitle = document.createElement("h1");
// // newTitle.innerText = "New Title";
// // document.body.appendChild(newTitle);
// let list=[];
// let element = [];
// // let title = document.createElement("h1");
// //       title.className = "title";
// //       title.style.fontSize = "24px";
// //       title.textContent = "Creating HTML element DOM Day 2";
// //       document.body.appendChild(title);
// mainLoop:
// while(true){ 
//     const Them =Number(prompt("Chon 1 de add:\nChon 2 de show:\n Chon 3 remove:\nChon 4 de Exit:\n"));
//     switch(Them){
//         case 1:{ 
//        const name = (prompt("Nhap ten:") || "").trim();
//        console.log("Name: ", name);
//       const Poin = Number(prompt("Nhap Poin:"));
//       console.log("Poin: ", Poin);
//       const element = [name, Poin];
//       list.push(element);
//       console.log("List: ", list);
//       const title = document.createElement("h3");
//       title.style.fontSize = "30px";
//       title.style.color = (Poin >= 5) ? "blue" : "red";
//       title.textContent = `Tên: ${name} - Điểm: ${Poin}`;
//       document.body.appendChild(title);

//       alert("Them Thanh Cong: " + name + " - " + Poin);
//       break;
//     } 
//     case 2:{
//         if (list.length === 0) {
//         alert("Mang Rong Khong the Show!");
//       } else {
//         for (const item of list) {
          
//           const title = document.createElement("h3");
//             title.style.fontSize = "30px";
//             title.style.color = (item[1] >= 5) ? "blue" : "red";
//             title.textContent = `Tên: ${item[0]} - Điểm: ${item[1]}`;
//             document.body.appendChild(title);
//         }
//       }
//       break;  
//     }
//     case 3:{
//         if(list.length == 0){
//             console.log("Mang Rong Khong the Xoa!");
//             alert("Mang Rong Khong the Xoa!");
//         }
//         else{
//             let removename = prompt("Ten muon xoa: "); 
//             console.log("Ten muon xoa: ", removename);
//             removename = removename.trim();
//             let found = false;
//             const ar = document.querySelectorAll('h3');
//             for(let i = 0; i < list.length ; i++){
//                 if( removename === list[i][0] ){
//                     list.splice(i,1);
//                     found = true;
//                     console.log("Xoa ten Thanh Cong: " , removename);
//                     alert("Xoa ten Thanh Cong: " + removename);
//                     break;
//                 }
//             } 
//             break;
//         }
//     }
//      case 4:
//          break mainLoop;
//     default:
//       alert("Lua chon khong hop le!");
//     }  
// }
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


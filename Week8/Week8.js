const chuoi = ["Hoang", "Dep", "Trai"];
for (const i of chuoi){
    console.log(i);
}
const l = "Heloo World";
console.log(l);
let chuoi1 = "Choao ban!";
//let input = prompt("Nhap chuoi: ");
//console.log(input);
//alert("Chuoi vua nhap la: " + input);
let chuoi2 = "Chao toi";
console.log("Chuoi viet hoa: " + chuoi2);
console.log( chuoi1 === chuoi2 ? "Chuoi giong nhau" : "Chuoi khac nhau");
console.log(`Do dai chuoi 1: ${chuoi1.length}`);
let so = "10";
console.log(`so chuoi ${so}`);
console.log(`so chuoi kieu: ${typeof so}`);
let so2 = Number(so);
console.log(`so2 ${so2}`);
console.log(`so2 kieu: ${typeof so2}`);
let fruit = prompt("Nhap ten trai cay: ");
alert(`Ten trai cay vua nhap la: ${fruit}`); 
console.log(`Ten trai cay vua nhap la: ${fruit}`);
switch(fruit){
    case "Cam":
        console.log("Day la trai cam");
        break;
    case "Tao":
        console.log("Day la trai tao");
        break;
    default:
        console.log("Khong biet trai nay");
}
let fruitlike = prompt("Ban thich trai cay gi?");
if(fruitlike === "Cam"){
    console.log("Ban thich trai cam"); 
}
else if(fruitlike === "Tao"){
    console.log("Ban thich trai tao");
}
let n = {name: fruitlike, age: 20};
console.log("Object n: ", n);
let age1 = 18;
let age2 = 18;
console.log("Age1: ", age1);
console.log(age1 == age2 ? "Bang nhau" : "Khac nhau");
console.log(age1 === age2 ? "Bang nhau" : "Khac nhau");
let c = 10;
console.log("So Chan:\n");
for (let i  = 0; i <= c ; i++ ){
    if(i % 2 == 0) 
        console.log(i);
    else continue;
}
let arr=[1,2,3,4];
let count = 4;
console.log("Chon 1 de add\nchon 2 de show:\nchon 3 de remove:\nchon 4 de Exit:\n");
let choice;
console.log("Chon: ", choice);
const MAX = 100;
while(true){
    choice =prompt("Chon: ");
    if(choice == 1){
            let pt =prompt("Ptu ", count , " : ");
              console.log("Ptu ", count  , " : ", pt);
              arr.push(pt);
              console.log("Them Thanh COng Ptu: ",pt);
              count++;
    }
    else if( choice == 2){
        if ( arr.length == 0){
            console.log("Mang Rong Khong the SHow!");
        }
        else{
            console.log("Mang :\n");
            for(let i of arr){
                console.log("Ptu ", i);
            }
        }
    }
    else if(choice == 3){
        if( arr.length == 0){
            console.log("Mang rong KHong the xoa!");
        }
        else {
        let dele = prompt("Ban muon xoa vi tri: ");
        console.log("Vi tri muon xoa: ", dele);
        for(let i = 0; i < arr.length ; i++){
            if( dele == i){
                arr[i].dele;
            }
        }
        console.log("Xoa Thanh COng Vi tri: " , dele);
        }
    }
    else if (choice == 4) {
        console.log("Thoat Thanh Cong!");
        break;
    }
}
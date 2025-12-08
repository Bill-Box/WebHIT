let todoList=["Ban Hang", "Ban Dat", "Ve Tranh"];
let count = 0;
alert("Chon 1 de add:\nchon 2 de show:\nchon 3 de Edit:\nchon 4 de Exit:\n");
let choice;
console.log("Chon: ", choice);
let dem = 0;
while(true){
    choice =prompt("Chon: ");
    if(choice == 1){
            let namejobs =prompt("Ten jobs news:");
              console.log("NameJobs: ", namejobs);
              todoList.push(namejobs);
              console.log("Them Thanh Cong Jobs: ", namejobs);
              count++;
    }
    else if( choice == 2){
        if ( todoList.length == 0){
            console.log("Mang Rong Khong the SHow!");
        }
        else{
            console.log("Mang :\n");
            for(let i of todoList){
                alert(i);
            }
        }
    }
    else if(choice == 3){
        if( todoList.length == 0){
            console.log("Mang rong KHong ton tai");
        }
        else {
        let editname = prompt("Ten Jobs muon sua: ");
        console.log("Ten muon sua: ", editname);
        for(let i = 0; i < todoList.length ; i++){
            if( editname === todoList[i] ){
                todoList[i] = prompt("Ten muon sua: ");
            }
            else{
                dem = dem + 1;
            }
        }
        if(dem == 0){
            console.log("Sua ten Thanh Cong: " , editname);
            alert("Sua ten Thanh Cong: " , editname);
        }
        else{
            console.log("Khong tim thay ten!\n");
            alert("Khong tim thay ten!\n");
        }
        }
    }
    else if (choice == 4) {
        console.log("Thoat Thanh Cong!");
        alert("Cảm ơn đã sử dụng chương trình. Tạm biệt!");
        break;
    }
}
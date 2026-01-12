const movies = [
  {
    title: "Hẹn Ước Mùa Hè",
    year: 2024,
    episodes: 16,
    tag: "Học đường",
    desc: "Hai người bạn cũ gặp lại và chữa lành những tổn thương tuổi trẻ.",
    poster: "https://bazaarvietnam.vn/wp-content/uploads/2022/09/harper-bazaar-nhung-bo-phim-ngon-tinh-han-quoc-hay-nhat-1.jpg--e1662690678164.jpg"
  },
  {
    title: "Cưới Trước, Yêu Sau",
    year: 2023,
    episodes: 24,
    tag: "Tổng tài",
    desc: "Hợp đồng hôn nhân kéo hai con người xa lạ lại gần nhau.",
    poster: "https://tse4.mm.bing.net/th/id/OIP.rz5fPnlwOfxQi365JuDV9QHaEK?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "Nhịp Tim Nơi Công Sở",
    year: 2022,
    episodes: 12,
    tag: "Công sở",
    desc: "Tình yêu nảy nở giữa những lần đối đầu trong công việc.",
    poster: "https://tse1.mm.bing.net/th/id/OIP.AIRdSzXWfzKk8fLEIKQC3AHaEK?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "Gặp Em Ở Ga Cuối",
    year: 2021,
    episodes: 10,
    tag: "Tái hợp",
    desc: "Cuộc gặp định mệnh sau nhiều năm xa cách.",
    poster: "https://th.bing.com/th/id/OIP.A8h-0jGdz_GPKgT8bVW8IgHaD4?w=301&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.8&pid=1.7&rm=3&defcache=1"
  },
  {
    title: "Định Mệnh Bên Thềm Nhà",
    year: 2020,
    episodes: 20,
    tag: "Đời thường",
    desc: "Tình yêu nhẹ nhàng giữa hai người hàng xóm.",
    poster: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/165597/Originals/phim-tinh-cam-han-quoc-hay-nhat-17-min.jpg"
  },
  {
    title: "Bí Mật Của Nụ Hôn",
    year: 2019,
    episodes: 18,
    tag: "Drama",
    desc: "Một nụ hôn vô tình kéo theo chuỗi bí mật bị che giấu.",
    poster: "https://6.soompi.io/wp-content/uploads/image/20240818211219_Chae-Jong-Hyeop-Kim-So-Hyun.jpg?s=900x600&e=t"
  },
  {
    title: "Lời Hứa Trong Mưa",
    year: 2022,
    episodes: 14,
    tag: "Lãng mạn",
    desc: "Hai con người lạc lối tìm thấy nhau dưới cơn mưa định mệnh.",
    poster: "https://image.tmdb.org/t/p/original/nrQXcHwJSG6ZfHOT1MEsI9onM8D.jpg"
  },
  {
    title: "Yêu Em Từ Ánh Nhìn Đầu Tiên",
    year: 2023,
    episodes: 22,
    tag: "Thanh xuân",
    desc: "Tình yêu bắt đầu từ ánh nhìn và lớn lên cùng năm tháng.",
    poster: "https://tse1.explicit.bing.net/th/id/OIP.Mbwi6lmhpNen1_OVaQigHQHaE8?cb=defcache2defcache=1&w=900&h=600&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "Ngày Anh Đến",
    year: 2020,
    episodes: 12,
    tag: "Chữa lành",
    desc: "Sự xuất hiện của anh làm thay đổi cuộc đời cô mãi mãi.",
    poster: "https://tiki.vn/blog/wp-content/uploads/2023/11/GhSlnkm7UjkxAHLIhcvDsQsqcDN6sOugvm7u_0nLCS02OGm4eJSy0Jw5_NoR0lyFAB7oKJ54cACdtkZCb0vfUiaPTFuWRSLZ-EpepzM0Eq8uqnzFZjv3t7jHfNxdzTTDCU7CgFN6UIoXr3rz4SN15CM.jpg"
  },
  {
    title: "Khoảng Cách Năm Tháng",
    year: 2021,
    episodes: 15,
    tag: "Xa cách",
    desc: "Tình yêu bị thử thách bởi thời gian và khoảng cách.",
    poster: "https://th.bing.com/th/id/OIP.VjmF67WrrzceXd75DkPjlAHaEK?w=231&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.8&pid=1.7&rm=3&defcache=1"
  },
  {
    title: "Hương Vị Tình Yêu",
    year: 2023,
    episodes: 20,
    tag: "Ẩm thực",
    desc: "Tình yêu nảy nở giữa những món ăn và ký ức.",
    poster: "https://tse3.mm.bing.net/th/id/OIP.-k_jMIvwR2X090ThmGY3agHaEK?cb=defcache2defcache=1&w=960&h=540&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "Chạm Vào Tim Em",
    year: 2024,
    episodes: 18,
    tag: "Lãng mạn",
    desc: "Câu chuyện ngọt ngào về những trái tim từng tổn thương.",
    poster: "https://www.elle.vn/wp-content/uploads/2018/10/18/phim-tinh-cam-han-quoc-3.jpg"
  }
];


const grid = document.getElementById("movieGrid");
const search = document.getElementById("search");
const empty = document.getElementById("empty");
const count = document.getElementById("count");

function normalize(s){
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function render(list){
  grid.innerHTML = "";
  list.forEach(m => {
    const card = document.createElement("div");
    card.className = "card";

    // poster ảnh nền
    card.innerHTML = `
      <div class="poster" style="background-image:url('${m.poster}')">
        <div class="badge">${m.tag}</div>
      </div>
      <div class="info">
        <h3 class="name">${m.title}</h3>
        <div class="meta">${m.year} • ${m.episodes} tập</div>
        <p class="desc">${m.desc}</p>
      </div>
    `;

    grid.appendChild(card);
  });

  count.textContent = `${list.length} phim`;
  empty.style.display = list.length === 0 ? "block" : "none";
}

// Search realtime
search.addEventListener("input", () => {
  const q = normalize(search.value.trim());
  const filtered = movies.filter(m =>
    normalize(m.title).includes(q) ||
    normalize(m.tag).includes(q) ||
    normalize(m.desc).includes(q)
  );
  render(filtered);
});

// Init
render(movies);

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
const cartoons = [
  {
    title: "Your Name",
    year: 2016,
    episodes: "Movie",
    tag: "Lãng mạn",
    desc: "Câu chuyện hoán đổi thân xác đầy cảm xúc giữa hai người trẻ.",
    poster: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png"
  },
  {
    title: "Spirited Away",
    year: 2001,
    episodes: "Movie",
    tag: "Phiêu lưu",
    desc: "Cô bé lạc vào thế giới linh hồn kỳ bí.",
    poster: "https://tse4.mm.bing.net/th/id/OIP.W6QP2lJGBmdLZmqpeErZsgHaHn?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "Doraemon",
    year: 1979,
    episodes: "Series",
    tag: "Tuổi thơ",
    desc: "Chú mèo máy đến từ tương lai và những bảo bối thần kỳ.",
    poster: "https://th.bing.com/th/id/OIP.D8ijxxL_oMg_PAZBygGKkAHaES?w=274&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3"
  },
  {
    title: "Weathering With You",
    year: 2019,
    episodes: "Movie",
    tag: "Lãng mạn",
    desc: "Tình yêu và thời tiết gắn liền với số phận Tokyo.",
    poster: "https://tse3.mm.bing.net/th/id/OIP.2RnsW52nYoQw6kg3RhXdvQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "Howl's Moving Castle",
    year: 2004,
    episodes: "Movie",
    tag: "Giả tưởng",
    desc: "Câu chuyện tình yêu trong thế giới phép thuật.",
    poster: "https://img2.thuthuat123.com/uploads/2020/07/30/lau-dai-di-dong-cua-howl-howls-moving-castle-2004_111336183.jpg"
  },
  {
    title: "Toy Story",
    year: 1995,
    episodes: "Movie",
    tag: "Gia đình",
    desc: "Những món đồ chơi có cảm xúc như con người.",
    poster: "https://tse2.mm.bing.net/th/id/OIP.msNU-Ei1Pp3-cIIX89ZcCQHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "Frozen",
    year: 2013,
    episodes: "Movie",
    tag: "Công chúa",
    desc: "Hành trình tình thân giữa hai chị em.",
    poster: "https://tse2.mm.bing.net/th/id/OIP.l9ixhXyza5fOjUc76KL21wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "Kung Fu Panda",
    year: 2008,
    episodes: "Movie",
    tag: "Hài hước",
    desc: "Chú gấu trúc vụng về trở thành cao thủ kungfu.",
    poster: "https://tse3.mm.bing.net/th/id/OIP.QhgjdDJGPJlx62yAr3uYcgHaE0?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "Detective Conan",
    year: 1996,
    episodes: "Series",
    tag: "Trinh thám",
    desc: "Thám tử học sinh bị teo nhỏ phá án.",
    poster: "https://tse1.mm.bing.net/th/id/OIP.OKoXlEfgoqoSm4FWsu9_GwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "Up",
    year: 2009,
    episodes: "Movie",
    tag: "Chữa lành",
    desc: "Chuyến phiêu lưu đầy cảm xúc của ông lão và cậu bé.",
    poster: "https://static.tuoitre.vn/tto/i/s626/2009/07/14/c11YnyKn.jpg"
  },
  {
    title: "Zootopia",
    year: 2016,
    episodes: "Movie",
    tag: "Xã hội",
    desc: "Thành phố động vật với nhiều thông điệp sâu sắc.",
    poster: "https://images.alphacoders.com/703/thumb-1920-703943.jpg"
  },
  {
    title: "One Piece",
    year: 1999,
    episodes: "Series",
    tag: "Phiêu lưu",
    desc: "Hành trình trở thành Vua Hải Tặc.",
    poster: "https://tse3.mm.bing.net/th/id/OIP.zucHf6V9DG9ybeYiEIFn1gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];


const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("search");
const emptyText = document.getElementById("empty");
const countText = document.getElementById("count");

function renderMovies(list) {
  movieGrid.innerHTML = "";

  if (list.length === 0) {
    emptyText.style.display = "block";
    countText.innerText = "0 phim";
    return;
  }

  emptyText.style.display = "none";

  list.forEach(function (movie) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="poster" style="background-image: url('${movie.poster}')">
        <div class="badge">${movie.tag}</div>
      </div>
      <div class="info">
        <h3 class="name">${movie.title}</h3>
        <div class="meta">${movie.year} • ${movie.episodes} tập</div>
        <p class="desc">${movie.desc}</p>
      </div>
    `;

    movieGrid.appendChild(card);
  });

  countText.innerText = list.length + " phim";
}

searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.toLowerCase(); 
  const result = [];

  movies.forEach(function (movie) {
    if (movie.title.toLowerCase().includes(keyword)) {
      result.push(movie);
    }
  });

  renderMovies(result);
});

renderMovies(movies);
const cartoonGrid = document.getElementById("cartoonGrid");
const searchCartoon = document.getElementById("searchCartoon");
const emptyCartoon = document.getElementById("emptyCartoon");
const countCartoon = document.getElementById("countCartoon");

function renderCartoons(list) {
  cartoonGrid.innerHTML = "";

  if (list.length === 0) {
    emptyCartoon.style.display = "block";
    countCartoon.innerText = "0 phim";
    return;
  }

  emptyCartoon.style.display = "none";

  list.forEach(function (movie) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="poster" style="background-image:url('${movie.poster}')">
        <div class="badge">${movie.tag}</div>
      </div>
      <div class="info">
        <h3 class="name">${movie.title}</h3>
        <div class="meta">${movie.year} • ${movie.episodes}</div>
        <p class="desc">${movie.desc}</p>
      </div>
    `;

    cartoonGrid.appendChild(card);
  });

  countCartoon.innerText = list.length + " phim";
}

searchCartoon.addEventListener("input", function () {
  const keyword = searchCartoon.value.toLowerCase();
  const result = [];

  cartoons.forEach(function (movie) {
    if (movie.title.toLowerCase().includes(keyword)) {
      result.push(movie);
    }
  });

  renderCartoons(result);
});

renderCartoons(cartoons);

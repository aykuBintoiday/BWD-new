document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 0;

  const slider = document.getElementById('slider');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const tooltip = document.getElementById("tooltip");

  // ======= Slide chuyển trang =======
  if (!nextBtn || !prevBtn) {
    console.error("Không tìm thấy nút điều hướng");
    return;
  }

  nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlide();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlide();
    }
  });

  function updateSlide() {
    const offset = currentSlide * -100;
    slider.style.transform = `translateX(${offset}vw)`;

    if (tooltip) tooltip.style.display = "none";

    const gioithieu = document.querySelector('.page1 .gioithieu');
    const muctieu = document.querySelector('.page1 .muctieu');
    const traidat = document.querySelector('.page1 .traidat');

    if (gioithieu) gioithieu.style.animation = "none";
    if (muctieu) muctieu.style.animation = "none";
    if (traidat) traidat.style.animation = "none";

    if (currentSlide === 1) {
      setTimeout(() => {
        if (gioithieu) gioithieu.style.animation = "slideInLeft 1.2s ease forwards";
        if (muctieu) muctieu.style.animation = "slideInRight 1.2s ease forwards";
        if (traidat) traidat.style.animation = "fadeIn 1.2s ease forwards, rotateEarth 25s linear infinite";
      }, 100);
    }
  }

  updateSlide(); // Run lúc đầu

  // ======= DỮ LIỆU DU LỊCH XANH =======
  const provinceData = {
laichau: {
  name: ["Lai Châu"],
  face: ["./assets/imgbando/laichauface.png"],
  images: ["./assets/imgbando/laichau2.png",
           "./assets/imgbando/laichau1.png",
           "./assets/imgbando/laichau3.png",
           "./assets/imgbando/laichau4.png",
           "./assets/imgbando/laichau5.png",
           "./assets/imgbando/laichau6.png"
    ],
  locations: ["Lai Châu, một tỉnh vùng cao Tây Bắc Việt Nam, nổi bật với vẻ đẹp hoang sơ và hùng vĩ của thiên nhiên, là điểm đến lý tưởng cho những ai yêu thích du lịch sinh thái và khám phá. Những khu du lịch tự nhiên ở đây mang đến trải nghiệm độc đáo với khung cảnh núi non trùng điệp, thác nước kỳ vĩ và không khí trong lành. Du khách có thể chinh phục đỉnh Pu Ta Leng – nóc nhà thứ hai của Đông Dương, ngắm biển mây bồng bềnh tại đèo Ô Quy Hồ, hay đắm mình trong vẻ thơ mộng của đồi chè Tân Uyên. Bên cạnh đó, cao nguyên Sìn Hồ và bản Sì Thâu Chải cũng là nơi lưu giữ bản sắc văn hóa các dân tộc thiểu số, mang đến hành trình hòa mình giữa thiên nhiên và con người. Lai Châu không chỉ là nơi thư giãn mà còn là miền đất khơi dậy đam mê chinh phục và trải nghiệm chân thực với thiên nhiên nguyên sơ."]
  },
laocai: {
  name: ["Lào Cai"],
  face: ["./assets/imgbando/laocai1.png"],
  images: ["./assets/imgbando/laocai1.png",
           "./assets/imgbando/laocai2.png",
           "./assets/imgbando/laocai3.png",
           "./assets/imgbando/laocai4.png",
           "./assets/imgbando/laocai5.png",
           "./assets/imgbando/laocai6.png"],
  locations: ["Lào Cai là vùng đất nổi tiếng với vẻ đẹp thiên nhiên hùng vĩ và nền văn hóa đặc sắc của các dân tộc miền núi phía Bắc. Nơi đây sở hữu nhiều khu du lịch tự nhiên kỳ thú như đỉnh Fansipan – nóc nhà Đông Dương, thung lũng Mường Hoa thơ mộng, và thác Bạc trắng xóa giữa núi rừng. Sapa – trái tim du lịch của Lào Cai, không chỉ hấp dẫn bởi cảnh sắc bốn mùa thay đổi mà còn bởi những bản làng như Cát Cát, Tả Van mang đậm bản sắc người H’mông, Dao. Bên cạnh đó, rừng nguyên sinh Hoàng Liên hay hang Tiên huyền bí cũng là điểm đến hấp dẫn cho những ai yêu khám phá. Lào Cai mang đến cho du khách hành trình hòa mình vào thiên nhiên hoang sơ, tận hưởng không khí trong lành và tìm về những giá trị văn hóa nguyên bản nơi vùng cao."]
  },
hagiang: {
  name: ["Hà Giang"],
  face: ["./assets/imgbando/hagiang1.png"],
  images: ["./assets/imgbando/hagiang1.png",
           "./assets/imgbando/hagiang2.png",
           "./assets/imgbando/hagiang3.png",
           "./assets/imgbando/hagiang4.png",
           "./assets/imgbando/hagiang5.png",
           "./assets/imgbando/hagiang6.png"],
  locations: ["Hà Giang, vùng đất địa đầu Tổ quốc, là nơi lưu giữ những giá trị nguyên sơ và hùng vĩ nhất của thiên nhiên miền núi phía Bắc Việt Nam. Với cao nguyên đá Đồng Văn được UNESCO công nhận là Công viên địa chất toàn cầu, Hà Giang nổi bật với những dãy núi đá tai mèo kỳ vĩ, những con đèo uốn lượn như Mã Pí Lèng – nơi được mệnh danh là “thiên hạ đệ nhất đèo”. Bên cạnh đó, những bản làng cổ kính như Lũng Cú, Sủng Là hay Đồng Văn mang đậm nét văn hóa của các dân tộc H'Mông, Lô Lô, Tày… làm say lòng du khách. Hà Giang cũng là nơi mà mùa hoa tam giác mạch phủ tím khắp núi đồi, tạo nên bức tranh thơ mộng giữa thiên nhiên hoang dại. Du lịch Hà Giang không chỉ là hành trình khám phá cảnh sắc tuyệt đẹp, mà còn là chuyến đi tìm về sự mộc mạc, chân thành và đậm đà bản sắc vùng cao."]
  },
caobang: {
  name: ["Cao Bằng"],
  face: ["./assets/imgbando/caobang1.png"],
  images: ["./assets/imgbando/caobang1.png",
           "./assets/imgbando/caobang2.png",
           "./assets/imgbando/caobang3.png",
           "./assets/imgbando/caobang4.png",
           "./assets/imgbando/caobang5.png",
           "./assets/imgbando/caobang6.png"],
  locations: ["Cao Bằng – mảnh đất địa đầu phía Đông Bắc Tổ quốc – là nơi hội tụ vẻ đẹp thiên nhiên hoang sơ, hùng vĩ cùng bề dày lịch sử cách mạng. Vùng đất này nổi bật với thác Bản Giốc – một trong những thác nước tự nhiên lớn và đẹp nhất Đông Nam Á, nơi dòng Quây Sơn chia đôi biên giới Việt – Trung đổ xuống giữa núi rừng xanh thẳm. Không chỉ có Bản Giốc, Cao Bằng còn sở hữu động Ngườm Ngao kỳ vĩ, hồ Thang Hen trong xanh, núi Mắt Thần độc đáo và Công viên địa chất Non Nước được UNESCO công nhận. Bên cạnh đó, nơi đây còn ghi dấu những địa danh lịch sử thiêng liêng như Pác Bó, suối Lê-nin, hang Cốc Bó – nơi Chủ tịch Hồ Chí Minh từng sống và làm việc trong những năm đầu về nước. Du lịch Cao Bằng là hành trình trở về với thiên nhiên nguyên sơ và nguồn cội lịch sử, để lắng nghe tiếng vọng của đất trời và hun đúc tình yêu quê hương, đất nước."]
  },
sonla: {
  name: ["Sơn La"],
  face: ["./assets/imgbando/sonla1.png"],
  images: ["./assets/imgbando/sonla1.png",
           "./assets/imgbando/sonla2.png",
           "./assets/imgbando/sonla3.png",
           "./assets/imgbando/sonla4.png",
           "./assets/imgbando/sonla5.png",
           "./assets/imgbando/sonla6.png"],
  locations: ["Sơn La – vùng đất miền núi Tây Bắc thơ mộng – là nơi hội tụ vẻ đẹp hùng vĩ của thiên nhiên và đậm đà bản sắc văn hóa dân tộc. Nơi đây nổi tiếng với cao nguyên Mộc Châu rộng lớn, được ví như “Đà Lạt thứ hai” với những đồi chè xanh mướt, thung lũng mận trắng mỗi độ xuân về và khí hậu trong lành quanh năm. Không chỉ có Mộc Châu, Sơn La còn hấp dẫn bởi những kỳ quan như hang Dơi, thác Dải Yếm, hay bản Áng thanh bình bên rừng thông vi vút. Du khách đến đây còn có cơ hội trải nghiệm đời sống văn hóa độc đáo của các dân tộc Thái, Mông, Dao, với những lễ hội rộn ràng và ẩm thực đậm đà. Với thiên nhiên trù phú và con người thân thiện, Sơn La là điểm đến lý tưởng cho những ai yêu thích du lịch sinh thái, nghỉ dưỡng và khám phá văn hóa vùng cao."]
  },
yenbai: {
  name: ["Yên Bái"],
  face: ["./assets/imgbando/yenbai1.png"],
  images: ["./assets/imgbando/yenbai1.png",
           "./assets/imgbando/yenbai2.png",
           "./assets/imgbando/yenbai3.png",
           "./assets/imgbando/yenbai4.png",
           "./assets/imgbando/yenbai5.png",
           "./assets/imgbando/yenbai6.png"],
  locations: ["Yên Bái, một tỉnh miền núi phía Tây Bắc Việt Nam, là điểm đến lý tưởng cho những ai yêu thích khám phá thiên nhiên hoang sơ và văn hóa đa dạng. Với địa hình được kiến tạo bởi ba dãy núi lớn: Hoàng Liên Sơn, núi Con Voi và núi Đá Vôi, Yên Bái sở hữu nhiều thắng cảnh nổi bật như ruộng bậc thang Mù Cang Chải – di tích quốc gia nổi tiếng với vẻ đẹp kỳ vĩ, đặc biệt vào mùa lúa chín từ tháng 9 đến tháng 10. Cánh đồng Mường Lò, lòng chảo lớn thứ hai Tây Bắc, là nơi sinh sống của nhiều dân tộc như Thái, Mông, Mường, tạo nên bức tranh văn hóa đa sắc màu. Đèo Khau Phạ, một trong Tứ Đại Đỉnh Đèo của Việt Nam, hấp dẫn du khách bởi những khúc cua ngoạn mục và cảnh sắc mây trời huyền ảo. Ngoài ra, hồ Thác Bà – hồ nhân tạo lớn nhất Việt Nam với hơn 1.300 đảo lớn nhỏ – là nơi lý tưởng cho các hoạt động du lịch sinh thái và nghỉ dưỡng. Yên Bái còn nổi tiếng với các lễ hội truyền thống như Lễ hội Mường Lò, Lễ hội đền Đông Cuông, góp phần bảo tồn và phát huy giá trị văn hóa địa phương. Với sự kết hợp hài hòa giữa thiên nhiên hùng vĩ và bản sắc văn hóa phong phú, Yên Bái hứa hẹn mang đến cho du khách những trải nghiệm khó quên."]
  },
tuyenquang: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
langson: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
quangninh: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
hoabinh: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
hatay: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
ninhbinh: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
thaibinh: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
thanhhoa: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
nghean: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
hatinh: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
quangbinh: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
quangtri: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
thuathienhue: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
quangnam: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
kontum: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
gialai: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
binhdinh: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
phuyen: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
daklak: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
khanhhoa: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
lamdong: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
ninhthuan: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
tayninh: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
dongnai: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
binhthuan: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
longan: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
bariavungtau: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
angiang: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
dongthap: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
tiengiang: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
kiengiang: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
vinhlong: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
bentre: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
travinh: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
soctrang: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
backan: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
bacgiang: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
baclieu: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
bacninh: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
binhduong: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
binhphuoc: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
camau: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
haiduong: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
hanam: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
hungyen: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
namdinh: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
phutho: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
thainguyen: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
vinhphuc: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
dienbien: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
daknong: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
haugiang: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
cantho: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
danang: {
  name: ["Đà Nẵng"],
  face: ["./assets/imgbando/danang1.png"],
  images: ["./assets/imgbando/danang1.png",
           "./assets/imgbando/danang2.png",
           "./assets/imgbando/danang3.png",
           "./assets/imgbando/danang4.png",
           "./assets/imgbando/danang5.png",
           "./assets/imgbando/danang6.png"],
  locations: ["Bán đảo Sơn Trà", "Khu du lịch sinh thái Suối Hoa", "Khu du lịch sinh thái Ngầm Đôi", "Công viên suối khoáng nóng Núi Thần Tài", "Suối Mơ Hòa Bắc", "Khu du lịch sinh thái Hòa Phú Thành", "Khu du lịch sinh thái Nam Ô", "Yên Retreat", "Khu du lịch sinh thái Suối Lương", "Giếng Trời"]
  },
hanoi: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
haiphong: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  },
hochiminh: {
  name: [],
  face: [],
  images: [ ],
  locations: [ ]
  }
  };

  // ======= BẢN ĐỒ SVG - hover, tooltip, click =======
  let currentActivePath = null;
  const paths = document.querySelectorAll('.map-container svg path');

  paths.forEach(path => {
    const id = path.getAttribute('id');                         // dùng để tra cứu dữ liệu
    const name = path.getAttribute('name') || path.getAttribute('id') || "Không rõ"; // tên hiển thị (tiếng Việt)

    // Hover
    path.addEventListener("mouseenter", () => {
      if (currentActivePath && currentActivePath !== path) {
        currentActivePath.classList.remove("active");
      }
      path.classList.add("active");
      currentActivePath = path;

      if (tooltip) {
        tooltip.style.display = "block";
        tooltip.innerText = name;
      }
    });

    path.addEventListener("mousemove", (e) => {
      if (tooltip) {
        tooltip.style.left = e.pageX + 10 + "px";
        tooltip.style.top = e.pageY + 10 + "px";
      }
    });

    path.addEventListener("mouseleave", () => {
      if (tooltip) tooltip.style.display = "none";
    });

    // Click để hiển thị hình ảnh + danh sách
    path.addEventListener("click", () => {
      const info = provinceData[id];
      if (info) {
        // === Hiển thị hình ảnh ===
        const imageDiv = document.getElementById("infoImages");
        imageDiv.innerHTML = "<h3>Hình Ảnh</h3><div class='img-wrapper fade-in'></div>";
        const wrapper = imageDiv.querySelector('.img-wrapper');

        info.images.forEach(src => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = id;
          wrapper.appendChild(img);
        });

        // === Hiển thị địa điểm ===
        const listDiv = document.getElementById("infoList");
        listDiv.classList.remove("fade-in"); // reset nếu đã có
        void listDiv.offsetWidth; // trigger reflow
        listDiv.classList.add("fade-in");
        listDiv.innerHTML = "";
        info.locations.forEach(place => {
          const li = document.createElement("li");
          li.textContent = place;
          listDiv.appendChild(li);
        });

        // ======== Hiển thị ảnh đại diện (face) ========
        const daiDienDiv = document.getElementById("infoDaidien");
        if (daiDienDiv && info.face && info.face.length > 0) {
          daiDienDiv.innerHTML = `<img src="${info.face[0]}" alt="Ảnh đại diện">`;
        } else {
          daiDienDiv.innerHTML = ""; // Xóa nếu không có dữ liệu
        }

        // ======== Hiển thị tên thành phố (name) ========
        const tenDiv = document.getElementById("infoTen");
        if (tenDiv && info.name && info.name.length > 0) {
          tenDiv.innerText = info.name[0];
        } else {
          tenDiv.innerText = "";
        }
      }
    });
  });

  // Khi rời khỏi toàn bộ SVG
  const svg = document.querySelector('.map-container svg');
  if (svg) {
    svg.addEventListener("mouseleave", () => {
      if (currentActivePath) {
        currentActivePath.classList.remove("active");
        currentActivePath = null;
      }
      if (tooltip) tooltip.style.display = "none";
    });
  }

  // ======= TOGGLE HAMBURGER MENU =======
  const hamburger = document.getElementById("hamburger");
  const menuList = document.querySelector(".nav-container .list");

  if (hamburger && menuList) {
    hamburger.addEventListener("click", () => {
      menuList.classList.toggle("show");
    });
  }

    // ======== POPUP ẢNH ========
    let currentImageIndex = 0;
    let currentImageList = [];
  
    const viewer = document.getElementById("imageViewer");
    const viewerImage = document.getElementById("viewerImage");
    const closeBtn = document.getElementById("closeImage");
    const prevImageBtn = document.getElementById("prevImage");
    const nextImageBtn = document.getElementById("nextImage");
    const navButtons = document.querySelector(".nav-buttons"); // Nút điều hướng slide chính
  
    // Click ảnh nhỏ => mở popup
    document.addEventListener("click", function (e) {
      if (e.target.tagName === "IMG" && e.target.closest(".img-wrapper")) {
        const allImages = Array.from(document.querySelectorAll(".img-wrapper img"));
        currentImageList = allImages.map(img => img.src);
        currentImageIndex = allImages.indexOf(e.target);
  
        viewerImage.src = currentImageList[currentImageIndex];
        viewer.style.display = "flex";
  
        // Ẩn nav-buttons chính
        if (navButtons) navButtons.style.display = "none";
      }
    });
  
    // Đóng popup ảnh
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        viewer.style.display = "none";
  
        // Hiện lại nav-buttons chính
        if (navButtons) navButtons.style.display = "flex";
      });
    }
  
    // Ảnh trước
    if (prevImageBtn) {
      prevImageBtn.addEventListener("click", function () {
        if (!currentImageList.length) return;
        currentImageIndex = (currentImageIndex - 1 + currentImageList.length) % currentImageList.length;
        viewerImage.src = currentImageList[currentImageIndex];
      });
    }
  
    // Ảnh sau
    if (nextImageBtn) {
      nextImageBtn.addEventListener("click", function () {
        if (!currentImageList.length) return;
        currentImageIndex = (currentImageIndex + 1) % currentImageList.length;
        viewerImage.src = currentImageList[currentImageIndex];
      });
    } 
    
   // ======= XỬ LÝ TÍNH CARBON =======
   const button = document.querySelector(".btn-calculate");
   const vehicleInput = document.getElementById("vehicle");
   const distanceInput = document.getElementById("distance");
   const peopleInput = document.getElementById("people");
   const resultDiv = document.getElementById("carbonResult");
   const carbonValue = document.getElementById("carbonValue");
   const carbonImpact = document.getElementById("carbonImpact");
   const carbonSolution = document.getElementById("carbonSolution");
   const warningDiv = document.getElementById("carbonWarning");
   const closeWarning = document.getElementById("closeWarning");
   const closeResultBtn = document.getElementById("closeResult");
   const tinhCarbonDiv = document.querySelector(".tinhcarbon");
   const overlayDark = document.getElementById("overlayDark");
 
   const factors = {
     "máy bay": 0.25,
     "ô tô": 0.12,
     "xe máy": 0.09,
     "xe khách": 0.05,
     "xe buýt": 0.05,
     "tàu hỏa": 0.04,
     "xe đạp": 0,
     "đi bộ": 0,
   };

   function toggleOverlay() {
    const warningVisible = warningDiv.style.display !== "none";
    const resultVisible = resultDiv.style.display !== "none";
  
    if (warningVisible || resultVisible) {
      overlayDark.style.display = "block";
    } else {
      overlayDark.style.display = "none";
    }
  }
 
   if (button) {
     button.addEventListener("click", function (e) {
       e.preventDefault();
 
       const vehicleRaw = vehicleInput.value.trim().toLowerCase();
       const distance = parseFloat(distanceInput.value);
       const people = parseInt(peopleInput.value);
 
       if (!vehicleRaw || isNaN(distance) || isNaN(people)) {
         warningDiv.style.display = "block";
         resultDiv.style.display = "none";
         tinhCarbonDiv.classList.add("blur-background");
         return;
       }
 
       // Nếu nhập hợp lệ thì ẩn cảnh báo và tính kết quả
       warningDiv.style.display = "none";
       tinhCarbonDiv.classList.remove("blur-background");
 
       const vehicleList = vehicleRaw.split(/,| và | & |\/|;/).map(v => v.trim()).filter(Boolean);
       let totalCarbon = 0;
 
       vehicleList.forEach(vehicle => {
         const factor = factors[vehicle] ?? 0.1;
         totalCarbon += factor * distance * people;
       });
 
       const trashKg = (totalCarbon * 2).toFixed(1);
       const trees = Math.ceil(totalCarbon / 21);
 
       carbonValue.innerHTML = `
         👉 Tổng lượng khí thải CO₂: <strong>${totalCarbon.toFixed(2)} kg</strong><br>
         👉 Số phương tiện bạn đã dùng: <strong>${vehicleList.length}</strong>
       `;

      let level = "";
      if (totalCarbon < 100) {
        level = "🔵 Mức thấp – Bạn đang di chuyển khá thân thiện với môi trường đó !";
      } else if (totalCarbon < 500) {
        level = "🟠 Mức trung bình – Hãy cân nhắc các cách để giảm tác động nha !";
      } else {
        level = "🔴 Mức cao – Mức thải của bạn quá cao, hãy xem xét và khắc phục nhé !";
      }
 
       carbonImpact.innerHTML = `
        🛑 Phát thải ${totalCarbon.toFixed(2)} kg CO₂ góp phần vào ô nhiễm không khí, biến đổi khí hậu và hiệu ứng nhà kính.<br>
        <strong>${level}</strong>
        `;
 
       carbonSolution.innerHTML = `
         ✅ Để có thể khắc phục số carbon, bạn có thể:<br>
         - Thu gom khoảng <strong>${trashKg} kg</strong> rác<br>
         - Trồng ít nhất <strong>${trees} cây xanh</strong>
       `;
 
       resultDiv.style.display = "block";
       tinhCarbonDiv.classList.add("blur-background");
     });
   }
 
   // ===== Đóng cảnh báo =====
   if (closeWarning) {
     closeWarning.addEventListener("click", function () {
       warningDiv.style.display = "none";
       tinhCarbonDiv.classList.remove("blur-background");
     });
   }
 
   // ===== Đóng kết quả =====
   if (closeResultBtn) {
     closeResultBtn.addEventListener("click", function () {
       resultDiv.style.display = "none";
       tinhCarbonDiv.classList.remove("blur-background");
     });
   }

});

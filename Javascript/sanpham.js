
document.addEventListener("DOMContentLoaded", function () {
  // Lấy danh sách sản phẩm từ localStorage hoặc tạo danh sách rỗng
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Hàm render giỏ hàng
  function renderCart() {
    localStorage.setItem("cart", JSON.stringify(cart)); // Lưu vào localStorage
  }

  // Xử lý sự kiện thêm sản phẩm vào giỏ
  const addToCartButtons = document.querySelectorAll(".cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const productElement = event.target.closest(".item");
      const productName = productElement.querySelector("h2").textContent.trim();
      const productPrice = productElement.querySelector(".price").textContent.trim();
      const productImage = productElement.querySelector("img").src; // Lấy đường dẫn hình ảnh

      // Lấy size và màu từ các lựa chọn
      const selectedSize = productElement.querySelector("ul").querySelector("li.selected");
      const selectedColor = productElement.querySelector(".colors").querySelector("li.selected");

      if (!selectedSize || !selectedColor) {
        alert("Vui lòng chọn size và màu trước khi thêm vào giỏ hàng!");
        return;
      }

      const size = selectedSize.textContent;
      const color = window.getComputedStyle(selectedColor).backgroundColor;

      // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
      const existingProduct = cart.find(
        (item) => item.name === productName && item.size === size && item.color === color
      );

      if (existingProduct) {
        existingProduct.quantity += 1; // Tăng số lượng nếu sản phẩm đã có
      } else {
        // Thêm sản phẩm mới vào giỏ hàng
        cart.push({
          name: productName,
          price: productPrice,
          image: productImage, // Thêm thông tin hình ảnh
          size: size,
          color: color,
          quantity: 1,
        });
      }

      renderCart(); // Cập nhật giao diện giỏ hàng

      // Hiển thị thông báo
      alert(`Đã thêm sản phẩm "${productName}" vào giỏ hàng!`);
    });
  });

  // Đánh dấu lựa chọn size và màu
  document.querySelectorAll("ul li").forEach((li) => {
    li.addEventListener("click", function () {
      const siblings = li.parentElement.querySelectorAll("li");
      siblings.forEach((sibling) => sibling.classList.remove("selected"));
      li.classList.add("selected");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Lấy danh sách các sản phẩm
  const items = document.querySelectorAll(".product-grid .item");

  // Lấy thanh tìm kiếm
  const searchInput = document.getElementById("search-input");

  // Lắng nghe sự kiện khi người dùng nhập vào thanh tìm kiếm
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    // Lặp qua tất cả các sản phẩm và kiểm tra tên
    items.forEach((item) => {
      const productName = item.querySelector("h2").textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        item.style.display = "block"; // Hiển thị sản phẩm nếu khớp
      } else {
        item.style.display = "none"; // Ẩn sản phẩm nếu không khớp
      }
    });
  });
});

//Mua ngay
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("ucpvNgWaQb5t7FmhM"); // Thay YOUR_USER_ID bằng Public Key từ EmailJS

  const modal = document.getElementById("buy-now-modal");
  const closeButton = document.querySelector(".close-button");
  const form = document.getElementById("buy-now-form");
  const priceDisplay = document.getElementById("current-price");
  let selectedProduct = null;

  // Hiển thị modal khi nhấn "Mua Ngay"
  document.querySelectorAll(".btn-buy").forEach((button) => {
    button.addEventListener("click", function () {
      modal.style.display = "block";

      // Lấy thông tin sản phẩm
      const productElement = button.closest(".item");
      selectedProduct = productElement.querySelector("h2").textContent;

      // Lấy giá và danh sách màu từ data attributes
      const price = productElement.getAttribute("data-price");
      const colors = productElement.getAttribute("data-colors").split(",");

      // Hiển thị giá sản phẩm
      priceDisplay.textContent = `Giá: ${parseInt(price).toLocaleString("vi-VN")} VND`;

      // Cập nhật danh sách màu trong modal
      const colorSelect = document.getElementById("color");
      colorSelect.innerHTML = '<option value="">Chọn màu</option>'; // Reset danh sách
      colors.forEach((color) => {
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
      });
    });
  });

  // Đóng modal
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Gửi form và email
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy dữ liệu từ form
    const color = document.getElementById("color").value;
    const size = document.getElementById("size").value;
    const quantity = document.getElementById("quantity-input").value; // Lấy số lượng
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    if (!color || !size || !quantity || quantity < 1) {
      alert("Vui lòng chọn đầy đủ thông tin sản phẩm!");
      return;
    }

    // Gửi email qua EmailJS
    emailjs
      .send("dulichxanhastral", "template_j7ah4od", {
        product_name: selectedProduct,
        product_price: priceDisplay.textContent, // Giá sản phẩm
        product_size: size,
        product_color: color,
        quantity_input: quantity, // Số lượng
        buyer_name: name,
        buyer_phone: phone,
        buyer_address: address,
      })
      .then(
        function () {
          alert("Đặt hàng thành công! Email đã được gửi đến người bán.");
          modal.style.display = "none";
        },
        function (error) {
          console.error("Lỗi khi gửi email:", error);
          alert("Có lỗi xảy ra khi gửi email. Vui lòng thử lại.");
        }
      );
  });
});
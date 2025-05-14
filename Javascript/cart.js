document.addEventListener("DOMContentLoaded", function () {
  // Lấy danh sách sản phẩm từ localStorage hoặc tạo danh sách rỗng
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Lấy phần tử tbody để hiển thị sản phẩm
  const cartItemsContainer = document.getElementById("cart-items");

  // Lấy modal và các phần tử liên quan
  const modal = document.getElementById("order-modal");
  const closeButton = document.querySelector(".close-button");
  const orderForm = document.getElementById("order-form");

  // Biến lưu trạng thái sản phẩm được mua
  let selectedProductIndex = null; // null khi mua tất cả

  // Hàm hiển thị modal
  function showModal(index = null) {
    selectedProductIndex = index; // Gán chỉ số sản phẩm được chọn hoặc null nếu mua tất cả
    modal.style.display = "block";
  }

  // Hàm ẩn modal
  function hideModal() {
    modal.style.display = "none";
    selectedProductIndex = null; // Reset trạng thái
  }

  // Đóng modal khi nhấn nút "x"
  closeButton.addEventListener("click", hideModal);

  // Đóng modal khi nhấn ra ngoài modal
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      hideModal();
    }
  });

  // Xử lý form đặt hàng
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    // Xử lý thông tin đặt hàng
    let productsToOrder = [];

    if (selectedProductIndex === null) {
      // Mua tất cả sản phẩm
      productsToOrder = cart; // Gửi toàn bộ giỏ hàng
      cart = []; // Xóa toàn bộ giỏ hàng sau khi đặt hàng
    } else {
      // Mua 1 sản phẩm
      productsToOrder = [cart[selectedProductIndex]]; // Gửi sản phẩm được chọn
      cart.splice(selectedProductIndex, 1); // Xóa sản phẩm đã mua khỏi giỏ hàng
    }

    // Tạo nội dung email với thông tin sản phẩm (có thêm số lượng)
    const productDetails = productsToOrder
      .map(
        (item) =>
          `- Tên sản phẩm: ${item.name}\n` +
          `- Giá: ${item.price}\n` +
          `- Kích thước: ${item.size}\n` +
          `- Màu sắc: ${item.color}\n` +
          `- Số lượng: ${item.quantity}\n`
      )
      .join("\n");

    // Gửi email qua EmailJS
    emailjs.init("ucpvNgWaQb5t7FmhM"); // Thay YOUR_PUBLIC_KEY bằng public key từ EmailJS
    emailjs
      .send("dulichxanhastral", "template_3nnken4", {
        buyer_name: name,
        buyer_address: address,
        buyer_phone: phone,
        product_details: productDetails, // Gửi thông tin sản phẩm
      })
      .then(
        function () {
          alert("Đặt hàng thành công! Email đã được gửi đến người bán.");
          localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật localStorage
          renderCart(); // Cập nhật giao diện
          hideModal(); // Ẩn modal
        },
        function (error) {
          console.error("Lỗi khi gửi email:", error);
          alert("Có lỗi xảy ra khi gửi email. Vui lòng thử lại.");
        }
      );
  });

  // Hàm render giỏ hàng
  function renderCart() {
    cartItemsContainer.innerHTML = ""; // Xóa nội dung cũ
    cart.forEach((item, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
      <td><img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;"></td>
      <td>${item.name}</td>
      <td>Size: ${item.size} | Màu: 
          <span style="background: ${getColorCode(item.color)}; width: 20px; height: 20px; display: inline-block; border-radius: 50%; border: 1px solid #ccc;"></span>
      </td>
      <td>${item.price}</td>
      <td>
        <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="quantity-input">
      </td>
      <td>
        ${(parseFloat(item.price.replace(/[₫,]/g, "")) * item.quantity).toLocaleString()}<span class="currency">n₫</span>
      </td>
      <td>
        <button data-index="${index}" class="buy-button">Mua</button>
      </td>
      <td>
        <button data-index="${index}" class="remove-button">Xóa</button>
      </td>
    `;

      cartItemsContainer.appendChild(row);
    });

    attachEventListeners(); // Gắn sự kiện cho các nút trong giỏ hàng
  }

  // Hàm chuyển tên màu thành mã màu (nếu cần)
  function getColorCode(colorName) {
    const colorMap = {
      "Trắng": "#FFFFFF",
      "Xám": "#808080",
      "Hồng": "#FFC0CB",
      "Nâu": "#A52A2A",
      "Xanh": "#0000FF",
      "Đen": "#000000",
      "Đỏ": "#FF0000",
    };
    if (!colorMap[colorName]) {
      console.warn(`Không tìm thấy mã màu cho: ${colorName}`);
    }
    return colorMap[colorName] || "#000"; // Trả về màu đen mặc định nếu không tìm thấy
  }

  // Gắn sự kiện cho nút "Mua", "Xóa" và ô nhập số lượng
  function attachEventListeners() {
    const removeButtons = document.querySelectorAll(".remove-button");
    const buyButtons = document.querySelectorAll(".buy-button");
    const quantityInputs = document.querySelectorAll(".quantity-input");

    // Xóa sản phẩm khỏi giỏ hàng
    removeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const index = button.dataset.index;
        cart.splice(index, 1); // Xóa sản phẩm khỏi giỏ hàng
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart(); // Cập nhật giao diện giỏ hàng
      });
    });

    // Hiển thị form khi nhấn nút "Mua"
    buyButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const index = button.dataset.index;
        showModal(index); // Hiển thị modal với chỉ số sản phẩm
      });
    });

    // Cập nhật số lượng sản phẩm
    quantityInputs.forEach((input) => {
      input.addEventListener("change", function () {
        const index = input.dataset.index;
        cart[index].quantity = parseInt(input.value, 10); // Cập nhật số lượng
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart(); // Cập nhật giao diện giỏ hàng
      });
    });
  }

  // Mua tất cả sản phẩm trong giỏ hàng
  document.getElementById("checkout-all").addEventListener("click", function () {
    if (cart.length === 0) {
      alert("Giỏ hàng trống!");
      return;
    }

    showModal(); // Hiển thị modal để mua tất cả
  });

  // Khởi tạo giao diện giỏ hàng khi tải trang
  renderCart();
});
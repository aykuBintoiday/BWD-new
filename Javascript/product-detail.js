// Dữ liệu sản phẩm mẫu
const productData = [
  {
    id: '1',
    name: 'Kính mát thời trang',
    price: { current: '₫45.900', old: '₫90.000', discount: '-50%' },
    description: 'Kính thời trang, bảo vệ mắt khỏi ánh nắng mặt trời.',
    images: [
      './assets/img/product1.webp',
      './assets/img/product1-1.webp',
      './assets/img/product1-2.jpg'
    ],
    options: { colors: ['Đen', 'Xám', 'Nâu'] },
  },
  {
    id: '2',
    name: 'Bình nước inox',
    price: { current: '₫150.000', old: '₫200.000', discount: '-25%' },
    description: 'Bình nước inox giữ nhiệt, dung tích 500ml.',
    images: [
      './assets/img/product2.webp',
      './assets/img/product2-1.webp',
      './assets/img/product2-2.webp'
    ],
    options: { colors: ['Navy', 'Đen', 'Đỏ'] },
  },
  {
    id: '3',
    name: 'Giỏ dã ngoại',
    price: { current: '₫250.000', old: '₫300.000', discount: '-17%' },
    description: "Giỏ dã ngoại dung tích lớn, dễ dàng mang theo.",
    images: [
      './assets/img/product3.webp',
      './assets/img/product3-1.webp',
      './assets/img/product3-2.webp'
    ],
    options: { colors: ['Hồng', 'Vàng', 'Xanh lá'] },
  },
  {
    id: '4',
    name: 'Kem chống nắng',  
    price: { current: '₫120.000', old: '₫150.000', discount: '-20%' },
    description: 'Kem chống nắng SPF 50+, bảo vệ da khỏi tác hại của ánh nắng mặt trời.',
    images: [
      './assets/img/product4.webp',
      './assets/img/product4-1.webp',
      './assets/img/product4-2.webp'
    ],
    options: { colors: ['Xanh lá', 'Hồng', 'Xanh'] },
  },
  {
    id: '5',
    name: 'Khăn tắm sợi tre',
    price: { current: '₫80.000', old: '₫100.000', discount: '-20%' },
    description: 'Khăn tắm sợi tre mềm mại, thấm hút tốt.',
    images: [
      './assets/img/product5.webp',
      './assets/img/product5-1.webp',
      './assets/img/product5-2.webp'
    ],
    options: { colors: ['Xanh', 'Cam', 'Hồng'] },
  },

  {
    id: '6',
    name: 'Túi đan thủ công',
    price: { current: '₫100.000', old: '₫150.000', discount: '-14%' },
    description: 'Túi đan thủ công, phong cách vintage.',
    images: [
      './assets/img/product6.webp',
      './assets/img/product6-1.webp',
      './assets/img/product6-2.webp'
    ],
    options: { colors: ['Đỏ', 'Be', 'Kaki'] },
  },
  {
    id: '7',
    name: 'Thảm picnic',
    price: { current: '₫200.000', old: '₫250.000', discount: '-20%' },
    description: 'Thảm picnic bằng vải tái chế, chống thấm nước, dễ dàng vệ sinh.',
    images: [
      './assets/img/product7.webp',
      './assets/img/product7-1.webp',
      './assets/img/product7-2.webp'
    ],
    options: { colors: ['Vàng', 'Hồng', 'Xanh'] },
  },
  {
    id: '8',
    name: 'Đèn pin năng lượng mặt trời',
    price: { current: '₫250.000', old: '₫300.000', discount: '-17%' },
    description: 'Đèn pin năng lượng mặt trời, tiết kiệm điện năng.',
    images: [
      './assets/img/product8.webp',
      './assets/img/product8-1.webp',
      './assets/img/product8-2.webp'
    ],
    options: { colors: ['Xanh lá', 'Đen', 'Vàng'] },
  },
  {
    id: '9',
    name: 'Balo du lịch',
    price: { current: '₫500.000', old: '₫600.000', discount: '-17%' },
    description: 'Balo du lịch chống nước, dung tích lớn, phù hợp cho các chuyến đi dài ngày.',
    images: [
      './assets/img/product9.webp',
      './assets/img/product9-1.webp',
      './assets/img/product9-2.webp'
    ], 
    options: { colors: ['Đen', 'Xanh', 'Xám'] },
  },
  {
    id: '10',
    name: 'Nón du lịch',
    price: { current: '₫50.000', old: '₫70.000', discount: '-17%' },
    description: 'Nón du lịch chống nắng, có thể gấp gọn lại dễ dàng.',
    images: [
      './assets/img/product10.webp',
      './assets/img/product10-1.webp',
      './assets/img/product10-2.webp'
    ],
    options: { colors: ['Be', 'Trắng', 'Cà phê'] },
    // stock: 150,
    // sold: 120,
    // ratings: { stars: 4.9, reviews: 30 }
  }
];
  
  // Lấy ID sản phẩm từ URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
// Tìm sản phẩm dựa trên ID
const product = productData.find(item => item.id === productId);

if (product) {
  // Cập nhật thông tin sản phẩm
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('current-price').textContent = product.price.current;
  document.getElementById('old-price').textContent = product.price.old;
  document.getElementById('discount').textContent = product.price.discount;

  // Thay thế phần đánh giá bằng giới thiệu
  const productDescription = document.getElementById('product-description');
  productDescription.textContent = product.description; // Hiển thị giới thiệu sản phẩm

  // Hiển thị hình ảnh chính và thumbnail
  const mainImage = document.getElementById('main-product-image');
  mainImage.src = product.images[0];

  const thumbnails = document.getElementById('image-thumbnails');
  thumbnails.innerHTML = product.images
    .map(img => `<img class="thumbnail" src="${img}" alt="Hình ảnh">`)
    .join('');

  // Thêm sự kiện bấm vào thumbnail để thay đổi hình ảnh chính
  document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      mainImage.src = thumbnail.src;
    });
  });

  // Hiển thị phân loại (màu sắc)
  const choices = document.getElementById('product-choices');
  choices.innerHTML = product.options.colors
    .map(color => `<button class="choice color">${color}</button>`)
    .join('');
} else {
  // Nếu không tìm thấy sản phẩm, hiển thị lỗi
  document.body.innerHTML = '<p style="text-align:center;">Sản phẩm không tồn tại!</p>';
}

// Tăng giảm số lượng
const quantityInput = document.getElementById('quantity-input');
document.getElementById('increase-quantity').addEventListener('click', () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});
document.getElementById('decrease-quantity').addEventListener('click', () => {
  if (quantityInput.value > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
});
  
  
//   document.getElementById('add-cart').addEventListener('click', () => {
//     alert(`Đã thêm sản phẩm: ${product.name} vào giỏ hàng với số lượng: ${quantityInput.value}`);
//   });
// Lấy nút "Thêm Vào Giỏ Hàng"
const addToCartButton = document.getElementById("add-cart");

// Sự kiện khi nhấn nút "Thêm Vào Giỏ Hàng"
addToCartButton.addEventListener("click", function () {
  // Lấy thông tin sản phẩm từ giao diện
  const productName = document.getElementById("product-name").textContent;
  const productPrice = document.getElementById("current-price").textContent;
  const productImage = document.getElementById("main-product-image").src;
  const selectedColor = document.querySelector(".choice.color.selected"); // Màu được chọn
  const selectedSize = document.querySelector(".choice.size.selected"); // Size được chọn
  const selectedQuantity = parseInt(document.getElementById("quantity-input").value, 10);

  // Kiểm tra xem người dùng đã chọn màu và size hay chưa
  if (!selectedColor) {
    alert("Vui lòng chọn màu trước khi thêm vào giỏ hàng!");
    return;
  }
  if (!selectedSize) {
    alert("Vui lòng chọn size trước khi thêm vào giỏ hàng!");
    return;
  }

  // Tạo đối tượng sản phẩm
  const cartItem = {
    name: productName,
    price: productPrice,
    image: productImage,
    color: selectedColor.textContent,
    size: selectedSize.textContent,
    quantity: selectedQuantity,
  };

  // Lấy danh sách sản phẩm trong giỏ hàng từ localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Thêm sản phẩm mới vào danh sách giỏ hàng
  cart.push(cartItem);

  // Lưu danh sách giỏ hàng vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Thông báo thành công
  alert("Sản phẩm đã được thêm vào giỏ hàng!");
});

// Thêm sự kiện chọn màu
const colorChoices = document.querySelectorAll(".choice.color");
colorChoices.forEach(choice => {
  choice.addEventListener("click", () => {
    // Bỏ trạng thái "selected" khỏi tất cả nút màu
    colorChoices.forEach(c => c.classList.remove("selected"));
    // Thêm trạng thái "selected" cho nút được nhấn
    choice.classList.add("selected");
  });
});

// Thêm sự kiện chọn size
const sizeChoices = document.querySelectorAll(".choice.size");
sizeChoices.forEach(choice => {
  choice.addEventListener("click", () => {
    // Bỏ trạng thái "selected" khỏi tất cả nút size
    sizeChoices.forEach(s => s.classList.remove("selected"));
    // Thêm trạng thái "selected" cho nút được nhấn
    choice.classList.add("selected");
  });
});
  // Xử lý nút Mua Ngay
  // document.getElementById('buy-now').addEventListener('click', () => {
  //   alert(`Bạn đã mua sản phẩm: ${product.name} với số lượng: ${quantityInput.value}`);
  // });

  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("user-info-modal");
    const closeButton = document.getElementById("close-modal");
    const form = document.getElementById("user-info-form");
    const buyNowButton = document.getElementById("buy-now");
  
    // Hiển thị modal khi nhấn nút "Mua Ngay"
    buyNowButton.addEventListener("click", function () {
      // Kiểm tra xem người dùng đã chọn màu, size, và số lượng chưa
      const selectedColor = document.querySelector(".choice.color.selected");
      const selectedSize = document.querySelector(".choice.size.selected");
      const selectedQuantity = parseInt(document.getElementById("quantity-input").value, 10);
  
      if (!selectedColor || !selectedSize || selectedQuantity <= 0) {
        alert("Vui lòng chọn đầy đủ màu, size, và số lượng trước khi đặt hàng!");
        return;
      }
  
      // Hiển thị modal
      modal.style.display = "block";
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
  
    // Xử lý gửi form
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Lấy thông tin từ form
      const buyerName = document.getElementById("buyer-name").value;
      const buyerAddress = document.getElementById("buyer-address").value;
      const buyerPhone = document.getElementById("buyer-phone").value;
  
      // Lấy thông tin sản phẩm
      const productName = document.getElementById("product-name").textContent;
      const productPrice = document.getElementById("current-price").textContent;
      const selectedColor = document.querySelector(".choice.color.selected").textContent;
      const selectedSize = document.querySelector(".choice.size.selected").textContent;
      const selectedQuantity = parseInt(document.getElementById("quantity-input").value, 10);
  
      // Gửi thông tin qua EmailJS
      emailjs.init("ucpvNgWaQb5t7FmhM"); // Thay YOUR_PUBLIC_KEY bằng key của bạn từ EmailJS
      emailjs
        .send("dulichxanhastral", "template_j7ah4od", {
          product_name: productName,
          product_price: productPrice,
          product_color: selectedColor,
          product_size: selectedSize,
          product_quantity: selectedQuantity,
          buyer_name: buyerName,
          buyer_address: buyerAddress,
          buyer_phone: buyerPhone,
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
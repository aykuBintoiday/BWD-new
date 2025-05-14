// Hàm tính toán và áp dụng hiệu ứng theo độ hiển thị
function applyVisibilityEffect(selector, effectFn) {
    const elements = document.querySelectorAll(selector);
  
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      // Tính phần tử hiển thị trong khung nhìn
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const ratio = Math.max(0, Math.min(visibleHeight / rect.height, 1)); // Giá trị từ 0 → 1
  
      // Gọi hàm hiệu ứng được truyền vào
      effectFn(el, ratio);
    });
  }
  
  // Hàm chính để xử lý hiệu ứng khi cuộn
  function handleScrollAnimation() {
    // Hiệu ứng mờ dần (trang 2)
    applyVisibilityEffect('.fade-section-trang2', (el, ratio) => {
      if (ratio > 0.3) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  
    // Hiệu ứng trượt từ phải (trang 2)
    applyVisibilityEffect('.slide-from-right', (el, ratio) => {
      el.style.opacity = ratio;
      el.style.transform = `translateX(${(1 - ratio) * 60}px)`;
    });
  
    // Ảnh slide trái → giữa, rồi ẩn đi bên phải (trang 3)
    applyVisibilityEffect('.slide-img', (el, ratio) => {
      if (ratio > 0.3) {
        el.classList.add('visible');
        el.classList.remove('out');
      } else {
        el.classList.remove('visible');
        el.classList.add('out');
      }
    });
  
    // Chữ và nút slide phải → giữa, rồi ẩn đi bên trái (trang 3)
    applyVisibilityEffect('.slide-text', (el, ratio) => {
      if (ratio > 0.3) {
        el.classList.add('visible');
        el.classList.remove('out');
      } else {
        el.classList.remove('visible');
        el.classList.add('out');
      }
    });
  
    // 👉 THÊM 3 DÒNG NÀY VÀO TRONG HANDLE:
    applyVisibilityEffect('.slide-up', (el, ratio) => {
      if (ratio > 0.3) {
        el.classList.add('visible');
        el.classList.remove('out-down');
      } else {
        el.classList.remove('visible');
        el.classList.add('out-down');
      }
    });
  
    applyVisibilityEffect('.slide-left', (el, ratio) => {
      if (ratio > 0.3) {
        el.classList.add('visible');
        el.classList.remove('out-left');
      } else {
        el.classList.remove('visible');
        el.classList.add('out-left');
      }
    });
  
    applyVisibilityEffect('.slide-right', (el, ratio) => {
      if (ratio > 0.3) {
        el.classList.add('visible');
        el.classList.remove('out-right');
      } else {
        el.classList.remove('visible');
        el.classList.add('out-right');
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menuList = document.querySelector(".nav-container .list");
  
    if (hamburger && menuList) {
      hamburger.addEventListener("click", () => {
        menuList.classList.toggle("show");
      });
    }
  });

  // Gọi hàm khi trang tải và khi cuộn
  window.addEventListener('scroll', handleScrollAnimation);
  window.addEventListener('load', handleScrollAnimation);
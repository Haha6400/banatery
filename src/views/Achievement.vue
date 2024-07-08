<script setup lang="ts">

</script>

<template>
    <div style="margin:5% 5%; padding: 2%; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 3px solid var(--text-primary); border-radius: 15px;">
            <h3>THÀNH TỰU DỰ ÁN</h3>
            <h4>Các bài báo</h4>
            <div class="container">
              <div class="left-side">
                <div style="align-content: center; width: fit-content;" onclick='window.open("https://tienphong.vn/sinh-vien-lam-pin-tu-vo-chuoi-post1647789.tpo", "_blank");'>
                    <img class="image" src="../components/image/báo-1.jpg" width="100%"/>
                    <h5><p style="font-weight:bolder;">Báo Tiền Phong: </p>Sinh viên làm pin từ vỏ chuối</h5>
            </div>
              </div>
              <div class="right-side">
              <div style="align-content: center; width: fit-content;" onclick='window.open("https://www.vietnam.vn/sinh-vien-lam-pin-tu-vo-chuoi/", "_blank");'>
                    <img class="image" src="../components/image/báo-2.png" width="100%"/>
                    <h5><p style="font-weight:bolder;">VietNam.vn:  </p>Sinh viên làm pin từ vỏ chuối</h5>
            </div>
              </div>
           </div>
           <div class="container">
              <div class="left-side">
                <div style="align-content: center; width: fit-content;" onclick='window.open("https://hust.edu.vn/vi/news/khoa-hoc-cong-nghe-dmst/lien-quan-hust-neu-gianh-chien-thang-thuyet-phuc-startup-city-2024-655147.html", "_blank");'>
                        <img class="image" src="../components/image/báo-3.png" width="100%"/>
                        <h5><p style="font-weight:bolder;">Đại học Bách khoa Hà Nội: </p> Liên quân HUST - NEU giành chiến thắng thuyết phục StartUp City 2024</h5>
                </div>
              </div>
              <div class="right-side">
              <div style="align-content: center; width: fit-content;" onclick='window.open("https://congthuong.vn/kawai-startup-fair-2024-an-tuong-voi-cac-man-goi-von-324844.html", "_blank");'>
                        <img class="image" src="../components/image/báo-4.png" width="100%"/>
                        <h5><p style="font-weight:bolder;">Công Thương: </p> Kawai Startup Fair 2024: Ấn tượng với các màn gọi vốn</h5>
                </div>
              </div>
           </div>
           <img class="image" src="../components/image/BRIEF WEB.png" width="60%"/>
    </div>
</template>

<style scoped>
image{
    align-content: center;
}
h3 {
  font-size: 34px;
  font-weight: 650;
  text-align: center !important;
  width: fit-content;
  padding: 1%;
  margin: 1%;
  color: white;
  border-radius: 5px;
  background-color: var(--color-text-primary);
}
h4 {
  font-size: 30px;
  font-weight: 650;
  text-align: center !important;
  width: fit-content;
  padding: 1%;
  margin: 1%;
  color: var(--color-text-primary);
}
h5 {
  text-align: center !important;
  font-size: 20px;
  padding: 1%;
  margin: 1%;
}
  .container {
    
    display: grid;
    grid-template-columns: 1fr 1fr; /* Chia đôi trang thành hai cột bằng nhau */
    gap: 20px; /* Khoảng cách giữa hai cột */
  }

  .left-side {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    height: fit-content;
    padding-right: 20px;
  }

  .right-side {
    height: fit-content;
    padding-right: 20px;
  }
grid-class {
    display: grid;
    grid-template-columns: 1fr 1fr; 
}
</style>
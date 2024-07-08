<script setup lang="ts">
import DoneIcon from './icons/IconDone.vue'

</script>

<template>
    <div style = "padding: 5%;">
    <div class="greetings">
        <h2 class="extra-bold">VỀ CHÚNG TÔI</h2>
    </div>

    <div class="greetings">
        <h4 class = "header-item">Cố vấn chuyên môn</h4>
        <div class="container-2">
            <div class= "left-side">
                <div class="item">
                    <div class="details">
                        <i><img src="./image/members/Lê Thị Thu Hằng.jpg" class="logo" style="width: 70px; height: 70px; border-radius: 50%;"></i>
                        <h3>PGS. TS. Lê Thị Thu Hằng</h3>
                        Viện Kỹ thuật hóa học Đại học Bách Khoa Hà Nội
                    </div>
                </div>

                <div class="item">
                    <div class="details">
                        <i><img src="./image/members/Thầy Nghĩa.jpg" class="logo" style="width: 70px; height: 70px; border-radius: 50%;"></i>
                        <h3>PGS. TS. Nguyễn Trọng Nghĩa</h3>
                        Viện Kỹ thuật hóa học Đại học Bách Khoa Hà Nội
                    </div>
                </div>

                <div class="item">
                    <div class="details">
                        <i><img src="./image/members/Nguyễn Mỹ Anh.jpg" class="logo" style="width: 70px; height: 70px; border-radius: 50%;"></i>
                        <h3>Chị Nguyễn Mỹ Anh</h3>
                        Quản lý dự án tại Bộ Kế hoạch và Đầu tư
                    </div>
                </div>
            </div>

            <div class="right-side">

                <div class="item">
                    <div class="details">
                        <i><img src="./image/members/Lê Thị Thu Mai.jpg" class="logo" style="width: 70px; height: 70px; border-radius: 50%;"></i>
                        <h3>TS. Lê Thị Thu Mai</h3>
                        Giảng viên Khoa Marketing Trường Đại học Kinh tế Quốc dân
                    </div>
                </div>

                <div class="item">
                    <div class="details">
                        <i><img src="./image/members/Nguyễn Thế Bảo.jpg" class="logo" style="width: 70px; height: 70px; border-radius: 50%;"></i>
                        <h3>Anh Nguyễn Thế Bảo</h3>
                        Co-founder tại Get Ins - Trung tâm đào tạo Công nghệ 4.0
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="greetings bgr-custom">
        <h4 class = "header-item">Thành viên</h4>
        <div class = "container-3">
            <div class="first-side">
                <div class="item">
                    <div class="details">
                        <i><img src="./image/members/Huyền Trang.jpg" class="logo" style="width: 70px; height: 70px; border-radius: 50%;"></i>
                        <h3>Lê Thị Huyền Trang</h3>
                        Phát triển Kinh doanh
                    </div>
                </div>
                <div class="item">
                    <div class="details">
                        <i><img src="./image/members/Nguyễn Thị Huyền Trang.JPG" class="logo" style="width: 70px; height: 70px; border-radius: 50%;"></i>
                        <h3>Nguyễn Thị Huyền Trang</h3>
                            Tài chính
                    </div>
                </div>
                <div class="item">
                    <div class="details">
                        <i><img src="./image/members/Thăng Nguyễn.jpg" class="logo" style="width: 70px; height: 70px; border-radius: 50%;"></i>
                        <h3>Nguyễn Thăng</h3>
                        Kỹ thuật
                    </div>
                </div>
            </div>
            <div class="second-side">
                <div class="item">
                    <div class="details">
                        <i><img src="./image/members/Nguyễn Bảo Khánh.jpg" class="logo" style="width: 70px; height: 70px; border-radius: 50%;"></i>
                        <h3>Nguyễn Bảo Khánh</h3>
                        Kỹ thuật
                    </div>
                </div>
                <div class="item">
                    <div class="details">
                        <i><img src="./image/members/Trần Minh Hương.jpg" class="logo" style="width: 70px; height: 70px; border-radius: 50%;"></i>
                        <h3>Trần Minh Hương</h3>
                        Kỹ thuật
                    </div>
                </div>
                <div class="item">
                    <div class="details">
                        <i><img src="./image/members/Thu Thảo.jpg" class="logo" style="width: 70px; height: 70px; border-radius: 50%;"></i>
                        <h3>Đinh Thị Thu Thảo</h3>
                        Phát triển Kinh doanh
                    </div>
                </div>
            </div>
            
            <div class="third-side">
                <div class="item">
                    <div class="details">
                        <i><img src="./image/members/Linh Trang.jpg" class="logo" style="width: 70px; height: 70px; border-radius: 50%;"></i>
                        <h3>Vũ Trần Linh Trang</h3>
                        Tài chính
                    </div>
                </div>
                <div class="item">
                    <div class="details">
                        <i><img src="./image/members/Mạnh Quân.jpg" class="logo" style="width: 70px; height: 70px; border-radius: 50%;"></i>
                        <h3>Trần Mạnh Quân</h3>
                        Kỹ thuật
                    </div>
                </div>
                <div class="item">
                    <div class="details">
                        <i><img src="./image/members/Thu NGa.jpg" class="logo" style="width: 70px; height: 70px; border-radius: 50%;"></i>
                        <h3>Vũ Thị Thu Nga</h3>
                        Kỹ thuật
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>

<style scoped>
  .container-2 {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Chia đôi trang thành hai cột bằng nhau */
    gap: 20px; /* Khoảng cách giữa hai cột */
  }
  .container-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Chia đôi trang thành hai cột bằng nhau */
    gap: 20px; /* Khoảng cách giữa hai cột */
  }

  .left-side {
    padding-right: 20px;
  }

  .right-side {
    padding-right: 20px;
  }

h2 {
  font-size: 26px;
  font-weight: 500;
  color: var(--color-text-primary);
}
h4 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: var(--color-text-3);
  border-bottom: 2px solid var(--text-3); /* Màu và kích thước của đường gạch dưới */
  display: inline-block; /* Để chỉ định kích thước của đường gạch */
}
.item {
  margin-top: 3rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 50px;
}

i {
  display: flex;
  place-items: center;
  place-content: end;
  width: 32px;
  height: 32px;

  color: var(--color-text-primary);
}

h3 {
  font-weight: 500;
  color: var(--color-text-primary);
}

@media {
  .item {
    margin-top: 10px;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 4);
  }

  i {
    top: calc(50% - 25px);
    left: 20px;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
    position: absolute;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
.extra-bold {
    font-weight: 650; 
  }
</style>
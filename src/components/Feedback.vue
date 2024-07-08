<script setup lang="ts">
import ProductItem from './ProductItem.vue'
import DoneIcon from './icons/IconDone.vue'

</script>

<template>
    <div> 
      <img alt="Battery core" src="./image/bgr-feedback.png" width="100%" />
    </div>
    <div style="margin:5% 5%; padding: 2%; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 3px solid var(--text-primary); border-radius: 15px;">
            <h3>FEEDBACK ĐỐI TÁC CHIẾN LƯỢC TIỀM NĂNG</h3>
            <div class="container">
                <div class="left-side">
                    <img alt="Battery core" src="./image/12.png" width="80%"/>
                </div>
                <div class="right-side">
                    <h4>PGS.TS. GS.TS Nguyễn Văn Duy</h4>
                    <h5>- Giảng viên cao cấp lĩnh vực vật liệu điện tử, chuyên nghiên cứu về pin năng lượng mặt trời và pin lithium-ion. </h5>
                    <h5>- CEO Công ty trách nhiệm hữu hạn Năng lượng xanh Việt Nam tại Khu công nghệ cao Hòa Lạc</h5>
                </div>
            </div>
            <div class="container">
                <div class="left-side">
                    <img alt="Battery core" src="./image/11.png" width="100%"/>
                </div>
                <div class="right-side">
                    <h5>Anh ấy có một nhà Sản xuất Pin và có một số phản hồi về dự án của chúng tôi: </h5>
                    <h5>
“Một ý tưởng sáng tạo và độc đáo, phù hợp với nhu cầu trong tương lai, đề cao tính sáng tạo, đặc biệt trong bối cảnh nền kinh tế tuần hoàn. Từ quan điểm kỹ thuật, cấu trúc và độ dẫn điện tuyệt vời khiến chúng tích điện nhanh và có khả năng chống lại các tác nhân từ dung dịch điện phân. Tuy nhiên, cần xem xét liệu có cần thiết phải phủ thêm một lớp phủ lên vật liệu hay không. Cần cải tiến hơn nữa trong một số quy trình sản xuất để tối ưu hóa chúng. Tuy nhiên, một khía cạnh thực sự tuyệt vời trong cách tiếp cận của nhóm bạn là kích hoạt bề mặt ở các nhiệt độ khác nhau trong một khoảng thời gian ngắn, điều này đã làm tăng đáng kể hiệu quả của nó. Nó có thể là một loại vật liệu mới trong tương lai.</h5>
                    <h5 style="font-style: italic">Nguồn: Phỏng vấn được thực hiện vởi Banarery</h5>
                </div>
            </div>
    </div>
</template>

<style scoped>
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
  font-size: 20px;
  width: fit-content;
  padding: 1%;
  margin: 1%;
}
  .container {
    
    display: grid;
    grid-template-columns: 4fr 6fr; /* Chia đôi trang thành hai cột bằng nhau */
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
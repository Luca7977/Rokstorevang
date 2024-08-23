/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')


function calculateTotal() {
    // Lấy giá trị từ các input và chuyển đổi thành số nguyên
    const stone500 = parseInt(document.getElementById('corn1k').value) || 0;
    const stone3k = parseInt(document.getElementById('corn10k').value) || 0;
    const stone15k = parseInt(document.getElementById('corn50k').value) || 0;
    const stone50k = parseInt(document.getElementById('corn150k').value) || 0;
    const stone200k = parseInt(document.getElementById('corn500k').value) || 0;
    const stone600k = parseInt(document.getElementById('corn1m').value) || 0;
    const stone2m = parseInt(document.getElementById('corn5m').value) || 0;

    // Tính toán tổng số đá và chuyển thành triệu
    const totalStoneInMillions = (
        (stone500 * 500) +
        (stone3k * 3000) +
        (stone15k * 15000) +
        (stone50k * 500000) +
        (stone200k * 200000) +
        (stone600k * 600000) +
        (stone2m * 2000000)
    ) / 1000000;

    // Hiển thị kết quả
    document.getElementById('result').innerText = `Tổng đá sau khi quy đổi: ${totalStoneInMillions.toFixed(3)} triệu`;
}

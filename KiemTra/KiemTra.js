// /^.{10,12}$/
// /^[a-zA-Z0-9]{10,12}$/
// /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// const so = /^0[0-9]{9,}$/

const loi_soLuong = document.getElementById("loi_sl");
const soThichChecked = document.querySelectorAll(".st")
function Loi() {
    var soLuong = 0;
    soThichChecked.forEach(soThich => {
       if( soThich.checked==true)
        {soLuong ++;}
    })
    if(soLuong<1||soLuong>3)
    {
        loi_soLuong.innerHTML="Lỗi";
        return false;
    }
    return true;

}

const xacNhan = document.getElementById("xacNhan");
xacNhan.addEventListener("click", function (e)
{
    if (!Loi()) {
        e.preventDefault();
    }
})
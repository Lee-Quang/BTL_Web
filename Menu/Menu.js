// Bấm tìm kiếm

const toggleSearch = document.getElementById("btn_search")
const searchFiled = document.getElementById("search");
searchFiled.addEventListener("focus",function()
{   
    searchValue= searchFiled.value;
   
})
toggleSearch.addEventListener("mousedown",function(e)
    {
        // e.preventDefault();
        searchFiled.focus();
        console.log("timKiem");
        if(searchValue!=="")
            {
            console.log(searchValue);
            // window.location.href="";
            }
    });

const toggleCart = document.querySelector(".cart img")
toggleCart.addEventListener("mousedown",function(e)
{
    window.location.href="";
})

function adjustNavMobileWidth() {
    const nav = document.querySelector('.nav');
    const navList = nav.querySelector('.nav_list');
    if (window.matchMedia("(max-width: 430px)").matches) {
        

        // Kiểm tra nếu .nav không có .nav_mobile thì thêm vào
        if (!nav.querySelector('.nav_mobile')) {
            const nav_mobileElement = document.createElement('div');
            nav_mobileElement.className = "nav_mobile";
            nav_mobileElement.style.width = nav.offsetWidth+'px';
            // nav_mobileElement.style.height = '100%'; // Tùy chỉnh chiều cao nếu cần
            // nav_mobileElement.style.backgroundColor = 'antiquewhite'; // Tùy chỉnh màu nền nếu cần
            const nav_input = document.createElement("input");
            nav_input.type="checkbox";
            // Toggle
            const nav_toggle = document.createElement("div");
            nav_toggle.className="toggle";

            add_toggle(nav_toggle);
            // Thêm .nav_mobile vào trong .nav
            // 
            nav.appendChild(nav_toggle)
            nav.appendChild(nav_mobileElement);
            nav.prepend(nav_input);
            // Thêm thẻ h1 vào .nav_mobile
            const h1Element = document.createElement('h1');
            h1Element.textContent = "Menu"; // Nội dung của thẻ h1
            nav_mobileElement.prepend(h1Element);
        }
        const navMobile = nav.querySelector('.nav_mobile');
        if (navList && !navMobile.contains(navList)) {
            navMobile.appendChild(navList); // Chuyển nav_list vào trong nav_mobile
            const navToggle = nav.querySelector(".toggle")
        if(navToggle)
        {
            navToggle.addEventListener("click",function()
        {
            const navInput = nav.querySelector("input")
            navInput.checked=!navInput.checked;
            if (navInput.checked) {
                // Hành động khi checkbox được chọn
                console.log("Checkbox is checked");
            } else {
                // Hành động khi checkbox không được chọn
                console.log("Checkbox is unchecked");
            }
        })
            
        }
        }
        
    }
    else {
        const navMobile = nav.querySelector('.nav_mobile');
        const navInput = nav.querySelector("input");
        const navToggle = nav.querySelector(".toggle");
        if (navMobile&&navInput&&navToggle) {
            // Di chuyển lại nav_list về vị trí ban đầu
            if (navList) {
                nav.appendChild(navList); // Trả lại nav_list về trong nav
            }
            nav.removeChild(navMobile); 
            nav.removeChild(navInput);
            nav.removeChild(navToggle);
        }
    }
}


// Gọi hàm ngay khi trang tải
adjustNavMobileWidth();

// Gọi hàm mỗi khi cửa sổ thay đổi kích thước
window.addEventListener('resize', adjustNavMobileWidth);

function add_toggle(divElement)
{
    

// Tạo các span mới
const topSpan = document.createElement('span');
topSpan.className = 'top common';
// topSpan.textContent = 'Top';

const midSpan = document.createElement('span');
midSpan.className = 'mid common';
// midSpan.textContent = 'Mid';

const bottomSpan = document.createElement('span');
bottomSpan.className = 'bottom common';
// bottomSpan.textContent = 'Bottom';

// Thêm các span vào div
divElement.appendChild(topSpan);
divElement.appendChild(midSpan);
divElement.appendChild(bottomSpan);
}
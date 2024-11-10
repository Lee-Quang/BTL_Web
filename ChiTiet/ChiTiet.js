fetch("../Menu/Menu.html")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not ok');
        }
        return response.text();
    })
    .then(data => {
        const header = document.getElementById('header');
        header.innerHTML = data;
        const script = document.createElement('script');
        script.src = "../Menu/Menu.js";
        script.defer = true;
        document.body.appendChild(script);
        script.onload;
    })
    .catch(error => {
        console.error('Có lỗi xảy ra:', error);
    });

// Footer
fetch("../Footer/Footer.html")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not ok');
        }
        return response.text();
    })
    .then(data => {
        const footer = document.getElementById('footer');
        footer.innerHTML = data;
    })
    .catch(error => {
        console.error('Có lỗi xảy ra:', error);
    });
// Bấm từng sản phẩm
    const toggleProducts = document.querySelectorAll('.product_img')

    toggleProducts.forEach(toggleProduct => {
        toggleProduct.addEventListener("click",function()
    {
        let productID = toggleProduct.getAttribute("data-id");
        console.log(productID);
        window.location.href="";
    })
        
    });
// Chọn option cho sản phẩm
const toggleMaus = document.querySelectorAll(".mau_item")
var mau="";
toggleMaus.forEach(toggleMau=>
{
    toggleMau.addEventListener("click",function()
{
    toggleMaus.forEach(item => {
        item.classList.remove("selected");
    });
    toggleMau.classList.add("selected");
    mau = document.querySelector(".mau_item.selected").getAttribute("data-mau");
    console.log(mau);
})
}
)

const toggleSizes = document.querySelectorAll(".size_item")
var size="";
toggleSizes.forEach(toggleSize=>
{
    toggleSize.addEventListener("click",function()
{
    toggleSizes.forEach(item => {
        item.classList.remove("selected");
    });
    toggleSize.classList.add("selected");
    size = document.querySelector(".size_item.selected").getAttribute("data-size");
    console.log(size);
})
}
)
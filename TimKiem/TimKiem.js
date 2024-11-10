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

// Thay đổi sort
const sortChange = document.getElementById("sort")
sortChange.addEventListener("change",function()
{
    sortValue = sortChange.value
    if(sortValue=="1")
    {
        window.location.href="";
    }
    if(sortValue =="0")
    {
        window.location.href="";
    }
})
const products = [
    {id: 1, name: "Áo thun", quantity: 12, unitPrice: 30000, discount: 10},
    {id: 2, name: "Quần âu", quantity: 20, unitPrice: 400000, discount: 10}
]; // 1 mảng các sản phẩm

const form = document.querySelector("#product-form"); //document.querySelector() tìm một phần tử trên trang html
const productList = document.querySelector("#product-list"); //lấy các phần tử từ html để sử dụng

function calculateSubtotal(product){
    return product.quantity * product.unitPrice * (1 - product.discount / 100);
}

function renderProducts() {
    productList.replaceChildren();

    for (const product of products) {
        const row = document.createElement("tr");
        const values = [
            product.id,
            product.name,
            product.quantity,
            `$${product.unitPrice}`, product.discount,
            `$${calculateSubtotal(product)}` 
        ];

        for (const value of values) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        }

        productList.appendChild(row);
    }
}

form.addEventListener("submit", (event) => {event.preventDefault();
    const product = {
        id: products.length + 1,
        name: document.querySelector("#product-name").value.trim(),
        quantity: Number(document.querySelector("#quantity").value),
        unitPrice: Number(document.querySelector("#unit-price").value),
        discount: Number(document.querySelector("#discount").value)
    };

    if(
        !product.name ||
        product.quantity < 1 ||
        product.unitPrice < 0 ||
        product.discount < 0 ||
        product.discount > 100
    ) {
        alert("vui lòng kiểm tra lại thông tin ");
        return;
    }

    products.push(product);
    renderProducts();
});

renderProducts();
document.addEventListener("DOMContentLoaded", function() {
    let orderForm = document.getElementById("OrderForm");

    if (orderForm) {
        orderForm.addEventListener('submit', submitOrder);
    }

    function submitOrder(e) {
        e.preventDefault();

        let isbn = document.getElementById("isbn").value
        let title = document.getElementById("title").value
        let author = document.getElementById("author").value
        let publisher = document.getElementById("publisher").value
        let totalPrice = document.getElementById("total-price").value
        let orderCount = document.getElementById("order-count").value

       
        let orderData = {
            isbn: isbn,
            title: title,
            author: author,
            publisher: publisher,
            totalPrice: parseFloat(totalPrice),
            orderCount: parseInt(orderCount)
        };

        console.log("Order submitted successfully:", orderData);
        alert("Order submitted successfully.");

    }
});

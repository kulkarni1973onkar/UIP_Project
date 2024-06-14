document.addEventListener("DOMContentLoaded", function() {
    let OrderForm = document.getElementById("OrderForm");

    if (OrderForm) {
        OrderForm.addEventListener('submit', submitOrder);
    }

    function submitOrder(e) {
        e.preventDefault();

        let OrderID = document.getElementById("OrderID").value
        let UserID = document.getElementById("UserID").value
        let Name = document.getElementById("Name").value
        let Price = document.getElementById("Price").value
        let Address = document.getElementById("Address").value
        let OrderStatus = document.getElementById("order-status").value

       
        let orderData = {
            OrderID:OrderID,
            UserID:UserID,
            Name:Name,
            Price:Price,
            Address:Address,
            OrderStatus:OrderStatus
        };

        console.log("Order submitted successfully:", orderData);
        alert("Order submitted successfully.");

    }
});

function main() {
    main=d3.select("ul")
    foreach(order =>{
        main.append('li')
        .text(`Customer Name:${order.customerName } ; Order ID: ${order.orderID};Purchase Amount:${order.purchaseAmount} `) 
        })};
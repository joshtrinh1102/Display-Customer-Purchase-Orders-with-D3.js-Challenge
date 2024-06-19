//U22275330
function main() {
    var order= d3.csv('purchase_orders.csv',d3.autoType)
    main=d3.select("ul")
    foreach(order =>{
        main.append('li')
        .text(`Customer Name:${order.customerName } ; Order ID: ${order.orderID};Purchase Amount:${order.purchaseAmount} `) 
        })};
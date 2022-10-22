let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let [hotCakes, applePie, eggMcMuffin, sausageMcMuffin, hotCoffee, hashBrown] =
  order;

function orderInvoice(arr) {
  console.table(`\`\`\`\`\`\nQTY\t\t\t\tITEM\t\t\t\t\t\t\t\t\t\t\t\t\t\tTOTAL`);
  arr.forEach((item) => {
    let itemCost = (item.unitPrice * item.quantity).toFixed(2);
    console.log(
      `${item.quantity}\t\t\t\t\t${item.itemName.padEnd(16, ' ')}\t\t\t\t\t\t\t\t${itemCost}`
    );
  });
  // FUNCTION FOR THE TOTAL COST
  function totalOrder() {
    let total = 0;

    arr.forEach((item) => {
      total += item.unitPrice * item.quantity;
    });
    return `\nTotal: ${total}\n\`\`\`\``;
  }
  console.log(totalOrder());
}
orderInvoice(order);

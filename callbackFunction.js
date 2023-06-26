// Callback function...........................................

const takeOrder = (customer, callPO) => {
  console.log(`Take order for ${customer}!`);
  callPO(customer);
};
const processOrder = (customer, callCO) => {
  console.log(`Processing order for ${customer}!`);
  setTimeout(() => {
    console.log(`Cooking completed!`);
    console.log(`Order processed for ${customer}!`);
    callCO(customer);
  }, 3000);
};
const completeOrder = (customer) => {
  console.log(`Order completed for ${customer}!`);
};
/*
  takeOrder("customer-1");
  processOrder("customer-1");
  completeOrder("customer-1");
  
  Take order for customer-1!
  Processing order for customer-1!
  Order completed for customer-1!
  Cooking completed!
  Order processed for customer-1!
*/
takeOrder("customer-1", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});
//console.log("Hello");// it will print within the function
/*
  Take order for customer-1!
  Processing order for customer-1!
  Cooking completed!
  Order processed for customer-1!
  Order completed for customer-1!
*/

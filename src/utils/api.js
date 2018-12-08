
const shopItems = [
  {
    name: "Meal deal",
    price: 3.99
  },
  {
    name: "Coffee",
    price: 2.50
  },
  {
    name: "Arduino starter kit",
    price: 82.10
  }
];

const API = {
  getShopAvailableItems: (callBack) => callBack(shopItems)
};

export default API;
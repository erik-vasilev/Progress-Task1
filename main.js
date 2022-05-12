let products = [
  {
    productID: 1,
    productName: "Chai",
    itemImg: "images/Masala-Chai-Tea-Recipe-Card.jpg",
    unitPrice: 18,
    unitsInStock: 39,
    deliveryOn: new Date(1996, 8, 20),
    description: "tasty",
  },
  {
    productID: 2,
    productName: "Chang",
    itemImg: "images/chang.png",
    unitPrice: 19,
    unitsInStock: 17,
    deliveryOn: new Date(1996, 7, 12),
    description: "very tasty",
  },
  {
    productID: 3,
    productName: "Aniseed Syrup",
    itemImg: "images/Golden-Syrup-3-square-500x500.jpg",
    unitPrice: 10,
    unitsInStock: 0,
    deliveryOn: new Date(1996, 8, 26),
    description: "very very tasty",
  },
  {
    productID: 4,
    productName: "Chef Anton's Cajun Seasoning",
    itemImg: "images/Cajun-Seasoning-001.jpg",
    unitPrice: 22,
    unitsInStock: 53,
    deliveryOn: new Date(1996, 9, 19),
    description: "very very very tasty",
  },
  {
    productID: 5,
    productName: "Chef Anton's Gumbo Mix",
    itemImg: "images/IMG_8544-scaled.jpeg",
    unitPrice: 21.35,
    unitsInStock: 0,
    deliveryOn: new Date(1996, 7, 17),
    description: "very very very tasty very",
  },
  {
    productID: 6,
    productName: "Grandma's Boysenberry Spread",
    itemImg: "images/original-42-948-12e_2018w.jpg",
    unitPrice: 25,
    unitsInStock: 120,
    deliveryOn: new Date(1996, 9, 19),
    description: "very very very tasty very very",
  },
  {
    productID: 7,
    productName: "Uncle Bob's Organic Dried Pears",
    itemImg: "images/4489-9623-3.jpg",
    unitPrice: 30,
    unitsInStock: 0,
    deliveryOn: new Date(1996, 7, 22),
    description: "tasty very very tasty very very",
  },
  {
    productID: 8,
    productName: "Northwoods Cranberry Sauce",
    itemImg:
      "images/Simply-Recipes-Cranberry-Sauce-Lead-Shot-Seo-1b-904f543819fb47deaa0f5d5345c9b74b.jpg",
    unitPrice: 40,
    unitsInStock: 0,
    deliveryOn: new Date(1996, 11, 1),
    description: "tasty tasty",
  },
  {
    productID: 9,
    productName: "Mishi Kobe Niku",
    itemImg: "images/Masala-Chai-Tea-Recipe-Card.jpg",
    unitPrice: 97,
    unitsInStock: 29,
    deliveryOn: new Date(1997, 1, 21),
    description: "very very",
  },
  {
    productID: 10,
    productName: "Ikura",
    itemImg: "images/ikura-salmon-roe-sushi-opener.jpg",
    unitPrice: 31,
    unitsInStock: 31,
    deliveryOn: new Date(1996, 8, 5),
    description: "delicious",
  },
];

let foodContainer = document.querySelector(".food-container");
let btn = document.createElement("button");

const food = products.map((item) => {
  const listItem = ` <div class="col-md-6 foodbox ${item.productID}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.itemImg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- title -->
                <span class="title">${item.productName}</span>
                <!-- price -->
                <span class="price">${item.unitPrice + " leva"}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.description}</p>
            </div>
            <!-- Quantity -->
            <div class="quantity-container">
                <span class="quantity">${
                  "quantity: " + item.unitsInStock
                }</span>
                    ${
                      item.unitsInStock > 0
                        ? `<button style='color: green; background-color: #c59d5f; border: none   display: block;
                        width: 100%;
                        border: none;
                        padding: 14px 28px;
                        font-size: 16px;
                        font-weight: bold;
                        cursor: pointer;
                        text-align: center;'>Add to cart</button>`
                        : `<button style='color: red; background-color: #c59d5f; border: none   display: block;
                        width: 100%;
                        border: none;
                        padding: 14px 28px;
                        font-size: 16px;
                        font-weight: bold;
                        cursor: pointer;
                        text-align: center;'>Out of Stock</button>`
                    }
            </div>
        </div>   
    </div>
</div>`;
  foodContainer.innerHTML += listItem;
});

const menuData = {
  hotBeverages: [
    {
      name: "Coffee",
      image: "/assets/products/beverages/hot/coffee.png",
      size: [
        {
          name: "Small",
          price: 1.54,
          calories: 3
        },
        {
          name: "Medium",
          price: 1.76,
          calories: 4
        },
        {
          name: "Large",
          price: 1.92,
          calories: 5
        },
        {
          name: "Extra Large",
          price: 2.19,
          calories: 5
        }
      ],
      blend: ["Original", "Dark Roast", "Decaf"]
    }
  ],

  coldBeverages: [
    {
      name: "Iced Coffee",
      image: "/assets/products/beverages/cold/Iced Latte Resized.png",
      flavor: [
        {
          name: "Classic",
          size: ["Small", "Medium", "Large"],
          price: [1.79, 1.99, 2.49],
          calories: [116, 151, 228]
        }
      ]
    },

    {
      name: "Iced Capp",
      image: "/assets/products/beverages/cold/ChocolateChipIcedCapp.png",
      flavor: [
        {
          name: "Classic",
          size: ["Small", "Medium", "Large"],
          price: [2.59, 2.99, 3.79],
          calories: [221, 305, 406]
        },
        {
          name: "Light",
          size: ["Small", "Medium", "Large"],
          price: [2.59, 2.99, 3.79],
          calories: [221, 305, 406]
        }
      ]
    },
    {
      name: "Iced Capp Premium",
      image: "/assets/products/beverages/cold/ChocolateChipIcedCapp.png",
      flavor: [
        {
          name: "Vanilla",
          size: ["Small", "Medium", "Large"],
          price: [3.09, 3.79, 4.39],
          calories: [351, 454, 574]
        },
        {
          name: "Caramel",
          size: ["Small", "Medium", "Large"],
          price: [3.09, 3.79, 4.39],
          calories: [356, 460, 581]
        },
        {
          name: "Mocha",
          size: ["Small", "Medium", "Large"],
          price: [3.09, 3.79, 4.39],
          calories: [353, 458, 579]
        }
      ]
    }
  ]
}

export default menuData

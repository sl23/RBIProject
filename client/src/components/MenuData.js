const menuData = {
  hotBeverages: [
    {
      name: "Coffee",
      image: "/assets/products/beverages/hot/coffee.png",
      options: [
        {
          name: "Original Blend",
          details: [
            { size: "Small", price: 1.54, calories: 3 },
            { size: "Medium", price: 1.76, calories: 4 },
            { size: "Large", price: 1.92, calories: 5 },
            { size: "Extra Large", price: 2.19, calories: 5 }
          ]
        },
        {
          name: "Dark Roast",
          details: [
            { size: "Small", price: 1.54, calories: 3 },
            { size: "Medium", price: 1.76, calories: 4 },
            { size: "Large", price: 1.92, calories: 5 },
            { size: "Extra Large", price: 2.19, calories: 5 }
          ]
        },
        {
          name: "Decaf",
          details: [
            { size: "Small", price: 1.54, calories: 3 },
            { size: "Medium", price: 1.76, calories: 4 },
            { size: "Large", price: 1.92, calories: 5 },
            { size: "Extra Large", price: 2.19, calories: 5 }
          ]
        }
      ]
    }
  ],

  coldBeverages: [
    {
      name: "Iced Coffee",
      image: "/assets/products/beverages/cold/Iced Latte Resized.png",
      options: [
        { size: "Small", price: 1.79, calories: 116 },
        { size: "Medium", price: 1.99, calories: 151 },
        { size: "Large", price: 2.49, calories: 228 }
      ]
    },

    {
      name: "Iced Capp",
      image: "/assets/products/beverages/cold/ChocolateChipIcedCapp.png",
      options: [
        {
          name: "Classic",
          details: [
            { size: "Small", price: 2.59, calories: 221 },
            { size: "Medium", price: 2.99, calories: 305 },
            { size: "Large", price: 3.79, calories: 406 }
          ]
        }
      ]
    },

    {
      name: "Iced Capp Premium",
      image: "/assets/products/beverages/cold/ChocolateChipIcedCapp.png",
      options: [
        {
          name: "Vanilla",
          details: [
            { size: "Small", price: 3.09, calories: 351 },
            { size: "Medium", price: 3.79, calories: 454 },
            { size: "Large", price: 4.39, calories: 574 }
          ]
        },
        {
          name: "Caramel",
          details: [
            { size: "Small", price: 3.09, calories: 356 },
            { size: "Medium", price: 3.79, calories: 460 },
            { size: "Large", price: 4.39, calories: 581 }
          ]
        },
        {
          name: "Mocha",
          details: [
            { size: "Small", price: 3.09, calories: 353 },
            { size: "Medium", price: 3.79, calories: 458 },
            { size: "Large", price: 4.39, calories: 579 }
          ]
        }
      ]
    }
  ]
}

export default menuData

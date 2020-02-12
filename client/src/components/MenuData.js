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
    // {
    //   name: "Tea",
    //   image: "/assets/products/beverages/hot/latte.png",
    //   options: [
    //     { size: "Small", price: 1.54, calories: 0 },
    //     { size: "Medium", price: 1.76, calories: 0 },
    //     { size: "Large", price: 1.92, calories: 0 },
    //     { size: "Extra Large", price: 2.19, calories: 0 }
    //   ]
    // },
    // {
    //   name: "French Vanilla",
    //   image: "/assets/products/beverages/hot/frenchvanilla.png",
    //   options: [
    //     { size: "Small", price: 1.99, calories: 243 },
    //     { size: "Medium", price: 2.29, calories: 309 },
    //     { size: "Large", price: 2.59, calories: 411 },
    //     { size: "Extra Large", price: 2.79, calories: 543 }
    //   ]
    // }
  ],

  coldBeverages: [
    {
      name: "Iced Coffee",
      image: "/assets/products/beverages/cold/Iced Latte Resized.png",
      options: [
        {
          name: "Classic",
          details: [
            { size: "Small", price: 1.79, calories: 116 },
            { size: "Medium", price: 1.99, calories: 151 },
            { size: "Large", price: 2.49, calories: 228 }
          ]
        }
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
  ],
  breakfast: [
    {
      name: "Homestyle Biscuit Breakfast Sandwich",
      image: "/assets/products/breakfast/Sausage Biscuit HBS.png",
      options: [
        {
          name: "Sausage Homestyle Biscuit",
          details: [{ size: "", price: 3.79, calories: 515 }]
        },
        {
          name: "Bacon Homestyle Biscuit",
          details: [{ size: "", price: 3.79, calories: 393 }]
        },
        {
          name: "Sausage & Bacon Homestyle Biscuit",
          details: [{ size: "", price: 4.69, calories: 575 }]
        }
      ]
    },
    {
      name: "English Muffin Breakfast Sandwich",
      image: "/assets/products/breakfast/Bacon & Sausage HBS.png",
      options: [
        {
          name: "Sausage English Muffin",
          details: [{ size: "", price: 3.79, calories: 456 }]
        },
        {
          name: "Bacon English Muffin",
          details: [{ size: "", price: 3.79, calories: 333 }]
        },
        {
          name: "Sausage & Bacon English Muffin",
          details: [{ size: "", price: 4.69, calories: 513 }]
        }
      ]
    },
    {
      name: "Farmer's Wrap",
      image: "/assets/products/breakfast/Sausage Farmers Wrap.png",
      options: [
        {
          name: "Sausage Farmer's Wrap",
          details: [{ size: "", price: 4.39, calories: 675 }]
        },
        {
          name: "Bacon Farmer's Wrap",
          details: [{ size: "", price: 4.39, calories: 552 }]
        }
      ]
    }
  ]
}

export default menuData

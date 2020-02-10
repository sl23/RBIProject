const menuData = {
  hotBeverages: {
    coffee: {
      name: "Coffee",
      image: "/assets/products/beverages/hot/coffee.png",
      size: {
        small: {
          name: "SM",
          price: 1.54,
          calories: 3
        },
        medium: {
          name: "MD",
          price: 1.76,
          calories: 4
        },
        large: {
          name: "LG",
          price: 1.92,
          calories: 5
        },
        xlarge: {
          name: "XL",
          price: 2.19,
          calories: 5
        }
      },
      blend: {
        original: "Original",
        darkroast: "Dark Roast",
        decaf: "Decaf"
      }
    },
    tea: {
      name: "Steeped Tea",
      image: "/assets/products/beverages/hot/latte.png",
      size: {
        small: {
          name: "SM",
          price: 1.54,
          calories: 0
        },
        medium: {
          name: "MD",
          price: 1.76,
          calories: 0
        },
        large: {
          name: "LG",
          price: 1.92,
          calories: 0
        },
        xlarge: {
          name: "XL",
          price: 2.19,
          calories: 0
        }
      }
    },
    frenchVanilla: {
      name: "French Vanilla",
      image: "/assets/products/beverages/hot/frenchvanilla.png",
      size: {
        small: {
          name: "SM",
          price: 1.99,
          calories: 243
        },
        medium: {
          name: "MD",
          price: 2.29,
          calories: 309
        },
        large: {
          name: "LG",
          price: 2.59,
          calories: 411
        },
        xlarge: {
          name: "XL",
          price: 2.79,
          calories: 543
        }
      }
    }
  },
  breakfast: {
    homestyleBiscuit: {
      name: "Homestyle Biscuits",
      image: "/assets/products/breakfast/Sausage Biscuit HBS.png",
      type: {
        bacon: {
          protein: bacon,
          price: 3.79,
          calories: 393
        },
        sausage: {
          protein: sausage,
          price: 3.79,
          calories: 515
        },
        sausageAndBacon: {
          protein: sausage_and_bacon,
          price: 4.69,
          calories: 575
        }
      }
    },
    englishMuffin: {
      name: "English Muffins",
      image: "/assets/products/breakfast/Bacon & Sausage HBS.png",
      type: {
        bacon: {
          protein: bacon,
          price: 3.79,
          calories: 333
        },
        sausage: {
          protein: sausage,
          price: 3.79,
          calories: 456
        },
        sausageAndBacon: {
          protein: sausage_and_bacon,
          price: 4.69,
          calories: 513
        }
      }
    },
    farmersWrap: {
      name: "Farmer's Wraps",
      image: "/assets/products/breakfast/Sausage Farmers Wrap.png",
      type: {
        bacon: {
          protein: bacon,
          price: 4.39,
          calories: 552
        },
        sausage: {
          protein: sausage,
          price: 4.39,
          calories: 675
        },
        sausageAndBacon: {
          protein: sausage_and_bacon,
          price: 4.69,
          calories: 513
        }
      }
    }
  }
}

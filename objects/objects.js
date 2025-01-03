
    //Objects in js
    let student = { name: "faizan", age: 21, rollNO: 207 };
    console.log(student);

    //Nested objects and method inside objects
    let product = {
      price: 340,
      company: "xyz",
      itemName: "Mango",
      displayPrice: function () {
        console.log(`Price of the product is ${this.price}`);
      },
      rating: {
        stars: 4.5,
        reviews: 4,
      },
    };
    console.log(product.rating.stars);

    //Autoboxing (primitive to obj conversion)
    console.log("Hello world".toUpperCase());

    //Objects destructing
    let { company } = product;
    console.log(company);

    // Json objects
    // Convert it to string
    let str = JSON.stringify(product);
    console.log(str);
    console.log(typeof str);
    // Convert it to js object
    let obj = JSON.parse(str);
    console.log(obj);
    console.log(typeof obj);

    localStorage.setItem("name", "faizan");
    localStorage.setItem("name", "ali");
    console.log(localStorage.getItem("name"));

    //store objects
    localStorage.setItem("product", JSON.stringify(product));
    let product2 = JSON.parse(localStorage.getItem("product"));
    console.log(product2);

    //to clear local storage
    localStorage.clear();
    localStorage.removeItem("name");
  
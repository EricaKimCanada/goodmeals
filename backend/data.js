import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Jane Doe",
      email: "jd@abc.com",
      password: bcrypt.hashSync("1234", 8),
      address: "111 So st",
      city: "London",
      province: "on",
      postalCode: "Mbo4Ge",
      phone: "1234567",
    },
    {
      name: "Julia Robert",
      email: "jr2@abc.com",
      password: bcrypt.hashSync("1234", 8),
      address: "567 Sr St",
      city: "London",
      province: "on",
      postalCode: "M5Y5YR",
      phone: "33335532",
    },
  ],
  meals: [
    {
      name: "Air Fryer Crispy Chicken",
      description:
        "Enjoy legitimately fried chicken in a completely guilt-free and paleo-friendly fashion.",
      price: 12,
      ingredients: "chiken",
      dietplanName: "paleo",
      image: "/images/paleo/paleoFriedChicken.jpg",
    },
    {
      name: "Apple Cinnamon Paleo Fig Newtons",
      description:
        "Apples, figs, and cinnamon form the sticky sweet filling for this homemade paleo-friendly fig newton recipe.",
      price: 12,
      ingredients: "chiken",
      dietplanName: "paleo",
      image: "/images/paleo/paleoAppleCinnamonFig.jpg",
    },
    {
      name: "Strawberry Peach Paleo Parfait",
      description:
        "Crunchy, creamy, and fruity layers come together in this quick and easy paleo dessert. Loaded with nutritious ingredients, this dessert also makes a good breakfast.",
      price: 12,
      ingredients: "chiken",
      dietplanName: "paleo",
      image: "/images/paleo/paleoStrawPeachParfait.jpg",
    },
    {
      name: "Paleo Almond Butter Cups",
      description:
        "This paleo recipe provides a healthy, Paleo-friendly alternative to peanut butter cups. These are made with dark chocolate and almond butter butter instead.",
      price: 12,
      ingredients: "chiken",
      dietplanName: "paleo",
      image: "/images/paleo/paleoAlmondButterCups.jpg",
    },
    {
      name: "Paleo Zucchini Fritters",
      description:
        "Zucchini fritters are a great use for leftover zucchini, and can be served with eggs at breakfast or with a lemony mayo for a side dish.",
      price: 12,
      ingredients: "chiken",
      dietplanName: "paleo",
      image: "/images/paleo/paleoZucchiniFritters.jpg",
    },
    {
      name: "Paleo Pumpkin Bread",
      description:
        "This recipe provides a Paleo-friendly way to enjoy the wonderful flavor combination of pumpkin, cinnamon, nutmeg, and cloves.",
      price: 12,
      ingredients: "bean",
      dietplanName: "paleo",
      image: "/images/paleo/paleoPumpkinBread.jpg",
    },
    {
      name: "Chicken & Goat Cheese Skillet",
      description:
        "Your whole family will love this. The salsa sauce gives you a head start on this quick kid-friendly pasta dinner, and the flavor combination with cream cheese is simply addictive.",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoChickenGoatCheeseSkillet.jpg",
    },
    {
      name: "Creamy Garlic Pesto Chicken",
      description:
        "This stir-fry chicken with pesto, sun-dried tomatoes and bell peppers in a creamy garlic sauce is simply amazing.",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoGarlicChicken.webp",
    },
    {
      name: "Buttery Garlic Herb Chicken With Asparagus",
      description:
        "Calling ALL chicken lovers… This is the easy dinner recipe of your dreams! Garlic, butter, and herbs come together to flavor this golden chicken.",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoGarlicHerbChicken.webp",
    },
    {
      name: "Italian Sausage and Peppers Skillet",
      description:
        "Easy and full of flavor! This Italian American street-food classic is so delish: cooked with Italian sausages, bell peppers and tomato, and flavored with fennel and basil.",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoItalianSausageAndPeppers.webp",
    },
    {
      name: "Baked Spaghetti Squash with Lemon Garlic Sauce",
      description:
        "Baked spaghetti squash strands are tossed with a fragrant lemon garlic butter sauce and sprinkled with Parmesan for a cheesy note",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoBakedSpaghettiSquash.webp",
    },
    {
      name: "Zucchini Noodles in Creamy Tomato Sauce",
      description:
        "Try these zucchini noodles for a low carb comfort dinner. Zucchini is quickly infused in a creamy tomato sauce flavored with onion and garlic.",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoZucchiniNoodles.webp",
    },
    {
      name: "Cheesy Green Beans Casserole",
      description:
        "A delicious side dish to enjoy for a casual dinner—Simply roast green beans with a mix of cream, garlic and herbs, top with cheese and bake until cheesy goodness!",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoCheesyGreenBeans.webp",
    },
    {
      name: "Tomato Spinach Chicken Skillet",
      description:
        "Filling, tasty and comforting, this nutritious chicken skillet recipe is a delicious protein packed dinner option and great if you are on a keto diet.",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoTomotaSpinachChicken.webp",
    },
    {
      name: "Jalapeño Popper Chicken Casserole",
      description:
        "A great chicken casserole recipe for lunch or dinner. Gluten-free, and low carb / keto diet friendly. Relish today!",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoJalapenoPopperChicken.webp",
    },
    {
      name: "Mozzarella Parmesan Chicken Casserole",
      description:
        "Seasoned chicken baked with Marinara sauce, Parmesan and mozzarella, and topped with crisp pork rind makes this delicious twist on chicken parmesan a total crowd pleaser.",
      price: 12,
      ingredients: "bean",
      dietplanName: "keto",
      image: "/images/keto/ketoMozzarellaParmesanChicken.webp",
    },
    {
      name: "Paleo Carrot Cake Cupcakes",
      description:
        "This classic carrot cake is transformed into individual cupcakes. Carrots, dates, and crunchy walnuts add an abundance of flavors and textures.",
      price: 12,
      ingredients: "bean",
      dietplanName: "paleo",
      image: "/images/paleo/paleoCarrotCakeCupcakes.jpg",
    },
    {
      name: "Blackened Tempeh Wrap",
      description:
        "Blackened Tempeh with Avocado, Kale, Radishes, Pickled Onions and a Creamy VEGAN Cajun Ranch Dressing that can be made into entrée salad, packable wrap or healthy satisfying Buddha bowl!",
      price: 12,
      ingredients: "bean",
      dietplanName: "vegan",
      image: "/images/vegan/veganBlackenedTempehWrap.jpg",
    },
    {
      name: "Baked Sheet-Pan Ratatouille",
      description:
        "Make a big batch on Sunday then serve it up 3 different ways during the busy workweek. Simple, EASY, healthy, delicious…  and totally vegan!",
      price: 12,
      ingredients: "bean",
      dietplanName: "vegan",
      image: "/images/vegan/veganRatatouille.jpg",
    },
    {
      name: "Chipotle Portobello Tacos",
      description:
        "Made with sheet-pan roasted portobello mushrooms in a delicious chipotle marinade, with vegan Cilantro Cream, avocado, pickled onions, and roasted peppers.",
      price: 12,
      ingredients: "bean",
      dietplanName: "vegan",
      image: "/images/vegan/veganPortobelloTacos.jpg",
    },
    {
      name: "Spicy Miso Portobello Mushroom Burger",
      description:
        "This Asian-style, grilled, vegan portobello mushroom burger is full of delicious umami flavor! It’s lathered with Asian-style Guacamole, topped with a cool cucumber ribbon salad and crunchy carrot slaw.",
      price: 12,
      ingredients: "bean",
      dietplanName: "vegan",
      image: "/images/vegan/veganSpicyMisoBurger.jpg",
    },
    {
      name: "Vegan Alfredo",
      description:
        "Made with cashews or hemp hearts), tossed with sauteed mushrooms, peas, Meyer lemon zest and a secret ingredient that gives this extra complexity and depth.",
      price: 12,
      ingredients: "bean",
      dietplanName: "vegan",
      image: "/images/vegan/veganAlfredo.jpg",
    },
    {
      name: "Lentil Dal with Sweet Potatoes",
      description:
        "Soulful, comforting Sweet Potato & Lentil Dal topped with a flavorful “tempering oil”. A quick 30 minute vegan meal that is simple to make and full of fragrant Indian spices.",
      price: 12,
      ingredients: "bean",
      dietplanName: "vegan",
      image: "/images/vegan/veganLentilDalSweetPotatoes.jpg",
    },
    {
      name: "Emerald Dal",
      description:
        "Emerald Dal is one of the most flavorful, plant-based, vegetarian meals.  This version is packed full of spinach making it especially high in nutrients and flavor! ",
      price: 12,
      ingredients: "bean",
      dietplanName: "vegetarian",
      image: "/images/vegetarian/vegetarianEmeraldDal.jpg",
    },
    {
      name: "Brocoli Quinoa Cakes",
      description:
        "These Broccoli Quinoa Cakes can be made in 30 minutes & are a delicious healthy vegetarian meal that your whole family will love!",
      price: 12,
      ingredients: "bean",
      dietplanName: "vegetarian",
      image: "/images/vegetarian/vegetarianBrocoliQuinoaCakes.jpg",
    },
    {
      name: "Tomato Risotto with Saffron",
      description:
        "This summery risotto is made with juicy vine-ripened tomatoes, and infused with saffron.",
      price: 12,
      ingredients: "bean",
      dietplanName: "vegetarian",
      image: "/images/vegetarian/vegetarianTomatoRisotto.jpg",
    },
    {
      name: "Tomato Risotto with Saffron",
      description:
        "Vegetarian Nasi Goreng (Indonesian Fried Rice) loaded up with fresh veggies! An easy tasty vegetarian recipe that can be made in minutes!",
      price: 12,
      ingredients: "bean",
      dietplanName: "vegetarian",
      image: "/images/vegetarian/vegetarianNasiGoreng.jpg",
    },
    {
      name: "Roasted Chile Rellenos",
      description:
        "A lightened up recipe and simplified by roasting the peppers and the Rancheros sauce ingredients all together on one sheet-pan – saving a step! Delicious and satisfying!",
      price: 12,
      ingredients: "bean",
      dietplanName: "vegetarian",
      image: "/images/vegetarian/vegetarianRoastedChileRellenos.jpg",
    },
    {
      name: "Vegetarian Enchiladas",
      description:
        "Made with black beans and your choice of veggies (like red bell pepper, sweet potato zucchini or corn) and Homemade Enchilada Sauce! Easy, Healthy and full of delicious Mexican Flavor!",
      price: 12,
      ingredients: "bean",
      dietplanName: "vegetarian",
      image: "/images/vegetarian/vegetarianEnchiladas.jpg",
    },
  ],
};
export default data;

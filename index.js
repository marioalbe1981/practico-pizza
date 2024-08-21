const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// a) pizzas que tengan un id impar.
console.log("Pizzas con ID impar:");
pizzas.forEach(pizza => {
    if (pizza.id % 2 !== 0) {
        console.log(`- La ${pizza.nombre} tiene un ID impar: ${pizza.id}`);
    }
});

// b) ¿Hay alguna pizza que valga menos de $600?
const hayPizzaBarata = pizzas.some(pizza => pizza.precio < 600);
if (hayPizzaBarata) {
    console.log("Sí, hay al menos una pizza que vale menos de $600.");
} else {
    console.log("No, ninguna pizza vale menos de $600.");
}

// c) pizza con su respectivo precio.
console.log("Lista de pizzas con sus respectivos precios:");
pizzas.forEach(pizza => {
    console.log(`- La ${pizza.nombre} tiene un valor de $${pizza.precio}.`);
});

// d) ingredientes de cada pizza
console.log("Ingredientes de cada pizza:");
pizzas.forEach(pizza => {
    console.log(`- La ${pizza.nombre} tiene los siguientes ingredientes:`);
    pizza.ingredientes.forEach(ingrediente => {
        console.log(`   * ${ingrediente}`);
    });
});
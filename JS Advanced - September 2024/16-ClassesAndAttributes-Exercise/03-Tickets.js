function tickets(arr, word) {
  let result = [];

  class Ticket {
    destination;
    price;
    status;

    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  for (const info of arr) {
    let [destination, price, status] = info.split("|");
    result.push(new Ticket(destination, price, status));
  }

  if (word === "destination") {
    result.sort((a, b) => a.destination.localeCompare(b.destination));
  } else if (word === "price") {
    result.sort((a, b) => a.price - b.price);
  } else if (word === "status") {
    result.sort((a, b) => a.status.localeCompare(b.status));
  }
  return result;
}

console.log(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
// [ Ticket { destination: "Boston",
//     price: 126.2,
//     status: "departed" },
//   Ticket { destination: "New York City",
//     price: 95.99,
//     status: "available" },
//   Ticket { destination: "New York City",
//     price: 95.99,
//     status: "sold" },
//   Ticket { destination: "Philadelphia",
//     price: 94.2,
//     status: "available" } ]

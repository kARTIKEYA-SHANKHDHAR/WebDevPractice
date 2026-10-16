// create a object which has these points :
//  customername, movieName, ticketPrice and quantity
//  a nested customer object with email and city
//  a seats array containing at least three seat numbers
//  a method calculateTotalAmount()

//  exectute these :

//  1. print the movieName using dot notation
//  2. read the customer's city using nested property access
//  3. change the ticket price and add a booking status property 
//  4.print all onject keys using object.keys()
//  5. destructure moviename and quantity
//  6. calculate and print the total booking amount 

const Ticketsyysssstummm = {
    customerName: {
        Name: "unknown",
        email: "unknown@gmail.com",
        city: "banglore"
    },

    movieName: "Kanchi-re-kanchi",
    ticketPrice: 450,
    quantity: 5,

    seats: [234, 235, 236, 237, 238],

    calculateTotalAmount: function () {
        return this.ticketPrice * this.quantity;
    }
};

console.log(Ticketsyysssstummm.movieName);

console.log(Ticketsyysssstummm.customerName.city);

Ticketsyysssstummm.ticketPrice = 500;
Ticketsyysssstummm.bookingStatus = "Confirmed";

console.log(Object.keys(Ticketsyysssstummm));

const { movieName, quantity } = Ticketsyysssstummm;

console.log(movieName);
console.log(quantity);

console.log(Ticketsyysssstummm.calculateTotalAmount());

# Constructor 
A constructor is special function of JavaScript that creates and initializes an object instance of a class. It helps to initilize the properties or variable. As we know the class is the blueprint of an object and we only define properties data types. To put the values to the properties we call the constructor and put the properties  arguments.

# Usage
After defining the properties data type, we have to create a constructor and pass the parameters. 

<h3>Syntax</h3>

```typescript
class Fruit {
    name: string;
    quantity: number;

    constructor(name: string, quantity: number) {

    }
}
```

# this
A ***this*** keyword used inside the constructor to point out the properties. Whenever, calling constructor. The argument inside the constructor will be = (equal) to the properties of a the class.
    "this keyword is used when we want to point or declare a variable but not now later it will be use. Otherwise we can use var,let and const. But we don't want memory to store the data right now, because we have to call it later in his active position."

```typescript
class Fruit {
    name: string;
    quantity: number;

    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity =  quantity;
    }
}
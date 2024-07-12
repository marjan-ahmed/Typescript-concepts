# Benefits of Object Oriented Programming
Some of the benefits of Object Oriented Programming are as follows:

- Easier debuging
- Reuse of code through inheritance
- Flexibility through polymorphism
- Effective problem solving
- Project decoupling (Separate project into groups)


# Four Pillars Of OOP

1. Inheritence
2. Encapsulation
3. Abstraction
4. Polymorphism

# CLASS:
A class is a blue print of an active object. that will work or do some action. A class can be an intity. and the intity is something that have some properties and working.
for example: chair, fan, light, mic, speaker, door, animals, plants, human, organ system etc.

<h3>SYNTAX:</h3>

```typescript

class [class name] {

}

```

# new 
A ***new*** is a keyword help to make a new object or instance of a class. By the help of ***new***, you can make hundreds of objects.

<h3>Syntax</h3>

```typescript
class User {
    names: string[] = [] // By default
    ids: number[] = [] // By default
}

let userData = new User(); // New object created
let userNames = userData.names = ['Sam','Ali',"Rahul"];
let userIds = userData.ids = [1,2,3];
console.log(userNames);
console.log(userIds);
```
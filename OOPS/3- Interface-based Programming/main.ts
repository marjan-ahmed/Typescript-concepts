// Interface
interface IHotel { // IHotel = Interface of Hotel
    room: number;
    floor: number;
    openingRoom(room: number, floor: number): string;
    closingRoom(): void;
}

// implementing interface with class of Hotel
class Hotel implements IHotel {
    room: number
    floor: number 
    constructor(room: number, floor: number) {
        this.room = room
        this.floor = floor
    }

    openingRoom(room: number, floor: number) {
        return `${this.room} room is on ${this.floor}nd floor`
    }

    closingRoom() {
        return `Room No. ${this.room} has been closed!`
    }
}

 // You can assign object variable with the data type of interface (IHotel), but it's not necessary
const roomOne: IHotel = new Hotel(1, 2);
console.log(roomOne);
console.log(roomOne.openingRoom(1,2));
console.log(roomOne.closingRoom());


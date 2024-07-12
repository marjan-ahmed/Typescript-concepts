"use strict";
// implementing interface with class of Hotel
class Hotel {
    constructor(room, floor) {
        this.room = room;
        this.floor = floor;
    }
    openingRoom(room, floor) {
        return `${this.room} room is on ${this.floor}nd floor`;
    }
    closingRoom() {
        return `Room No. ${this.room} has been closed!`;
    }
}
const roomOne = new Hotel(1, 2);
// const roomOne: IHotel = new Hotel(1, 2);
// You can assign object variable with the data type of interface (IHotel), but it's not necessary
console.log(roomOne);
console.log(roomOne.openingRoom(1, 2));
console.log(roomOne.closingRoom());

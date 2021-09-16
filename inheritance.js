// declar a class 

class Support {
    name;
    address;
    designation = 'Web Dev';
    startSession;
    paidPerHour = 1000;
    constructor(name, address, startSession) {
        this.name = name;
        this.address = address;
        this.startSession = startSession;
    }
    payment(hour) {
        return hour * this.paidPerHour;
    }
}

class StudentCare {
    name;
    designation = 'Student Care Web Dev';
    location = 'BD';
    supportTime;
    constructor(name, supportTime) {
        this.name = name;
        this.supportTime = supportTime;
    }
    buildAroutine(student) {
        console.log(this.name, 'Build a routine For', student)
    }

}

const asad = new Support('MD ASADUZZAMAN', '20/1 Borobag', 'At Evening');
console.log(asad)
const wages = asad.payment(3);
console.log(`PerDay income: ${wages}Tk.`)
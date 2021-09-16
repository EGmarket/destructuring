// code organize korar jonno best use is class method

class Support {
    name;
    address;
    role = 'support Web Dev';
    startSession = 'at mid-night'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    startWork() {
        console.log(this.name, 'Working Started from', this.address)
    }
}

const asad = new Support('Asaduzzaman', '20/1 Borobag');
const kayum = new Support('kayum Hossan', 'Manikganj,singair')
asad.startWork();
// console.log(`First Support Started by ${asad} and newComer support person ${kayum}`)
console.log(kayum)
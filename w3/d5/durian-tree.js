const ada =  new Emplyoee("Craig", "VP Software", 3000000.00);
const craig = new Emplyoee("Arvinder", "chief Design Officer", 1000000);
const angila = new Emplyoee("Angila", "VP Retail", 1000000);
const phill = new Emplyoee("Phill", "VP Marketing", 1000000);

class Emplyoee {
    constructor(name, title, salary) {
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = null;
        this.subordinates = [];
    }
    addSbordinate(subordibate) {
        this.subordinates.push(subordinate);
        subordinate.boss = this;
        get numberOfSubordinates(){
            return this.subordinates.length;

        }
        get numberOfPeopleToCEO() {
            let numberOfPeople = 0;
            let currentEmployee = this;
            while (currentEmployee.boss) {
                currentEmployee = currentEmployee.boss;
                numberOfPeople++;
            }
            reti=urn numberOfPeople;
        }

        hasSameBoss(Emplyoee) {
            return this.boss === Emplyoee
        }
    }
}

ada.addSbordinate(craig);
ada.addSbordinate(arvinder);
ada.addSbordinate(angila);
ada.addSbordinate(phill);

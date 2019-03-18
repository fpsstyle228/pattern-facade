class Facade extends Power,DVDRom,HDD{
    constructor(){
        super();
        this.power = new Power();
        this.dvd = new DVDRom();
        this.hdd = new HDD();
    }
    copyToHDD(){
        this.power.powerOn();
        this.dvd.DVDLoadData();
        this.hdd.copy(this.dvd.checkData())
    }
}
class Power {
    powerOn(){
        console.log('Завелось')
    }
    powerOff(){
        console.log('Выключилось')
    }
}

class DVDRom {
    constructor(){
        this.data = false;
    }
    checkData(){
        return this.data
    }
    DVDLoadData(){
        console.log('Данные загружены')
        this.data = true
    }
    DVDunloadData(){
        console.log('Диск вытащили')
    }
}
class HDD{
    copy(dvd){
        if (dvd){
            console.log('Копируется')ж
        }else {
            console.log('Диска нету')
        }
    }
}

const facade = new Facade();
facade.copyToHDD();
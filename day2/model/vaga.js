class Vaga {
    constructor(id, name, salary, area, description, skills, differentials, isPdc, isActive){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.description = description;
        this.skills = skills;
        this.area = area;
        this.differentials = differentials;
        this.isPdc = isPdc;
        this.isActive = isActive;
    }
}

 module.exports = Vaga;
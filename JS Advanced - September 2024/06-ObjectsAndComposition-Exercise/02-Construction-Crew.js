function constructionCrew(obj) {
    
    if (obj.dizziness === true) {
        obj.levelOfHydrated += Number(obj.weight) * 0.1 * Number(obj.experience);
        obj.dizziness = false;
    }
    return obj;
}

console.log(constructionCrew({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true }));
// {weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false}
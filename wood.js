/**
 * chair --> 3cft
 * table --> 10 cft
 * bed --> 50 cft
 * */ 

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perbedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perbedWood;

    const totalWoodNeed = chairWood + tableWood + bedWood;
    return totalWoodNeed;
}

const totalWood = woodQuantity(4, 1, 1);
console.log('Wood needed', totalWood);
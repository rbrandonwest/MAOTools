var arv;
var realtorFee;
var mao;
var maoPercent;
var beforeRepair;
var repairCosts;
var foundationCost;
var roofCost;
var acCost;
var plumbingCost;
var kitchenCost;
var bathroomCost;
var flooringCost;
var repairs = [];

function getRealtorFee(){
    arv = document.getElementById('arv').value;
    realtorFee = arv * .08;
}

function getMao(){
   maoPercent = document.getElementById('maoPercent').value;
   mao = maoPercent * arv;
}

function repairCosts(){
    if(document.getElementById('foundation').checked == true){
        foundationCost = 10000;
        repairs.push(foundationCost);
    }
    if(document.getElementById('roof').checked == true){
        roofCost = 10000;
        repairs.push(roofCost);

    }
    if(document.getElementById('ac').checked == true){
        acCost = 10000;
        repairs.push(acCost);

    }
    if(document.getElementById('plumbing').checked == true){
        plumbingCost = 10000;
        repairs.push(plumbingCost);

    }
    if(document.getElementById('kitchen').checked == true){
        kitchenCost = 10000;
        repairs.push(kitchenCost);

    }
    if(document.getElementById('bathroom').checked == true){
        bathroomCost = 10000;
        repairs.push(bathroomCost);

    }
    if(document.getElementById('flooring').checked == true){
        flooringCost = 10000;
        repairs.push(flooringCost);

    }
    repairCosts = repairs.reduce((a, b) => a + b, 0);
    console.log(repairCosts);
}

function breakEven(){
    console.log(arv);
    console.log(repairs);
    beforeRepair = arv - repairCosts - realtorFee;
}

function breakdown(){
    getRealtorFee();
    getMao();
    repairCosts();
    breakEven();
    console.log(beforeRepair);
    document.getElementById('arvNumber').innerHTML = "ARV: " + arv.toLocaleString();
    document.getElementById('mao').innerHTML = "Target Offer: " + mao;
    document.getElementById('breakEven').innerHTML = "Break Even Price: " + beforeRepair;
    document.getElementById('realtorFee').innerHTML = "Realtor Fee: " + realtorFee;
    document.getElementById('repairCosts').innerHTML = "Repair Costs: " + repairCosts;
};

console.log(realtorFee);
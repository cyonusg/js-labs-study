const calcCost = (readings) => {
    const COST_KWH = 0.138;
    let total = 0;
    readings.forEach(item => {
        total += item.value * COST_KWH 
    });
    
    return rounded(total);
}

const calcConsumption = (readings) => {
    let total = 0;
    readings.forEach(item => {
        total += item.value
    });
    return rounded (total);
}

const calcFootPrint = (readings) => {
    let total = 0;
    const VALUE_TONNES = 0.0002532;
    readings.forEach(item => {
        total += VALUE_TONNES * item.value
    });
    return rounded(total, 4)
}

const rounded = ( value, decimals = 0 ) => {
    if(!decimals) return Math.round(value)
    return value.toFixed(decimals);
}

export { calcCost, calcConsumption, calcFootPrint }
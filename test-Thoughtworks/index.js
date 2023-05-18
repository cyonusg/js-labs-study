import { renderChart } from "./chart.js";
import { getReadings, groupByDay, sortByTime } from "./reading";
import { calcCost, calcConsumption, calcFootPrint } from "./CalcHelper.js";
import renderCards from "./renderCards.js";

const readings = await getReadings();
const readingsFilters = sortByTime(groupByDay(readings)).slice(-30);

const costTotal = calcCost(readingsFilters);
const consumption = calcConsumption(readingsFilters);
const footPrint = calcFootPrint(readingsFilters);

renderCards([
    {
        id: "totalCost",
        value: costTotal
    },
    {
        id: "consumption",
        value: consumption
    },
    {
        id: "footPrint",
        value: footPrint
    }
]);

renderChart(readingsFilters);


/****
 * 
 * 
 * 
 *
 * 
 * I can see the Cost 💰 in $ rounded to the nearest integer. Cost is $0.138 per 1 kWh.
I can see the Consumption ⚡ in kWh rounded to the nearest integer. Consumption is the sum of all readings for the last 30 days.
I can see the Footprint 👟 in tonnes to an accuracy of 4 decimal places. The Footprint is 0.0002532 tonnes per 1kWh. */
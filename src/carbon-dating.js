const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports =function dateSample(sampleActivity) {
  num = parseFloat(sampleActivity);
  if ( (typeof sampleActivity) === "string" && (!isNaN(num)) && (num > 0 && num < 15)) {
    return Math.ceil(Math.log((MODERN_ACTIVITY/parseFloat(sampleActivity)))/(0.693/HALF_LIFE_PERIOD));
  } else {
    return false;
   }
 
};


/* 
import functions for patient data
*/
const data = require('./array-practice');
const myPatients = require('./patient');

const anon = myPatients.anonimizedData;
const BMI = myPatients.bmiIndexes;
const contactInfo = myPatients.patientContactInfo;
const emails = myPatients.patientEmail;
const samples = myPatients.patientSampling;
const personalContact = myPatients.personalContact;

console.log(BMI);
/*
Import functions & data
*/
const patients = require('./array-practice.js');
const BMICalculator = require('./calculator.js');

// capture imported functions into variable
let bodyIndex = BMICalculator.bodyIndex;

//Grab data point that keep patient anonymous
const anonimizedData = patients.map(function(patient){
     return {
        height: patient.height,
        weight: patient.weight,
        gender: patient.gender,
        age: patient.age,
        dailyExercise: patient.dailyExercise,
    }
});

//Grab data points for personalized contact
const patientContactInfo = patients.map(function (patient) {
    return {
        firstName: patient.firstName,
        lastName: patient.lastName,
        email: patient.email,
        phoneNumber: patient.phoneNumber,
    }
});

//Generate list of all patients' emails
const patientEmail = patients.map(function (patient) {
        return {    
        email: patient.email,
    }
});

//Grab all info needed for sampling patient data
const patientSampling = patients.map(function (patient) {

    return {
        height: patient.height,
        weight: patient.weight,
        age: patient.age,
    }

});

//Patient ID & email for personalized contact
const personalContact = patients.map(function (patient) {
    return {
        ID: patient.id,
        email: patient.email,
    }
});

//Calculate BMI of each patient
const bmiIndexes = patients.map(function (patient) {
        const bmi = bodyIndex(patient.weight, patient.height)
       return {
           ID: patient.id,
           BMI: parseInt(bmi, 10)
       }
});

console.log(bmiIndexes)

//Calculate BMI average
const average = (index) => {
let sum = 0;
index.forEach(({ BMI }) => sum += BMI);
const length = index.length;
return 'Average BMI of all patients is ' + (sum/length);
};

//Easier variable 
const averageBMI = (average(bmiIndexes));
console.log(averageBMI)

/*
Reduce examples
*/
// iterate through BMI to get total sum
let sumOfBMI = bmiIndexes.reduce((sum, id) => sum + id.BMI, 0);
console.log('totalsum', sumOfBMI);

// This is interesting
let patientObj = bmiIndexes.reduce((obj, patient) => {
    obj[patient.ID] = patient.BMI;
    return obj;
}, {});
console.log('Patient ID including BMI', patientObj)

const healthyOrNot = arr => {
    return arr.reduce((sum, {BMI: number}, idx, {arr1, arr2, arr3}) => {
        if( number > 25) {
        return arr1.push(number)
        } 
        return number <= 25 && number >= 20
            ? arr2.push(number)
            : arr3.push(number);
        
    }, []);
};

healthyOrNot(bmiIndexes);

function getRating(watchList) {
    // Add your code below this line
    const averageRating = watchList.reduce(({ sum, count }, { Director: dir, imdbRating: rating }, idx, arr) => {
        if (dir === 'Christopher Nolan') {
            count++;
            sum += Number(rating);
        }
        return idx === arr.length - 1
            ? sum / count
            : { sum, count };
    }, { sum: 0, count: 0 });
    // Add your code above this line
    return averageRating;
}


//For example, use reduce to iterate through ID and assign age as property
// let patientObj = patients.reduce((obj, patient) => {
//     obj[patient.id] = patient.age;
//     return obj;
// }, {});
// console.log('Patient ID including BMI', patientObj)
/*
End of functions

Export functions
*/

module.exports = {
    bmiIndexes,
    personalContact,
    patientSampling,
    patientEmail,
    patientContactInfo,
    anonimizedData,
    }
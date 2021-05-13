const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach - Get 21 and older
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

companies.forEach(function (company) {
  console.log(company);
});

// filter
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);

// Filter retail companies
const retailCompanies = companies.filter(
  company => company.category === 'Retail'
);

console.log('RETAIL COMPANY', retailCompanies);

// Filter companies started in 80s
const companies80s = companies.filter(
  company => company.start >= 1980 && company.start <= 1990
);

console.log('80s COMPANIES', companies80s);

// Filter companies that lasted 10 years or more
const lastedTenYears = companies.filter(
  company => company.end - company.start >= 10
);

console.log('LASTED 10 YEARS', lastedTenYears);

// map
// Create array of company names
const companyNames = companies.map(company => company.name);

console.log('COMPANIES NAMES', companyNames);

// Create array with company name and operation dates
const companyInfo = companies.map(
  company => `${company.name} [${company.start} - ${company.end}]`
);

console.log('COMPANY INFO', companyInfo);

// Get square root of ages array
const ageSquareRoot = ages.map(age => Math.sqrt(age));

console.log('AGE SQUARE ROOT', ageSquareRoot);

// Get square root of ages array and multiply ages with 2 times
const ageSquareRootTimesTwo = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);

console.log('AGE SQRT TIMES 2', ageSquareRootTimesTwo);

// sort
// Sort companies by start year
// const sortCompaniesStartYear = companies.sort((c1, c2) => {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sortCompaniesStartYear = companies.sort((a, b) =>
  a.start > b.start ? 1 : -1
);

console.log('SORT BY START YEAR', sortCompaniesStartYear);

// Sort ages
const sortAges = ages.sort((a, b) => a - b);

console.log('SORT AGES', sortAges);

// reduce
// Age sum
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

const ageSum = ages.reduce((total, age) => total + age, 0);

console.log('AGE SUM', ageSum);

// Get total years for all companies
const totalYearsCompany = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

console.log('COMPANIES TOTAL YEARS', totalYearsCompany);

// Combine Methods
const combine = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log('COMBINE', combine);

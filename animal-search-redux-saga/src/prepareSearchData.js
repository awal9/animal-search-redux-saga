// Function 'prepareSearchData' uses the data provided by the user
// for creating and providing the object that will be converted
// into Json format and then used by the 'fetch' method
function PrepareSearchData(animalData) {
  const filters = selectFilters(animalData);
  const searchData = {
    "apikey": "EBRFKYuA",
    "objectType": "animals",
    "objectAction": "publicSearch",
    "search": {
      "resultStart": 0,
      "resultLimit": animalData.resultsDisplayedNumber,
      "resultSort": "animalID",
      "resultOrder": "asc",
      "calcFoundRows":"Yes",
      "filters": filters,
      "fields": [
        "animalName",
        "animalSpecies",
        "animalBreed",
        "animalSex",
        "animalAgeString",
        "animalID",
        "animalGeneralSizePotential"
      ]
    }
  };
  return searchData
};

// Function 'selectFilters' removes from criteria these search filters,
// that have not been specified in the data passed to it.
function selectFilters(queryData) {
  const  allFilters = [
    {
      "fieldName": "animalSpecies",
      "operation": "contains",
      "criteria": queryData.species
    },
    {
      "fieldName": "animalBreed",
      "operation": "contains",
      "criteria": queryData.breed
    },
    {
      "fieldName": "animalSex",
      "operation": "equals",
      "criteria": queryData.sex
    },
    {
      "fieldName": "animalGeneralSizePotential",
      "operation": "equals",
      "criteria": queryData.size
    }
  ];
  const selectedFilters = allFilters.filter(isSpecified);
  return selectedFilters;
};

// Funtion 'isSpecified' checks if particular criterion
//  is present
function isSpecified(record) {
  if(record["criteria"]) {
    return true
  }
};

export default PrepareSearchData;

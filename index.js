function helper(collection) {
    if (Array.isArray(collection)) {
      return collection.slice();
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).map(key => collection[key]);
    } else {
      return [];
    }
  }
  
function myEach (collection, callback)
 {
    const newCollection = helper(collection);
  
    for (let i = 0; i < newCollection.length; i++) {
      callback(newCollection[i]);
    }
  
    return collection;
 }

function myMap(collection, callback)
{
    const newCollection = helper(collection);
    let newerCollection = [];
  
    for (let i = 0; i < newCollection.length; i++) {
      newerCollection[i] = callback(newCollection[i]);
    }
  
    return newerCollection;
}

function myReduce(collection, callback, acc)
{
    let newCollection = helper(collection);

    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    for (let i = 0; i < newCollection.length; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }

function myFind(collection, predicate){
    let newCollection = helper(collection);
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i], i, newCollection)) {
        return newCollection[i];
      }
    }
    return undefined;
  }

function myFilter(collection, predicate){
    let newCollection = helper(collection);
    const result = [];
  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i], i, newCollection)) {
      result.push(newCollection[i]);
    }
  }
  return result;
  }

function mySize(collection){
    let newCollection = helper(collection);
    return newCollection.length;
  }
function myFirst(collection, num){
  let newCollection = helper(collection);
  let newerCollection = [];
  if (num === undefined){
    return newCollection[0];
  }
  for( let i = 0; i < num;){
    newerCollection.push(newCollection[i]);
    i++;
  }
  return newerCollection;
}
function myLast(collection, num){
  let newCollection = helper(collection);
  let last = newCollection.length -1;
  if( num === undefined){
    return newCollection[last];
  }
  else{
    return newCollection.slice(-num);
  }
}
function myKeys(obj){
  return Object.keys(obj);

}
function myValues(obj){
  return Object.values(obj);
}

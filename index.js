// Code your solution here

function findMatching(drivers, name){
    //console.log(drivers);
   
     const result = drivers.filter(drive => drive == name || drive == name.toLowerCase())
    return result;
}

function fuzzyMatch(drivers, name){
   return drivers.filter(drive => drive.substring(0,2).includes(name))

}

function matchName(drivers, name){
    return drivers.filter(drive => drive['name'] == name)
}
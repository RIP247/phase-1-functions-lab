// Code your solution in this file!
let HQ = 42
let feet = 12

function distanceFromHqInBlocks(blocks) {
   if ( HQ > blocks) {
       return (blocks - HQ) * -1
   } else if ( blocks > HQ) {
       return (HQ - blocks) * -1
   }
 return distanceFromHqInBlocks
  };
  

  function distanceFromHqInFeet(blocks) {
   return distanceFromHqInBlocks(blocks) * 264
  };

  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
  };


  function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
             return 0;
    } else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02; 
    } else if (distanceTravelledInFeet(start, destination) <= 2500) {
            return 25
    } else {
            return 'cannot travel that far';
        }
        
    }
    


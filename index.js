// class Polygon {
//     constructor(arrayOfSides) {
//         this.arrayOfSides = arrayOfSides
//     }

//     get countSides(){
//         return this.arrayOfSides.length;
//     }

//     get perimeter(){
//         let sum = 0
//         for(let i=0; i < this.arrayOfSides.length; i++){
//             sum += this.arrayOfSides[i];
//         } 
//         return sum;
//     }
// }

// class Triangle extends Polygon {
//     constructor(arrayOfSides){
//         super(arrayOfSides);
//     }

//     get isValid(){
//         for(let i=0; this.arrayOfSides.length; i++){
//             // verify if the parameter equals the amount 
//             if(this.arrayOfSides.length === 3){
//                 let side1 = this.arrayOfSides[0]
//                 let side2 = this.arrayOfSides[1]
//                 let side3 = this.arrayOfSides[2]

//                 if((side1 + side2)>side3 && (side1 + side3)>side2 && (side2 + side3)>side1){
//                         return true;
//                 } else {
//                     return false;
//                 }

//             }
//         }
//     } 
// }

// class Square extends Polygon {

   
//     get isValid() {
//         if (!Array.isArray(this.arrayOfSides)) return;
//         if (this.count !== 4) return;
//         let side1 = this.arrayOfSides[0]
//         let side2 = this.arrayOfSides[1]
//         let side3 = this.arrayOfSides[2]
//         let side4 = this.arrayOfSides[3]
//         return ((side1 === side2) && (side1 === side3) && (side1 === side4))
//       }
    
//       get area() {
//         if (!Array.isArray(this.arrayOfSides)) return;
//         if (this.arrayOfSides.length === 4) return;
//         return this.arrayOfSides[0] * this.arrayOfSides[0]
//       }
// }
class Polygon {
    constructor(sides) {
      this.sides = sides
      this.count = this.sides.length
    }
  
    get countSides() {
      return this.sides.length
    }
  
    get perimeter() {
      if (!Array.isArray(this.sides)) return;
      let sum = 0;
      for (var int of this.sides) {
        sum += int
      }
      return sum
    }
  }
  
  class Triangle extends Polygon {
  
    get isValid() {
      if (!Array.isArray(this.sides)) return;
      if (this.count !== 3) return;
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
  }
  
  class Square extends Polygon {
  
    get isValid() {
      if (!Array.isArray(this.sides)) return;
      if (this.count !== 4) return;
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      let side4 = this.sides[3]
      return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }
  
    get area() {
      if (!Array.isArray(this.sides)) return;
      if (this.count !== 4) return;
      return this.sides[0] * this.sides[0]
    }
  }
//complete this code
class Rectangle {
	constructor(width,height){
    this.width=width;
    this.height=height;
  }
  
  getArea(){
    return this.width*this.height
  }
}

class Square extends Rectangle {
	getPerimeter(){
    let ans=2*this.width+2*this.height
    return ans
  }
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first+this.second;
    }
}

class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }

    sum(){
        return super.sum()+this.third;
    }

    avg(){
        return (this.first+this.second)/2;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log('kim.sum()', kim.sum())
console.log('kim.avg()', kim.avg())

//super has two implementations: with () and without ()
//-> when there is (), 부모클래스의 생성자 parents class's constructor
//-> when there is not (), it is parent class it self.

//super가 주는 편리함, 없다면 어떤 불리함 및 inheritance의 어떤 단점을 보완하는가
//-> super로 완벽하게 parents를 copy하며 쓸 수 있다. code-reusability increase
//-> 만약 input parameter가 하나 더있게될경우, 어쩔수없이 똑같은코드를 쓰게 될수도
//-> inherit하게 되었을때, 부모클래스의 기본틀 아래에 사용되었지만, super를 통해서 기존 부모클래스를 기반한
//완전한 새로운 클래스를 만들수있게됨. input parameters restrictions gone, functionality improved.
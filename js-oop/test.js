//rectilinear

function solution(K,L,M,N,P,Q,R,S){
    //need to see if two rectangles overlap
    var overlap = (K,L,M,N,P,Q,R,S)=>{
        //returns true or false
        if(P >= M || K >= R){
            return false;
        }
        else if(L >= S || Q >= N){
            return false;
        }
        else{
            return true;
        }
    };

    var overlap_area = (K,L,M,N,P,Q,R,S)=>{
        var overlap = (Math.min(M,R) - Math.max(P,K)) * (Math.min(S,N) - Math.max(Q,L))
        return overlap;
    }

    var not_overlap_area = (K,L,M,N,P,Q,R,S) => {
        return ((M-K)*(N-L))+((R-P)*(S-Q));
    }
    if(overlap(K,L,M,N,P,Q,R,S)){
        console.log(overlap_area(K,L,M,N,P,Q,R,S))
        console.log('real aera is ')
        console.log(not_overlap_area(K,L,M,N,P,Q,R,S) - overlap_area(K,L,M,N,P,Q,R,S))
    }
    else{
        console.log(not_overlap_area(K,L,M,N,P,Q,R,S));
    }
    return '**************************'

}

//console.log(solution(-4,1,2,6,0,-1,4,3))

//console.log(solution(0,0,10,10,-9,-9,1,1))
//console.log(solution(0,0,10,10,-9,9,1,19))
//console.log(solution(0,0,10,10,9,9,19,19))
//console.log(solution(0,0,10,10,9,-9,19,1))
//console.log(solution(0,0,10,10,10,10,20,20))

a = 4;
b = 7;
console.log(this)
test = {
  a: 77,
  b: 88,
  aaa: {
    a: 1,
    b: 2,
    c: function() {
      that = this;
      console.log(that)
      return this.a + this.b;
    },
    d: () => {
      return a + b;
    }
  }
};

console.log(test.aaa.c());
console.log(test.aaa.d());
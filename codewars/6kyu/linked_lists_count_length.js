function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function length(head) {//count the number of nodes in a linked list
    // Your code goes here.
    let count = 0
    let tmp_node = head
    console.log(tmp_node);
    //taking the exceptions
    if (head == null){
      return 0;
    }
    
    //actual logic of counting the nodes by going deeper into the node
    while(true){
      if (tmp_node.next != null){
        tmp_node = tmp_node.next;
        count += 1;
      }
      else{
        //next is null
        count += 1;
        break;
      }
    }
    return count;
  }
  
  function count(head, data) {
    // Your code goes here.
    var map = {};
    let tmp_node = head;
    console.log(tmp_node);
    
    //taking the exceptions
    if (tmp_node == null){
      return 0;
    }

    //put the nums in a hash map to count occurrences of each unique num
    while(true){
      if(tmp_node.next != null){
        if (tmp_node.data in map){
          map[tmp_node.data] += 1;
          tmp_node = tmp_node.next;
        }
        else{
          map[tmp_node.data] = 1;
          tmp_node = tmp_node.next;
        }
      }
      else{
        if (tmp_node.data in map){
           map[tmp_node.data] += 1;
           break;
         }
        else{
          map[tmp_node.data] = 1;
          break;
        }
        break;
      }
    }
    //return hash map
    return map[data];
  }
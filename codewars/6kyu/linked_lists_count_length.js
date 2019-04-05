function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function length(head) {//count the number of nodes in a linked list
    // Your code goes here.
    let count = 0
    let tmp_node = head
    console.log(tmp_node);
    if (head == null){
      return 0;
    }
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
    if (tmp_node == null){
      return 0;
    }
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
    return map[data];
  }
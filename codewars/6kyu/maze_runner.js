function mazeRunner(maze, directions) {
    let y_axis = 0;
    let x_axis = 0;
    let tmp = [];
    for (let y = 0; y < maze.length; y++){
      for(let x = 0; x < maze[y].length; x++){
        if(maze[y][x] == 2){
          x_axis = x;
          y_axis = y;
        }
      }
    }
    console.log(x_axis, y_axis);
    
    function check_directions(directions, x_axis, y_axis){
      if(directions == "W"){
        x_axis -= 1;
      }
      else if(directions == "E"){
        x_axis += 1;
      }
      else if(directions == "S"){
        y_axis += 1;
      }
      else{
        y_axis -= 1;
      }
      return [x_axis, y_axis]
    }
    
    for(let i = 0; i < directions.length; i++){
      //check directions
      tmp = check_directions(directions[i], x_axis, y_axis);
      x_axis = tmp[0];
      y_axis = tmp[1];
      if(y_axis < 0 || x_axis < 0){
        return "Dead";
      }
      else if(x_axis >= maze[0].length || y_axis >= maze.length){
        return "Dead";
      }
      else if (maze[y_axis][x_axis] == 1){
        return "Dead";
      }
      else if (maze[y_axis][x_axis] == 3){
        return "Finish";
      }
    }
    return "Lost";
  }
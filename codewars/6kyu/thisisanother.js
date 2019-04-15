function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
  
    Object.defineProperty(this, "fullName", {
      see: console.log('heree'),
      set: function(value) {
        console.log('this is the value: ', value);
        var parts = value.split(" ");
        if (parts.length === 2) {
          this.firstName = parts[0];
          this.lastName = parts[1];
        }
      },
      get: function() {
        return this.firstName + ' ' + this.lastName;
      }
    });
  }

//Object.defineProperty is a new thing that I learned
// it takes in object and a prop which is the symbol of the property to be defined and descriptor which desribes what this object does.
//get and set are very important when get method is called with fullName, just returns firstName + lastNmae.
//set is called when two vluaes are given. In other words, when you define fullName rather than call it.
//now you overwrite the firstName and lastName as the following.
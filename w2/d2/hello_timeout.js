function uppercase(str)
{
  var array1 = str.toLowerCase().split(' ');
  var newarray1 = [];
    
  for(var i = 0; i < array1.length; i++){
      newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1)});
  }
  return newarray1.join('"');
}
console.log(uppercase("the quick brown  hjsdj  nkjkk fox"));
console.log(uppercase("this is an example"));
console.log(uppercase("test"));
console.log(uppercase("i r cool"));
console.log(uppercase("WHAT HAPPENS HERE"));
console.log(uppercase(""));
console.log(uppercase("A"));
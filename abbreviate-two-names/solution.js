function abbrevName(name){
  var name2 = name.split(' ');
  var initials = name2[0].charAt(0).toUpperCase() + '.' + name2[1].charAt(0).toUpperCase();
  return initials;
}

abbrevName('phillip kim');
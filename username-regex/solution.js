function validateUsr(username) {
  var res = /^[a-z0-9_]{4,16}$/.test(username);
  return res;
}

validateUsr('1111ahhdja_');
validateUsr('1111!!ahhdja_');
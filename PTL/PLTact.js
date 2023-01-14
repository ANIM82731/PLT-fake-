var result = document.getElementById('result');
result.addEventListener('click', function () {
  var user = document.getElementById('nikname').value;
  var namelength = user.length;

  var code = user.charCodeAt(0).toString(16);
  var Codelength = code.length;

  var today = new Date();
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);
  var PLT = year * month * day;

  const arr = user.split("")
  var usercode = 0
  var arrnumber = 0
  while (arrnumber < namelength) {
    var arrnumber = arrnumber + 1
    if (usercode == 0) {
      var usercode = arr[0].charCodeAt(0).toString(16);
    }
    else var usercode = usercode + arr[arrnumber - 1].charCodeAt(0).toString(16);
  }

  const raa = usercode.split("");
  var usercodelength = usercode.length
  var usercodesum = 0
  var n = 0
  while (n < usercodelength) {
    if (isNaN(raa[n]) == false) {
      if (usercodesum == 0) {
        var usercodesum = raa[n]
      }
      else var usercodesum = usercodesum + raa[n]
    }
    var n = n + 1
  }

  var Uniquenumber = namelength * Codelength * PLT * usercodesum

  var firstquotient = Math.floor(Uniquenumber / 250)
  var secondquotient = Math.floor(firstquotient / 75)
  var number = firstquotient + secondquotient

  if (number % 10 == 1) {
    location.href = "/lucky/bad.html"
  }
  else if (number % 10 == 2) {
    location.href = "/lucky/bad.html"
  }
  else if (number % 10 == 3) {
    location.href = "/lucky/verygood.html"
  }
  else if (number % 10 == 4) {
    location.href = "/lucky/verygood.html"
  }
  else if (number % 10 == 5) {
    location.href = "/lucky/good.html"
  }
  else if (number % 10 == 6) {
    location.href = "/lucky/good.html"
  }
  else if (number % 10 == 7) {
    location.href = "/lucky/verybad.html"
  }
  else if (number % 10 == 8) {
    location.href = "/lucky/verybad.html"
  }
  else if (number % 10 == 9) {
    location.href = "/lucky/normal.html"
  }
  else if (number % 10 == 0) {
    location.href = "/lucky/normal.html"
  }
})
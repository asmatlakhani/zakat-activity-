function calculate() {
    var input = document.getElementById("input").value;
    var zakat = input * 0.025;
    var resultText = "Your Zakat is: " + zakat.toFixed(2) + " (based on market value as of Lunar date)";
    
    document.getElementById("input").classList.remove("error");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("result").classList.add("animated");
    document.getElementById("result").classList.add("zoomIn");
    document.getElementById("result").classList.add("delay-1s");
    document.getElementById("result").classList.remove("shake");
    document.getElementById("result").classList.add("fadeIn");
    document.getElementById("result").classList.add("delay-1s");
  
    if (isNaN(input)) {
      document.getElementById("input").classList.add("error");
      document.getElementById("input").classList.add("animated");
      document.getElementById("input").classList.add("shake");
      document.getElementById("result").innerHTML = "Please enter a valid number";
      document.getElementById("result").classList.add("hidden");
    } else {
      document.getElementById("result").innerHTML = resultText;
    }
  }
  
  document.getElementById("calculateBtn").addEventListener("click", calculate);
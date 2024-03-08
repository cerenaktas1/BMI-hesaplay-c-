function BMI() {
    let height = document.getElementById("h").value;
    let weight = document.getElementById("w").value;
    let bmi = weight / (((height / 100) * height) / 100);
    let bmio = bmi.toFixed(2);
  
    document.getElementById("result").innerHTML = "Vücut kitle indeksiniz " + bmio;
  }
  document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('h').value = '';
    document.getElementById('w').value = '';
    document.getElementById('result').innerText = '';
});

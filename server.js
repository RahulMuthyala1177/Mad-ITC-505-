// script.js

function generateMadLib() {
    var adjective = document.getElementById('adjective').value;
    var noun = document.getElementById('noun').value;
    var verb = document.getElementById('verb').value;
    var adverb = document.getElementById('adverb').value;
    var animal = document.getElementById('animal').value;
    var place = document.getElementById('place').value;
    var color = document.getElementById('color').value;
  
    if (adjective === '' || noun === '' || verb === '' || adverb === '' || animal === '' || place === '' || color === '') {
        alert('Please fill in all fields.');
        return;
    }
  
    var madLibOutput = document.getElementById('madLibOutput');
    var madLibSentence = 'Once upon a time, the <span class="u">' + adjective + '</span> <span class="u">' + noun + '</span> decided to <span class="u">' + verb + '</span> ' + adverb + ' all day long, while riding their ' + color + ' ' + animal + ' through ' + place + '!';
    madLibOutput.innerHTML = madLibSentence;
  
    // Remove placeholder class from filled fields
    document.querySelectorAll('input[type="text"]').forEach(function(input) {
        if (input.value !== '') {
            input.classList.remove('placeholder');
        }
    });
  
    // Clear input fields
    document.getElementById('adjective').value = '';
    document.getElementById('noun').value = '';
    document.getElementById('verb').value = '';
    document.getElementById('adverb').value = '';
    document.getElementById('animal').value = '';
    document.getElementById('place').value = '';
    document.getElementById('color').value = '';
  }
  
  function clearFields() {
    document.getElementById('adjective').value = '';
    document.getElementById('noun').value = '';
    document.getElementById('verb').value = '';
    document.getElementById('adverb').value = '';
    document.getElementById('animal').value = '';
    document.getElementById('place').value = '';
    document.getElementById('color').value = '';
  
    // Restore placeholder styles
    document.querySelectorAll('input[type="text"]').forEach(function(input) {
        input.classList.add('placeholder');
    });
  
    // Clear generated output
    document.getElementById('madLibOutput').innerHTML = '';
  }
  
  function togglePlaceholder(input) {
    if (input.value === '') {
        input.classList.add('placeholder');
    } else {
        input.classList.remove('placeholder');
    }
  }
  
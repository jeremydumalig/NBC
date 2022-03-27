var input = $("#textInput")
var output = $("#output")

function professionalize(entry) {
  var wordList = entry.split(" ")
  for (word = 0; word < wordList.length + 1; word++) {
    var chanceToCap = Math.floor(Math.random() * 10)
    if (chanceToCap == 3) {
      wordList[word] = wordList[word].toUpperCase()
    }
    var chanceToHighlightY = Math.floor(Math.random() * 15)
    if (chanceToHighlightY == 2) {
      wordList[word] = "<span class='highlightY'> " + wordList[word] + "</span>"
    }
    var chanceToHighlightB = Math.floor(Math.random() * 15)
    if (chanceToHighlightB == 2) {
      wordList[word] = "<span class='highlightB'> " + wordList[word] + "</span>"
    }
    var chanceToHighlightR = Math.floor(Math.random() * 15)
    if (chanceToHighlightR == 2) {
      wordList[word] = "<span class='highlightR'> " + wordList[word] + "</span>"
    }
    var chanceToHighlightG = Math.floor(Math.random() * 15)
    if (chanceToHighlightG == 2) {
      wordList[word] = "<span class='highlightG'> " + wordList[word] + "</span>"
    }
    var chanceToColorB = Math.floor(Math.random() * 10)
    if (chanceToColorB == 6) {
      wordList[word] = "<span class='colorB'> " + wordList[word] + "</span>"
    }
    var chanceToColorP = Math.floor(Math.random() * 10)
    if (chanceToColorP == 6) {
      wordList[word] = "<span class='colorP'> " + wordList[word] + "</span>"
    }
    var chanceToColorR = Math.floor(Math.random() * 10)
    if (chanceToColorR == 6) {
      wordList[word] = "<span class='colorR'> " + wordList[word] + "</span>"
    }
    var chanceToColorY = Math.floor(Math.random() * 10)
    if (chanceToColorY == 6) {
      wordList[word] = "<span class='colorY'> " + wordList[word] + "</span>"
    }
    if (word == wordList.length) {
      output.html(wordList.join(" "))
    }
  }
}

input.keydown(function(e) {
  if (e.keyCode == 13) {
    professionalize(input.val())
    input.val("")
  }
})

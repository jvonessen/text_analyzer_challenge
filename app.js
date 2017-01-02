$('#text-box').submit(function(event) {
  event.preventDefault();
  $('.text-report').removeClass('hidden');

  var totalText = document.getElementsByName("user-text")[0].value;
  var textSlice = totalText.trim().slice(0,-1);
  var countSplit = textSlice.split(/[ ,!.";:-]+/);
  var letterSplit = textSlice.split(/[ ,!.";:-]+/);
  var sentenceSplit = textSlice.split(/[.?!]+/);

  $("#js-word-count-result").html('<p>' + wordCount(textSlice) + '</p>');
  $("#js-unique-result").html('<p>' + unique(countSplit) + '</p>');
  $("#js-word-length-result").html('<p>' + wordLength(letterSplit) + ' letters </p>');
  $("#js-sentence-result").html('<p>' + sentence(sentenceSplit) + ' words </p>');

});


function wordCount(text){
  return text.split(/[ ,!.";:-]+/).length;
};


function unique(words){
  var uniqueWords = [];
  for (i=0; i< words.length; i++) {
    if (uniqueWords.includes(words[i])) {
      continue;
    } else {
      uniqueWords.push(words[i]);
    };
  };
  return uniqueWords.length;
};


function wordLength(wordArray){
  var wordTotal = 0;
  for (i=0; i < wordArray.length; i++) {
    var letterCount = wordArray[i].split("");
    wordTotal += letterCount.length;
  };
  return wordTotal / wordArray.length;
};


function sentence(sentArray) {
  var sentenceTotal = 0;
  for (i =0; i < sentArray.length; i++) {
    var sentLength = sentArray[i].split(' ');
    sentenceTotal += sentLength.length;
  };
  return sentenceTotal / sentArray.length;
};

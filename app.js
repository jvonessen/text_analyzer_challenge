var totalText = document.getElementsByName("user-text")[0].value;
var textSlice = totalText.slice(0,-1);
var countSplit = textSlice.split(/[ ,!.";:-]+/);
var letterSplit = textSlice.split(/[ ,!.";:-]+/);
var sentenceSplit = textSlice.split(/[.?!]+/);

function wordCount(){
  var numOfWords = countSplit.length;
  $("#js-word-count-result").html('<p>' + numOfWords + '</p>');
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
  var numOfUnique = uniqueWords.length;
  $("#js-unique-result").html('<p>' + numOfUnique + '</p>');
};

function wordLength(wordArray){
  var wordTotal = 0;
  for (i=0; i < wordArray.length; i++) {
    var letterCount = wordArray[i].split("");
    wordTotal += letterCount.length;
  };
  var wordAverage = wordTotal / wordArray.length;
  $("#js-word-length-result").html('<p>' + wordAverage + ' letters </p>');
};

function sentence(sentArray) {
  var sentenceTotal = 0;
  for (i =0; i < sentArray.length; i++) {
    var sentLength = sentArray[i].split(' ');
    sentenceTotal += sentLength.length;
  };
  var sentenceAverage = sentenceTotal / sentArray.length;
  $("#js-sentence-result").html('<p>' + sentenceAverage + ' words </p>');
};


$('#text-box').submit(function(event) {
  event.preventDefault();
  $('.text-report').removeClass('hidden');

  wordCount();
  wordLength(letterSplit);
  unique(countSplit);
  sentence(sentenceSplit);
});

// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments) {
  let beatles = [ ];
  for (let i=0; i<musicians.length; i++){
    const str = musicians[i] + " plays " + instruments[i];
    beatles.push(str);
  }
  return beatles
}
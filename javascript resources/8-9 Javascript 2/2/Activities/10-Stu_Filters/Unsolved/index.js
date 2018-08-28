// @TODO: Uncomment the following file and complete the code
//        according to the instructions in README.md.

// Roster of player
var roster = [{
  name: "Doug",
  position: "Quarterback",
  madeTeam: true
},
{
  name: "Antonio",
  position: "Tight End",
  madeTeam: true
},
{
  name: "Nick",
  position: "Kicker",
  madeTeam: false
},
{
  name: "Ereck",
  position: "Offensive Live",
  madeTeam: false
},
{
  name: "AJ",
  position: "Line Backer",
  madeTeam: true
}];

// YOUR CODE HERE

//filters players who made team
// for returning boolean values, true is default, false is not
// so don't need made.madeTeam == true, as by default it'll return the trues
function selectTeam(made) {
  return made.madeTeam;
}

var teamPlayers = roster.filter(selectTeam);

console.log(teamPlayers);

// return count of madeTeam = true, return count of madeTeam = false
var madetoTeam = teamPlayers.length;
var allConsidered = roster.length;

var totalOnteam = allConsidered - madetoTeam;

console.log(`${madetoTeam} made the team`);
console.log(`${totalOnteam} didn't make the team`);

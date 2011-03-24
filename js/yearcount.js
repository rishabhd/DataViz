var headcount = [
  {date: "2003", dept: "sales", type: "perm", headcount: 20},
  {date: "2003", dept: "sales", type: "temp", headcount: 5},
  {date: "2003", dept: "sales", type: "test", headcount: 15},
  {date: "2004", dept: "sales", type: "perm", headcount: 30},
  {date: "2004", dept: "sales", type: "temp", headcount: 10},
  {date: "2004", dept: "sales", type: "test", headcount: 45},
  {date: "2005", dept: "sales", type: "perm", headcount: 38},
  {date: "2005", dept: "sales", type: "temp", headcount: 20},
  {date: "2005", dept: "sales", type: "test", headcount: 35},
  {date: "2006", dept: "sales", type: "perm", headcount: 58},
  {date: "2006", dept: "sales", type: "temp", headcount: 10},
  {date: "2006", dept: "sales", type: "test", headcount: 35}
];

(function() {
  var df = pv.Format.date("%y");
  headcount.forEach(function(d) { d.date = df.parse(d.date); });
})();
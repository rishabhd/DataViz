function initProto() {
	var data = pv.range(3).map(function(){
		pv.range(10).map(Math.random)
	}),
    w = 400,
    h = 250,
    x = pv.Scale.linear(0, 3).range(0, w),
    y = pv.Scale.ordinal(pv.range(10)).splitBanded(0, h, 4/5);
 
var vis = new pv.Panel()
    .width(w)
    .height(h)
    .bottom(20)
    .left(20)
    .right(10)
    .top(5);
 
var bar = vis.add(pv.Panel)
    .data(data)
  .add(pv.Bar)
    .data(function(a) {a})
    .top(function(){
		y(this.index);
	})
    .height(y.range().band)
    .left(pv.Layout.stack())
    .width(x);
 
bar.anchor("right").add(pv.Label)
    .visible(function(d){ d > .2})
    .textStyle("white")
    .text(function(d){
		d.toFixed(1);
	});
 
bar.anchor("left").add(pv.Label)
    .visible(function() { !this.parent.index;})
    .textMargin(5)
    .textAlign("right")
    .text(function(){
		"ABCDEFGHIJK".charAt(this.index);
	});
 
vis.add(pv.Rule)
    .data(x.ticks())
    .left(function(d){ Math.round(x(d)) - .5;})
    .strokeStyle(function(d){ d ? "rgba(255,255,255,.3)" : "#000";})
  .add(pv.Rule)
    .bottom(0)
    .height(5)
    .strokeStyle("#000")
  .anchor("bottom").add(pv.Label)
    .text(function(d){
		d.toFixed(1);
	});
 
vis.render();
}

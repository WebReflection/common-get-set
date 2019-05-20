function getSet($){return function(k,v){return arguments.length<2?$.get(k):$.set(k,v)}}
module.exports=getSet;

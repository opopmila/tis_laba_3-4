for (i=10;i<=1000;i++){
	s=i.toString()
	n=Number(s.substr(0,1))
	m=Number(s.substr(1,1))
	console.log(i+": "+n+" + "+m+" = "+(n+m))
}
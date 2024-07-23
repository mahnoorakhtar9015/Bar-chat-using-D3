const DUMMY_DATA=[
    {rownum:1 , name:'fred',age:76, gpa:1.55, color:'blue'},
    {rownum:2 , name:'bob',age:63, gpa:3.18, color:'green'},
    {rownum:3 , name:'ulysses',age:31, gpa:1.67, color:'yellow'},
    {rownum:4 , name:'rachel ',age:57, gpa:1.3, color:'pink'},
    {rownum:5 , name:'nick ',age:43, gpa:2.1, color:'purple'},
    {rownum:6 , name:'luke',age:67, gpa:3.61, color:'red'},
    {rownum:7 , name:'Victor',age:32, gpa:1.04, color:'grey'},
    {rownum:8 , name:'Ethan',age:60, gpa:1.54, color:'brown'},
  ];
 
  const xScale= d3.scaleBand()
  .domain(DUMMY_DATA.map(datapoint=> datapoint.name))
  .rangeRound([0,450])
  .padding(0.1);

  const yScale=d3.scaleLinear()
  .domain([0,400])
  .range([400,0]);
  
  
  const container=d3.select('svg')
  .classed('container',true)

  
    
  
  const bars= container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('rect')

    .attr('width',data=>data.gpa*12)
    .attr('height',data=>data.age*4)
    .attr('y',data=>yScale(data.age*4))
    .attr('x', data=>xScale(data.name))
   
    .attr('fill',function(d){
          if(d.color=='blue'){
            return "blue";
          }

          else if(d.color=='green'){
            return "green";
          }

          else if(d.color=='yellow'){
            return "yellow";
          }

          else if(d.color=='pink'){
            return "pink";
          }

          else if(d.color=='red'){
            return "red";
          }

          else if(d.color=='purple'){
            return "purple";
          }

          
          else if(d.color=='grey'){
            return "grey";
          }

          else if(d.color=='brown'){
            return "brown";
          }

          
    }
   
    );

    

    var text = container.selectAll("text")
    .data(DUMMY_DATA)
    .enter()
    .append("text")
    .text(function(d) {
      return d.name;
    })
    .attr("y", 415)
    .attr("x",  data=>xScale(data.name))
 
    .attr("fill","black");

 


 

   
    


  
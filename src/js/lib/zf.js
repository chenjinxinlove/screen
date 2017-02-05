/**
 * Created by chen on 2016/9/9.
 */
// // // import * as d3 from "d3";
// // var d3 = require('d3')
// import * as d3 from 'd3';
function af() {
  var h = window.innerHeight;
  function zff() {


    var width =( h * 180) / 1080, height = ( h * 270) / 1080;
    var svg = d3.select("#zf").append("svg")
      .attr("width", width)
      .attr("height", height);
    var treemap = d3.layout.treemap()
      .size([width, height])
      .value(function(d){ return d.value; });
    treemap.mode('squarify');
    var root = {
      "name": "蓝天",
      "children":
        [
          {
            "name": "淡蓝",
            "children":
              [
                {"name":"淡蓝", "value":12}
              ]
          },
          {
            "name": "雾霾",
            "children":
              [
                {"name":"雾霾", "value":8}

              ]
          },
          {
            "name": "蔚蓝",
            "children":
              [
                {"name":"蔚蓝", "value":7}
              ]
          },
          {
            "name": "阴沉",
            "children":
              [
                {"name":"阴沉", "value":3}
              ]
          }
        ]
    }
    var nodes = treemap.nodes(root);
    var links = treemap.links(nodes);
    var color = function (value) {
      var c = {
        '淡蓝':'#2fa2ca',
        '阴沉':'#e7ab29',
        '蔚蓝':'#2375b4',
        '雾霾':'#9d5e24',
      }
      return c[value]
    };
    var groups = svg.selectAll("g")
      .data(nodes.filter(function(d){ return !d.children; }))
      .enter()
      .append("g");

    var rects = groups.append("rect")
      .attr("class","nodeRect")
      .attr("x",function(d){ return d.x; })
      .attr("y",function(d){ return d.y; })
      .attr("width",function(d){ return d.dx; })
      .attr("height",function(d){ return d.dy; })
      .style("fill",function(d,i){ return color(d.parent.name); });

    var texts = groups.append("text")
      .attr("class","nodeName")
      .attr("x",function(d){ return d.x; })
      .attr("y",function(d){ return d.y; })
      .attr("dx","0.5em")
      .attr("dy","1.5em")
      .attr("font-family","微软雅黑")
      .text(function(d){
        return d.name + " " + d.value;
      });
  }
  zff();
  function circle( width, height, id, num, showNum) {
    var width  = width || 500;	//SVG绘制区域的宽度
    var height = height || 500;	//SVG绘制区域的高度

    var svg = d3.select(id)			//选择<body>
      .append("svg")			//在<body>中添加<svg>
      .attr("width", width)	//设定<svg>的宽度属性
      .attr("height", height);//设定<svg>的高度属性

    var num = num || 36;
    var _num = (2/num).toFixed(8),
      _interval = _num * 0.8,
      dataset = [];
    for(var i = 0 ; i<num;i++){
      var dataNull = {};
      dataNull.endAngle = (Math.PI *(i + 1 ) * _num)-_interval;
      dataNull.startAngle = Math.PI * i * _num;
      dataset.push(dataNull);
    }
    //创建一个弧生成器
    var arcPath = d3.svg.arc()
      .innerRadius(width*0.4)
      .outerRadius(width*0.5);
    var showNum = showNum || 18;
    var bf =    Math.ceil((Number(showNum) / Number(num)) * 100).toString() + '%';
    var bigRadiuds = [
      { startAngle : 0 ,endAngle : Math.PI * 0.57},
      { startAngle : Math.PI * 0.67 ,endAngle : Math.PI * 1.24},
      { startAngle : Math.PI * 1.34 ,endAngle : Math.PI * 1.91}
    ];
    var bigPath = d3.svg.arc()
      .innerRadius(width * 0.375)
      .outerRadius(width * 0.385);
    var sRadiuds = { startAngle : 0 ,endAngle : Math.PI * 2};
    var sPath = d3.svg.arc()
      .innerRadius(width * 0.381)
      .outerRadius(width * 0.385);
    //添加路径
    svg.selectAll("path")
      .data(dataset)
      .enter()
      .append("path")
      .attr("d",function(d){ return arcPath(d); })
      .attr("transform","translate("+ width /2　+ "," + height /2 +")")
      .attr("font-family","微软雅黑")
      .attr("fill",function (ddd,i) {
        if(i<=showNum){
          return "#2278be"
        }else{
          return "#ffffff"
        }
      })
    ;
    svg.append("path")
      .data(bigRadiuds)
      .attr("d", bigPath(bigRadiuds[0]))
      .attr("transform","translate("+ width /2　+ "," + height /2 +")")
      .attr("fill","red");
    svg.append("path")
      .data(bigRadiuds)
      .attr("d", bigPath(bigRadiuds[1]))
      .attr("transform","translate("+ width /2　+ "," + height /2 +")")
      .attr("fill","red");
    svg.append("path")
      .data(bigRadiuds)
      .attr("d", bigPath(bigRadiuds[2]))
      .attr("transform","translate("+ width /2　+ "," + height /2 +")")
      .attr("fill","red");

    svg.append("path")
      .attr("d", sPath(sRadiuds))
      .attr("transform","translate("+ width /2　+ "," + height /2 +")")
      .attr("fill","red");
    svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .attr("transform","translate("+ width /2　+ "," + height*.6 +")")
      .attr("text-anchor","middle")
      .attr("font-size",width*0.35 + 'px')
      .attr("fill","#fff")
      .text(bf)
    // var linek = [[75,75],[75,85],[85,85],[85,75]];
    // var linePathk = d3.svg.line();
    // svg.append("path")
    //   .attr("d", linePathk(linek))
    //   .attr("stroke","red")
    //   .attr("stroke-width","3px")
    //   .attr("fill","red");
    // var lines = [[80,80],[100,100],[150,100]];
    // var linePath = d3.svg.line();
    // svg.append("path")
    //   .attr("d", linePath(lines))
    //   .attr("stroke","red")
    //   .attr("stroke-width","3px")
    //   .attr("fill","none");
  }
  var cw  = Math.trunc(h/8.5);
  new circle(cw, cw, '#y',30,8);
  new circle(cw, cw, '#f',30,12);

  function line() {
    var p = h / 14.1;
    console.log(h);
    var svg = d3.select('#fj')
      .append("svg")			//在<body>中添加<svg>
      .attr("width", h / 3)	//设定<svg>的宽度属性
      .attr("height", h / 3);//设定<svg>的高度属性
    var linek = [[2.2 * p,1.2 * p],[2.2 * p,1.3* p],[2.3* p,1.3* p],[2.3* p,1.2* p]];
    var linePathk = d3.svg.line();
    svg.append("path")
      .attr("d", linePathk(linek))
      .attr("stroke","#80cde6")
      .attr("stroke-width","3px")
      .attr("fill","#80cde6");
    var lines = [[2.25* p,1.25* p],[3.1* p,1.25* p],[3.7* p,p]];
    var linePath = d3.svg.line();
    svg.append("path")
      .attr("d", linePath(lines))
      .attr("stroke","#80cde6")
      .attr("stroke-width","1px")
      .attr("fill","none");


    var linek1 = [[2.2* p,3.2* p],[2.2* p,3.3* p],[2.3* p,3.3* p],[2.3* p,3.2* p]];
    var linePathk1 = d3.svg.line();
    svg.append("path")
      .attr("d", linePathk1(linek1))
      .attr("stroke","#80cde6")
      .attr("stroke-width","3px")
      .attr("fill","#80cde6");
    var lines1 = [[2.25* p,3.25* p],[3.1* p,3.25*p],[3.7* p,3*p]];
    var linePath1 = d3.svg.line();
    svg.append("path")
      .attr("d", linePath1(lines1))
      .attr("stroke","#80cde6")
      .attr("stroke-width","1px")
      .attr("fill","none");
    svg.append("text")
      .attr("font-size",0.18* p)
      .attr("fill","#ccc")
      .attr("transform","translate("+2.9* p+","+ 4.25* p+")")
      .attr("font-family","微软雅黑")
      .text("单位：天")
    svg.append("text")
      .attr("font-size",0.32* p)
      .attr("fill","#005c5c")
      .attr("font-weight","bold")
      .attr("font-family","微软雅黑")
      .attr("transform","translate("+0.9* p+","+ 0.55* p+")")
      .text("北京9月蓝天数及占比")
  }
  line()




}

af()

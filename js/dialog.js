/**
 * Created by laowang on 2016/6/21.
 */
jsPlumb.ready(function() {


    jsPlumb.importDefaults({
        DragOptions:{cursor:'pointer'},//移动到点上显示手指
        PaintStyle:{strokeStyle:'#666'},//元素默认颜色
        EndpointStyle:{radius:11,strokeStyle:"#5bc0de"},//连接点颜色
        Endpoint:"Dot",//连接点形状
        Anchors:[["TopCenter"],["BottomCenter"],["LeftCenter"],["RightCenter"]]//连接点位置
    });

    //可连接点自动匹配，给出提示
    var DropOptions={
        hoverClass:"dropHover",
        activeClass:"dragActive"
    };


    //声明连接点,线等类型，可以有很多种类型，这里暂时只设置一种类型
    var color1="#5cb85c";
    var DropExampleOptionOne={
        endpoint:["Dot",{radius:11}],//设置连接点颜色
        paintStyle:{fillStyle:color1},//设置连接点颜色
        isSource:true,//是否可以拖动
        scope:"dot",//匹配类型连接点可以连接
        connectorStyle:{strokeStyle:color1,lineWidth:6},
        connector:"Flowchart",
        maxConnections:4,
        isTarget:true,
        dropOptions:DropOptions
    };
    var idIndex=0;
    //拖动
    //jsPlumb.draggable($(".item"),{
    //    //appendTo:"#show-dialog",
    //    helper:"clone",
    //    scope:"flag"
    //});
   $("#left-title").children().draggable({
       //appendTo:"#show-dialog",
       helper:"clone",
       scope:"flag"
   });
   // jsPlumb.droppable($("#show-dialog"),{
   //     activeClass:"ui-state-default",
   //     hoverClass:"ui-state-hover",
   //     scope:"flag",
   //     accept:":not(ui-sortable-helper)",
   //     drop:function(event,ui){
   //         idIndex=idIndex+1;
   //         var left=parseInt(ui.offset.left-$(this).offset().left);
   //         var top=parseInt(ui.offset.top-$(this).offset().top);
   //         var name=ui.draggable[0].id;
   //         var cla=ui.draggable[0].className;
   //         var trueId=name+"-"+idIndex;
   //         $(this).append("<div class=\""+cla+"\" id=\""+trueId+"\"></div>");
   //         $("#"+trueId).css("left",left).css("top",top).css("position","absolute").css("margin","0px");
   //         $(".item").draggable({
   //             containment:"#show-dialog"
   //         });
   //     }
   // });
    //放置
        $("#show-dialog").droppable({
        //hoverClass:"dropHover",
        //activeClass:"dragActive",
        scope:"flag",
        //accept:":not(ui-sortable-helper)",
        drop:function(event,ui){
            idIndex=idIndex+1;
            var left=parseInt(ui.offset.left-$(this).offset().left);
            var top=parseInt(ui.offset.top-$(this).offset().top);
            var name=ui.draggable[0].id;
            var cla=ui.draggable[0].className;
            var trueId=name+"-"+idIndex;
            $(this).append("<div class=\""+cla+"\" id=\""+trueId+"\"></div>");
            $("#"+trueId).css("left",left).css("top",top).css("position","absolute").css("margin","0px");
            jsPlumb.addEndpoint(trueId,{anchors:"LeftMiddle"},DropExampleOptionOne);
            jsPlumb.addEndpoint(trueId,{anchors:"RightMiddle"},DropExampleOptionOne);
            jsPlumb.addEndpoint(trueId,{anchors:"TopCenter"},DropExampleOptionOne);
            jsPlumb.addEndpoint(trueId,{anchors:"BottomCenter"},DropExampleOptionOne);
            jsPlumb.addEndpoint(trueId,DropExampleOptionOne);
            jsPlumb.draggable($("#"+trueId));
            $("#"+trueId).draggable({
                containment:"parent"
            });
            //jsPlumb.draggable($("#"+trueId),{
            //    containment:"#show-dialog"
            //});
            //克隆标签 拖动


            //jsPlumb.draggable($(".item"));
            //jsPlumb.addEndpoint(trueId,{anchor:"TopCenter"},DropExampleOptionOne);
            //jsPlumb.addEndpoint(trueId,{anchor:"LeftCenter"},DropExampleOptionOne);
            //jsPlumb.addEndpoint(trueId,{anchor:"RightCenter"},DropExampleOptionOne);
        }
    });

    //拖动设置



});
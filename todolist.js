    console.log("Started");
    var taskarray=JSON.parse(localStorage.getItem('data')) || [];
    if(taskarray.length!=0)
    {
        display();
    }
    $("button").on("click",function(){
        var inp=$("input");
        var task={input:inp.val(),done:0};
        taskarray.push(task);
        localStorage.setItem('data',JSON.stringify(taskarray));
        display();
        inp.val("");
    });
    function display(){
        $("#list").html("");
        var data="";
        for(i=0;i<taskarray.length;i++)
        {
            if(taskarray[i].done==0)
                data+="<li class='list-group-item uncheck laaa'>"+"<span id='de'><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span>"+taskarray[i].input+"</li>";
            if(taskarray[i].done==1)
            {
                data+="<li class='list-group-item check laaa'>"+"<span id='de'><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span>"+taskarray[i].input+"</li>";
            }
        }
        $("#list").html(data);
        $(".check").addClass("complete");
        $(".uncheck").addClass("incomplete");
    };
    $("ul").on("click","li",function(){
        var search=$(this).text();
        for(i=0;i<taskarray.length;i++) {
            if ("" +taskarray[i].input == search) {
                taskarray[i].done = !taskarray[i].done;
            }
        }
        localStorage.setItem('data',JSON.stringify(taskarray));
        display();
        console.log("clicked")
    });
    $("ul").on("click","span",function(event){
        var newarray=[];
        event.stopPropagation();
        var search=$(this).parent();
        $(this).parent().fadeOut(1000,function(){
            search=search.text();
            for(i=0;i<taskarray.length;i++){
                if(""+taskarray[i].input != search){
                    newarray.push(taskarray[i]);
                }
            }
            taskarray=newarray;
            console.log("You Clicked Span");
            localStorage.setItem('data',JSON.stringify(taskarray));
            display();
        });
    });
    $("li").on("mouseover",function(){
        $("#de").css({
            display:"inline";
        })
    });
    $("input").keypress(function(event){
        if(event.which==13)
        {
            var inp=$("input");
            var task={input:inp.val(),done:0};
            taskarray.push(task);
            localStorage.setItem('data',JSON.stringify(taskarray));
            display();
            inp.val("");
        }
    });




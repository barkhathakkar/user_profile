// $(function(){
// 	$("#main1 #add1").on("click",'button',function(){
// 		console.log($("button#add1"));
// 	})
// });
$(document).ready(function(){
var now=new Date();
			var cnt=0,i=0;
			var userCancelled=[];
			var modal=$('#dialog-form').dialog({
					autoOpen:false,
					width:500,
					modal:true,
					buttons:{
					"Submit question":submitQuestion,
					Cancel:function(){
								modal.dialog("close");
							}
					}
					});
	
			$("#add1").on("click",function(){modal.dialog("open")});
});
function submitQuestion()
		{

		}
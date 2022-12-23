function SubForm(){
     $.ajax({
          url:'https://api.apispreadsheets.com/data/ghZ8taw4GWfsNjC1/',
          type:'post',
          data:$("#myForm").serializeArray(),
          success: function(){
		  var st = String.fromCodePoint(0x1F60A);
          alert("Form Data Submitted" + st)
          },
          error: function(){
		  var sti = String.fromCodePoint(0x1F615);
          alert("There was <an> </an> error :(" + sti)
          }
        });
	document.getElementById("messages").value = "";
}

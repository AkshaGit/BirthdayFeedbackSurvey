function SubForm(){
     $.ajax({
          url:'https://api.apispreadsheets.com/data/rovhopDrPLw1Tvuk/',
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

function SubForm(){
     $.ajax({
          url:'https://api.apispreadsheets.com/data/ghZ8taw4GWfsNjC1/',
          type:'post',
          data:$("#myForm").serializeArray(),
          success: function(){
          alert("Form Data Submitted :)")
          },
          error: function(){
          alert("There was <an> </an> error :(")
          }
        });
	document.getElementById("message").value = "";
}

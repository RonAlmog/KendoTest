(function(global) {
     var VisitViewModel,
        app = global.app = global.app || {};
    
    VisitViewModel = kendo.data.ObservableObject.extend({
        // variables here
        apiurl: "http://localhost:11722/api/v1/visitrequests",
        isLoggedIn: false,
        username: "",
        password: "",
        firstname:"",
        visitrequest: {firstname:"", lastname:"", dateofbirth:"", address:"", city:"", postalcode:"", ohip:"", comment:""},
        
        
        
        
        // methods here
        clearForm: function () {
            var that = this;

            that.set("username", "");
            that.set("password", "");
        },
        
        checkEnter: function (e) {
            var that = this;

            if (e.keyCode == 13) {
                $(e.target).blur();
                that.onLogin();
            }
        },
        
        sendRequest: function(){
            var that = this;
        	console.log("send visit request");
            
            that.visitrequest.firstname = that.get("firstname").trim();
            that.visitrequest.lastname = that.get("lastname").trim();
            that.visitrequest.dateofbirth = that.get("dateofbirth").trim();
            that.visitrequest.address = that.get("address").trim();
            that.visitrequest.city = that.get("city").trim();
            that.visitrequest.postalcode = that.get("postalcode").trim();
            that.visitrequest.ohip = that.get("ohip").trim();
            that.visitrequest.comment = that.get("comment").trim();
            
            console.log("visitrequest:");
            console.log(that.visitrequest);
            
          //  $.post("http://localhost:1760/api/v1/visitrequests", function(that.visitrequest){
          //      alert("success");
          //  });
            
            $.ajax({
                type: "POST",/*method type*/
                contentType: "application/json; charset=utf-8",
                url: that.apiurl, /*Target function that will be return result*/
                data: JSON.stringify(that.visitrequest),/*parameter pass data is parameter name param is value */
                dataType: "json",
                success: function(data) {
                	that.visitSuccess(data);
                },
                   error: function(result) {
                		alert("Error");
                }
		    });  
            
            
        
        },
        
        visitSuccess: function(data){
                   alert("Success");
                    // navigate to success screen
                    app.application.navigate("views/successView.html");
                    //app.application.navigate("test.html");
        
        }
        
        });
        
     app.visitService = {
        viewModel: new VisitViewModel()
    };
 
 })(window);

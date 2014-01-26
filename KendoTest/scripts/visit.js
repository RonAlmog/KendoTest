(function(global) {
     var VisitViewModel,
        app = global.app = global.app || {};
    
    LoginViewModel = kendo.data.ObservableObject.extend({
        // variables here
        isLoggedIn: false,
        username: "",
        password: "",
        visitrequest: {firstname:"", lastname:"", dateofbirth:"", address:"", city:"", postalcode:"", ohip:"", comment:""}
        
        
        
        
        // methods here
        clearForm: function () {
            var that = this;

            that.set("username", "");
            that.set("password", "");
        },
        
        sendRequest: function(){
            var that = this;
            
        
        }
        
        });
        
     app.visitService = {
        viewModel: new VisitViewModel()
    };
 
 })(window);

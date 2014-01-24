(function(global) {
     var VisitViewModel,
        app = global.app = global.app || {};
    
    LoginViewModel = kendo.data.ObservableObject.extend({
        isLoggedIn: false,
        username: "",
        password: "",
        
        
        
        });
        
     app.visitService = {
        viewModel: new VisitViewModel()
    };
 
 })(window);

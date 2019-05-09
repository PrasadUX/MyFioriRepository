sap.ui.jsview("listmobapp.SecondView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf listmobapp.SecondView
	*/ 
	getControllerName : function() {
		return "listmobapp.SecondView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf listmobapp.SecondView
	*/ 
	createContent : function(oController) {
 		
		// Object Header to display data
		
		var objHeader = new sap.m.ObjectHeader("Obj", {
			
		    title : "{itemdata>/Name}",
		    number: "{itemdata>/Price}",
		    numberUnit: "{itemdata>/CurrencyCode}"
		    	
		     });
		
		
		// Default Page
				
		  return new sap.m.Page({
			title: "View Product Details",
			content: [
			          // Button add to Page
			          new sap.m.Button("btn", {
			           text : "Back ",
			           press: oController.Back 
			         
			          }),
			          
			          // added objheader to page
			          
			          objHeader
			]
		});
	}

});
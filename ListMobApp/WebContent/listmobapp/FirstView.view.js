sap.ui.jsview("listmobapp.FirstView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf listmobapp.FirstView
	*/ 
	getControllerName : function() {
		return "listmobapp.FirstView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf listmobapp.FirstView
	*/ 
	createContent : function(oController) {
 	
		
	// Display List 
		
	     var oList =  new sap.m.List("MyList", {
		 
	     headerText : "Products"
	     
	     
	     });
	 
	  // Bind model data to displayList 
	 
	 
		oList.bindAggregation("items", {
			
		   path : "tabdata>/ProductCollection",
		   template : new sap.m.DisplayListItem( {
			   type : "Navigation",
		      label : "{tabdata>Name}",
		      value : "{tabdata>ProductId}"
		   
		   
		   }) }); 
		
		//  Action List
		
/*		oList.bindAggregation("items", {
			
			   path : "tabdata>/ProductCollection",
			   template : new sap.m.ActionListItem("ActList", {
				  text : "{tabdata>ProductId}",
			      text :"{tabdata>Name}"
			   
			   
			   }) });
			
		     */
		
		  oList.attachItemPress(oController.itemnavigation);
		  
	
		  // ADDED TOOLBAR 
			 
			 var otoolBar = new sap.m.Toolbar("Tbar");
			 
			 // ADDED SEARCH FIELD
			 var osearchfield = new sap.m.SearchField("search1");
			 //ACTION FOR SEARCH FUNCTION
			// osearchfield.attachSearch(oController.search);     // Not live Search
			 osearchfield.attachLiveChange(oController.search);   // Live Search
			 
			 // ADDED SEARCH TO TOOLBAR
			 otoolBar.addContent(osearchfield);
             
		
       return new sap.m.Page({
			title: "This is List View",
			content: [
			          
                    otoolBar,
			        oList 
			   
			   // return oList to Content
			]
		});  
	}

});

sap.ui.controller("listmobapp.FirstView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf listmobapp.FirstView
*/
	onInit: function() {
		
		// Model initiation and Load data and SetModel 

		var oModel = sap.ui.model.json.JSONModel();
		oModel.loadData("Model/Products.json");
		sap.ui.getCore().setModel(oModel,"tabdata");
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf listmobapp.FirstView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf listmobapp.FirstView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf listmobapp.FirstView
*/
//	onExit: function() {
//
//	}
	
	itemnavigation : function(oevent)
	{
	     var spath = oevent.getParameter("listItem").oBindingContexts.tabdata.sPath;    // execute this link in console to get value
	 
	     // new Json model initiated 
	    
	      var newJson =  new sap.ui.model.json.JSONModel();
	      newJson.setData(sap.ui.getCore().getModel("tabdata").getProperty(spath));
	      sap.ui.getCore().setModel(newJson, "itemdata");
	    
		  var oApp = sap.ui.getCore().byId("ListApp");
		  oApp.to(page2);
		
	},
	
	// Search function for filter
	search :function(osearch)
	
	{
		
		var search = osearch.getParameter("newValue");
	
	    console.log(search);
	    
		if(search == null)
			{
			
			 var search = osearch.getParameter("newValue");
				
			
			};
		
		var myfilter = new Array();
		var oFilter = new sap.ui.model.Filter("Name",sap.ui.model.FilterOperator.Contains,search);
		myfilter.push(oFilter);
		
		var olist = new sap.ui.getCore().byId("search1");
	    var binding =olist.getBinding("items");
	    binding.filter(myfilter);
	},
	
	

});

WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button7 = {};	// @button
	var textField1 = {};	// @textField
	var textField2 = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		if (sources.photo.ID == null) { 
            sources.photo.newEntity(); 
            sources.photo.title = 'Enter your text here';       
			sources.photo.save(
				{onSuccess:
					function(event) {
						var newPhoto = event.dataSource.ID;
						sources.photo.setCurrentEntity(newPhoto); 
						sources.photo.refreshServer();
					}
				}
			);
		}
	};// @lock

	textField1.change = function textField1_change (event)// @startlock
	{// @endlock
		sources.photo.save();
		sources.photo.autoDispatch();
	};// @lock

	textField2.change = function textField2_change (event)// @startlock
	{// @endlock
		sources.photo.save();
		sources.photo.autoDispatch();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button7", "click", button7.click, "WAF");
	WAF.addListener("textField1", "change", textField1.change, "WAF");
	WAF.addListener("textField2", "change", textField2.change, "WAF");
// @endregion
};// @endlock

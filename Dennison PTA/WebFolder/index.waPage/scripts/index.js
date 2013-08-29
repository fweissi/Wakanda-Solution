
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button7 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		if (sources.photo.ID == null) { 
            sources.photo.newEntity();     
			sources.photo.save(
				{onSuccess:
					function(event) {
						var isNew = sources.photo.isNewElement();
						if (isNew) {
							sources.photo.addNewElement();
							var newID = event.dataSource.ID;
							sources.photo.all();
							sources.photo.setCurrentEntity(newID);
						}
						else {
							sources.photo.addEntity(sources.photo.getCurrentElement()); 
						}
						//sources.photo.serverRefresh();
					}
				}
			);
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button7", "click", button7.click, "WAF");
// @endregion
};// @endlock

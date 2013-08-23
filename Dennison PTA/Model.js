
guidedModel =// @startlock
{
	Photo :
	{
		events :
		{
			onInit:function()
			{// @endlock
				if (this.title == null) {
					this.title = 'Enter your title here';
				}
			}// @startlock
		}
	}
};// @endlock

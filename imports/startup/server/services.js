// Services (Facebook and Google)
ServiceConfiguration.configurations.update(
	{
		"service": "google"
	},
	{
		$set: {
	    	"clientId": "630567128-oqu752i3848hld0fkt9h73q9d72ckj9i.apps.googleusercontent.com",
	    	"secret": "vyE6h1MJ9ZslejJoIsOD4o93"
	  	}
	},
	{
		upsert: true
	}
);

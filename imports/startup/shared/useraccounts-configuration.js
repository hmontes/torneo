import MainLayout from '/imports/ui/layouts/main_layout';

AccountsTemplates.configure({
	// ** LAYOUTS SETTINGS ** //
	defaultLayoutType: 'blaze-to-react',
    // defaultTemplate: 'myCustomFullPageAtForm',
    defaultLayout: MainLayout,
    defaultLayoutRegions: {
	},
    defaultContentRegion: 'main'
});

// Routes
AccountsTemplates.configureRoute('signIn', {
	name: 'signin',
	path: '/login'
});

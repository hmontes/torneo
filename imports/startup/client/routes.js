import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import Blaze from 'meteor/gadicc:blaze-react-component';

// Layouts
import MainLayout from '/imports/ui/layouts/main_layout';

// Pages
import Index from '/imports/ui/pages/index';
import Inicio from '/imports/ui/pages/inicio';

FlowRouter.route('/', {
	action(params) {
		mount(MainLayout, {
			main: <Index />
		})
	}
});

// Inicio
FlowRouter.route ('/inicio', {
	name: 'Inicio',
  	triggersEnter: [
        (context, redirect) => {
            if (!Meteor.userId()) {
                redirect('/');
            }
        }
	],
  	action() {
	    mount(MainLayout, {
	      main: <Inicio />
	    })
  	},
});

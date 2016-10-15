import { HTTP } from 'meteor/http';

Meteor.methods({
	'api'() {
		var data = HTTP.call(
  			'POST',
  			'https://palbyp.pmservice.ibmcloud.com/pm/v1/score/credito',
  			{
		  		params: {
		  			accesskey: 'XHv0c0KoV/HlaR3j2tsAcRJogNs+mjtKoNTD3uEZuQFkVN9YSDE87QDx3hp0a32CHxGxQ3pIogjgEOjN0TGDTcL0h32gVzPkwMbmHXNpi+FsKn22d6uxNLjZ6tOOC9CsVKw9dt5mpZUDqwFqINsQ0xVuP8bLez+muhkFOcxctJc='
		  		},
		  		data: {
		  			"tablename": "tree_credit.sav",
		            "header": ["Age", "Income level", "Number of credit cards", "Education", "Car loans"],
		            "data": [[23, "Medium", "5 or more", "College", "More than 2"]]
		  		}
  			}
		);
		console.log(data.content.header);
	}
});

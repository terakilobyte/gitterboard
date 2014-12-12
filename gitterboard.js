CampersList = new Mongo.Collection('campers');

if(Meteor.isClient){
	Template.gitterboard.helpers({
		'camper': function(){
			return CampersList.find();
		},
		'counter': function(){
			return CampersList.find().count();
		}
	});
	
	Template.cambodia.helpers({
		'camper2': function(){
		   return "My intuition kicked in!";
		}
	});

	Template.copyright.helpers({
		'copyright': function() {
			return "copyleft 2015 no rights reserved."
		}
	});
	
}

if(Meteor.isServer){

}
CampersList = new Mongo.Collection('campers');

if(Meteor.isClient){
	Template.gitterboard.events({
		//events go here
		'click .camper': function() {
			// code goes here
			console.log("you clicked a camper element");
		}
	});
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
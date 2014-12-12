CampersList = new Mongo.Collection('campers');

if(Meteor.isClient){
	Template.gitterboard.events({
		//events go here
		'click .camper': function() {
			var camperId = this._id;
			Session.set('selectedCamper', camperId);
		}
	});
	Template.gitterboard.helpers({
		'camper': function(){
			return CampersList.find();
		},
		'counter': function(){
			return CampersList.find().count();
		},
		'selectedClass': function() {
			var camperId = this._id;
			var selectedCamper = Session.get('selectedCamper')
			if(camperId == selectedCamper)
			return "selected";

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
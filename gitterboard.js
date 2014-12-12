CampersList = new Mongo.Collection('campers');

if(Meteor.isClient){
	Template.gitterboard.events({
		//events go here
		'click .camper': function() {
			var camperId = this._id;
			Session.set('selectedCamper', camperId);
		},
		'click .increment': function() {
			var selectedCamper = Session.get('selectedCamper');
			console.log(selectedCamper);
			CampersList.update(selectedCamper, {$inc: {score: 5}});
		},
		'click .decrement': function() {
			var selectedCamper = Session.get('selectedCamper');
			console.log(selectedCamper);
			CampersList.update(selectedCamper, {$inc: {score: -5}});
		},
		'click .remove': function() {
			var selectedCamper = Session.get('selectedCamper');
			CampersList.remove(selectedCamper);
		}
	});
	Template.gitterboard.helpers({
		'camper': function(){
			var currentUserId = Meteor.userId();
			return CampersList.find({createdBy: currentUserId}, 
				                    {sort: {score: -1, name: 1}});
		},
		'counter': function(){
			return CampersList.find().count();
		},
		'selectedClass': function() {
			var camperId = this._id;
			var selectedCamper = Session.get('selectedCamper');
			if(camperId == selectedCamper)
			return "selected";
		},
		'showSelectedCamper': function() {
			var selectedCamper = Session.get('selectedCamper');
			return CampersList.findOne(selectedCamper);
		}
	});
	
	Template.cambodia.helpers({
		'camper2': function(){
		   return "My intuition kicked in!";
		}
	});

	Template.addCamperForm.events({
		// events go here.
		'submit form': function(event){
			event.preventDefault();
			var camperNameVar = event.target.camperName.value;
			var currentUserId = Meteor.userId();
			CampersList.insert({
				name: camperNameVar,
				score: 0,
				createdBy: currentUserId
			});
			event.target.camperName.value = "";
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
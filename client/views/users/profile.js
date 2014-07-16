Template.profile.helpers({
    username: function() {return Meteor.user().username},
    name: function() {return Meteor.user().profile}
 });
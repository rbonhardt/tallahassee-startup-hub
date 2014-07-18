Template.profile.helpers({
    username: function() {return Meteor.user().username},
    name: function() {return Meteor.user().profile.name},
    twitter_handle: function() {return Meteor.user().profile.twitter_handle}
 });
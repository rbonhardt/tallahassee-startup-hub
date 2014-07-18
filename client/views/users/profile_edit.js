Template.profileEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentUserId = Meteor.user()._id;

    var userProperties = {
      name: $(e.target).find('[name=name]').val(),
      twitter_handle: $(e.target).find('[name=twitter_handle]').val()
    }

    Meteor.users.update(currentUserId, {$set: userProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('profile', {_id: currentUserId});
      }
    });
  }

});
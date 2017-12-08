const mongoose = require('mongoose');
const Contributor = require('../models/Contributor');

const boxSchema = new mongoose.Schema({
  recipientFirstName: String,
  recipientLastName: String,
  organizerFirstName: String,
  organizerLastName: String,
  organizerEmail: String,
  occasion: String,
  givers: String,
  createdBy: String,
  createdTime: Date,
  status: String,
  letter: String,
  deadline: Date,
  deadlineString: String,
  contributors: [{type: mongoose.Schema.Types.ObjectId, ref: 'Contributor'}]
});

var autoPopulateContribs = function(next) {
  this.populate('contributors');
  next();
};

boxSchema.
  pre('findOne', autoPopulateContribs).
  pre('find', autoPopulateContribs);

boxSchema.methods.removeContributor = function(contributorId) {
  console.log(this)
  var newContribList = this.contributors.filter(contributor => contributor._id != contributorId);
  if(newContribList.length != this.contributors.length) {
    console.log('contrib list mismatch, savin')
    this.contributors = newContribList
    this.save()
  }else {
    console.log('failed to find contributor to remove')
  }
}

boxSchema.methods.startBox = function() {

}

boxSchema.methods.getContributorCompletionCount = function() {
  console.log('getting complete count')
  var completeCount = 0;
  for(i = 0; i < this.contributors.length; i++) {
    if(this.contributors[i].isComplete()) {
      completeCount++
    }
  }
  console.log('returning complete count:' + completeCount)
  return completeCount;
}

boxSchema.methods.getContributorAcceptedCount = function() {
  var acceptedCount = 0;
  for(i = 0; i < this.contributors.length; i++) {
    if(this.contributors[i].isAccepted()) {
      acceptedCount++
    }
  }
  return acceptedCount;
}

boxSchema.methods.getContributorStartedCount = function() {
  var startedCount = 0;
  for(i = 0; i < this.contributors.length; i++) {
    if(this.contributors[i].completeCount() > 0) {
      startedCount++
    }
  }
  return startedCount;
}

boxSchema.methods.isComplete = function() {
  return this.contributors.map(Contributor.isComplete).reduce((acc, next) => acc && next)
}

const Box = mongoose.model('Box', boxSchema);

module.exports = Box;

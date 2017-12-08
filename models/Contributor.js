const  mongoose = require('mongoose');

const contribSchema = new mongoose.Schema({
  contributorid: mongoose.Schema.Types.ObjectId,
  boxid: mongoose.Schema.Types.ObjectId,
  invitedBy: mongoose.Schema.Types.ObjectId,
  invitedTime: Date,
  email: String,
  invitationStatus: String,
  miab: String,
  mirror: String,
  memory: [String],
  photo: String,
  portrait: String,
  contentStatus: String,
  firstName: String,
  lastName: String,
  contentCount: Number,
  dedicationComplete: Boolean
});

contribSchema.methods.isComplete = function () {
  return this.photo && this.memory && this.mirror && this.portrait && this.miab && this.memory.length > 0;
}

contribSchema.methods.isOrganizer = function () {
  return this.contributorid.toString() == this.invitedBy.toString();
}

contribSchema.methods.completeCount = function () {
  var count = 0;
  if(this.photo) {
    count++;
  }
  if(this.memory.length > 0) {
    count++;
  }
  if(this.portrait) {
    count++;
  }
  if(this.miab) {
    count++;
  }
  if(this.mirror) {
    count++;
  }
  return count;
}

contribSchema.methods.isAccepted = function() {
  return this.invitationStatus == 'accepted'
}

const Contributor = mongoose.model('Contributor', contribSchema);

module.exports = Contributor;
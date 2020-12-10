const mongoose = require( "mongoose" );
const { Schema } = mongoose;

const WorkoutSchema = new Schema( {
	day: {
		type: Date,
		default: Date.now,
	},
	exercises: [
		{
			type: { type: String, trim: true },
			name: { type: String, trim: true },
			duration: Number,
			weight: Number,
			reps: Number,
			sets: Number,
		},
	],
	totalDuration: { type: Number, default: function() {
		return this.getTotalDuration()
	} }
} );

WorkoutSchema.methods.getTotalDuration = function () {
	let total = 0;
	for (let item of this.exercises) {
		total += item.duration
	}
    return total
}

const Workout = mongoose.model( "Workout", WorkoutSchema );

module.exports = Workout;

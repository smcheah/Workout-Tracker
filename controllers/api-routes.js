const Workout = require( '../models/workoutModel.js' );

module.exports = function ( app ) {
    app.get( '/api/workouts', ( req, res ) => {
        Workout.find( {} )
            .then( data => {
                res.json( data );
            } )
            .catch( err => {
                throw err;
            } );
    } );
};
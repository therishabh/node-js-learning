var mongoose = require('mongoose');
var schema = mongoose.Schema;

var imageSchema = new schema({
	farm : {type:String},
	id :  {type:String},
	originalformat : {type:String},
	secret :  {type:String},
	server :  {type:String},
	is_primary: { type: Boolean, default: 0 },
	is_active: { type: Boolean, default: 1 },
    status: { type: Boolean, default: 1 }
},{
    timestamps: { 
    	createdAt: 'created_at', 
    	updatedAt: 'updated_at' 
    }
});

module.exports = mongoose.model('artist_images', imageSchema);

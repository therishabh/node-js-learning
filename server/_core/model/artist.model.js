var mongoose = require('mongoose');
var schema = mongoose.Schema;

var artistSchema = new schema({
    name: { type: String, trim: true },
    description: { type: String },
    email: { type: Array },
    link: {
        youtube: { type: Array },
        facebook: { type: String },
        twitter: { type: String },
        instagram: { type: String },
        website: { type: String }
    },
    category: { type: Array },
    location: { type: Array },
    contact: [{
        name: { type: String },
        email: { type: Array },
        mobile: { type: Array },
        landline: { type: Array }
    }],
    featured: { type: Boolean },
    is_active: { type: Boolean, default: 1 },
    status: { type: Boolean, default: 1 }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

var Artist = mongoose.model('artist', artistSchema);
module.exports = Artist;

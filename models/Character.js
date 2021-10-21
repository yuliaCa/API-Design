const mongoose = require('mongoose');

const Schema = mongoose.Schema;

function stringToArray(powerString) {
return   powerString.split(",")
}

const CharacterSchema = new Schema({
name:{type:String, required:true, maxLength: 30},
powers: {type:[String], default: ["Super strength"], set:stringToArray}, 
type:{type:String, enum:['hero', 'villain'], default:'hero'},
hp:{type:Number, default:1},

});

CharacterSchema.virtual('description').get(function(){
    return `${this.name} is a ${this.type === 'hero' ? "noble" : "nefarious"} ${this.type} whose special powers are ${this.powers}`
})

CharacterSchema.static('findByType', function(charType) { return this.find({ "type":charType }); });

CharacterSchema.set('toJSON', {
    virtuals: true
});
const Character = mongoose.model("Character", CharacterSchema); 

module.exports = Character;
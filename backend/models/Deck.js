const { Schema, model, Types } = require('mongoose'); 

const CardSchema = new Schema({    
    front: {
        type: String,
        required: true
    },
    back: {
        type: String,
        required: true
    }
});
  
const DeckSchema = new Schema({    
    name: {
        type: String, 
        required: true
    },
    image: {
        type: String,
        required: true
    },
    owner: {
        type: Types.ObjectId,
        required: true
    },
    cards: {
        type: [CardSchema],
        required: true
    }
});
  
module.exports = model("Deck", DeckSchema);
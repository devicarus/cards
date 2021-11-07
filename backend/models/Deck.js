const { Schema, model, Types } = require('mongoose'); 

const CardSchema = new Schema({    
    front: {
        type: String
    },
    back: {
        type: String
    }
});
  
const DeckSchema = new Schema({    
    name: {
        type: String, 
        required: true
    },
    image: {
        type: String
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
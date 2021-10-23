const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Ping!!!---'
  })
});

router.post('/message', (req, res) => {
  const conversation_id = req.body.conversation_id || '';
  const message = req.body.message || '';
  const contextTable = ['hi', 'hello', 'goodbye', 'bye'];
  let msg = 'hi';
 
  // checking json format if valid
  if (!conversation_id || !message) {
    return res.status(404).json({ error: 'TRUE', message: 'Invalid Format.' });
  }
 
  // check if context table exist in message
  let contextExist = contextTable.some((context) => {
    let lowerText = message.toLowerCase();
 
    // assign exist context
    if (lowerText.includes(context)) {
      msg = context;
    }

    return lowerText.includes(context);
  });
 
  // if context doesnt exist
  if (!contextExist) {
    return res.status(404).json({ response_id: conversation_id, message: 'Sorry, I dont understand.' });
  }

  // send farewell when context is goodbye or bye
  if (msg === 'goodbye' || msg === 'bye') {
    return res.status(201).json({ response_id: conversation_id, message: 'Thank you, see you around.' });
  }
 
  return res.status(201).json({ response_id: conversation_id, message: 'Welcome to StationFive.' });
});

module.exports = router;
export default function Text ({addEmoji,addBracket}) {
let text = 'i am js developer';
  if(addEmoji) {
    text = addEmoji(text, '😀');
  }
  if(addBracket) {
    text = addBracket(text);
  }
  return <div>
    {text}
  </div>
}
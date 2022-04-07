import Text from './Composition/Text'
import Emoji from './Composition/Emoji'
import Bracket from './Composition/Bracket'

function App() {
  return (
    <div>
      {
        <Emoji>
          {({addEmoji}) => <Bracket>
            {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
          </Bracket>}
        </Emoji>
      }
    </div>
  )
}

export default App

import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'


const reactotron = Reactotron
    .configure({ name: 'NMP| Control Panel' }) // we can use plugins here -- more on this later
    .use(reactotronRedux())
    .connect(); // let's connect!

export default reactotron
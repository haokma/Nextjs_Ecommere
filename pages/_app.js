import '../styles/globals.css'
import 'antd/dist/antd.css';
import { createWrapper } from 'next-redux-wrapper'
import store from '../store'
import { Provider } from 'react-redux';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
const makeStore = () => store
const wrapper = createWrapper(makeStore)
export default wrapper.withRedux(MyApp)

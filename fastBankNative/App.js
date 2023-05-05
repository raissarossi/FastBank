import { withExpoSnack } from 'nativewind';
import Routers from './routers';
import Navbar from './components/Navbar/Navbar';

export default withExpoSnack(function App() {
  return (
    <>
      <Routers />
    </>
  );
})

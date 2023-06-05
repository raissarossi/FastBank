import { withExpoSnack } from 'nativewind';
import Routers from './routers';
import Navbar from './components/Navbar/Navbar'
import { View } from 'react-native';

export default withExpoSnack(function App() {
  return (
    <View className="w-full h-full">
      {/* <Navbar /> */}
      <Routers />
    </View>
  );
})

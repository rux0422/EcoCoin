import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Path to your AWS Amplify configuration file
import Login from './Loginscreen';
import HomeScreen from './Homescreen';
import Signupscreen from './Signupscreen';
import CoinBalance from './CoinBalancescreen';
import RedeemCoins from './RedeemCoinsscreen';
import CoinsRedeemed from './CoinsRedeemedscreen';
const configure = {
  "aws_project_region": "ap-south-1",
  "aws_cognito_identity_pool_id": "ap-south-1:232c11dd-df43-4d61-9748-ab8e8af752fe",
  "aws_cognito_region": "ap-south-1",
  "aws_user_pools_id": "ap-south-1_Pe1Y51ojp",
  "aws_user_pools_app_client_id": "29k8emo0oebkl13fok0mtvmptf"
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Sign up" component={Signupscreen} />
          <Stack.Screen name="Check Balance" component={CoinBalance} />
          <Stack.Screen name="" component={RedeemCoins} />
          <Stack.Screen name="Redemption Success" component={CoinsRedeemed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App

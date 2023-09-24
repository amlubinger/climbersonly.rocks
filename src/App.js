import logo from "./logo.svg";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Authenticator,
  useTheme,
  Button,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { useState } from "react";

export default function App() {
  const [logoAnimationDuration, setLogoAnimationDuration] = useState(20);

  const { tokens } = useTheme();

  const authComponents = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Heading level={1}>Climbers Only</Heading>
        </View>
      );
    }
  }

  return (
    <View className="App" backgroundColor={tokens.colors.background.primary}>
      <Authenticator components={authComponents}>
        {({ signOut, user }) => 
          <View>
            {window.scrollTo(0,0)}
            <Card>
              <img src={logo} className="App-logo" style={{"--logo-animation-duration": `${logoAnimationDuration}s`}} alt="logo" onClick={() => setLogoAnimationDuration(logoAnimationDuration <= 0.5 ? 20 : logoAnimationDuration / 2)} />
              <Heading level={2}>Hello{!user.username.startsWith("signinwithapple") ? ` ${user.username}` : ''}!</Heading>
              <Heading level={1}>Welcome to Climbers Only</Heading>
              <Heading level={3} marginTop="relative.medium">Coming soon...</Heading>
              <Button marginTop="relative.xxl" onClick={signOut}>Sign Out</Button>
            </Card>
          </View>
        }
      </Authenticator>
    </View>
  );
}

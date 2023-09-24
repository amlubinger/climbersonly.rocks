import logo from "./logo.svg";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  defaultDarkModeOverride,
  useTheme,
  ThemeProvider,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { useState } from "react";

function App({ signOut, user }) {
  const [logoAnimationDuration, setLogoAnimationDuration] = useState(20);

  const { tokens } = useTheme();
  const theme = {
    name: 'my-theme',
    overrides: [defaultDarkModeOverride],
  };

  console.log(user);
  return (
    <ThemeProvider theme={theme} colorMode="system">
      <View className="App" backgroundColor={tokens.colors.background.primary}>
        <Card>
          <img src={logo} className="App-logo" style={{"--logo-animation-duration": `${logoAnimationDuration}s`}} alt="logo" onClick={() => setLogoAnimationDuration(logoAnimationDuration <= 0.5 ? 20 : logoAnimationDuration / 2)} />
          <Heading level={2}>Hello {user.username}!</Heading>
          <Heading level={1}>Welcome to Climbers Only</Heading>
        </Card>
        <Button marginTop="relative.xxl" onClick={signOut}>Sign Out</Button>
      </View>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);

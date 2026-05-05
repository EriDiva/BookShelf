import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/navigation/Router";
import { useFonts } from "expo-font";
import { fontType } from "./assets/theme";

export default function App() {
  const [loaded] = useFonts(fontType);
  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
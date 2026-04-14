import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";
import Favorite from "./src/screens/Favorite";
import Profile from "./src/screens/Profile";
import { useFonts } from "expo-font";
import { fontType } from "./assets/theme";

export default function App() {
  const [loaded] = useFonts(fontType);
  if (!loaded) return null;

  return <Profile />;
}
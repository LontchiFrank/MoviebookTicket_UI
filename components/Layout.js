import { Drawer } from "@react-navigation/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "overview",
        }}
      />
      <Drawer.Screen
        name="" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "User",
          title: "overview",
        }}
      />
    </Drawer>
  );
}

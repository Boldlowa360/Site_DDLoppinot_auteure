import { AppShell, AppShellFooter, AppShellHeader, AppShellMain, Burger, MantineProvider, Button} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import './App.css';
import '@mantine/core/styles.css';


function App() {
  const [mobileOpened, {toggle:toggleMobile}] = useDisclosure();
  const [desktopOpened, {toggle:toggleDesktop}] = useDisclosure(true);
  return (
    <MantineProvider>
      <AppShell
      header={{height: 60, padding: 'md'}}
      navbar={{
        width: 300, 
        padding: 'md',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
        padding="md"
        >
        <AppShellHeader>
          <Burger
          opened={true}
          onClick={() => {}}
          hiddenFrom='sm'
          size="sm"/>
          <div>Logo</div>
        </AppShellHeader>
        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
        <AppShellMain>
          <Button onClick={toggleDesktop} visibleFrom="sm">
            Toggle navbar
          </Button>
          <Button onClick={toggleMobile} hiddenFrom="sm" color='red'>
            Toggle navbar
          </Button>
        </AppShellMain>
        <AppShellFooter>Footer</AppShellFooter>
      </AppShell>
    </MantineProvider>
  );
}

export default App;

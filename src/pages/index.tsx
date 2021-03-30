import { Content } from '../components/Content';
import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { Sidebar } from '../components/Sidebar';

export default function Home() {
  return (
    <>
      <Sidebar />
      <Header />
      <Content />
      <Player />
    </>
  );
}

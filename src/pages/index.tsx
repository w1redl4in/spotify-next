import { Content } from '../components/Content';
import { Player } from '../components/Player';
import { Sidebar } from '../components/Sidebar';

export default function Home() {
  return (
    <>
      <Sidebar />
      <Content />
      <Player />
    </>
  );
}

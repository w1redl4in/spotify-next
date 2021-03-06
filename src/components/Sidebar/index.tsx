import { NAVBAR1 } from '../../constants/Navbar1';
import { NAVBAR2 } from '../../constants/Navbar2';
import {
  SidebarContainer,
  AdditionalInfo,
  NavItems,
  InstallAppLabel,
} from './styles';
import { FiArrowDownCircle } from 'react-icons/fi';

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <nav>
        <h1>
          <img
            src="/images/spotify-header.png"
            alt="spotify logo"
            width="130px"
            height="40px"
          />
        </h1>
        <NavItems>
          {Object.entries(NAVBAR1).map(([key, value]) => (
            <span key={key} className={value.className}>
              {value.icon} {key}
            </span>
          ))}
        </NavItems>
        <AdditionalInfo>
          {Object.entries(NAVBAR2).map(([key, value]) => (
            <span key={key}>
              {value.icon} {key}
            </span>
          ))}
        </AdditionalInfo>
      </nav>
      <InstallAppLabel>
        <FiArrowDownCircle />
        <a href="https://www.spotify.com/us/download/windows/" target="_blank">
          Install App
        </a>
      </InstallAppLabel>
    </SidebarContainer>
  );
};

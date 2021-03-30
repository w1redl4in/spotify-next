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
            src="https://cdn.discordapp.com/attachments/263762535763673089/826307989384200192/unknown.png"
            alt="spotify logo"
          />
        </h1>
        <NavItems>
          {Object.entries(NAVBAR1).map(([key, value]) => (
            <a href="" key={key} className={value.className}>
              {value.icon} {key}
            </a>
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
        <span>Install App</span>
      </InstallAppLabel>
    </SidebarContainer>
  );
};

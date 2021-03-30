import { HeaderContainer, LogInSignUp, ArrowsWrapper } from './styles';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ArrowsWrapper>
        <button>
          <MdKeyboardArrowLeft color="#B2B2B2" />
        </button>
        <button>
          <MdKeyboardArrowRight color="#B2B2B2" />
        </button>
      </ArrowsWrapper>
      <LogInSignUp>
        <button>SIGN UP</button>
        <button>LOG IN</button>
      </LogInSignUp>
    </HeaderContainer>
  );
};

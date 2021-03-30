import {
  HeaderContainer,
  LogInSignUp,
  ArrowsWrapper,
  LoggedPanel,
} from './styles';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { signIn, signOut, useSession } from 'next-auth/client';

export const Header: React.FC = () => {
  const [session] = useSession();

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

      {!session ? (
        <LogInSignUp>
          <button>SIGN UP</button>
          <button onClick={() => signIn('spotify')}>LOG IN</button>
        </LogInSignUp>
      ) : (
        <LoggedPanel>
          <button onClick={() => signOut()}>
            <BiUserCircle />
            {session.user.name}
            <AiFillCloseCircle />
          </button>
        </LoggedPanel>
      )}
    </HeaderContainer>
  );
};

import {
  HeaderContainer,
  LogInSignUp,
  ArrowsWrapper,
  LoggedPanel,
} from './styles';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { signIn, signOut, useSession } from 'next-auth/client';

export const Header: React.FC = () => {
  const [session] = useSession();

  return (
    <HeaderContainer>
      <ArrowsWrapper>
        <button type="button">
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
            <img src={session.user.picture as string} alt="user image" />
            {session.user.name}
            <AiFillCloseCircle />
          </button>
        </LoggedPanel>
      )}
    </HeaderContainer>
  );
};

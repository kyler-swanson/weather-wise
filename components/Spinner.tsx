import { CgSpinner } from 'react-icons/cg';
import styled from 'styled-components';

const Spinner = styled(CgSpinner)`
  animation: spin 1s linear infinite;
  font-size: 3rem;
  color: #ccc;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;

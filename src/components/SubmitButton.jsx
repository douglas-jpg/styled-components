import styled from 'styled-components';
import { theme } from '../styles/Theme';

const SubmitButtonStyle = styled.button`
    cursor: pointer;
    padding: 10px 20px;

    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.color.white};

    background-color: ${theme.color.blue};
`;

const SubmitButton = () => {
    return <SubmitButtonStyle>SubmitButton</SubmitButtonStyle>;
};

export default SubmitButton;

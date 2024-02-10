import styled from 'styled-components';

// Posso criar props e passar elas personalizadas para mudar o estilo dele
const Btn = styled.button`
    background: ${(prop) => (prop.fundo ? '#BF4F74' : 'white')};
    color: ${(prop) => (prop.cor ? 'white' : '#BF4F74')};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: #8b3854;
    }
`;

const Button = () => {
    return (
        <Btn fundo={true} cor={true}>
            Testando aqui o botão
        </Btn>
    );
};

export default Button;

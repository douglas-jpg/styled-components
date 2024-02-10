import styled from 'styled-components';

// Tambem posso aproveitar estilizações de outros componentes
const Button = styled.button`
    color: #bf4f74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
    cursor: pointer;
    background: none;
`;

const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;

const TomatoBtn = () => {
    return (
        <div>
            <TomatoButton>TomatoBtn</TomatoButton>
            <TomatoButton as={'a'} href='#'>
                Posso user o estilo para outras tags
            </TomatoButton>
            {/* funciona com outros componentes renderizados tambem  */}
        </div>
    );
};

export default TomatoBtn;

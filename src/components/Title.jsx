import styled from 'styled-components';
// primeiro importa o styled do styled-components

// cria uma variavel que vai envolver
// todo o conteudo com os estilos proprios ja criado
const FistTitle = styled.h1`
    font-size: 2em;
    text-align: center;
    color: #bf4f7e;
`;

const Wrapper = styled.div`
    padding: 4em;
    background: papayawhip;
`;

const Title = () => {
    return (
        <>
            {/* substitui ao invez do elemento qeu voce iria usar  */}
            <Wrapper>
                <FistTitle>Hello World</FistTitle>
            </Wrapper>
        </>
    );
};

export default Title;

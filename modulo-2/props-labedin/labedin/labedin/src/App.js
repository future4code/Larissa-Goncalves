import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardGrande/CardPequeno';
import foto from './components/imagens/fotoperfil.jpeg'
import logoLabenu from './components/imagens/labenu.png'
import check from './components/imagens/tester.png'
import perfil from './components/imagens/perfil(zinho).webp'
import casa from './components/imagens/casinha.png'
import styled from 'styled-components';
import dog from './components/imagens/dog.jpeg'
import { createGlobalStyle } from 'styled-components';
import CardConexao from './CardConexao'

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
    }
`
const DivApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`
const  PageSectionContainer = styled.div`
    width: 40vw;
    margin: 10px 0; 
 `
const Titulo = styled.h2`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`
const TituloConexao = styled.h2`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;
`
 
function App() {
  return (
    <DivApp>
      <GlobalStyle/>
      <PageSectionContainer>
        <Titulo>Dados pessoais</Titulo>
        <CardGrande 
          imagem={foto}
          nome="Larissa Lanes" 
          descricao="Oi, eu sou a Larissa.Tenho 19 anos e sou estudante de programação uma futura developer."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

         <TituloConexao>Conexões</TituloConexao>
         <CardConexao
          imagem={dog}
          nome="olívia"
         />
       
        <CardPequeno
          imagem={perfil}
          titulo="Email: LarissaLanes@gmail.com"
      
        />

        <CardPequeno
        imagem={casa}
        titulo="Endereço: Rio, Rua b-10"
        />

      </PageSectionContainer>

      <PageSectionContainer>
        <Titulo>Experiências profissionais</Titulo>
        <CardGrande 
          imagem={logoLabenu}
          nome="Labenu" 
          descricao="Aluna do curso web full stack da escola de programação Labenu." 
        />
        
        <CardGrande 
          imagem={check}
          nome="Lettering em parede" 
          descricao="Desehando e espalhando arte pelas ruas do Rio." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Titulo>Minhas redes sociais</Titulo>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </DivApp>
  );
}

export default App;

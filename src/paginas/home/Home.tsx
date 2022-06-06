import React, { useEffect } from "react";
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from "@mui/material";
import './Home.css';
import TabPostagem from "../../componentes/postagens/tabPostagem/TabPostagem";
import ModalPostagem from "../../componentes/postagens/modalPostagem/ModalPostagem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";

function Home() {

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      alert("Faça login para acessar esta página!");
      navigate('/login');
    }

  }, [token]);

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Poste aqui os seus pensamentos e opiniões sobre os grupos de kpop da segunda geração!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to="/posts" className="text-decorator-none">
              <Button variant="outlined" className='botao'>Ver Postagens</Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://img.freepik.com/free-vector/k-pop-boy-group-concept_52683-43676.jpg?w=2000" alt="" width="650px" height="500px" />
        </Grid>
        <Grid xs={12} className='postagens'>
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
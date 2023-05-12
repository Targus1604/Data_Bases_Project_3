"use client"

import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, FormEvent } from 'react'


type LoginData = {
    email: string,
    password: string
}

export default function Login() {

    const [loginData, setLoginData] = React.useState<LoginData>(
        {
            email : "",
            password : ""
        }
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setLoginData(
            {
                ...loginData, [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = (e:FormEvent<HTMLInputElement>) => {
        //e.preventDefault();
        console.log(loginData);
    }

    return (
        <>

            <Container component="main" maxWidth="xl">

                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: "100vh" }}
                >

                    <Grid item >
                        <Paper>
                            <Box component="form" onSubmit={handleSubmit} sx = {{minWidth:"30vh"}}>
                                <Stack spacing={2} direction="column">
                                    <Typography variant="h4">Ingresar</Typography>

                                    <TextField
                                        label="Correo Electrónico"
                                        type="text"
                                        placeholder='nombre@unal.edu.co'
                                        name="email"
                                        required 
                                        fullWidth
                                        onChange={handleChange}
                                        />

                                    <TextField
                                        label="Contraseña"
                                        type="password"
                                        placeholder='Ingrese su contraseña aqui'
                                        name="password"
                                        required
                                        fullWidth
                                        onChange={handleChange}
                                        />

                                    <Button type="submit" fullWidth sx={{ color: "black" }}>Acceder</Button>
                                </Stack>
                            </Box>
                        </Paper>
                    </Grid>

                </Grid>

            </Container>
        </>
    )
}

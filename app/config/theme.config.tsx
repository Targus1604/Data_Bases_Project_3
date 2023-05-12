"use client"

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import React from "react";


type ThemeProperties = {
    children: JSX.Element;
}

export enum themePalette {
    GRAY_1 = "#12181B",
    LIME_1 = "#C8FA5F",
    TYPOGRAPHY = "'Lato'"
}

const projectTheme = createTheme({

    palette: {
        mode: "dark",
        background: {
            default: themePalette.GRAY_1
        },
        primary: {
            main: themePalette.LIME_1,
        },
    },

    typography: {
        fontFamily: themePalette.TYPOGRAPHY
    },

    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em",
                    background : themePalette.LIME_1
                }
            }
        },

        MuiPaper: {
            defaultProps: {
                style: {
                    borderRadius: "0.5 em",
                    padding: "0.5em"
                }
            }
        },

    }
});


export const ThemeConfiguration: React.FC<ThemeProperties> = ({ children }) => {

    return <ThemeProvider theme={projectTheme}>
        <CssBaseline />
        {children}
    </ThemeProvider>

}
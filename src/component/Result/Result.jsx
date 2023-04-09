import { Box } from '@mui/material'
import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { Data } from '../DataContext/DataContext'
import styled from '@emotion/styled';

function Result() {
    const [src, setSrc] = useState('');
    const {html, css, js}= useContext(Data);

    const Container = styled(Box)`
        height:41vh;
    `

    const code = `<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html>
    `
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setSrc(code);
        },1000)

        return ()=>clearTimeout(timeout)
    },[code])

  return (
    <Container>
        <iframe 
            srcDoc = {src}
            title = "Output"
            sandbox = 'allow-scripts' 
            //generally iframe dont allow script by default
            feameBorder={0}
            width='100%'
            height='100%'
        />

    </Container>
  )
}

export default Result
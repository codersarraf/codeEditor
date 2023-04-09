import React, { useContext } from 'react'
import CodeEditor from '../CodeEditor/CodeEditor'
import { Box,styled } from '@mui/material'
import { Data } from '../DataContext/DataContext'


const Container = styled(Box)`
  display:flex;
  background-color : #060606;
  height:58vh;
`

function CodeSpace() {
  const {html,setHtml, css, setCss, js, setJs} = useContext(Data);
  return (
    <Container id>
        <CodeEditor headingName="HTML" icon="/" color="#FF3C41" value={html} onChange={setHtml} />
        <CodeEditor headingName="CSS" icon="*" color="#0EBEFF" value={css} onChange={setCss}/>
        <CodeEditor headingName="JavaScript" icon="{}" color="#FCD000" value={js} onChange={setJs}/>
    </Container>
  )
}

export default CodeSpace
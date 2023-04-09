import React, { useState } from 'react'
import { Box,styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledCodeEditor } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css'; 
import '../CodeEditor/codeEditor.css'
// import CodeMirror from 'react-codemirror2';

const Container = styled(Box)`
  flex-grow :1;
  flex-basic:0;
  display:flex;
  flex-direction: column;
  padding :0 0.5rem 0.5rem;
`

const Heading = styled(Box)`
  background: #1d1e22;
  display:flex;
  padding : 0.5rem 0.8rem;
`

const HeadingCont = styled(Box)`
  display: flex;
  background : #060606;
  color: #AAAEBC;
  justify-content : space-between;
  font-weight:710;
`

function CodeEditor({headingName, icon, color, value, onChange}) {

  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value)=>{
    onChange (value);
  }

  return (
    <Container style={open ? null : {flexGrow:0}}>
        <HeadingCont>
            <Heading >
                <Box component="span" style={{
                    background:color,
                    height:'1.5rem',
                    width:'1.5rem',
                    display:'flex',
                    placeContent : 'center',
                    borderRadius : '0.4rem',
                    marginRight:'0.4rem',
                    paddingBotton : '0.12rem',
                    color : '#000'

                }}>
                  {icon}
                </Box>
                {headingName}
            </Heading>

            <CloseFullscreenIcon

              fontSize="small"
              onClick={()=>setOpen(!open)}

              style={{alignSelf : 'center'}}
            
            />
        </HeadingCont>
        <ControlledCodeEditor 
          className='controlled-editor' 
          options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true
        }}

          value = {value}
          onBeforeChange = {handleChange}

        // value={this.state.value}
        
        />
    </Container>
  )
}

export default CodeEditor
import React from 'react'
import Navbar from './components/Navbar'
import { Box, Card, Stack } from '@mui/material'

export default function App() {
    return(
        <>
            <Navbar />
            <Stack direction="column" spacing={2}>
                <Box
                    height="400px"
                    bgcolor="green"
                >
                    <Card>

                    </Card>
                </Box>
                <Box
                    height="100px"
                    bgcolor="darkgreen"
                >
                </Box>
                <Box
                    height="400px"
                    bgcolor="blue"
                >
                </Box>
                <Box
                    height="400px"
                    bgcolor="red"
                >
                </Box>
                <Box
                    height="400px"
                    bgcolor="purple"
                >
                </Box>

            </Stack>
        </>
    )
}
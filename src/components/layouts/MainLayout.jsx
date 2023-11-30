import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../common/Sidebar'

const MainLayout = () => {
  return (
   <Box display="flex">
    
      {/* Sidebar */}
      <Sidebar/>
      {/* Sidebar */}

      <Box component="main">
        
      </Box>


   </Box>
  )
}

export default MainLayout
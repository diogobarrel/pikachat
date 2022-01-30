import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Button,
  IconButton,
  TextField,
} from '@mui/material'
import { Box } from '@mui/system'
import { Close } from '@mui/icons-material'

const InviteDialog = (props) => {
  const [email, setEmail] = useState('')
  const [dialog, setDialog] = useState(false)
  const { eventbus } = props

  const message =
    'A pessoa receberá um email para criar sua conta e conversar com você'
  const title = 'Convide alguém para iniciar uma conversa!'
  const close = () => setDialog(false)

  useEffect(() => {
    eventbus.addListener('toggle-invite', (value) => setDialog(value))
    return () => {
      eventbus.removeListener('toggle-invite', (value) => setDialog(value))
    }
  }, [])

  return (
    <Dialog open={dialog} onClose={close} maxWidth="md" fullWidth>
      <DialogTitle> {title} </DialogTitle>
      <Box position="absolute" top={0} right={0}>
        <IconButton onClick={close}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
        <TextField
          variant="outlined"
          color="primary"
          fullWidth
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          label="Email"
        ></TextField>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          onClick={() => props.onSubmit(email)}
          fullWidth
        >
          Convidar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default InviteDialog

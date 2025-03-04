import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  IconButton,
  Input,
} from '@mui/material'
import { Box } from '@mui/system'
import { Close } from '@mui/icons-material'

const InviteDialog = (props) => {
  const [email, setEmail] = useState('')
  const [dialog, setDialog] = useState(false)
  const { eventbus } = props

  // const message = 'A pessoa receberá um email para criar sua conta e conversar com você'
  const title = 'Convide alguém para iniciar uma conversa!'
  const close = () => setDialog(false)

  useEffect(() => {
    eventbus.addListener('toggle-invite', (value) => setDialog(value))
    return () => {
      eventbus.removeListener('toggle-invite', (value) => setDialog(value))
    }
  }, [eventbus])

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(email)
  }

  return (
    <Dialog open={dialog} onClose={close} maxWidth="md" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle> {title} </DialogTitle>
        <Box position="absolute" top={0} right={0}>
          <IconButton onClick={close}>
            <Close />
          </IconButton>
        </Box>
        <DialogContent>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            required
            value={email}
            fullWidth
            onChange={(event) => setEmail(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" type="submit" fullWidth>
            Convidar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default InviteDialog

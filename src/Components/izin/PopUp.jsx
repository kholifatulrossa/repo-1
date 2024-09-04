// src/components/CustomPopup.js

import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Slide from '@mui/material/Slide';

// Transition component with custom duration
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} timeout={{ enter: 300, exit: 200 }} />;
});

const CustomPopup = ({ open, onClose, title, message, actions, cardHeight }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            TransitionComponent={Transition}
            keepMounted
            sx={{
                '& .MuiPaper-root': {
                    borderRadius: '8px',
                    width: '1000px',
                    height: '400px',
                    overflowY: 'auto',
                }
            }}
        >
            <DialogTitle
                sx={{
                    fontFamily: 'poppins',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    backgroundColor: '#f5f5f9',
                    color: '#333',
                }}
            >
                {title}
            </DialogTitle>
            <DialogContent
                sx={{
                    fontFamily: 'poppins',
                    fontSize: '1rem',
                    padding: '16px',
                }}
            >
                <Typography level="body1" sx={{ color: '#555' }}>
                    {message}
                </Typography>
            </DialogContent>
            <DialogActions
                sx={{
                    padding: '16px',
                    justifyContent: 'center',
                }}
            >
                {actions || (
                    <Button 
                        variant="outlined" 
                        onClick={onClose}
                        sx={{
                            fontFamily: 'poppins',
                            fontSize: '0.875rem',
                            padding: '8px 16px',
                        }}
                    >
                        Close
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};

export default CustomPopup;

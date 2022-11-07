import React, { useState } from "react";

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 6,
};

function TableElement() {
    return (
        <div className="m-6">
            <h1 className="text-indigo-900 font-bold text-2xl">Catecismos</h1>
            <h2 className="text-indigo-600 font-medium"><a>http://hermanoseclesiasticos.com/adfASDgagA</a></h2>
        </div>
    )
}

function ThemeModal(props) {
    console.log(props);

    return (
        <Modal
            open={props.hidden}
            onClose={props.handleChange}
        >
            <Box sx={style}>
                <div className="bg-white">
                    <h1 className="text-3xl text-indigo-900 mb-4 font-medium">Redes ola</h1>
                    <h2>informacion a lo tonto lorem kaadskldamsfkdakldsfdajkdd dfjsadfasldf ajdfjklasdj fsladfj ñaldjfasld lfuiasdhlf asdlfu halsdfh laisudf luiashdfia s
                        asdfias foisajdf la dhflo hasdfloiha fpñoasd hfpasuidfgpasdfua uihadf asdnfh pasdfnh ip
                    </h2>
                    <div className="h-48 m-6 overflow-auto">
                        <TableElement></TableElement>
                        <TableElement></TableElement>
                        <TableElement></TableElement>
                        <TableElement></TableElement>
                        <TableElement></TableElement>
                        <TableElement></TableElement>
                        <TableElement></TableElement>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default ThemeModal;
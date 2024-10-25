import React from 'react'
import { Table, TableBody, TableRow, TableCell, Link, Box } from '@mui/material'

function Symbols() {
    const Images = [{ Src: 'images/namad1.png', Alt: 'واحد های خلاق'},
        { Src: 'images/namad2.png', Alt: 'تیکا' },
    { Src: 'images/namad3.png', Alt: 'لوگوی ساماندهی' },
    { Src: 'images/namad4.png', Alt: "لوگوی ای نماد" },
    { Src: 'images/namad5.png', Alt: 'انجمن صنفی' }
    ]
    return (
        <Table className="symbols">
            <TableBody>
                <TableRow>
                    {Images?.map((image, index) => {
                        return (
                            <TableCell key={index}>
                                <Link href="#" className="symbol" >
                                    <img
                                        src={image.Src}
                                        alt={image.Alt}
                                    />
                                </Link>
                            </TableCell>
                        )
                    })}
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default Symbols

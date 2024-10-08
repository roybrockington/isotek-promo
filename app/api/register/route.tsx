import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'
import {google} from "googleapis"

// Handles POST requests to /api
type SheetForm = {
    name: string
    email: string
    phone: string
    message: string
}

export async function POST(request: any) {

    const username = process.env.MAIL_USERNAME
    const password = process.env.MAIL_PASSWORD

    console.log("dealing with request")
    const data = await request.json()
    const name = data.name
    const email = data.email
    const address = data.address
    const retailer = data.retailer
    const demo = data.demo

    // create transporter object
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },

        auth: {
            user: username,
            pass: password
        }
    });

    try {
        const mail = await transporter.sendMail({
            from: '"SCV x IsoTek" noreply@scvlabs.co.uk',
            to: ([process.env.MAIL_SCV, process.env.MAIL_ISOTEK] as string[]),
            replyTo: email,
            subject: `V5 Sirius Giveaway Entry from ${email}`,
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Address: ${address} </p>
            <p>Retailer: ${retailer} </p>
            <p>Demo: ${demo} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.json({ message: "COULD NOT SEND MESSAGE" })
    }


}

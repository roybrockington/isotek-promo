import { NextResponse, NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

// Handles POST requests to /api


export async function POST(request) {

    const username = process.env.MAIL_USERNAME
    const password = process.env.MAIL_PASSWORD
    const myEmail = process.env.MAIL_TARGET

    console.log("dealing with request")
    console.log(formData[0].name)
    const formData = await request.formData()
    const name = formData[0].name
    const email = 'test' //formData.get('email')
/*    const address = formData.get('address')
    const retailer = formData.get('retailer')
    const demo = formData.get('demo')*/

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
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `V5 Sirius Giveaway Entry from ${email}`,
            html: `
            <p>Name: ${name} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }


}

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create transporter (using Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mauricioconigliaro1@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6, #1e40af); padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Portfolio Contact Message</h2>
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #e9ecef;">
            <div style="margin-bottom: 15px;">
              <strong style="color: #3b82f6;">From:</strong> ${name}
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #3b82f6;">Email:</strong>
              <a href="mailto:${email}" style="color: #1e40af;">${email}</a>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #3b82f6;">Message:</strong>
            </div>

            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #3b82f6;">
              ${message.replace(/\n/g, '<br>')}
            </div>

            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e9ecef;">

            <div style="font-size: 12px; color: #6c757d;">
              Sent from your portfolio website at ${new Date().toLocaleString()}
            </div>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
# EmailJS Setup Instructions

EmailJS is a client-side email service that allows you to send emails directly from your frontend without server setup.

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com)
2. Sign up for a free account (200 emails/month free)

## 2. Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended)
   - **Outlook/Hotmail**
   - **Yahoo**
   - Or any other SMTP service
4. Follow the OAuth connection process
5. **Copy the Service ID** (looks like: `service_abc123`)

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template setup:

### Template Settings:
- **Template Name**: Portfolio Contact Form
- **Subject**: `Portfolio Contact: {{subject}}`

### Template Content:
```html
New contact form submission from your portfolio:

Name: {{from_name}}
Email: {{from_email}} 
Subject: {{subject}}

Message:
{{message}}

---
Reply directly to: {{from_email}}
Sent from: {{to_email}}
```

4. **Save and copy the Template ID** (looks like: `template_xyz789`)

## 4. Get Public Key

1. Go to **Account** settings in your EmailJS dashboard
2. Find **Public Key** section
3. **Copy your Public Key** (looks like: `user_ABCdef123456`)

## 5. Configure Environment Variables

1. Copy the example file:
   ```bash
   copy env.local.example .env.local
   ```

2. Edit `.env.local` with your credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_your_template_id  
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 6. Template Variables Reference

Make sure your EmailJS template uses these variable names:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (utkarshsri1139@gmail.com)

## 7. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section on your website
3. Fill out and submit the form
4. Check your connected email account for the message!

## ✅ Benefits of EmailJS

- **No server setup required** - Works entirely client-side
- **No app passwords needed** - Uses OAuth authentication  
- **Free tier** - 200 emails/month included
- **Multiple providers** - Gmail, Outlook, Yahoo, custom SMTP
- **Template system** - Consistent email formatting
- **Delivery tracking** - See sent/failed emails in dashboard

## 🔒 Security Notes

- EmailJS public keys are safe to expose (that's why they're called public)
- All sensitive authentication is handled by EmailJS servers
- Rate limiting is built-in to prevent spam
- No sensitive email credentials stored in your code

## 📧 Email Template Example

Your visitors will send emails that look like:
```
Subject: Portfolio Contact: [Their Subject]

New contact form submission from your portfolio:

Name: John Doe
Email: john@example.com
Subject: Web Development Project

Message:
Hi! I'm interested in working with you on a React project...

---
Reply directly to: john@example.com
Sent from: utkarshsri1139@gmail.com
```

## 🚀 Ready to Deploy

Once configured, your contact form will work in both development and production without any additional setup!

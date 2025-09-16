# EmailJS Troubleshooting Guide

## 🔍 **Common Issues & Solutions**

### **1. Check Your EmailJS Template**

Go to your EmailJS dashboard and verify your template has these exact variable names:

```html
From: {{from_name}} ({{from_email}})
Subject: {{subject}}
Message: {{message}}
Reply To: {{from_email}}
```

### **2. Verify Environment Variables**

Check your `.env.local` file:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_nfbnjho
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_h7ynvsf
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=LGnPlHX4g-51B2Ezx
```

### **3. Common Error Codes**

- **400 Bad Request**: Template variables don't match
- **401 Unauthorized**: Wrong Public Key
- **404 Not Found**: Wrong Service ID or Template ID
- **403 Forbidden**: Account limits exceeded or email service not connected

### **4. Test Your EmailJS Setup**

1. Open browser DevTools (F12)
2. Go to Console tab
3. Submit the contact form
4. Check for errors in console

### **5. Verify EmailJS Service Connection**

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Check "Email Services" - make sure your Gmail is connected
3. Test the service by clicking "Send Test Email"

### **6. Check Template Variables**

Your template should use exactly these variables:
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`

### **7. Account Limits**

EmailJS free account limits:
- 200 emails/month
- Check if you've exceeded the limit

## 🛠️ **Quick Fixes**

### **Fix 1: Update Template Content**
```html
Subject: Portfolio Contact: {{subject}}

New message from {{from_name}} ({{from_email}}):

{{message}}

---
Reply to: {{from_email}}
```

### **Fix 2: Restart Development Server**
```bash
npm run dev
```

### **Fix 3: Clear Browser Cache**
- Hard refresh (Ctrl+F5)
- Clear browser cache and cookies

### **Fix 4: Check Network Tab**
1. Open DevTools → Network tab
2. Submit form
3. Look for EmailJS API calls
4. Check response status

## 🔧 **Advanced Debugging**

### **Enable Detailed Logging**
The contact form now includes detailed error logging. Check browser console for:
- Configuration status
- Template parameters being sent
- Detailed error messages

### **Manual Test**
You can test EmailJS directly in browser console:
```javascript
// Test your EmailJS configuration
emailjs.send('service_nfbnjho', 'template_h7ynvsf', {
  from_name: 'Test User',
  from_email: 'test@example.com',
  subject: 'Test Subject',
  message: 'Test message',
  to_email: 'utkarshsri1139@gmail.com'
}, 'LGnPlHX4g-51B2Ezx').then(
  (result) => console.log('Success:', result),
  (error) => console.log('Error:', error)
);
```

## ✅ **Verification Steps**

1. ✅ EmailJS account created
2. ✅ Gmail service connected
3. ✅ Template created with correct variables
4. ✅ Environment variables set
5. ✅ No console errors
6. ✅ Account limits not exceeded

## 🚨 **If Still Not Working**

1. **Double-check Service ID**: `service_nfbnjho`
2. **Double-check Template ID**: `template_h7ynvsf`
3. **Double-check Public Key**: `LGnPlHX4g-51B2Ezx`
4. **Verify Gmail connection** in EmailJS dashboard
5. **Check spam folder** for test emails
6. **Try different email address** for testing

## 📞 **Contact Form Debug Info**

The contact form now logs:
- Configuration status
- Template parameters
- Detailed error codes
- Network status

Check browser console when submitting the form!
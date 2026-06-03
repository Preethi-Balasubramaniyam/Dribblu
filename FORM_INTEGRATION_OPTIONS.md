# Form Integration Options (No Backend Required)

## ✅ **Currently Implemented: Web3Forms**

Your contact form now uses Web3Forms. To activate it:

1. Visit https://web3forms.com
2. Enter your email to get a free access key
3. Replace `YOUR_ACCESS_KEY_HERE` in ContactForm.tsx (line ~38)

**Benefits:**
- ✅ 100% Free forever
- ✅ No signup required
- ✅ 250 submissions/month
- ✅ Email notifications
- ✅ No branding

---

## **Alternative Option 1: Formspree**

```tsx
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.fullName,
        organization: form.orgName,
        phone: form.phone,
        email: form.email,
        message: form.requirements,
      }),
    })

    if (response.ok) {
      setSubmitted(true)
    } else {
      setError('Failed to send message.')
    }
  } catch (err) {
    setError('Network error. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}
```

**Setup:**
1. Go to https://formspree.io
2. Sign up (free)
3. Create a new form
4. Copy your form endpoint
5. Replace `YOUR_FORM_ID` in the code

**Free Tier:** 50 submissions/month

---

## **Alternative Option 2: EmailJS (Client-Side Only)**

```bash
npm install @emailjs/browser
```

```tsx
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: form.fullName,
        organization: form.orgName,
        phone: form.phone,
        email: form.email,
        message: form.requirements,
      },
      'YOUR_PUBLIC_KEY'
    )

    setSubmitted(true)
  } catch (err) {
    setError('Failed to send message.')
  } finally {
    setIsSubmitting(false)
  }
}
```

**Setup:**
1. Go to https://www.emailjs.com
2. Sign up (free)
3. Add an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your Service ID, Template ID, and Public Key

**Free Tier:** 200 emails/month

---

## **Alternative Option 3: Next.js API Route + Resend (Professional)**

**Install Resend:**
```bash
npm install resend
```

**Create API Route:** `app/api/contact/route.ts`
```typescript
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, orgName, phone, email, requirements } = body

    const { data, error } = await resend.emails.send({
      from: 'Dribblu Contact <onboarding@resend.dev>',
      to: ['your-email@example.com'],
      subject: `New Contact from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Organization:</strong> ${orgName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Requirements:</strong></p>
        <p>${requirements}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
```

**Update ContactForm.tsx:**
```tsx
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const result = await response.json()

    if (response.ok) {
      setSubmitted(true)
    } else {
      setError('Failed to send message.')
    }
  } catch (err) {
    setError('Network error.')
  } finally {
    setIsSubmitting(false)
  }
}
```

**Setup:**
1. Sign up at https://resend.com (free)
2. Get API key
3. Add to `.env.local`: `RESEND_API_KEY=re_xxxxx`
4. Create the API route as shown above

**Free Tier:** 100 emails/day

---

## **Comparison Table**

| Service | Free Limit | Setup Time | Email Delivery | Pros |
|---------|-----------|------------|----------------|------|
| **Web3Forms** | 250/month | 2 min | Instant | No signup, very simple |
| **Formspree** | 50/month | 5 min | Instant | Dashboard, spam protection |
| **EmailJS** | 200/month | 10 min | Instant | Client-side only |
| **Resend** | 100/day | 15 min | Instant | Professional, React Email support |

---

## **Recommended Setup Steps (Web3Forms)**

1. Visit https://web3forms.com
2. Enter your email address
3. Copy the access key you receive
4. Open `components/contact/ContactForm.tsx`
5. Find line ~38: `access_key: 'YOUR_ACCESS_KEY_HERE'`
6. Replace with your actual key
7. Test the form!

**Done!** Your form will now send emails to your inbox. 📧

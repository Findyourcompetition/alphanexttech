import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phoneNumber, countryCode } = body;

    const fullPhoneNumber = `${countryCode}${phoneNumber.replace(/\D/g, '')}`;

    // ClickUp API call
    const clickupPayload = {
      name: `${name}`,
      description: `Customer Details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${fullPhoneNumber}`,
      priority: 3,
      status: 'to do',
      notify_all: true,
      custom_fields: [
        {
          id: '74f41625-3296-4748-82d8-d620a9eaec0c',
          value: email,
        },
        {
          id: '5861e3ed-1767-47b4-81df-6af8b301c4c3',
          value: fullPhoneNumber,
        },
      ],
    };

    // Check if API key exists
    if (!process.env.NEXT_PUBLIC_CLICKUP_API_KEY) {
      throw new Error('ClickUp API key is not configured');
    }

    const clickupResponse = await fetch(
      `https://api.clickup.com/api/v2/list/${process.env.NEXT_PUBLIC_CLICKUP_LIST_ID}/task`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': process.env.NEXT_PUBLIC_CLICKUP_API_KEY
        },
        body: JSON.stringify(clickupPayload)
      }
    );

    // Webhook API call
    const webhookPayload = {
      email: email,
      phone_number: fullPhoneNumber
    };

    const webhookResponse = await fetch(`https://api.trigger.dev/api/v1/tasks/make-and-track-call/trigger`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TRIGGER_API_KEY}`
      },
      body: JSON.stringify({payload: webhookPayload})
    });

    if (!webhookResponse.ok) {
      throw new Error('Webhook call failed');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 
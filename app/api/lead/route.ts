import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, interest } = body;

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Implement lead capture logic
    // For now, just log the data and return success
    console.log('Lead capture submission:', { name, email, company, interest });

    // In production, you would:
    // 1. Store lead in CRM system
    // 2. Send notification email
    // 3. Add to email list

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thanks for your interest! We will contact you shortly.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Failed to capture lead' },
      { status: 500 }
    );
  }
}

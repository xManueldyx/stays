import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import bcrypt from "bcryptjs";

const HASH_ROUNDS = 10;

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ success: false, error: 'Error fetching users' });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ success: false, error: 'Missing required fields' });
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      return NextResponse.json({ success: false, error: 'Invalid input types' });
    }

    const hashedPassword = await bcrypt.hash(password, HASH_ROUNDS);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ success: true, data: newUser });
  } catch (error: any) {
    console.error('Error creating user:', error);
    return NextResponse.json({ success: false, error: 'Error creating user' });
  }
}
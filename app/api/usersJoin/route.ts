import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';
import bcrypt from "bcryptjs";


const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";
export async function GET() {
  try {
      const users = await prisma.users.findMany();
      return NextResponse.json({ success: true, data: users });
  } catch (error) {
      console.error('Error fetching users:', error);
      return NextResponse.json({ success: false, error: 'Error fetching users' });
  }
}

export async function POST(request: Request) {
  try {
      const body = await request.json();
      const hashedPassword = await bcrypt.hash(body.password, 10);
      const newUser = await prisma.users.create({
          data: {
              name: body.name,
              email: body.email,
              password: hashedPassword,
          },
      });
      return NextResponse.json({ success: true, data: newUser });
  } catch (error: any) {
      console.error('Error creating user:', error);
      return NextResponse.json({ success: false, error: 'Error creating user' });
  }
}


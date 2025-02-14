import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json({ success: true, data: users });
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ success: false, error: 'Error fetching users' });
    }
}
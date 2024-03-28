/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request:NextRequest) {
    return NextResponse.next(); // Then log the request
  }

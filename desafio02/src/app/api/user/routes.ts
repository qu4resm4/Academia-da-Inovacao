import { NextResponse } from 'next/server'

export async function GET(req: Request, context: any) {

    const { params } = context;

    return NextResponse.json({
        hello: "world "
    })
}

export async function POST(req: Request, context: any) {

    const { params } = context;

    return NextResponse.json({
        hello: "world "
    })
}

export async function PATCH(req: Request, context: any) {

    const { params } = context;

    return NextResponse.json({
        hello: "world "
    })
} 

export async function DELETE(req: Request, context: any) {

    const { params } = context;

    return NextResponse.json({
        hello: "world "
    })
} 
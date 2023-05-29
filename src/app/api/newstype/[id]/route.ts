import { findOneNewsType, removeNewsType, updateNewsType } from "@/services/newstype.service";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET( request: NextRequest, params: { params: { id: string }}) {
    const data = await findOneNewsType(Number(params.params.id))
    if (!data) {
        return NextResponse.json( { message:"ไม่พบข้อมูลในระบบ"},{ status: 404})
    }
    return NextResponse.json( { data: data } )
}

export async function PUT( request: NextRequest, params: { params: { id: string }}) {
    const data = await findOneNewsType(Number(params.params.id))
    if (!data) {
        return NextResponse.json( { message:"ไม่พบข้อมูลในระบบ"},{ status: 404})
    }
    //UPDATE
    const bodyJson = await request.json() as Prisma.NewsTypeUpdateInput;
    const dataUpdate = await updateNewsType(+params.params.id, bodyJson)
    return NextResponse.json( dataUpdate)
}
export async function DELETE( request: NextRequest, params: { params: { id: string }}) {
    const data = await findOneNewsType(Number(params.params.id))
    if (!data) {
        return NextResponse.json( { message:"ไม่พบข้อมูลในระบบ"},{ status: 404})
    }
    //REMOVE
    const dataDelete = await removeNewsType(+params.params.id)
    return NextResponse.json({
        message: "delete complete"
    })
}
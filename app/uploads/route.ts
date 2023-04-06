import { NextRequest, NextResponse } from "next/server";
import Mux from '@mux/mux-node';

const { Video } = new Mux(process.env.MUX_TOKEN_ID as string, process.env.MUX_TOKEN_SECRET as string);

export async function POST(req: NextRequest) {
    const body = await req.json();
    const passthrough = {
        title: body.title ?? 'Default Title',
        description: body.description ?? 'Default description',
    };

    let upload;
    try {
        upload = await Video.Uploads.create({
            cors_origin: "*",
            new_asset_settings: {
                playback_policy: 'public',
                passthrough: JSON.stringify(passthrough)
            }
        })
    } catch (error) {
        console.log('', error)
    }

    return NextResponse.json({ url: upload.url });
}

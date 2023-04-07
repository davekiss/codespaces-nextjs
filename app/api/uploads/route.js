import { NextResponse } from "next/server";
import Mux from '@mux/mux-node';

const { Video } = new Mux(process.env.MUX_TOKEN_ID, process.env.MUX_TOKEN_SECRET);

export async function POST(req) {
    const body = await req.json();

    const passthrough = {
        title: body.title ?? 'Default Title',
        description: body.description ?? 'Default description',
    };

    const upload = await Video.Uploads.create({
        cors_origin: "*",
        new_asset_settings: {
            playback_policy: 'public',
            passthrough: JSON.stringify(passthrough)
        }
    })

    return NextResponse.json({ url: upload.url });
}

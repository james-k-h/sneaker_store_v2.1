import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import uniqid from 'uniqid';

export async function POST(req) {
  const data = await req.formData();
  if (data.get('file')) {
    // to do
    const file = data.get('file');

    const s3Client = new S3Client({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY,
        secretAccessKey: process.env.AWS_S3_SECRET_KEY,
      },
    });

    const ext = file.name.split('.').slice(-1);
    const newFileName = uniqid() + '.' + ext;

    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    const bucket = 'sneaker-store';
    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: newFileName,
        ACL: 'public-read',
        ContentType: file.type,
        Body: buffer,
      })
    );

    return Response.json(`https://${bucket}.s3.amazonaws.com/` + newFileName);
  }

  return Response.json(true);
}

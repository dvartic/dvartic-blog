import sendgrid from '@sendgrid/mail';
import { NextApiResponse, NextApiRequest } from 'next'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

async function sendEmail (req: NextApiRequest, res: NextApiResponse) {
    try {
        await sendgrid.send({
            to: 'pepewow3000@gmail.com',
            from: 'agcascallar@gmail.com',
            subject: `${req.body.subject} from ${req.body.fullname} email ${req.body.email}`,
            html: `<div>${req.body.message}</div>`
        })
        return res.status(200).json({error: ''});
    }
    catch (error: any) {
        res.status(error.statusCode || 500).json({error: error.message})
    }
}

export default sendEmail;
import { Schema, model } from 'mongoose';
import { QRCode } from '@baselhack2021/interfaces/models';

const schema = new Schema<QRCode>({
  user: { type: Schema.Types.ObjectId, ref: 'FestivalUser' },
});

const QRCodeModel = model<QRCode>('QRCode', schema);

const linkQRCode = (qrCodeObject: QRCode) => {
  // eslint-disable-next-line no-underscore-dangle
  QRCodeModel.findByIdAndUpdate(qrCodeObject._id, qrCodeObject, { new: true });
};

const getAllQRCodes = () => QRCodeModel.find();

export { linkQRCode, getAllQRCodes };
